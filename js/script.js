const starrySky = document.querySelector('.starry-sky');
const totalStars = 200; // Tingkatkan jumlah bintang jika perlu

for (let i = 0; i < totalStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Tentukan posisi acak untuk setiap bintang
    const topPosition = Math.random() * 100;
    const leftPosition = Math.random() * 100;

    // Tentukan ukuran bintang secara acak
    const sizes = ['small', 'medium', 'large'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];

    star.style.top = topPosition + '%';
    star.style.left = leftPosition + '%';
    star.dataset.size = randomSize;

    starrySky.appendChild(star);
}

    // Array untuk berbagai pekerjaan
    const jobTitles = ["UI/UX Designer", "Web Developer", "Front End Developer"];
    let index = 0;
    let charIndex = 0;
    const jobElement = document.getElementById('job-title');

    // Fungsi untuk menulis teks secara bertahap
    function typeJobTitle() {
        if (charIndex < jobTitles[index].length) {
            jobElement.textContent += jobTitles[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeJobTitle, 150);  // Menulis setiap 150ms
        } else {
            // Setelah selesai menulis, hapus teks dan lanjutkan ke pekerjaan berikutnya
            setTimeout(deleteJobTitle, 1000);  // Tunggu 1 detik setelah selesai menulis
        }
    }

    // Fungsi untuk menghapus teks secara bertahap
    function deleteJobTitle() {
        if (charIndex > 0) {
            jobElement.textContent = jobTitles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(deleteJobTitle, 100);  // Menghapus setiap 100ms
        } else {
            // Setelah menghapus, lanjut ke pekerjaan berikutnya
            index = (index + 1) % jobTitles.length;
            setTimeout(typeJobTitle, 500);  // Mulai mengetik pekerjaan berikutnya setelah jeda 0.5 detik
        }
    }

    // Mulai dengan mengetik pekerjaan pertama
    typeJobTitle();

    let lastScrollY = window.scrollY; // Save the previous scroll position
    let moveY = -200; // Track the last transformation position
    let threshold = 300; // Scroll threshold for when to start movement
    let maxMoveY = 200; // Maximum movement in Y direction (adjust as needed)
    
    document.addEventListener("scroll", function () {
        // Periksa apakah lebar layar lebih besar dari 768px (misalnya, untuk desktop)
        if (window.innerWidth > 768) {
            let card = document.querySelector(".parallax-card");
    
            if (card) {
                let currentScrollY = window.scrollY; // Current scroll position
                let direction = currentScrollY > lastScrollY ? -1 : 1; // Scroll down (-1) or up (1)
    
                // Only start moving the card after crossing the threshold
                if (currentScrollY > threshold) {
                    if (direction === -1 && moveY > -maxMoveY) {
                        moveY -= 5;
                    } else if (direction === 1 && moveY < maxMoveY) {
                        moveY += 5;
                    }
                } else {
                    moveY = 0;
                }
    
                lastScrollY = currentScrollY; // Update the last scroll position
                card.style.transform = `translateY(${moveY}px)`;
            }
        } else {
            // Jika lebar layar lebih kecil atau sama dengan 768px, hapus transformasi
            let card = document.querySelector(".parallax-card");
            if (card) {
                card.style.marginTop = "0px";
            }
        }
    });
    
    document.addEventListener("DOMContentLoaded", function () {
        const container = document.querySelector(".awan-container");
        const jumlahAwan = 6; // Bisa diubah sesuai kebutuhan
        const awanImages = ["img/awan_biasa.png", "img/awan_panjang.png", "img/awan_tebal.png", "img/awan_sedang.png"];
        const posisiAwan = [];
    
        for (let i = 0; i < jumlahAwan; i++) {
            let awan = document.createElement("img");
            awan.src = awanImages[Math.floor(Math.random() * awanImages.length)];
            awan.classList.add("awan");
    
            let randomX, randomY;
            let terlaluDekat = true;
    
            while (terlaluDekat) {
                randomX = Math.random() * (window.innerWidth - 150);
                randomY = Math.random() * (window.innerHeight * 0.8); // Hanya sampai 80vh
    
                terlaluDekat = posisiAwan.some(pos => 
                    Math.abs(pos.x - randomX) < 200 && Math.abs(pos.y - randomY) < 150
                );
            }
    
            posisiAwan.push({ x: randomX, y: randomY });
    
            let randomSize = Math.random() * 0.6 + 0.7; 
            let randomSpeed = Math.random() * 10 + 5;
    
            awan.style.left = `${randomX}px`;
            awan.style.top = `${randomY}px`;
            awan.style.transform = `scale(${randomSize})`; 
            awan.style.animationDuration = `${randomSpeed}s`;
    
            container.appendChild(awan);
        }
    });
    
    
       
    
    



