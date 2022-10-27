import inquirer from 'inquirer';

const defaultOptions = {
    name: 'gudhub-website',
    install: true
}

export async function promptOptions() {
    const questions = [];

    questions.push({
        type: 'input',
        name: 'name',
        message: 'Project name:',
        default: defaultOptions.name
    });

    questions.push({
        type: 'confirm',
        name: 'install',
        message: 'Install packages?',
        default: defaultOptions.install
    });

    const answers = await inquirer.prompt(questions);

    return {
        name: answers.name,
        install: answers.install
    }

}