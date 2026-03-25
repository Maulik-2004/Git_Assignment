//4: Product Filter & Transform

const Products=[
    {name:'laptop',price:30000},                         
    {name:'Ps5',price:55000},
     {name:'Mouse',price:500}
]
const result= Products
    //condition check
      .filter(Product=>Product.price>1000)
      .map(Product=>{
        const discountprice=Product.price - Product.price*0.10;

        return{
            Product,
            discountprice
        }
      });
      console.log(result);
      console.log(Products);
     