var dati = [1,2,3,4];

function mapForEach(arr,fn) {
  
  var newArr = [];
  
  for(var i = 0; i < arr.length; i++) {
      
    newArr.push(fn(arr[i]));
    
  }
  
  return newArr;
  
}


var a = mapForEach(dati, function(item) {
    return item;
  
});


console.log(a);

a[0] = 9;

console.log(a === dati);

console.log("a " + a);
console.log("dati: " + dati);


var b = mapForEach(dati, function(item) {
    
  return item * 2;
  
});
  
console.log(b);

var c = function (valore, item) {
  return item * valore;
}


console.log(c.bind(this,3));

var d = mapForEach(dati, c.bind(this, 3));

console.log(d);

var c_semplified = function(valore) {
  
  return function (valore, item) {
    
    return item*valore;
    
  }.bind(this, valore);
  
};

var x = c_semplified();

console.log(x);

var e = mapForEach(dati, c_semplified(4));

console.log(e);