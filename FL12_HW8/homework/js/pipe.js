function addOne(x) {
return x+1;
}
function pipe(num, addOne) {
let result = 0;
for(let i = 0; i < arguments.length; i++) {
    result +=addOne(num-1);
}
return result;
}

pipe(1, addOne)