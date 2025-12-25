use("ecommerce");
//To Delete a Product by ID
//db.products.deleteOne({ product_id: "P003" });    

//To Delete Multiple Products in a Category
//db.products.deleteMany({ category: "Stationery" });


//Deletes products with stock less than 20    
//db.stock.deleteMany({ stock: { $lt: 20 } });

//Deletes one product with rating less than 3.5  
//db.products.deleteOne({ rating: { $lt: 3.5 } });