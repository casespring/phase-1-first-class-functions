

function receivesAFunction(callback) {
    return callback();
};

function returnsANamedFunction() {
     return  function named() {
        console.log("My return");
    }
};

function returnsAnAnonymousFunction() {
    return function() {
        console.log(anonymous);
    }
};