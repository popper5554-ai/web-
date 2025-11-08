// PRODUCTS: Glock pistols appear in the pistols tab; accessories in accessories tab.
// Note: images are placeholders; replace with your own images and ensure you have rights.

const PRODUCTS = [
  // Glock pistols (example SKUs and brief descriptions)
  {
    sku: "G17-9-001",
    name: "Glock 17 Gen5",
    price: "579.00",
    category: "pistol",
    brand: "Glock",
    model: "G17 Gen5",
    description: "9mm, 4.49\" barrel, full-size service pistol.",
    img: "images/glock-g17.jpg"
  },
  {
    sku: "G19-9-001",
    name: "Glock 19 Gen5",
    price: "559.00",
    category: "pistol",
    brand: "Glock",
    model: "G19 Gen5",
    description: "9mm, 4.02\" barrel, compact carry pistol.",
    img: "images/glock-g19.jpg"
  },
  {
    sku: "G43-9-001",
    name: "Glock 43X",
    price: "519.00",
    category: "pistol",
    brand: "Glock",
    model: "G43X",
    description: "9mm, subcompact single-stack, slim carry.",
    img: "images/glock-g43x.jpg"
  },
  {
    sku: "G26-9-001",
    name: "Glock 26",
    price: "499.00",
    category: "pistol",
    brand: "Glock",
    model: "G26",
    description: "9mm, subcompact, reliable carry pistol.",
    img: "images/glock-g26.jpg"
  },
  {
    sku: "G34-9-001",
    name: "Glock 34 Gen5",
    price: "599.00",
    category: "pistol",
    brand: "Glock",
    model: "G34 Gen5",
    description: "9mm, long-slide competition pistol.",
    img: "images/glock-g34.jpg"
  },

  // Accessories & legal parts (no blueprints)
  {
    sku: "ACC-HOL-001",
    name: "Premium Leather Holster",
    price: "49.99",
    category: "accessory",
    description: "Right-hand leather holster compatible with G17/G19.",
    img: "images/holster.jpg"
  },
  {
    sku: "ACC-SIGHT-001",
    name: "Tritium Night Sights",
    price: "129.00",
    category: "accessory",
    description: "Factory-fit tritium night sights for Glock pistols.",
    img: "images/sights.jpg"
  },
  {
    sku: "ACC-MAG-001",
    name: "Glock 17 17-Round Magazine",
    price: "29.99",
    category: "accessory",
    description: "Factory Glock 17 magazine — check local laws for magazine capacity.",
    img: "images/mag.jpg"
  },
  {
    sku: "ACC-FRL-001",
    name: "Serialized Parts / FFL Transfer Service",
    price: "25.00",
    category: "accessory",
    description: "We can arrange sale or transfer through a licensed FFL. Contact us with details.",
    img: "images/ffl-transfer.jpg"
  }
];

function renderProducts(filterCategory = 'pistol') {
  const grid = document.getElementById('productGrid');
  const accessoryGrid = document.getElementById('accessoryGrid');
  if(grid) grid.innerHTML = '';
  if(accessoryGrid) accessoryGrid.innerHTML = '';

  PRODUCTS.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    const html = `
      <img src="${p.img}" alt="${p.name}" onError="this.style.opacity=.3;this.alt='Image placeholder'">
      <h4>${p.name}</h4>
      <p style="color:#475569">${p.description}</p>
      <p><strong>$${p.price}</strong></p>
      <button class="btn" onclick="startPurchase('${p.sku}')">Purchase / Request</button>
    `;
    card.innerHTML = html;

    if(p.category === 'pistol') {
      grid.appendChild(card);
    } else {
      accessoryGrid.appendChild(card);
    }
  });
}

window.addEventListener('DOMContentLoaded', () => renderProducts());
