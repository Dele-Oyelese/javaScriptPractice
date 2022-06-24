

//function declartion
function greet(){
    console.log('hello there');

}

//cont extpression better practice
const speak= function(){

    console.log('good day');

}

const bill = (products,tax) => {
let total = 0; for( let i =0; products.length; i++){
total += products[i] + products[i] * tax;
}
return total;
};