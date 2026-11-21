/* ==========================================================
   1. ANIMASI FADE-IN SAAT SCROLL (INTERSECTION OBSERVER)
   ================================================---------- */
document.addEventListener("DOMContentLoaded", function () {
    // Memilih semua elemen card dan grid-card yang ingin diberi animasi
    const animatedElements = document.querySelectorAll(".card, .grid-card");

    const observerOptions = {
        root: null, // Menggunakan viewport browser
        rootMargin: "0px",
        threshold: 0.12 // Animasi terpicu saat 12% elemen terlihat di layar
    };

    const scrollObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Tambahkan kelas untuk memicu animasi CSS fade-in
                entry.target.classList.add("fade-in-visible");
                
                // Berhenti mengamati elemen setelah animasi dijalankan sekali
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Daftarkan setiap elemen ke observer
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});


/* ==========================================================
   2. EFEK INTERAKTIF KLIK PADA KARTU (CARD PULSE/RIPPLE)
   ================================================---------- */
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card, .grid-card");

    cards.forEach(card => {
        card.addEventListener("click", function (e) {
            // Mencegah efek klik ganda jika mengklik tautan (<a>) di dalam card
            if (e.target.tagName.toLowerCase() === 'a') return;

            // Tambahkan kelas animasi klik
            this.classList.add("card-clicked");

            // Hapus kelas animasi setelah durasi selesai agar bisa dipicu kembali
            setTimeout(() => {
                this.classList.remove("card-clicked");
            }, 400);
        });
    });
});


/* ==========================================================
   3. EFEK KLIK PADA MENU NAVIGASI
   ================================================---------- */
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Tambahkan kelas aktif saat diklik
            navLinks.forEach(nav => nav.classList.remove("click-active"));
            this.classList.add("click-active");

            setTimeout(() => {
                this.classList.remove("click-active");
            }, 300);
        });
    });
});


/* ==========================================================
   4. INTERAKSI KLIK PADA ITEM MATERI / LIST (OPSIONAL)
   ================================================---------- */
document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".materi-list li");

    listItems.forEach(item => {
        item.addEventListener("click", function () {
            this.classList.add("item-clicked");

            setTimeout(() => {
                this.classList.remove("item-clicked");
            }, 300);
        });
    });
});