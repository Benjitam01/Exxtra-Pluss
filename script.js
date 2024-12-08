document.addEventListener('DOMContentLoaded', function() {
    // Detectar si es dispositivo móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Función para inicializar animaciones de manera más suave
    function inicializarAnimaciones() {
        if (typeof anime === 'undefined') {
            console.warn('Anime.js no está cargado');
            return;
        }

        // Configuración más suave para las animaciones
        const config = {
            duration: 800,
            easing: 'easeOutQuad',
            opacity: [0, 1],
            delay: 300
        };

        // Animación más suave para el texto
        anime({
            targets: '.hero-content > *',
            ...config,
            translateY: [20, 0],
            delay: anime.stagger(100)
        });
    }

    // Datos de los productos organizados por categorías
    const productos = [
        // Palazo Sofia con múltiples imágenes
        {
            nombre: "Palazo Tela Sofia",
            imagenes: [
                "palazos productos/palazo1.png",
                "palazos productos/palazo2.png",
                "palazos productos/palazo3.png",
                "palazos productos/palazo4.png"
            ],
            colores: ["Negro", "Azul", "Beige", "Verde"],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "pantalones",
            subcategoria: "palazos",
            precio: "$23.990",
            whatsapp: "56951457510"
        },
        // Ropa Superior
        {
            nombre: "Blusa Elegante",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "ropa-superior",
            subcategoria: "blusas",
            precio: "$19.990",
            whatsapp: "56951457510"
        },
        {
            nombre: "Polera Básica",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "ropa-superior",
            subcategoria: "poleras",
            precio: "$12.990",
            whatsapp: "56951457510"
        },
        {
            nombre: "Sweater Invierno",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "ropa-superior",
            subcategoria: "sweaters",
            precio: "$25.990",
            whatsapp: "56951457510"
        },

        // Vestidos
        {
            nombre: "Vestido Casual",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "vestidos",
            subcategoria: "casual",
            precio: "$27.990",
            whatsapp: "56951457510"
        },
        {
            nombre: "Vestido Elegante",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "vestidos",
            subcategoria: "elegante",
            precio: "$35.990",
            whatsapp: "56951457510"
        },

        // Pantalones
        {
            nombre: "Jeans Clásico",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "pantalones",
            subcategoria: "jeans",
            precio: "$22.990",
            whatsapp: "56951457510"
        },
        {
            nombre: "Pantalón Formal",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "pantalones",
            subcategoria: "formal",
            precio: "$24.990",
            whatsapp: "56951457510"
        },

        // Faldas
        {
            nombre: "Falda Midi",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "faldas",
            subcategoria: "midi",
            precio: "$18.990",
            whatsapp: "56951457510"
        },
        {
            nombre: "Falda Corta",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            categoria: "faldas",
            subcategoria: "corta",
            precio: "$16.990",
            whatsapp: "56951457510"
        },

        // Accesorios
        {
            nombre: "Collar Elegante",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["Único"],
            categoria: "accesorios",
            subcategoria: "collares",
            precio: "$8.990",
            whatsapp: "56951457510"
        },
        {
            nombre: "Cinturón Cuero",
            imagen: "https://placehold.co/400x400/6b2c91/ffffff?text=Producto",
            tallas: ["S", "M", "L", "XL", "2XL", "3XL"],
            categoria: "accesorios",
            subcategoria: "cinturones",
            precio: "$12.990",
            whatsapp: "56951457510"
        }
    ];

    // Función para mostrar productos
    function mostrarProductos(categoria = 'todos') {
        const contenedor = document.querySelector('.productos-grid');
        if (!contenedor) return;

        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
        
        const productosFiltrados = categoria === 'todos' 
            ? productos 
            : productos.filter(p => p.categoria === categoria);
        
        productosFiltrados.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.className = 'producto';
            
            // Crear el HTML para el producto
            const imagenHTML = producto.imagenes ? `
                <div class="producto-imagen carousel">
                    ${producto.imagenes.map((img, index) => `
                        <img src="${img}" 
                             alt="${producto.nombre} - ${producto.colores[index]}" 
                             class="carousel-item ${index === 0 ? 'active' : ''}"
                             loading="lazy">
                    `).join('')}
                </div>
            ` : `
                <div class="producto-imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                </div>
            `;

            productoElement.innerHTML = `
                ${imagenHTML}
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p class="categoria">${producto.subcategoria}</p>
                    <p class="precio">${producto.precio}</p>
                    <div class="tallas">
                        ${producto.tallas.map(talla => `
                            <span class="talla-badge" onclick="seleccionarTalla(this, '${producto.nombre}')">${talla}</span>
                        `).join('')}
                    </div>
                    <button class="btn-whatsapp" onclick="consultarDisponibilidad('${producto.nombre}', this.closest('.producto-info'))">
                        <i class="fab fa-whatsapp"></i> Consultar Disponibilidad
                    </button>
                </div>
            `;

            contenedor.appendChild(productoElement);

            // Iniciar carrusel si el producto tiene múltiples imágenes
            if (producto.imagenes) {
                const carousel = productoElement.querySelector('.carousel');
                const items = carousel.querySelectorAll('.carousel-item');
                let currentIndex = 0;

                setInterval(() => {
                    items[currentIndex].classList.remove('active');
                    currentIndex = (currentIndex + 1) % items.length;
                    items[currentIndex].classList.add('active');
                }, 3000);
            }
        });
    }

    // Función para manejar la selección de talla
    window.seleccionarTalla = function(elemento, nombreProducto) {
        // Remover la clase activa de todas las tallas del mismo producto
        const todasLasTallas = elemento.closest('.tallas').querySelectorAll('.talla-badge');
        todasLasTallas.forEach(talla => talla.classList.remove('talla-activa'));
        
        // Agregar la clase activa a la talla seleccionada
        elemento.classList.add('talla-activa');
    };

    // Función actualizada para consultar disponibilidad
    window.consultarDisponibilidad = function(nombreProducto, productoInfo) {
        const tallaSeleccionada = productoInfo.querySelector('.talla-activa');
        let mensaje;
        
        if (tallaSeleccionada) {
            mensaje = `¡Hola! Me interesa el producto: ${nombreProducto} en talla ${tallaSeleccionada.textContent}. ¿Está disponible?`;
        } else {
            mensaje = `¡Hola! Me interesa el producto: ${nombreProducto}. ¿Está disponible?`;
        }
        
        const urlWhatsapp = `https://wa.me/56951457510?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsapp, '_blank');
    };

    // Inicialización del menú
    const menuBtn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const menuLinks = document.querySelectorAll('nav ul li a');
    let menuOverlay;

    if (menuBtn && nav) {
        // Crear el overlay
        menuOverlay = document.createElement('div');
        menuOverlay.className = 'menu-overlay';
        document.body.appendChild(menuOverlay);

        // Actualizar el HTML del botón
        menuBtn.innerHTML = '<span class="hamburger"></span>';

        // Agregar índices a los elementos del menú para la animación
        menuLinks.forEach((link, index) => {
            link.parentElement.style.setProperty('--i', index + 1);
        });

        // Manejar click en el botón de menú
        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });

        // Manejar click en el overlay
        menuOverlay.addEventListener('click', closeMenu);

        // Manejar clicks en los enlaces del menú
        menuLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) {
                        closeMenu();
                        setTimeout(() => {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }, 300);
                    }
                } else {
                    closeMenu();
                }
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function(e) {
            if (nav.classList.contains('active') && 
                !nav.contains(e.target) && 
                !menuBtn.contains(e.target)) {
                closeMenu();
            }
        });

        // Prevenir que los clicks dentro del nav cierren el menú
        nav.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }

    function toggleMenu() {
        const isOpen = menuBtn.classList.contains('active');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    function openMenu() {
        menuBtn.classList.add('active');
        nav.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuBtn.classList.remove('active');
        nav.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Inicializar productos
    if (document.querySelector('.productos-grid')) {
        mostrarProductos();
        
        // Event delegation para los filtros
        const filtrosContainer = document.querySelector('.categorias-nav');
        if (filtrosContainer) {
            filtrosContainer.addEventListener('click', (e) => {
                const filtroBtn = e.target.closest('.filtro-btn');
                if (!filtroBtn) return;

                document.querySelectorAll('.filtro-btn').forEach(btn => 
                    btn.classList.remove('active'));
                filtroBtn.classList.add('active');
                mostrarProductos(filtroBtn.dataset.categoria);
            });
        }
    }

    // Inicializar animaciones en la página principal
    if (document.querySelector('.hero-section')) {
        // Esperar a que las fuentes se carguen
        document.fonts.ready.then(() => {
            inicializarAnimaciones();
        });
    }

    // Manejar el menú de categorías móvil
    const categoriasToggle = document.querySelector('.categorias-toggle');
    const categoriasNav = document.querySelector('.categorias-nav');

    if (categoriasToggle && categoriasNav) {
        // Asegurarnos de que el menú esté oculto inicialmente en móviles
        if (window.innerWidth <= 768) {
            categoriasNav.style.display = 'none';
        }

        categoriasToggle.addEventListener('click', () => {
            // Toggle de la clase active
            categoriasNav.classList.toggle('active');
            categoriasToggle.classList.toggle('active');
            
            // Toggle del display
            if (categoriasNav.classList.contains('active')) {
                categoriasNav.style.display = 'flex';
            } else {
                categoriasNav.style.display = 'none';
            }
        });

        // Cerrar el menú al seleccionar una categoría
        document.querySelectorAll('.filtro-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    categoriasNav.classList.remove('active');
                    categoriasToggle.classList.remove('active');
                    categoriasNav.style.display = 'none';
                }
            });
        });

        // Cerrar el menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                !e.target.closest('.categorias-nav') && 
                !e.target.closest('.categorias-toggle') && 
                categoriasNav.classList.contains('active')) {
                categoriasNav.classList.remove('active');
                categoriasToggle.classList.remove('active');
                categoriasNav.style.display = 'none';
            }
        });
    }
}); 