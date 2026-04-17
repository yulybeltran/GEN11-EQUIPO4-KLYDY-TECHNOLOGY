 // Activa el botón presionado en la barra inferior
  function setActive(el) {
    document.querySelectorAll('.bottom-nav-item').forEach(b => b.classList.remove('active'));
    el.classList.add('active');
  }

  // Sincroniza badge móvil y desktop
  function actualizarBadge(cantidad) {
    document.getElementById('badge-mobile').textContent  = cantidad;
    document.getElementById('badge-desktop').textContent = cantidad;
  }


  // Cambia el ícono del botón Menú en la barra inferior
const navbarCollapse = document.getElementById('navbarKlydy');
const btnMenu = document.querySelector('.btn-menu');

navbarCollapse.addEventListener('show.bs.collapse', () => {
  btnMenu.querySelector('i').className = 'bi bi-x-lg';
  btnMenu.classList.add('active');
});

navbarCollapse.addEventListener('hide.bs.collapse', () => {
  btnMenu.querySelector('i').className = 'bi bi-grid-3x3-gap';
  btnMenu.classList.remove('active');
});

// Cierra cualquier modal u offcanvas abierto antes de abrir otro
document.querySelectorAll('[data-bs-toggle="modal"], [data-bs-toggle="offcanvas"]')
  .forEach(btn => {
    btn.addEventListener('click', () => {

      // Cerrar modal abierto
      const modalAbierto = document.querySelector('.modal.show');
      if (modalAbierto) {
        bootstrap.Modal.getInstance(modalAbierto)?.hide();
      }

      // Cerrar offcanvas abierto
      const offcanvasAbierto = document.querySelector('.offcanvas.show');
      if (offcanvasAbierto) {
        bootstrap.Offcanvas.getInstance(offcanvasAbierto)?.hide();
      }

    });
  });