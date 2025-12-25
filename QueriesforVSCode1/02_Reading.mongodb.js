//use("ecommerce");
//db.product.find()

// To Find Product
//db.products.find().pretty();

//To Find Products in Electronics Category  
//db.products.find({ category: "Electronics" }); 

//Using Comparison Operators

//To Find Products with Price Greater than 500 (gt=greater than)
//db.products.find({ price: { $gt: 500 } });

//To Find Products with Price Less than or Equal to 300 (lte=less than equal to)
//db.products.find({ price: { $lte: 300 } });

//To Find Products with Price Between 200 and 800
//db.products.find({ price: { $gte: 200, $lte: 800 } });

    //Using Logical Operators
//To Find Products in ElectronicsCategory

//db.products.find({ $or: [ { category: "Electronics" }] });

//Projection
//To Find Products with Only Name and Price Fields

//db.products.find({}, { name: 1, price: 1, _id: 0 });

//Sorting and Limiting Results
//To Find Top 5 Most Expensive Products

//db.products.find({}).sort({ price: -1 }).limit(2);

