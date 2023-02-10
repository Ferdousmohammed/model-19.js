function call_back(name, age, tusk, rusk) {
    console.log('hello', name);
    console.log('your age', age);
    console.log('take food',  tusk);
    rusk();
    
    
 
    
}
function wash_hand(  ) {
    console.log('wash hand with soap');
}

function takeShower() {

    console.log('Take  shower');
    
}

 call_back('sagir uddin', 18, 'okay mom', wash_hand);
//   wash_hand( );
 call_back('Kabir uddin', 15, 'okay mommy', takeShower);
//  wash_hand( );