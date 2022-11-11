console.log("hello world");

let points = [
  {x: 0, y: 0},
  {x: 1, y: 1}
];

let primes = [2, 3, 5, 7];

points.dist = function() {
  let p1 = this[0];
  let p2 = this[1];
  let a = p2.x - p1.x;
  let b = p2.y - p1.y;
  return Math.sqrt(a*a + b*b);
};

function ads(x) {
  if (x >= 0) {
    return x;
  } 
  else {
    return -x;
  }
}

function sum(array) {
  let sum = 0;
  for(let x of array) {
    sum += x;
  }
  return sum;
}

function factorial(n) {
  let product = 1;
  while(n > 1) {
    product *= n;
    n--;
  }
  return product;
}