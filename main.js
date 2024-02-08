// CREANDO EL HEADER //

const header = document.createElement("header");
header.innerHTML = `<div class="container-menu">
<a class="lg" href=""><img src="./assets/cartel-zooko.svg" alt="LOGO"></a>
    <nav>
        <a href="https://www.zooko.com.uy/catalogo?grp=1">New In</a>
        <a href="https://www.zooko.com.uy/hombre">Hombre</a>
        <a href="https://www.zooko.com.uy/mujer">Mujer</a>
        <a href="https://www.zooko.com.uy/ninos">Niños</a>
        <a href="https://www.zooko.com.uy/catalogo/accesorios">Accesorios</a>
        <a href="https://www.zooko.com.uy/marcas">Marcas</a>
    </nav>
`;

document.body.appendChild(header);

// CREATE FILTER

const asideArticle = document.createElement("article");
asideArticle.className = "filter_options";
asideArticle.innerHTML = `<form id="filter-options">
<h3>Filtros de búsqueda</h3>
<div class="seller_filter">
  <label class="seller" for="seller">Vendedores</label>
  <select name="seller" id="seller">
    <option disabled selected value="">Filtrar por marca</option>
    <option value="0">Nike</option>
    <option value="1">Adidas</option>
    <option value="2">New Balance</option>
    <option value="3">Converse</option>
    <option value="4">Jordan</option>
    <option value="5">Vans</option>
  </select>
</div>
<div class="price_filter">
  <p>Precio</p>
  <input class="price_input" placeholder="Precio máx" type="number" name="price" id="price" min="10"/>
  <button id="submit" class="submit" type="button">Buscar</button>
</div>
<button class="filter_reset" type="reset">Limpiar filtros</button>
</form>`;
document.body.appendChild(asideArticle);

// CREATE ARRAY PRODUCTS

const products = [
  {
  name: 'Air Force 1',
  price: 99,
  seller: 'Nike',
  image: 'assets/champion-nike-air-force-107-lv8-black.png',
  },
  {
  name: 'Jordan Essentials Men Fleece Hoodie - Black',
  price: 89,
  seller: 'Jordan',
  image: 'assets/jordan-essentials-men-fleece-hoodie-black.png',
  },
  {
  name: 'MOCHILA NIKE HAYWARD - Green',
  price: 35,
  seller: 'Nike',
  image: 'assets/mochila-nike-hayward-green.png',
  },
  {
  name: 'VANS KNU SKOOL - BLACK',
  price: 90,
  seller: 'Vans',
  image: 'assets/vans-knu-skool-black.png',
  },
  {
  name: 'Gorra Vans Classic Patch Snapback Hat Amarilla - AMARILLO',
  price: 25,
  seller: 'Vans',
  image: 'assets/gorra-vans-classic-patch-snapback-hat-amarilla-amarillo.png',
  },
  {
  name: 'Medias adidas Crew 3 Pares - BLACK',
  price: 11,
  seller: 'Adidas',
  image: 'assets/medias-adidas-crew-3-pares-black.png',
  },
  {
  name: 'Championes Converse RUN STAR HIKE OX White - WHITE',
  price: 69,
  seller: 'Converse',
  image: 'assets/championes-converse-run-star-hike-ox-white-white.png',
  },
  {
  name: 'PANTALÓN JORDAN FLIGHT MVP - Black',
  price: 60,
  seller: 'Jordan',
  image: 'assets/pantalon-jordan-flight-mvp-black.png',
  },
  {
  name: 'GORRA NIKE APEX TIE DYE - 532',
  price: 25,
  seller: 'Nike',
  image: 'assets/gorra-nike-apex-tie-dye-532.png',
  },
  {
  name: 'New Balance BB 480 LBA Sneakers',
  price: 99,
  seller: 'New Balance',
  image: 'assets/new-balance-bb-480-lba-sneakers-lba.png.jpg',
  }
];

const productsCopy = products;

// Divs para cada artículo de la tienda.
const productsArticle = document.createElement("article");
productsArticle.className = "container_products";
productsArticle.id = "productsSection";
function paintProducts() {
  for (let i = 0; i < products.length; i++) {
    productsArticle.innerHTML += `<div class="div_products">
  <img class="product_img" src="${products[i].image}" alt="${products[i].name}"/>
  <h3>${products[i].name}</h3>
  <p>${products[i].price}€</p>
  <p>${products[i].seller}</p>
  </div>`;
    document.body.appendChild(productsArticle);
  }
}
paintProducts();

function resetFilters() {
  productsArticle.innerHTML = "";
  paintProducts();
  document.getElementsByClassName("filter_options").reset();
}

// FILTROS.
// SELLER.

const onOptionSelected = (event) => {
  let selectOpt = selectElement.selectedIndex;
  let opt = selectElement.options[selectOpt].innerHTML;
  productsArticle.innerHTML = "";

  const filteredProductsBySeller = productsCopy.filter((product) => {
    const filterSelectedOpt = product.seller === opt;
    return filterSelectedOpt;
  });

  for (let i = 0; i < filteredProductsBySeller.length; i++) {
    productsArticle.innerHTML += `<div class="div_products">
     <img class="product_img" src="${filteredProductsBySeller[i].image}" alt="${filteredProductsBySeller[i].name}"/>
     <h3>${filteredProductsBySeller[i].name}</h3>
     <p>${filteredProductsBySeller[i].price}€</p>
     <p>${filteredProductsBySeller[i].seller}</p>
     </div>`;
    document.body.appendChild(productsArticle);
  }
};

// CREATE INPUT PRICE


let inputValue = "";

function onButtonClicked() {
  if (selectElement.value !== "") {
    const filteredProductsByPrice = productsCopy.filter((product) => {
      return product.price <= inputValue;
    });
    let selectOpt = selectElement.selectedIndex;
    let opt = selectElement.options[selectOpt].innerHTML;

    const filteredPriceAndSeller = filteredProductsByPrice.filter((product) => {
      const filterMerged = product.seller === opt;
      return filterMerged;
    });

    productsArticle.innerHTML = "";

    for (let i = 0; i < filteredPriceAndSeller.length; i++) {
      productsArticle.innerHTML += `<div class="div_products">
   <img class="product_img" src="${filteredPriceAndSeller[i].image}" alt="${filteredPriceAndSeller[i].name}"/>
   <h3>${filteredPriceAndSeller[i].name}</h3>
   <p>${filteredPriceAndSeller[i].price}€</p>
   <p>${filteredPriceAndSeller[i].seller}</p>
   </div>`;
      document.body.appendChild(productsArticle);
    }
  } else {
    const filteredProductsByPrice = productsCopy.filter((product) => {
      return product.price <= inputValue;
    });
    productsArticle.innerHTML = "";

    for (let i = 0; i < filteredProductsByPrice.length; i++) {
      productsArticle.innerHTML += `<div class="div_products">
   <img class="product_img" src="${filteredProductsByPrice[i].image}" alt="${filteredProductsByPrice[i].name}"/>
   <h3>${filteredProductsByPrice[i].name}</h3>
   <p>${filteredProductsByPrice[i].price}€</p>
   <p>${filteredProductsByPrice[i].seller}</p>
   </div>`;
      document.body.appendChild(productsArticle);
    }
  }
}

const onInputChanged = (event) => {
  inputValue = event.target.value;
};

const buttonElement = document.querySelector("#submit");
buttonElement.addEventListener("click", onButtonClicked);

const inputElement = document.querySelector('input[type="number"]');
inputElement.addEventListener("input", onInputChanged);

const selectElement = document.querySelector("#seller");
selectElement.addEventListener("change", onOptionSelected);

const btn2 = document.querySelector(".filter_reset");
btn2.addEventListener("click", resetFilters);