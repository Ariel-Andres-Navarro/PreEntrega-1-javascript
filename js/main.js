const shopContent = document.getElementById("shopContent");  /*linkear html */

const verCarrito = document.getElementById("verCarrito");  /*para linkear el carrito al html*/ 

const modalContainer = document.getElementById("modal-container");  /*linkear modal */

const productos = [
    {
        id: 1,
        nombre: "Yacochuya Malbec",
        precio: 51000,
        img: 
        "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53455_default_small.jpeg"
    },
    {
        id: 2,
        nombre: "Sapo de otro Pozo blend ",
        precio: 15200,
        img:
        "https://www.espaciovino.com.ar/media/default/0001/59/thumb_58716_default_small.jpeg"
    },
    {
        id: 3,
        nombre: "Alegoría Malbec",
        precio: 13600,
        img:
        "https://www.espaciovino.com.ar/media/default/0001/61/thumb_60441_default_small.jpeg"
    },
    {
        id: 4,
        nombre: "Angelica Zapata Malbec",
        precio: 25130,
        img:
        "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52803_default_small.jpeg"
    },
    {
        id: 5,
        nombre: "DV Catena Cabernet Malbec",
        precio: 9380,
        img:
        "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52791_default_small.jpeg"
    },
    {
        id: 6,
        nombre: "Familia Gascón Red blend",
        precio: 3805,
        img:
        "https://www.espaciovino.com.ar/media/default/0001/70/thumb_69197_default_small.jpeg"
    },
    {
        id: 7,
        nombre: "Frida Malbec",
        precio: 3760,
        img:
        "https://www.espaciovino.com.ar/media/default/0001/67/thumb_66114_default_small.jpeg"
    },
    {
        id: 8,
        nombre: "Gauchesco clásico Cabernet Sauvignon",
        precio: 3515,
        img:
        "https://www.espaciovino.com.ar/media/default/0001/70/thumb_69001_default_small.jpeg"
    },
    {
        id: 9,
        nombre: "Rutini Cabernet Malbec",
        precio: 10800,
        img:
        "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61998_default_small.jpeg"
    }
];  

let carrito = [];


//create-element 
productos.forEach((product) => {  
    let content = document.createElement("div");
    content.className = "card";     //agrego clases para darle estilos
    content.innerHTML = `            
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className ="comprar";

    content.append(comprar);
 
    //aplico funcionalidad
   comprar.addEventListener("click", () => {
    carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,     /*selecciona productos al carrito*/ 
    });
   });
});

//creo modal
verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";                  //para limpiar carrito
    modalContainer.style.display = "flex";    //para visualizar el carrito
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>`;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";   //cierra carrito
    })

    modalHeader.append(modalbutton);
    
    carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
       <img src="${product.img}">
       <h3>${product.nombre}</h3>
       <p>${product.precio} $ </p>
        `;

       modalContainer.append(carritoContent);
    });

    const total =carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: ${total} $ `;
    modalContainer.append(totalBuying);
});  