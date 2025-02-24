// Global Scope - Accessible anywhere in the program
let globalVar = "I am a global variable";

function testScope() {
    // Function Scope - Accessible only within this function
    let functionVar = "I am a function variable";

    if (true) {
        // Block Scope (ES6 let & const) - Accessible only within this block
        let blockVar = "I am a block variable";
        const blockConst = "I am a block constant";

        console.log(blockVar);  // ✅ Accessible inside the block
        console.log(blockConst); // ✅ Accessible inside the block
    }

    console.log(globalVar);  // ✅ Accessible (Global Scope)
    console.log(functionVar); // ✅ Accessible (Function Scope)

    // console.log(blockVar); // ❌ Error: blockVar is not defined here (outside the block)
}

// Function Call
testScope();

console.log(globalVar); // ✅ Accessible (Global Scope)
// console.log(functionVar); // ❌ Error: functionVar is not defined outside the function

// Demonstrating var (function-scoped, not block-scoped)
function varScopeExample() {
    if (true) {
        var varVariable = "I am declared with var";
    }
    console.log(varVariable); // ✅ Accessible (var is function-scoped, not block-scoped)
}
varScopeExample();

// Lexical Scope (Inner function accessing outer function's variable)
function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar); // ✅ Accessible due to Lexical Scope
    }

    innerFunction();
}
outerFunction();

