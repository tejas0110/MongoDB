use("ecommerce");
//Update Operations

//Update a Single Product's Price 
//db.products.updateOne( { name: "Laptop" }, { $set: { price: 1200 } } );

//Update Multiple Products' Stock (.inc=increment)
//db.products.updateMany( { category: "Electronics" }, { $inc: { stock: 10 } } );

//Using $push to add a new review to a product
//db.products.updateOne(
  //{ product_id: "P001" },
  //{ $push: { reviews: { user: "Alice", rating: 5, comment: "Excellent mouse!" } } }