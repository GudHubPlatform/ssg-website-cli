import { projectInstall } from 'pkg-install';

export function installPackages(targetDir) {
    return projectInstall({
        cwd: targetDir,
        stdio: ['pipe', process.stdout, process.stderr]
    });
}