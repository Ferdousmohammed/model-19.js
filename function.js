// num = [12, 23, 34, 56, 67,32, 22];

// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element * 2);
//     if (element % 2 ==0) {

//         console.log(element, ':is even number');
//     }
//     else{
//         console.log(element, ':is not a even number');
//     }
// }
function evenly(element) {
    console.log(element * 2);
    if (element % 2 ==0) {
        console.log(element, ': is correct number');
        
    } else {
        console.log(element,  ': is not correct number');
    }
}


function evenly_all(dam) {

    for (let i = 0; i < dam.length; i++) {
        const element = dam[i];  
        evenly(element);
    
    }
    
    
}


dam =[12, 22, 33, 44, 45, 46];
evenly_all(dam);

    
  


friends = [15, 16, 17, 18, 19, 20];
for (let i = 0; i < friends.length; i++) {
    const element = friends[i];

     evenly(element);
    
 }