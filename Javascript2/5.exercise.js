products = [
    {name: 'Laptop', price:500, qty:5},
    {name: 'T-Shirt', price:200, qty: 2},
    {name: 'Jeans', price:200, qty: 3},
    {name: 'AirPod', price:200, qty:5}
];

const product = (products) => {
    for(const pduct of products){
        if(pduct.qty > 0){
            console.log(`\nName: ${pduct.name} \nPrice: ${pduct.price} \nQuantity: ${pduct.qty}`)
        }
    }
}
product(products)