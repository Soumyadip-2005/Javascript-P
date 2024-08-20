// var c = 300
let a = 300

if (true) {
    let a = 100
    const b = 200
//    console.log("Inner = " , a );
   
}


//  console.log(a);
// // console.log(b);
// console.log(c);

 
function one() {
    const username = "Soumyadip"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }

    // console.log(website);
    two() 
    
}
// one() 

if (true) {
    const username = "Soumyadip"
    if (username === "Soumyadip") {
        const webSite = " Youtube"
        // console.log(username + webSite);
        
    }
    // console.log(webSite);
    
}
// console.log(username);

// ++++++++++++++++++ Interesting +++++++++++++

function addOne(number){
        return number + 1
        
        
}
console.log(addOne(8));

//  console.log( addTwo(8));  Cannot Access before initilize

const addTwo = function (num) {
    return num + 2
}

