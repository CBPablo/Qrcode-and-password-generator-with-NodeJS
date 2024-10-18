import qr from "qrcode-terminal"
import chalk from "chalk";


async function handle(err, result){
    if(err){
        console.log('Error on aplication')
        return
    }

    const isSmall = result.type == 1;
    qr.generate(result.link,{small:isSmall},(qrcode)=>{
        console.log(chalk.blueBright.bold('QRCODE GERADO COM SUCESSO...\n\n'))
        console.log(`${qrcode}\n\n`)
    })
};

export default handle;