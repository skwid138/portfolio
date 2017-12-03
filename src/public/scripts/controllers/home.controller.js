/*jshint esversion: 6 */

/*
This controller is for the home view.
- displays 
*/
myApp.controller('HomeController', function (GithubService, $location) {
    console.log('in HomeController');
    const vm = this;

    // github user data
    vm.user = GithubService.user;
    // github repo data
    vm.repos = GithubService.repos;


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