



// show dbs


// use day1task

// show collections

//Insert many collections using one command
//db -> db is data base
//product -> is created a collections inside of day1task
db.product.insertMany([
    {
        "id": "1",
        "name": "Intelligent Fresh Chips",
        "price": 655.00,
        "material": "Concrete",
        "color": "mint green"
    },
    {
        "id": "2",
        "name": "Practical Fresh Sausages",
        "price": 911.0,
        "material": "Cotton",
        "color": "indigo"
    },
    {
        "id": "3",
        "name": "Refined Steel Car",
        "price": 690.00,
        "material": "Rubber",
        "color": "gold"
    },
    {
        "id": "4",
        "name": "Gorgeous Plastic Pants",
        "price": 492.00,
        "material": "Soft",
        "color": "plum"
    },
    {
        "id": "5",
        "name": "Sleek Cotton Chair",
        "price": 33.00,
        "material": "Fresh",
        "color": "black"
    },
    {
        "id": "6",
        "name": "Awesome Wooden Towels",
        "price": 474.00,
        "material": "Plastic",
        "color": "orange"
    },
    {
        "id": "7",
        "name": "Practical Soft Shoes",
        "price": 500.00,
        "material": "Rubber",
        "color": "pink"
    },
    {
        "id": "8",
        "name": "Incredible Steel Hat",
        "price": 78.00,
        "material": "Rubber",
        "color": "violet"
    },
    {
        "id": "9",
        "name": "Awesome Wooden Ball",
        "price": 28.00,
        "material": "Soft",
        "color": "azure"
    },
    {
        "id": "10",
        "name": "Generic Wooden Pizza",
        "price": 84.00,
        "material": "Frozen",
        "color": "indigo"
    },
    {
        "id": "11",
        "name": "Unbranded Wooden Cheese",
        "price":26.00,
        "material": "Soft",
        "color": "black"
    },
    {
        "id": "12",
        "name": "Unbranded Plastic Salad",
        "price": 89.00,
        "material": "Wooden",
        "color": "pink"
    },
    {
        "id": "13",
        "name": "Gorgeous Cotton Keyboard",
        "price": 37.00,
        "material": "Concrete",
        "color": "sky blue"
    },
    {
        "id": "14",
        "name": "Incredible Steel Shirt",
        "price": 54.00,
        "material": "Metal",
        "color": "white"
    },
    {
        "id": "15",
        "name": "Ergonomic Cotton Hat",
        "price": 43.00,
        "material": "Rubber",
        "color": "mint green"
    },
    {
        "id": "16",
        "name": "Small Soft Chair",
        "price": 47.00,
        "material": "Cotton",
        "color": "teal"
    },
    {
        "id": "17",
        "name": "Incredible Metal Car",
        "price":36.00,
        "material": "Fresh",
        "color": "indigo"
    },
    {
        "id": "18",
        "name": "Licensed Plastic Bacon",
        "price":88.00,
        "material": "Steel",
        "color": "yellow"
    },
    {
        "id": "19",
        "name": "Intelligent Cotton Chips",
        "price": 46.00,
        "material": "Soft",
        "color": "azure"
    },
    {
        "id": "20",
        "name": "Handcrafted Wooden Bacon",
        "price": 36.00,
        "material": "Concrete",
        "color": "lime"
    },
    {
        "id": "21",
        "name": "Unbranded Granite Chicken",
        "price": 90.00,
        "material": "Metal",
        "color": "gold"
    },
    {
        "id": "22",
        "name": "Ergonomic Soft Hat",
        "price": 99.00,
        "material": "Rubber",
        "color": "black"
    },
    {
        "id": "23",
        "name": "Intelligent Steel Pizza",
        "price": 95.00,
        "material": "Cotton",
        "color": "azure"
    },
    {
        "id": "24",
        "name": "Tasty Rubber Cheese",
        "price":47.00,
        "material": "Frozen",
        "color": "orchid"
    },
    {
        "id": "25",
        "name": "Licensed Steel Car",
        "price":20.00,
        "material": "Cotton",
        "color": "indigo"
    }
])




//to find the all product collections
db.product.find()

// ANSWER

//1.Find all the information about each products
db.product.find({},{name:1})


// 2.Find the product price which are between 400 to 800
db.product.find({price: {$gte : 400, $lte:800}}).sort({price:1})


// 3.Find the product price which are not between 400 to 600
db.product.find({price: {$gte : 400, $lte:800}}).sort({price:1})


// 4.List the four product which are grater than 500 in price 
db.product.find({price: {$not:{$gte : 500}}}).sort({price:1})


// 5.Find the product name and product material of each products
db.product.find({},{name:1, material:1})
// or 
db.product.find({},{id:0, price:0,color:0})


// 6.Find the product with a row id of 10
db.product.findOne({id:"10"})


// 7.Find only the product name and product material
db.product.find({},{name:1, material:1})


// 8.Find all products which contain the value of soft in product material 
db.product.find({material:"Soft"})


// 9.Find products which contain product color indigo  and product price 492.00
db.product.find({product:{$eq:[{color:"indigo"},{price:492}]}})



// 10.Delete the products which product price value are same
db.product.aggregate([
    {
        $group:{_id:{product_price:"$product_price"},
        dups:{$addToSet:"$_id"},
        count:{$sum:1}
    }
    }
])













