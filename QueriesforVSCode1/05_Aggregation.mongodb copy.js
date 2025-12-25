use("ecommerce");


// Sample Data Insertion for Aggregation Examples

// db.sales.insertMany([           
// { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
// { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
// { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
// { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
// { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" }
// ]);


//aggregation Pipeline Examples
//1. $match Stage: Filter documents to include only those in the "Fruit" category

//db.sales.aggregate([
//{ $match: { category: "Fruit" } },
//{ $project: { item: 1, price: 1, _id: 1 } }
//]);


//group Stage: Group documents by category and calculate total sales amount for each category

db.sales.aggregate([
    { 
        $group: {
 _id: "$category",
 totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
        }}
]);