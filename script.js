 window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Start transition after 2 seconds
    setTimeout(() => {
        loader.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
        loader.style.opacity = "0";
        loader.style.transform = "translateY(-100%)";
        
        setTimeout(() => {
            loader.style.display = "none";
            
            // 1. REVEAL CONTENT FIRST
            content.style.display = "block";
            document.body.style.overflow = "auto";
            
            // 2. NOW INITIALIZE AOS
            // This ensures AOS can see the height/position of the sections
            AOS.init({
                duration: 1000,
                once: true,
                offset: 100,
                easing: 'ease-in-out'
            });

            // 3. Generate QR Code
            generateQR();

            // 4. Force a refresh to catch any lazy-loaded elements
            AOS.refresh();

        }, 800);
    }, 2000); 
});

function generateQR() {
    const qrContainer = document.getElementById("qrcode");
    if (qrContainer) {
        const currentURL = window.location.href; 
        new QRCode(qrContainer, {
            text: currentURL,
            width: 180,
            height: 180,
            colorDark : "#166534",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
}