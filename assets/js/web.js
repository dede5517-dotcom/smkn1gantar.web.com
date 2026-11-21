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
function hitungJurusan() {
    const skor = {
        TKR: 0,
        RPL: 0,
        DPIB: 0,
        DKV: 0,
        FI: 0,
        TPFL: 0,
        AKKL: 0,
        TBO: 0
    };

    const dataJurusan = {
        TKR: {
            nama: "TKR (Teknik Kendaraan Ringan)",
            deskripsi: "Kamu memiliki ketertarikan kuat di bidang mekanik dan mesin otomotif. Jurusan TKR sangat cocok untuk mengasah kemampuanmu dalam perawatan dan perbaikan kendaraan roda empat.",
            link: "html/tkr.html"
        },
        RPL: {
            nama: "RPL (Rekayasa Perangkat Lunak)",
            deskripsi: "Kamu menyukai logika, teknologi, dan pemecahan masalah digital. Jurusan RPL akan membekalimu dengan keahlian pemrograman web, aplikasi mobile, dan database.",
            link: "html/rpl.html"
        },
        DPIB: {
            nama: "DPIB (Desain Pemodelan dan Informasi Bangunan)",
            deskripsi: "Kamu punya minat dalam perencanaan ruang dan arsitektur. Di DPIB, kamu akan belajar menggambar desain bangunan 2D/3D serta menghitung konstruksi.",
            link: "html/dpib.html"
        },
        DKV: {
            nama: "DKV (Desain Komunikasi Visual)",
            deskripsi: "Jiwa kreatif dan visualmu sangat menonjol! Jurusan DKV adalah wadah yang tepat untuk mendalami desain grafis, fotografi, videografi, dan animasi.",
            link: "html/dkv.html"
        },
        FI: {
            nama: "FI (Farmasi Klinis & Komunitas)",
            deskripsi: "Kamu teliti dan peduli pada bidang kesehatan. Jurusan Farmasi akan melatihmu dalam peracikan obat, pelayanan kefarmasian, dan pengelolaan alat kesehatan.",
            link: "html/fi.html"
        },
        TPFL: {
            nama: "TPFL (Teknik Pengelasan & Fabrikasi Logam)",
            deskripsi: "Kamu menyukai pekerjaan teknis konstruksi logam yang presisi. TPFL mempersiapkanmu menjadi tenaga ahli pengelasan industri dan fabrikasi baja.",
            link: "html/tpfl.html"
        },
        AKKL: {
            nama: "AKKL (Akuntansi & Keuangan Lembaga)",
            deskripsi: "Kamu rapi, terstruktur, dan cermat dengan angka. Jurusan Akuntansi akan membekalimu dengan kemampuan pembukuan, perpajakan, dan manajemen keuangan.",
            link: "html/akuntasi.html"
        },
        TBO: {
            nama: "TBO (Teknik Bodi Otomotif)",
            deskripsi: "Kamu tertarik pada estetika dan tampilan kendaraan. Di TBO, kamu akan menguasai teknik perbaikan rangka bodi, pengecatan, hingga modifikasi interior/eksterior mobil.",
            link: "html/tbo.html"
        }
    };

    // Cek apakah semua pertanyaan sudah dijawab
    const totalPertanyaan = 4;
    for (let i = 1; i <= totalPertanyaan; i++) {
        const jawaban = document.querySelector(`input[name="q${i}"]:checked`);
        if (!jawaban) {
            alert(`Silakan jawab pertanyaan nomor ${i} terlebih dahulu!`);
            return;
        }
        
        // Tambahkan skor ke masing-masing jurusan yang terkait dengan jawaban
        const daftarJurusan = jawaban.value.split(',');
        daftarJurusan.forEach(jurusan => {
            if (skor[jurusan] !== undefined) {
                // Beri bobot lebih besar (2 poin) pada pertanyaan terakhir (spesifik)
                skor[jurusan] += (i === 4) ? 2 : 1;
            }
        });
    }

    // Cari jurusan dengan skor tertinggi
    let jurusanTerbaik = "RPL";
    let skorTertinggi = -1;

    for (const [kode, nilai] of Object.entries(skor)) {
        if (nilai > skorTertinggi) {
            skorTertinggi = nilai;
            jurusanTerbaik = kode;
        }
    }

    // Tampilkan hasil ke layar
    const hasilBox = document.getElementById("hasilKuis");
    const judulHasil = document.getElementById("judulHasil");
    const deskripsiHasil = document.getElementById("deskripsiHasil");
    const linkJurusan = document.getElementById("linkJurusan");

    judulHasil.textContent = "Rekomendasi Jurusanmu: " + dataJurusan[jurusanTerbaik].nama;
    deskripsiHasil.textContent = dataJurusan[jurusanTerbaik].deskripsi;
    linkJurusan.href = dataJurusan[jurusanTerbaik].link;

    hasilBox.style.display = "block";
    hasilBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}