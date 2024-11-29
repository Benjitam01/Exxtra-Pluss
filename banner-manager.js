class BannerManager {
    constructor() {
        this.bannersData = null;
        this.currentBanner = null;
        this.init();
    }

    async init() {
        try {
            const response = await fetch('banners.json');
            this.bannersData = await response.json();
            this.mostrarBannerActivo();
        } catch (error) {
            console.error('Error al cargar los banners:', error);
        }
    }

    mostrarBannerActivo() {
        const bannerActivo = this.bannersData.banners.find(banner => 
            banner.activo && new Date(banner.fechaExpiracion) > new Date()
        );

        if (!bannerActivo) return;

        this.currentBanner = bannerActivo;
        this.crearBannerHTML();
    }

    crearBannerHTML() {
        const bannerHTML = `
            <div id="promo-banner" class="promo-banner navidad-banner" 
                 style="background: ${this.currentBanner.colorFondo}; color: ${this.currentBanner.colorTexto}">
                <div class="snow-container">
                    ${this.generarCoposDeNieve()}
                </div>
                <div class="promo-content">
                    <button class="close-banner" onclick="bannerManager.cerrarBanner(event)">×</button>
                    <div class="banner-content-wrapper">
                        <span class="banner-icon">${this.currentBanner.estiloExtra?.iconos[0]}</span>
                        <div class="banner-text">
                            <strong>${this.currentBanner.titulo}</strong>
                            <span>${this.currentBanner.descripcion}</span>
                        </div>
                        <span class="banner-icon">${this.currentBanner.estiloExtra?.iconos[1]}</span>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('afterbegin', bannerHTML);
        
        const banner = document.getElementById('promo-banner');
        setTimeout(() => {
            document.body.style.paddingTop = banner.offsetHeight + 'px';
            banner.classList.add('active');
        }, 100);
    }

    generarCoposDeNieve() {
        let copos = '';
        for (let i = 0; i < 10; i++) {
            copos += '<div class="snowflake">❄</div>';
        }
        return copos;
    }

    cerrarBanner(event) {
        event.preventDefault();
        event.stopPropagation();
        
        const banner = document.getElementById('promo-banner');
        if (banner) {
            banner.classList.remove('active');
            document.body.style.paddingTop = '0';
            
            setTimeout(() => {
                banner.remove();
            }, 300);
            
            localStorage.setItem(`banner-${this.currentBanner.id}-closed`, 'true');
        }
    }
}

// Inicializar el manager de banners
const bannerManager = new BannerManager(); 