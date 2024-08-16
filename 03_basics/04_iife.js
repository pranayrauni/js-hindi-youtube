// Immediately Invoked Function Expressions (IIFE)
// jo function immediatly execute ho jaye
// global scope k poluution se problem hoti to es se bachne k liye iife ka use karte

(function chai(){
    // named IIFE hai ye kykui function ka naam likha hua hai
    console.log(`DB CONNECTED`);
})();      // iife m semicolon lgana jaruri hai taki function end ho rha ye pta chal sake


( () => {
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');

