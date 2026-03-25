// Assignment 2: Smart Discount Calculator


function calculateDiscountedPrice(name, age, purchaseAmount) {
    let discount = 0;

    if (age < 18 || age >= 60) {
        discount += (age < 18) ? 10:20; 
    } if  (purchaseAmount > 5000){
        discount += 5; 
    }

    
    let finalamount = purchaseAmount - (purchaseAmount * discount/100);
    console.log(`Hello ${name}! you received a total discount of ${discount}% Your final amount : ${finalamount}`);
}
  calculateDiscountedPrice("Suresh", 65, 5500);
