const queue                 =   require('../config/kue');
const recoveryMailer        =   require('../mailers/recovery_mailer');
queue.process('reset',function(job,done){
    recoveryMailer.reset(job.data);
    done();
})