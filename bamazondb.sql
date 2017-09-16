DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT NOT NULL auto_increment,
product_name VARCHAR (100) NOT NULL,
department_name VARCHAR (45) NULL,
price DECIMAL (15,2) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("Sony Alpha a6000 Mirrorless Digital Camera with 16-50mm Power Zoom Lens", "Electronics", 598.00, 15),
("ThermoPro TP55 Digital Hygrometer Indoor Thermometer Humidity Gauge", "Electronics", 29.99, 5),
("Born a Crime: Stories from a South African Childhood", "Books", 28.00, 23),
("I Can't Make This Up: Life Lessons", "Books", 26.99, 111),
("ELVIS Zebrawood Concert 23' Ukulele Acoustic for Professional Performance", "Musical Instruments", 109.12, 3),
("SUNYIN Wooden Kazoo, Exquisite Instrument", "Musical Instruments", 19.99, 13),
("Graco Fastaction Fold Jogger Click Connect Stroller, Gotham", "Baby", 149.68, 13),
("VTech DM221 Safe & Sound Digital Audio Baby Monitor", "Baby", 29.31, 15),
("Briggs & Riley Transcend Cargo Backpack", "Luggage", 199.00, 3),
("Rockland Melbourne 20-Inch Expandable Abs Carry On Luggage", "Luggage", 39.99, 5);