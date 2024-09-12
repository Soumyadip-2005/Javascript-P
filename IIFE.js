// IIFE : Stands for immediately invoked function expression. (pronounced iffy )

//  It is a function that is called immediately after it is defined.

// [Many times problems arise due to pollution of the global scope. To remove the pollution of the global scope,   
// it is necessary to use ]
(function chai(){
    // named iffy
    console.log(`Database Connected`);
    
})() ;

( (name) => {
      console.log(`Database connected Two ${name}`);
    //    un-named iffy
} ) ("Soumyadip")

