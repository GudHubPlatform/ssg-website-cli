import axios from 'axios';
import fsSync from 'fs';
import { generateConfig } from './generate-config.js';
import cliSpinners from 'cli-spinners';
import logUpdate from 'log-update';
const fs = fsSync.promises;

export async function installGudHubApps(user, targetDirectory) {
    try {

        const { frames, interval } = cliSpinners.aesthetic;
        let i = 0;

        const spinner = setInterval(() => {
            logUpdate(`Installing GudHub Applications... ${frames[i = ++i % frames.length]}`);
        }, interval);

        const { data } = await axios.post('https://development.gudhub.com/app-install/express-install', {
            auth_key: user.auth_key,
            template_id: "27822.3743397",
            progress: false
        });
        
        const apps = {
            pages: data.apps.find(app => app.app_name.indexOf('Pages') > -1),
            team: data.apps.find(app => app.app_name.indexOf('Team') > -1),
        }

        await fs.writeFile(targetDirectory + '/config.mjs', generateConfig(user.auth_key, apps));

        clearInterval(spinner);

        return true;

    } catch (error) {
        console.log(error);
        return false;
    }
}