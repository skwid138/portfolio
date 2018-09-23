/*jshint esversion: 6 */

/*
* This controller is for the home view. 
*/

myApp.controller('HomeController', function (GithubService, MailService, $mdDialog) {
    //console.log('in HomeController');
    const vm = this;

    vm.user = GithubService.user; // github user data
	vm.repos = GithubService.repos; // github repo data
	vm.getYear = () => 1900 + new Date().getYear();

    // static dialog for message button
    vm.contactDialog = ev => {
        $mdDialog.show({
            contentElement: '#contactDialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
        });
    }; // end contact

    // collects input from dialog and sends it Mail service
    vm.sendMessage = (subject, sender, message) => {
		MailService.sendMail(subject, sender, message)
			.then(() => $mdDialog.hide());
    }; // end sendMessage


    /************** $http **************/

    vm.setGithubObjects = () => {
        GithubService.getGithubUser(); // get github user info
        GithubService.getGithubRepos(); // get github repo info
    }; // end setGithubObjects


    /************** on page load **************/

    vm.setGithubObjects(); // get github user and repo info

}); // end HomeController