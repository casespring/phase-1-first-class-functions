function receivesAFunction(cb) {
    return cb();
};

function returnsANamedFunction() {
    return function dummie() {
        console.log("I have return");
    };
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am anonymous");
    };
};



// function receivesAFunction(callback) {
//     return callback();
// };

// function returnsANamedFunction() {
//      return  function named() {
//         console.log("My return");
//     }
// };

// function returnsAnAnonymousFunction() {
//     return function() {
//         console.log(anonymous);
//     }
// };