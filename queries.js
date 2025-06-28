db.books.find({ genre: "Technology" })

//this is to update the price of the To kill a mockingbrid 
db.books.updateOne(
    {title:'To Kill a Mockingbird',},
       { $set: {prices:23.99}}
    
)

//this is to delete one of the books 
db.books.deleteOne(
    {title:'George Orwell'}
)

//Advance Mongo DB QUERIES 

//finding books in stock
db.books.find({in_Stock :true, published_year:{$gt:2010} })

//sorting price in ascending
db.books.find().sort({price:1})

//Pagination
db.books.find().limit(5).skip(0) 


db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])


// Create index on title
db.books.createIndex({ title: 1 })

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// Check query performance before/after indexing
db.books.find({ title: "MongoDB Basics" }).explain("executionStats")
