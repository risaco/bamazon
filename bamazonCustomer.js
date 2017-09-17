var inquirer = require("inquirer");
var table = require("console.table");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "KU@ero11",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});


// Print List of all itemes for sale, ask user which item and qty
connection.query("SELECT * FROM bamazon.products", function(err, res){
	if (err) throw err;
	printList(res);

  inquirer.prompt([
    {
      name: 'itemNumber',
      message: "Which item would you like to buy? (ID)"
    },{
      name: 'quantity',
      message: 'How many would you like to purchase?'
    }
    ]).then(function(answers) {
      var itemId = parseFloat(answers.itemNumber);
      var itemQty = parseFloat(answers.quantity);

      checkStock(itemId, itemQty);
  });
});

// ***** FUNCTIONS *****


function printList(res){
	console.log("\nItems for sale:\n");
  console.log("\n---------------------------------------------\n");
	for (i=0; i < res.length; i++) {
		console.log("\nID: " + res[i].item_id + "\nProduct Name: " + res[i].product_name 
			+ "\nDepartment: " + res[i].department_name + "\nPrice: " + res[i].price);
	}

  console.log("\n---------------------------------------------\n");
} // END of printList function


function checkStock(itemNumber, quantity){

  connection.query("SELECT * FROM bamazon.products WHERE ?", {
    item_id: itemNumber
  }, function(err, res){
    if (err) throw err;

    if (quantity <= res[0].stock_quantity) {

      var orderTotal = quantity * res[0].price;

      var newStock = res[0].stock_quantity - quantity;

      connection.query("UPDATE bamazon.products SET ? WHERE ?",[
        {
          stock_quantity: newStock
        }, {
          item_id: itemNumber
        }], function(err, res){
          if (err) throw err;

          console.log("\nYour order is complete. Total due: " + orderTotal);
      });
    } else {
      console.log("Insufficient quantity!");
    }
  });
}