export default class Requests {
    apiUrl: string;
    token: string;
  
    constructor(sentryUrl: string, organizationName: string, projectName: string, token: string) {
        this.token = token;
        this.apiUrl = `${sentryUrl}/api/0/project/${organizationName}/${projectName}/issues`
    }
  
    private request() {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", this.apiUrl);
        xhttp.setRequestHeader("Authorization", this.token);
        xhttp.withCredentials = true;
        return new Promise(
            function(resolve, reject) {
                xhttp.onload = function() {
                    if(this.status >= 200 && this.status < 400) {
                        resolve(JSON.parse(this.response))
                    }
                }
                xhttp.send()
            }
        )
    }

    getIssues() {
        return new Promise(
            (resolve, reject) => {
                this.request()
                .then(resolve)
                .catch(error => { throw new Error("Request failed") });
            }
        )
    }
}