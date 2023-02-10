
function evenefy(element) {
    
    if (element % 2 == 0) {
        console.log(element, ':is valid number');
        return element;
    } else {
         console.log(element, ':is invalid number'); 
         return element * 2 ;          
    }
    
}

// var result = evenefy(5);
// console.log('result', result);



function evenly_all(sa) {

    for (let i = 0; i < sa.length; i++) {
        const element = sa[i];
        evenefy(element)
      
    
    }
    
       
    
}



sa = [2, 3, 4, 5, 6, 7];
 evenly_all(sa);
