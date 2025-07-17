"use strict";

// Practice Object CRUD, copying, and destructuring.
let product = {
	id: 101,
	name: "Laptop",
	price: 1200,
	details: {
		brand: "TechPro",
		specs: {
			cpu: "i7",
			ram: "16GB",
		},
	},
};

let cart = {
	items: [
		{ id: 101, qty: 1 },
		{ id: 202, qty: 2 },
	],
	customer: {
		name: "Alice",
		address: { city: "Bangkok", zip: "10110" },
	},
};

// Task 01: CRUD on an Object (After each step, log the product object.)
// 1️⃣ C – Create (Add new property)
// 👉 Add stock: true to product.

	product.stock = true;
	console.log(product);

// 2️⃣ R – Read (Access property)
// 👉 Log product.details.brand and product.details.specs.cpu.

	console.log(product.details.brand); // TechPro
	console.log(product.details.specs.cpu); //i7

// 3️⃣ U – Update (Change value)
// 👉 Update product.price to 999.

	product.price = 999;
	console.log(product);
	console.log(product.price); // 999

// 4️⃣ D – Delete (Remove property)
// 👉 Delete product.details.specs.ram.

	delete product.details.specs.ram;
	console.log(product);
	console.log(product.details.specs); //{ cpu: 'i7' }

// Task 02: Copying Objects
// 5️⃣ Shallow copy (spread operator)
// 👉 Create productCopy = { ...product }.
// Change productCopy.name = "Gaming Laptop".
// ✅ Log both product.name and productCopy.name.

	const productCopy = { ...product };
	productCopy.name = "Gaming Laptop";
	console.log(product.name); // Laptop
	console.log(productCopy.name); //Gaming Laptop

// 6️⃣ Deep copy (structuredClone)
// 👉 Create cartCopy = structuredClone(cart).
// Change cartCopy.customer.address.city = "Chiang Mai".
// ✅ Log cart.customer.address.city and cartCopy.customer.address.city.

	const cartCopy = structuredClone(cart);
	cartCopy.customer.address.city = "Chiang Mai";
	console.log(cart.customer.address.city); //Bangkok
	console.log(cartCopy.customer.address.city); //Chiang Mai

// Task 03: Destructuring
// 7️⃣ Basic destructuring
// 👉 Extract name and price from product into variables.
// ✅ Log name and price.

	const {name,price} = product;
	console.log(name, price); //Laptop 999

// 8️⃣ Rename and default
// 👉 Destructure product so that name becomes productName.
// 👉 Also give stock a default value of false if it’s not in the object.
// ✅ Log productName and stock.

	const {name: productName} = product;
	product.stock = false;
	console.log(productName); //Laptop
	console.log(product.stock); // false

// 9️⃣ Nested destructuring
// 👉 From product.details, extract brand and from product.details.specs, extract cpu in one destructuring statement.
// ✅ Log brand and cpu.

	const {
		details: {
			brand, specs : { cpu,ram }
		}
	}= product;

	console.log(brand,cpu); //TechPro i7
