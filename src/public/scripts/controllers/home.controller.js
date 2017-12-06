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

    // dialog for contact
    vm.contact = () => {
       const confirm = $mdDialog.prompt()
        .title('Contact Hunter')
        .textContent('Send Hunter an email?')
        .placeholder('Hello Hunter, my name is Jeff Goldblum and I like to meetup and talk about code.')
        .ariaLabel('Email Message')
        .ok('Okay')
        .cancel('Cancel');

        $mdDialog.show(confirm);
    }; // end contact


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