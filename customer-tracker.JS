let customers = [
    { name: "Steeve", email: "sfils1@usf.edu", purchases: "Notes books, Laptops" },
    { name: "Mac-kenley", email: "mkfils2@usf.edu", purchases: "Smart phone, Headphones" },
    { name: "Miphaella Fils", email: "mfils3@usf.edu", purchases: "Backpack, Notebook" }
];
customers.push({ name: "Olivier", email: "ojoseph@usf.edu", purchases: "Pen, Eraser" });
console.log(customers);
let removedCustomers = customers.splice(1, 1);
console.log("After push + splice:", customers);
customers[0].email = "sfils1@usf.edu";
customers.forEach(customer => {
    console.log(`Customer Name: ${customer.name}, Email: ${customer.email}, Purchases: ${customer.purchases}`);
});