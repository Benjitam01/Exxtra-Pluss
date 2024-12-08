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
        // Botas Negras
        {
            nombre: "Botas Negras",
            imagenes: [
                "images/botasnegras/botas1.png"
            ],
            tallas: ["35", "36", "37", "38", "39", "40", "41"],
            genero: "mujer",
            categoria: "mujer-zapatos",
            subcategoria: "botas",
            descripcion: "Botas negras elegantes. Horma normal",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Palazos productos
        {
            nombre: "Palazo Tela Sofia",
            imagenes: [
                "images/palazos productos/palazo1.png",
                "images/palazos productos/palazo2.png",
                "images/palazos productos/palazo3.png",
                "images/palazos productos/palazo4.png"
            ],
            colores: ["Negro", "Azul", "Beige", "Verde"],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-pantalones",
            subcategoria: "palazos",
            descripcion: "Palazo en tela Sofia, disponible en varios colores",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Zapatillas blanca mujer
        {
            nombre: "Zapatillas Blancas con Terraplén",
            imagenes: [
                "images/zapatillas blanca mujer/zapatillas blancas.png"
            ],
            tallas: ["35", "36", "37", "38", "39", "40", "41"],
            genero: "mujer",
            categoria: "mujer-zapatos",
            subcategoria: "zapatillas",
            descripcion: "Zapatillas con terraplén de 8cm. Diseño moderno y elegante, perfectas para cualquier ocasión. Horma normal, máximo confort. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Zapatillas de lona
        {
            nombre: "Zapatillas de Lona con Plataforma",
            imagenes: [
                "images/Zapatillas de lona/zapatilla de lona 2.png",
                "images/Zapatillas de lona/zapatilla de lona 3.png",
                "images/Zapatillas de lona/zapatillas de lona.png"
            ],
            colores: ["Vista frontal", "Vista lateral", "Vista completa"],
            tallas: ["35", "36", "37", "38", "39", "40", "41"],
            genero: "mujer",
            categoria: "mujer-zapatos",
            subcategoria: "zapatillas",
            descripcion: "Zapatillas de lona con plataforma de 5cm. Estilo casual y versátil, ideales para el día a día. Horma normal, máxima comodidad. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar el nuevo producto de pantalones acampanados
        {
            nombre: "Pantalón Acampanado Talle Alto",
            imagenes: [
                "images/pantalones acampanados/acampanados1.png",
                "images/pantalones acampanados/acampanados2.png",
                "images/pantalones acampanados/acampanados3.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-pantalones",
            subcategoria: "pantalones",
            descripcion: "Pantalón acampanado de talle alto, diseño elegante y cómodo. Corte que estiliza la figura, perfecto para looks formales o casuales. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar enteritos Adriana
        {
            nombre: "Enterito Adriana",
            imagenes: [
                "images/enteritosadriana/enteritosadriana1.png",
                "images/enteritosadriana/enteritosadriana2.png",
                "images/enteritosadriana/enteritosadriana3.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-enteritos",
            subcategoria: "enteritos",
            descripcion: "Enterito elegante y versátil, diseño moderno que realza la figura. Ideal para ocasiones especiales o un look casual chic. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar vestido Florencia
        {
            nombre: "Vestido Florencia",
            imagenes: [
                "images/vestidosflorencia/vestidoflorencia1.png",
                "images/vestidosflorencia/vestidoflorencia2.png",
                "images/vestidosflorencia/vestidoflorencia3.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-vestidos",
            subcategoria: "vestidos",
            descripcion: "Vestido Florencia, diseño elegante y moderno. Corte favorecedor que realza la silueta, perfecto para eventos especiales. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar pantalones de pana
        {
            nombre: "Pantalón de Pana",
            imagenes: [
                "images/pantalonesdepana/depana.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-pantalones",
            subcategoria: "pantalones",
            descripcion: "Pantalón de pana, estilo clásico y cómodo. Tejido suave y duradero, ideal para los días frescos. Diseño atemporal. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar bermudas hombre
        {
            nombre: "Bermuda para Hombre",
            imagenes: [
                "images/bermudashombre/bermudahombre.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-pantalones",
            subcategoria: "bermudas",
            descripcion: "Bermuda casual para hombre, diseño cómodo y versátil. Corte moderno, perfecta para el día a día y actividades al aire libre. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar polera de piqué hombre
        {
            nombre: "Polera de Piqué para Hombre",
            imagenes: [
                "images/polerasdepiquehombre/poleradepique.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-superior",
            subcategoria: "poleras",
            descripcion: "Polera de piqué clásica para hombre, estilo casual y elegante. Tejido transpirable de alta calidad, perfecta para cualquier ocasión. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar shorts de baño hombre
        {
            nombre: "Short de Baño para Hombre",
            imagenes: [
                "images/shortbaño/shorts_de_baño1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-pantalones",
            subcategoria: "shorts",
            descripcion: "Short de baño para hombre, diseño moderno y secado rápido. Material ligero y resistente, ideal para actividades acuáticas y playa. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar pijamas hombre
        {
            nombre: "Pijama para Hombre",
            imagenes: [
                "images/pijamas hombre/pijama1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-superior",
            subcategoria: "pijamas",
            descripcion: "Pijama cómodo para hombre, confeccionado con telas suaves y frescas. Diseño que garantiza un descanso confortable y elegante. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar poleras cuello redondo hombre
        {
            nombre: "Polera Cuello Redondo para Hombre",
            imagenes: [
                "images/polerashombrecuello/poleracuello1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-superior",
            subcategoria: "poleras",
            descripcion: "Polera con cuello redondo para hombre, diseño clásico y cómodo. Tejido de alta calidad, perfecta para un look casual y moderno. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar camisa elegante hombre
        {
            nombre: "Camisa Elegante para Hombre",
            imagenes: [
                "images/camisaelegantehombre/camisaelegante1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-superior",
            subcategoria: "camisas",
            descripcion: "Camisa elegante para hombre, corte moderno y acabados de primera calidad. Perfecta para ocasiones formales y eventos especiales. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar poleras jersey cuello V hombre
        {
            nombre: "Polera Jersey Cuello V para Hombre",
            imagenes: [
                "images/Poleras jersey cuello V/Polerasjersey cuelloV1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-superior",
            subcategoria: "poleras",
            descripcion: "Polera jersey con cuello V para hombre, confección premium y diseño actual. Estilo moderno y confortable, ideal para todo tipo de ocasiones. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar polera jersey con botones hombre
        {
            nombre: "Polera Jersey con Botones para Hombre",
            imagenes: [
                "images/Polera Jersey con botones/PoleraJerseyconbotones1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-superior",
            subcategoria: "poleras",
            descripcion: "Polera jersey con botones decorativos, diseño elegante y sofisticado. Tejido de alta calidad, perfecta para un look casual elegante. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar cortaviento hombre
        {
            nombre: "Cortaviento para Hombre",
            imagenes: [
                "images/cortavientoshombre/cortaviento1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-superior",
            subcategoria: "chaquetas",
            descripcion: "Cortaviento deportivo para hombre, material resistente al agua y viento. Ideal para actividades al aire libre y deportes. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar guayaveras hombre
        {
            nombre: "Guayavera para Hombre",
            imagenes: [
                "images/guayaveras/guayaveras1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "hombre",
            categoria: "hombre-superior",
            subcategoria: "camisas",
            descripcion: "Guayavera clásica para hombre, confeccionada con tela fresca y ligera. Diseño tradicional perfecto para ocasiones especiales y clima cálido. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar pantalón forrado mujer
        {
            nombre: "Pantalón Forrado para Mujer",
            imagenes: [
                "images/pantalon forrado mujer/pantalonforrado1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-pantalones",
            subcategoria: "pantalones",
            descripcion: "Pantalón forrado para mujer, ideal para días fríos. Diseño cómodo y abrigador con forro interior suave. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar suéter mujer
        {
            nombre: "Suéter Tejido de Punto con Trenzas",
            imagenes: [
                "images/sueter mujer/sueter1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-superior",
            subcategoria: "sweaters",
            descripcion: "Suéter tejido con diseño de trenzas, confeccionado en punto suave y abrigador. Perfecto para los días fríos, estilo clásico y elegante. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar enteritos
        {
            nombre: "Enterito Casual",
            imagenes: [
                "images/enteritos/enteritos.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-enteritos",
            subcategoria: "enteritos",
            descripcion: "Enterito casual con diseño moderno y cómodo. Ideal para un look relajado y a la moda. Confección de calidad que se adapta a tu figura. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        },

        // Agregar poleras de hilo mujer
        {
            nombre: "Polera de Hilo para Mujer",
            imagenes: [
                "images/poleras de hilo mujer/polerasdehilo1.png"
            ],
            tallas: ["S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL"],
            genero: "mujer",
            categoria: "mujer-superior",
            subcategoria: "poleras",
            descripcion: "Polera de hilo para mujer, tejido fresco y elegante. Ideal para un look sofisticado en días cálidos. Diseño versátil que combina con todo. Más diseños en tienda.",
            precio: "$23.990",
            whatsapp: "56951457510"
        }
    ];

    // Función para mostrar productos
    function mostrarProductos(categoria = 'todos') {
        const contenedor = document.querySelector('.productos-grid');
        if (!contenedor) return;

        // Limpiar el contenedor
        while (contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
        
        // Filtrar productos
        const productosFiltrados = categoria === 'todos' 
            ? productos 
            : categoria === 'mujer' 
                ? productos.filter(p => p.genero === 'mujer')
                : categoria === 'hombre'
                    ? productos.filter(p => p.genero === 'hombre')
                    : productos.filter(p => p.categoria === categoria);
        
        // Mostrar cada producto
        productosFiltrados.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.className = 'producto';
            
            // Crear el HTML para el carrusel de imágenes
            const imagenHTML = producto.imagenes ? `
                <div class="producto-imagen carousel">
                    ${producto.imagenes.map((img, index) => `
                        <img src="${img}" 
                             alt="${producto.nombre} ${producto.colores ? '- ' + producto.colores[index] : ''}" 
                             class="carousel-item ${index === 0 ? 'active' : ''}"
                             loading="lazy">
                    `).join('')}
                </div>
            ` : `
                <div class="producto-imagen">
                    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
                </div>
            `;

            // Crear el HTML completo del producto
            productoElement.innerHTML = `
                ${imagenHTML}
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p class="categoria">${producto.subcategoria}</p>
                    ${producto.descripcion ? `<p class="descripcion">${producto.descripcion}</p>` : ''}
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
            if (producto.imagenes && producto.imagenes.length > 1) {
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