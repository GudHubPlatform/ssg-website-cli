import { promptOptions } from './prompt-options.js';
import { createProject } from './main.js';

export async function cli(args) {

    const options = await promptOptions();

    await createProject(options);

}