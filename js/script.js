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
    let moveY = -100; // Track the last transformation position
    let threshold = 300; // Scroll threshold for when to start movement
    let maxMoveY = 200; // Maximum movement in Y direction (adjust as needed)
    
    document.addEventListener("scroll", function () {
        let card = document.querySelector(".parallax-card");
    
        if (card) {
            let currentScrollY = window.scrollY; // Current scroll position
            let direction = currentScrollY > lastScrollY ? -1 : 1; // Scroll down (-1) or up (1)
    
            // Only start moving the card after crossing the threshold
            if (currentScrollY > threshold) {
                if (direction === -1 && moveY > -maxMoveY) {
                    // Scroll down, move the card up (but don't exceed the max negative limit)
                    moveY -= 5;
                } else if (direction === 1 && moveY < maxMoveY) {
                    // Scroll up, move the card down (but don't exceed the max positive limit)
                    moveY += 5;
                }
            } else {
                // Before the threshold, keep the card in its normal position
                moveY = 0;
            }
    
            lastScrollY = currentScrollY; // Update the last scroll position
    
            card.style.transform = `translateY(${moveY}px)`;
        }
    });
    
    
    



