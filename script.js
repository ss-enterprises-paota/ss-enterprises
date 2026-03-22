 window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Start removal of loader
    setTimeout(() => {
        loader.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        loader.style.opacity = "0";
        loader.style.transform = "translateY(-100%)";
        
        setTimeout(() => {
            loader.style.display = "none";
            content.style.display = "block";
            document.body.style.overflow = "auto";
            
            // 1. Initialize Scroll Animations
            AOS.init({ duration: 1000, once: true, offset: 100 });

            // 2. Initialize Slider (Slides automatically, pauses on mouse over)
            const swiper = new Swiper(".productSwiper", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                pagination: { el: ".swiper-pagination", clickable: true },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                },
            });

            // 3. Generate QR Code
            const qrContainer = document.getElementById("qrcode");
            if (qrContainer) {
                new QRCode(qrContainer, {
                    text: window.location.href,
                    width: 150, height: 150,
                    colorDark : "#15803d", colorLight : "#ffffff"
                });
            }

            // Refresh AOS to catch new layout
            AOS.refresh();
        }, 800);
    }, 2000); 
});