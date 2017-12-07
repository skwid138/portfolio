/*jshint esversion: 6 */

/*
This controller is for the home view.
- displays 
*/
myApp.controller('HomeController', function (GithubService, MailService, $mdDialog) {
    console.log('in HomeController');
    const vm = this;

    // github user data
    vm.user = GithubService.user;
    // github repo data
    vm.repos = GithubService.repos;


    // static dialog for message button
    vm.contactDialog = (ev) => {
        $mdDialog.show({
            contentElement: '#contactDialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        }); // end mdDialog
    }; // end contact

    vm.sendMessage = (subject, sender, message) => {

    }; // end sendMessage


    /************** $http **************/

    vm.setGithubObjects = () => {
        console.log('in setGithubObjects');
        // get github user info
        GithubService.getGithubUser();
        // get github repo info
        GithubService.getGithubRepos();
    }; // end setGithubObjects


    /************** on page load **************/

    // get github user and repo info
    vm.setGithubObjects();


}); // end HomeController