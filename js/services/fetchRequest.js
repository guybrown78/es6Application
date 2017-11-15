export const $fetchRequest = function(url, method = 'GET') {
    // use fetch api, modern replacement for XMLHttpRequest.
    // Create an empty Headers instance
    const headers = new Headers();
    const request = new Request(url, {
        method:method,
        mode:'cors',
        headers:headers
    });
    // Add headers
    headers.append('Content-Type', 'text/plain');
    headers.append('X-My-Custom-Header', 'CustomValue');
    headers.set('Content-Type', 'application/json');
    //
    return fetch(request);
    
    // use ajax XMLHttpRequest as a promise
    /*return new Promise(function(resolve, reject) {
        const req = new XMLHttpRequest();
        req.open(method, url || location.pathname);
        req.setRequestHeader("X-XSRF-TOKEN", $cookie('XSRF-TOKEN'));
        req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        //req.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status === 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
        // Handle network errors
        req.onerror = function() {
            reject(Error('Network Error'));
        };
        // Make the request
        req.send(JSON.stringify(data.params));
    });*/
};