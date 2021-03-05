// object property shorthand

const name = 'Anmoldeep'
const userAge = 20

const user = {
    // name: name,
    name,
    age: userAge,
    location: 'Nagpur, India'
}

console.log(user);


// Object Destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;

// const {label, stock} = product;
// rename the variabl names that store values
// const {label: productLabel, stock, rating=5} = product;
// // given value will be used if property is not available to assign
// console.log(productLabel );
// console.log(stock);
// console.log(rating);

// const transaction = (type, myProduct) => {
const transaction = (type, {label, stock,  }) => {
    // const { label } = myProduct
    console.log(type, label, stock);
}

transaction('order', product);