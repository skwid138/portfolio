/*jshint esversion: 6 */

/*
This service connects to github's API
- gets repository information
- gets user information
*/

myApp.service('GithubService', function ($http, $location) {
    console.log('in GithubService');
    const self = this;

    // github user data
    self.user = { 
        data: {} 
    }; // end user

    // github repo data
    self.repos = { 
        data: [] 
    }; // end repos



/************** $http **************/

    // get user data via github API
    self.getGithubUser = () => {
        console.log('in getGithubUser');
        $http.get('/github/user').then((response) => {
            // set user object values
            self.user.data = response.data;
        }); // end GET
    }; // end getGithubUser

    // get repo data via github API
    self.getGithubRepos = () => {
        console.log('in getGithubRepos');
        $http.get('/github/repos').then((response) => {
            // set repos object value
            self.repos.data = response.data;
        }); // end GET
    }; // end getGithubRepos



}); // end GithubService