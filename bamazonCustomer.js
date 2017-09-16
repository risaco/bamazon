
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

// Print List of all itemes for sale
connection.query("SELECT * FROM bamazon.products", function(err, res){
	if (err) throw err;
	printList(res);
});

// ***** FUNCTIONS *****
function printList(res){
	console.log("\nItems for sale:\n");

	for (i=0; i < res.length; i++) {
		console.log("\nID: " + res[i].item_id + "\nProduct Name: " + res[i].product_name 
			+ "\nDepartment: " + res[i].department_name + "\nPrice: " + res[i].price);
	}

}