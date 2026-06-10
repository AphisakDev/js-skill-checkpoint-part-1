// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

let minvalue = inventory[0]

for (const item of inventory) { 
    if (item.quantity < minvalue.quantity) { 
        minvalue = item
    }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minvalue.name}  ซึ่งมี ${minvalue.quantity} ชิ้น`)
