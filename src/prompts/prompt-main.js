import chalk from "chalk"

const mainPrompt = [
    {
        name: 'select',
        description:chalk.yellowBright.bold('Escolha a ferramenta (1-QRCODE ou (2-PASSWORD...\n\n'),
        pattern : /^[1-2]+$/,
        mensag:'Escolha entre 1 e 2',
        require: true
    }
]

export default mainPrompt