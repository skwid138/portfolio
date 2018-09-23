/*jshint esversion: 6 */

/*
This service connects to github's API
- gets repository information
- gets user information
*/

myApp.service('GithubService', function ($http, $location) {
    //console.log('in GithubService');
    const self = this;

    self.user = {data: {}}; // github user data

    self.repos = {data: []}; // github repo data

/************** $http **************/

    // get user data via github API and set user object values
    self.getGithubUser = () => {
		$http.get('/github/user')
			.then(response => self.user.data = response.data);
    }; // end getGithubUser

    // get repo data via github API and set repos object value
    self.getGithubRepos = () => {
		$http.get('/github/repos')
			.then(response => self.repos.data = response.data);
    }; // end getGithubRepos

}); // end GithubService