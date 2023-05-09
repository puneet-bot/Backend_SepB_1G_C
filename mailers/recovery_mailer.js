const   nodeMailer  =   require('../config/nodemailer');



exports.reset=async (link)=>{
    let htmlString=nodeMailer.renderTemplate({link:link},'/Recovery/forgot_password.ejs');
    nodeMailer.transporter.sendMail({
        from:'officialpuneet274@gmail.com',
        to:link.email,
        subject:'Recovery:Reset your Password.',
        html:htmlString,
    },(err,info)=>{
        if(err)
            {
                console.log('error in sending mail',err);
                return;
            }
            return ;
    })
    return;
}