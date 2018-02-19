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

function log (a) {
    console.log(a);
}

log({
    greeting: "Hello"
});

var a = ['a', 'b', {element: true}];

var b = a;

a = ['c' , 'd' , 3];

console.log(b);
console.log(a);


var c = {
    name: "a",
    surname: "b"
}

var d = c;

c.name = "q";

console.log(c);
console.log(d);



var x = {
    element1: "1",
    element2: "2"
};

function chan(s) {
    s.element2 = "3";
   // return s;
}

chan(x);

console.log(x);


function aa () {
    console.log(this); // A questo livello il this punta sempre all'oggetto globale
    this.newvariable = "nuova variabile";
}
aa();

console.log(newvariable);

console.log(this);