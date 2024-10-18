import chalk from "chalk";

const promptQrcode =[
    {
        name: 'link',
        description:chalk.yellowBright.bold('Digite o link para gerar o QRCODE...\n\n'),
      
    },
    {
        name: 'select',
        description:chalk.yellowBright.bold('Escolha entre os tipos de QRCODE (1-NORMAL ou (2-TERMINAL...\n\n'),
        pattern : /^[1-2]+$/,
        mensag:chalk.redBright.bold('Escolha apenas  entre 1 e 2'),
        require: true
    }
];
export default promptQrcode