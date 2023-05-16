const   nodeMailer  =   require('../config/nodemailer');
const  secret       = require('../config/secrets');


exports.reset=async (link)=>{
    let htmlString=nodeMailer.renderTemplate({link:link},'/Recovery/forgot_password.ejs');
    nodeMailer.transporter.sendMail({
        from:secret.secretEmail,
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