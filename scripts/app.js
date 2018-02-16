function parseURL(url) {
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    // Let the browser do the work
    parser.href = url;
    // Convert query string to object
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }
    return {
        protocol: parser.protocol,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    };
}





function waitSecond() {
    var ms = 3000 + Date.now();
    while(Date.now() < ms) {};
    console.log(ms);
} 

//waitSecond();

function clickHandler() {
    console.log('document clicked');
}

$(document).on('click', clickHandler);


var person = new Object();

person["firstname"] = "Andrea";
person["lastname"] = "Serafin";

console.log(person);
console.log(person["firstname"]);

console.log(JSON.stringify(person));

var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

console.log(obj);