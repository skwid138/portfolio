/*jshint esversion: 6 */

/*
This service uses nodemailer to send an email
- captures client side input (sender email, message, subject)
- sends data to /mail route for nodemailer
*/

myApp.service('MailService', function ($http) {
    //console.log('in MailService');
    const self = this;

    /************** $http **************/

    // post client side input to /mail route
    self.sendMail = (subject, sender, message) => {
        //console.log('in mail service - sendMail');
        
        const sendObject = {
            subject: subject,
            sender: sender,
            message: message,
        }; // end sendObject

        // returns server response as a promise
		return $http.post('/mail', sendObject)
			.then(response => {
            //console.log('sendMail successful');
			})
			.catch(error => {
            //console.log('sendMail error: ', error);
        	});
    }; // end sendMail

}); // end MailService