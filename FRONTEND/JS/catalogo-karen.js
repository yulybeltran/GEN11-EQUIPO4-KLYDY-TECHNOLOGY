(() => {
  'use strict';

  const contenedor = document.getElementById('catalogo');
  const mensajeVacio = document.getElementById('mensajeVacio');

  /* ── PRODUCTOS BASE (HARDCODEADOS) ───────────────── */
  const productosBase = [
    {
      id: 1,
      nombre: "Laptop Gamer X",
      precio: 4500000,
      marca: "Asus",
      categoria: "Tecnología",
      descripcion: "Alto rendimiento para gaming.",
      imagen: "https://via.placeholder.com/300x200?text=Laptop"
    },
    {
      id: 2,
      nombre: "Audífonos Pro",
      precio: 350000,
      marca: "Sony",
      categoria: "Audio",
      descripcion: "Cancelación de ruido.",
      imagen: "https://via.placeholder.com/300x200?text=Audifonos"
    },
    {
      id: 3,
      nombre: "Mouse RGB",
      precio: 120000,
      marca: "Logitech",
      categoria: "Accesorios",
      descripcion: "Precisión y estilo.",
      imagen: "https://via.placeholder.com/300x200?text=Mouse"
    },
    {
      id: 4,
      nombre: "Teclado Mecánico",
      precio: 280000,
      marca: "Razer",
      categoria: "Accesorios",
      descripcion: "Switches ultra rápidos.",
      imagen: "https://via.placeholder.com/300x200?text=Teclado"
    },
    {
      id: 5,
      nombre: "Monitor 4K",
      precio: 1800000,
      marca: "LG",
      categoria: "Pantallas",
      descripcion: "Resolución ultra HD.",
      imagen: "https://via.placeholder.com/300x200?text=Monitor"
    },
    {
      id: 6,
      nombre: "Smartwatch",
      precio: 600000,
      marca: "Apple",
      categoria: "Wearables",
      descripcion: "Control total en tu muñeca.",
      imagen: "https://via.placeholder.com/300x200?text=Watch"
    },
    {
      id: 7,
      nombre: "Parlante Bluetooth",
      precio: 250000,
      marca: "JBL",
      categoria: "Audio",
      descripcion: "Sonido potente portátil.",
      imagen: "https://via.placeholder.com/300x200?text=Parlante"
    },
    {
      id: 8,
      nombre: "Tablet Pro",
      precio: 2200000,
      marca: "Samsung",
      categoria: "Tecnología",
      descripcion: "Productividad y diseño.",
      imagen: "https://via.placeholder.com/300x200?text=Tablet"
    },
    {
      id: 9,
      nombre: "Cámara HD",
      precio: 1300000,
      marca: "Canon",
      categoria: "Fotografía",
      descripcion: "Captura profesional.",
      imagen: "https://via.placeholder.com/300x200?text=Camara"
    },
    {
      id: 10,
      nombre: "Disco SSD 1TB",
      precio: 400000,
      marca: "Kingston",
      categoria: "Almacenamiento",
      descripcion: "Velocidad extrema.",
      imagen: "https://via.placeholder.com/300x200?text=SSD"
    }
  ];

  /* ── PRODUCTOS DEL ADMIN (LOCALSTORAGE) ──────────── */
  const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

  /* ── MEZCLA FINAL ────────────────────────────────── */
  const productos = [
    ...productosBase,
    ...productosGuardados.map(p => ({
      ...p,
      esNuevo: true 
    }))
  ];

  /* ── MENSAJE VACÍO ───────────────────────────────── */
  if (productos.length === 0) {
    mensajeVacio.classList.remove('d-none');
  } else {
    mensajeVacio.classList.add('d-none');
  }

  /* ── RENDER ─────────────────────────────────────── */
  productos.forEach(p => {

    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';

    col.innerHTML = `
      <div class="card producto-card h-100">

        <div class="producto-img-wrapper">
          <img src="${p.imagen || 'https://via.placeholder.com/300x200'}" 
               class="producto-img" alt="${p.nombre}">
        </div>

        <div class="card-body d-flex flex-column">

          ${p.esNuevo ? '<span class="badge bg-info mb-2">Nuevo</span>' : ''}

          <span class="producto-categoria">${p.categoria}</span>

          <h5 class="producto-nombre">${p.nombre}</h5>

          <p class="producto-marca">${p.marca}</p>

          <p class="producto-desc">${p.descripcion}</p>

          <div class="mt-auto">
            <h4 class="producto-precio">
              $${p.precio.toLocaleString('es-CO')}
            </h4>
          </div>

        </div>

      </div>
    `;

    contenedor.appendChild(col);
  });

})();