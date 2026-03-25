//2: Shopping Cart Analyzer

function cartAnalyzer(...items) {
  let totalAmount = 0;
  let totalQuantity = 0;

  items.forEach(item => {
    totalAmount += item.price * item.quantity;
    totalQuantity += item.quantity;
  });

  return {
    totalAmount,
    totalQuantity
  };
}

// Example usage
const result = cartAnalyzer(
  { name: "Jacket", price: 500, quantity: 2 },
  { name: "Trolly Bag", price: 2000, quantity: 1 },
  { name: "Watch", price: 200, quantity: 3 }
);

console.log(result);