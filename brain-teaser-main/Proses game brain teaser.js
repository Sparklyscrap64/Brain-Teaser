const questions = {
    sinonim: [
        { "q": "Sinonim dari 'kompeten'?", "a": ["Mahir", "Ragu", "Pelupa", "Lemah"], "correct": 0 },
        { "q": "Sinonim dari 'transparan'?", "a": ["Gelap", "Jernih", "Samar", "Buram"], "correct": 1 },
        { "q": "Sinonim dari 'ilustrasi'?", "a": ["Gambar", "Lagu", "Karangan", "Warna"], "correct": 0 },
        { "q": "Sinonim dari 'ekspresi'?", "a": ["Perasaan", "Ungkapan", "Penjelasan", "Kemauan"], "correct": 1 },
        { "q": "Sinonim dari 'fundamental'?", "a": ["Kompleks", "Biasa", "Pokok", "Sederhana"], "correct": 2 },
        { "q": "Sinonim dari 'signifikan'?", "a": ["Kecil", "Penting", "Biasa", "Tidak perlu"], "correct": 1 },
        { "q": "Sinonim dari 'akomodasi'?", "a": ["Perubahan", "Perjalanan", "Penyesuaian", "Penginapan"], "correct": 3 },
        { "q": "Sinonim dari 'konvensional'?", "a": ["Modern", "Tradisional", "Radikal", "Inovatif"], "correct": 1 },
        { "q": "Sinonim dari 'abstrak'?", "a": ["Kabur", "Samar", "Nyata", "Konkret"], "correct": 1 },
        { "q": "Sinonim dari 'modifikasi'?", "a": ["Perubahan", "Pengurangan", "Penambahan", "Penghapusan"], "correct": 0 }
    ],


    antonim: [
        { "q": "Antonim dari 'eksplisit'?", "a": ["Tersirat", "Terang", "Terbuka", "Jelas"], "correct": 0 },
        { "q": "Antonim dari 'fleksibel'?", "a": ["Lentur", "Luwes", "Kaku", "Bebas"], "correct": 2 },
        { "q": "Antonim dari 'abadi'?", "a": ["Selamanya", "Sementara", "Tak terbatas", "Kekal"], "correct": 1 },
        { "q": "Antonim dari 'superior'?", "a": ["Inferior", "Rendah", "Unggul", "Luar biasa"], "correct": 0 },
        { "q": "Antonim dari 'dermawan'?", "a": ["Baik", "Suka memberi", "Murah hati", "Pelit"], "correct": 3 },
        { "q": "Antonim dari 'inovatif'?", "a": ["Biasa", "Stagnan", "Kreatif", "Menarik"], "correct": 1 },
        { "q": "Antonim dari 'optimis'?", "a": ["Percaya diri", "Pesimis", "Antusias", "Semangat"], "correct": 1 },
        { "q": "Antonim dari 'loyal'?", "a": ["Jujur", "Pengkhianat", "Tulus", "Setia"], "correct": 1 },
        { "q": "Antonim dari 'serius'?", "a": ["Fokus", "Main-main", "Tekun", "Sungguh-sungguh"], "correct": 1 },
        { "q": "Antonim dari 'konvensional'?", "a": ["Modern", "Klasik", "Tradisional", "Lama"], "correct": 0 }
    ],


    materi: [
        { "q": "Apa tujuan utama dari teks anekdot?", "a": ["Menghibur dan memberi kritik secara halus","Memberi informasi faktual","Mempromosikan produk","Menjelaskan langkah-langkah"], "correct": 0 },
        { "q": "Struktur teks laporan hasil observasi yang benar adalah...", "a": ["Orientasi, peristiwa, reorientasi", "pernyataan umum, deskripsi bagian, deskripsi manfaat", "Tesis, argumentasi, penegasan ulang", "Abstrak, orientasi, krisis, reaksi, koda"], "correct": 1 },
        { "q": "Ciri kebahasaan teks eksposisi adalah...", "a": ["Menggunakan majas", "Menggunakan kalimat perintah", "Menggunakan kata-kata teknis dan fakta", "Menggunakan kata kerja imperatif"], "correct": 2 },
        { "q": "Contoh kata tidak baku di bawah ini adalah...", "a": ["Risiko", "Kualitas", "Aktifitas", "Objektif"], "correct": 2 },
        { "q": "Puisi memiliki unsur batin. Salah satunya adalah amanat, yaitu...", "a": ["Sikap penyair terhadap tema", "Perasaan yang terkandung dalam puisi", "Nada dan irama dalam puisi", "Pesan yang ingin disampaikan penyair"], "correct": 3 },
        { "q": "Kalimat yang merupakan kalimat opini adalah...", "a": ["Banjir terjadi akibat curah hujan tinggi.", "Gempa berkekuatan 6,5 SR mengguncang wilayah selatan.", "Menurut saya, pemerintah kurang sigap menanggapi bencana.", "Data menunjukkan peningkatan suhu global setiap tahun."], "correct": 2 },
        { "q": "Apa fungsi paragraf argumentasi dalam teks eksposisi?", "a": ["Menghibur pembaca", "Mendukung pernyataan pendapat dengan alasan", "Menjelaskan tokoh dan alur", "Menutup pembahasan dengan kesimpulan"], "correct": 1 },
        { "q": "Ciri teks anekdot adalah...", "a": ["Lucu, menyentuh, dan penuh emosi", "Faktual, formal, dan objektif", "Lucu, menyindir, dan berdasarkan kejadian nyata", "Penuh imajinasi dan naratif"], "correct": 2 },
        { "q": "Kalimat yang menggunakan kata baku adalah...", "a": ["Dia mempublikasikan hasil penelitian itu.", "Ia mentraktir temannya makan siang.", "Mereka menyebarkan brosur promosi.", "Saya menyukai aktifitas di luar ruangan."], "correct": 0 },
        { "q": "Unsur penting dalam laporan hasil observasi adalah...", "a": ["Fiksi dan sudut pandang penulis", "Informasi fakta hasil pengamatan", "Alur cerita dan tokoh", "Dialog dan konflik"], "correct": 1 }
    ]
};

let playerName = "";
let playerClass = "";
let currentCategory = "", currentIndex = 0, score = 0, timer;
let answerResults = [];
let unlockedLevels = {
    sinonim: true,
    antonim: false,
    materi: false
};
let scores = {
    sinonim: 0,
    antonim: 0,
    materi: 0
};

// --- FUNGSI UTAMA ---

function showMenu() {
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    if (document.getElementById("input-screen")) {
        document.getElementById("input-screen").classList.add("hidden");
    }
    updateMenuButtons();
}


function updateProgressBar() {
    const bar = document.getElementById("progress-bar");
    bar.textContent = timeLeft;
    bar.style.width = (timeLeft / 30 * 100) + "%";
}

function showPlayerInfo() {
    document.getElementById("click-sound-button").play();
    document.getElementById("start-screen").classList.add("hidden");
    document.getElementById("player-info").classList.remove("hidden");
}

function validateAndShowRule() {
    const nameInput = document.getElementById("player-name").value.trim();
    const classInput = document.getElementById("player-class").value.trim();

    if (nameInput === "" || classInput === "") {
        document.getElementById("sound-else-input").play();

        if (nameInput === "" && classInput === "") {
            alert("Silakan masukkan nama dan kelas Anda terlebih dahulu.");
        } else if (nameInput === "") {
            alert("Silakan masukkan nama Anda terlebih dahulu.");
        } else {
            alert("Silakan masukkan kelas Anda terlebih dahulu.");
        }
        return;
    }

    if (nameInput.length < 3) {
        document.getElementById("sound-else-input").play();
        alert("Nama harus minimal 3 karakter.");
        return;
    }

    if (!/\d/.test(classInput)) {
        document.getElementById("sound-else-input").play();
        alert("Format kelas tidak valid. Harus mengandung angka (contoh: 10A, XII IPA 1).");
        return;
    }

    playerName = nameInput;
    playerClass = classInput;

    document.getElementById("click-sound-button").play();

    document.getElementById("player-info").classList.add("hidden");
    document.getElementById("how-to-play-class").classList.remove("hidden");
    document.getElementById("menu").classList.add("hidden");

    updateMenuButtons();

    localStorage.setItem("playerName", playerName);
    localStorage.setItem("playerClass", playerClass);
}


function ShowRule(){
    document.getElementById("click-sound-button").play();

    document.getElementById("how-to-play-class").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden")
}

function startGame(category) {
    currentCategory = category;
    currentIndex = 0;
    score = 0;
    answerResults = [];
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    nextQuestion();
}

document.getElementById("btn-antonim").onclick = function() {
    // Menyembunyikan menu utama
    document.getElementById("menu").classList.add("hidden");
    // Menampilkan halaman materi antonim
    document.getElementById("materi-antonim").classList.remove("hidden");
};

document.getElementById("btn-start-antonim").onclick = function() {
    // Menyembunyikan halaman materi antonim
    document.getElementById("materi-antonim").classList.add("hidden");
    // Memanggil fungsi untuk memulai kuis antonim
    startGame('antonim');
};

document.getElementById("btn-back-to-menu-antonim").onclick = function() {
    // Menyembunyikan halaman materi antonim
    document.getElementById("materi-antonim").classList.add("hidden");
    // Menampilkan kembali menu utama
    document.getElementById("menu").classList.remove("hidden");
};

document.getElementById("btn-sinonim").onclick = function() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("materi-sinonim").classList.remove("hidden");
};

document.getElementById("btn-start-sinonim").onclick = function() {
    document.getElementById("materi-sinonim").classList.add("hidden");
    startGame('sinonim');
};

function startGameIfUnlocked(category) {
    if (!unlockedLevels[category]) {
        alert("Kategori ini masih terkunci. Selesaikan level sebelumnya terlebih dahulu.");
        return;
    }
    startGame(category);
}

function startTimer() {
  timeLeft = 30;
  updateProgressBar();
  timer = setInterval(() => {
    timeLeft--;
    updateProgressBar();
    if (timeLeft <= 0) {
      clearInterval(timer);
      timeoutHandler();
    }
  }, 1000);
}

function nextQuestion() {
    clearInterval(timer);
    if (currentIndex < questions[currentCategory].length) {
        const q = questions[currentCategory][currentIndex];
        document.getElementById("question").textContent = q.q;
        document.getElementById("answers").innerHTML = "";
        q.a.forEach((answer, index) => {
            const btn = document.createElement("button");
            btn.textContent = answer;
            btn.classList.add("btn", "btn-primary");
            btn.onclick = () => answerQuestion(index, q.correct, btn);
            document.getElementById("answers").appendChild(btn);
        });
        startTimer();
    } else {
        endGame();
    }
}



document.getElementById("btn-back-to-menu-sinonim").onclick = function() {
    document.getElementById("materi-sinonim").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
};

function answerQuestion(selectedIndex, correctIndex, selectedButton) {
    clearInterval(timer);
    let buttons = document.querySelectorAll("#answers .btn");

    const q = questions[currentCategory][currentIndex];
    const selectedText = q.a[selectedIndex];
    const correctText = q.a[correctIndex];
    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
        document.getElementById("correct-sound").play();
        score += 10;
    } else {
        document.getElementById("wrong-sound").play();
    }

    answerResults.push({
        number: currentIndex + 1,
        question: q.q,
        selected: selectedText,
        correct: correctText,
        status: isCorrect ? "Benar" : "Salah"
    });

    buttons[correctIndex].classList.add("correct");
    if (!isCorrect) {
        selectedButton.classList.add("wrong");
    }

    buttons.forEach(btn => btn.onclick = null);

    setTimeout(() => {
        currentIndex++;
        nextQuestion();
    }, 1500);
}

function timeoutHandler() {
    const q = questions[currentCategory][currentIndex];
    const correctText = q.a[q.correct];

    answerResults.push({
        number: currentIndex + 1,
        question: q.q,
        selected: "Waktu Habis",
        correct: correctText,
        status: "Waktu Habis"
    });

    let buttons = document.querySelectorAll("#answers .btn");
    buttons[q.correct].classList.add("correct");
    buttons.forEach(btn => btn.onclick = null);

    setTimeout(() => {
        currentIndex++;
        nextQuestion();
    }, 1500);
}

function updateMenuButtons() {
    document.getElementById("btn-antonim").disabled = !unlockedLevels.antonim;
    document.getElementById("btn-materi").disabled = !unlockedLevels.materi;

    document.getElementById("btn-antonim").style.opacity = unlockedLevels.antonim ? 1 : 0.5;
    document.getElementById("btn-materi").style.opacity = unlockedLevels.materi ? 1 : 0.5;
}

function endGame() {
    clearInterval(timer);
    document.getElementById("quiz").classList.add("hidden");
    document.getElementById("result").classList.remove("hidden");
    
    const maxScore = questions[currentCategory].length * 10;
    const percentScore = Math.round((score / maxScore) * 100);
    scores[currentCategory] = Math.max(scores[currentCategory], percentScore);

    document.getElementById("score").innerHTML = `<strong>${playerName}</strong>, skor Anda: ${percentScore}%`;

    if (percentScore >= 70) {
        if (currentCategory === "sinonim") {
            unlockedLevels.antonim = true;
        } else if (currentCategory === "antonim") {
            unlockedLevels.materi = true;
        }
    }

    updateMenuButtons();

    let detailHTML = "<h3>Rangkuman Jawaban:</h3>";
    answerResults.forEach(res => {
        const statusClass = res.status === "Benar" ? "correct-answer" :
            res.status === "Salah" ? "wrong-answer" : "neutral-answer";
        detailHTML += `<p><strong>Soal ${res.number}:</strong> ${res.question}<br>
            Jawaban Anda: <span class="${statusClass}">${res.selected}</span><br>
            Jawaban Benar: <span class="correct-answer">${res.correct}</span><br>
            Hasil: <span class="${statusClass}">${res.status}</span></p><hr>`;
    });

    document.getElementById("result-detail").innerHTML = `<div class="result-detail">${detailHTML}</div>`;
}

function restartGame() {
    answerResults = [];
    document.getElementById("result").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
    updateMenuButtons();
}

// --- HASIL NILAI SEMUA QUIZ ---

function showAllScores() {
   document.getElementById("click-sound-button").play();

  document.getElementById("menu").classList.add("hidden");
  document.getElementById("hasil").classList.remove("hidden");

  const savedName = localStorage.getItem("playerName") || "-";
  const savedClass = localStorage.getItem("playerClass") || "-";

  document.getElementById("hasil-nama").textContent = savedName;
  document.getElementById("hasil-kelas").textContent = savedClass;

    ['sinonim', 'antonim', 'materi'].forEach(category => {
        const progressBar = document.getElementById(`${category}-progress`);
        progressBar.style.width = '0%';
    });

    setTimeout(animateScores, 100);

    updateCategoryScore('sinonim', scores.sinonim);
    updateCategoryScore('antonim', scores.antonim);
    updateCategoryScore('materi', scores.materi);
}

function updateCategoryScore(category, score) {
    const progressBar = document.getElementById(`${category}-progress`);
    const scoreElement = document.getElementById(`${category}-score`);

    progressBar.style.width = `${score}%`;
    scoreElement.textContent = `${score}%`;

    if (score >= 70) {
        progressBar.style.background = 'linear-gradient(90deg, #4CAF50, #8BC34A)';
        scoreElement.style.color = '#4CAF50';
    } else {
        progressBar.style.background = 'linear-gradient(90deg, #f44336, #ff7043)';
        scoreElement.style.color = '#f44336';
    }
}



function animateScores() {
    const categories = ['sinonim', 'antonim', 'materi'];
    categories.forEach((category, index) => {
        setTimeout(() => {
            const progressBar = document.getElementById(`${category}-progress`);
            progressBar.style.width = `${scores[category]}%`;
        }, index * 300);
    });
}

function backToMenu() {
    document.getElementById("hasil").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}

// --- FUNGSI AUDIO ---

// Dapatkan referensi ke tombol mute/unmute
const muteButton = document.getElementById('muteButton');
const muteIcon = muteButton.querySelector('i');

// Dapatkan referensi ke elemen audio
const clickSound = document.getElementById('clickSound');
const backgroundMusic = document.getElementById('backgroundMusic');

// Dapatkan referensi ke tombol 'Mulai' (jika masih ada dan ingin suara kliknya)
const startButton = document.getElementById('startButton');

let isMuted = true;

if (startButton) {
    startButton.addEventListener('click', function() {
        clickSound.currentTime = 0;
        if (!isMuted) {
            clickSound.play();
        } else {
            clickSound.muted = true;
        }

        console.log("Tombol Mulai diklik!");
    });
}

muteButton.addEventListener('click', function() {
    isMuted = !isMuted;

    const allAudioElements = document.querySelectorAll('audio');

    if (isMuted) {
        muteButton.classList.add('muted'); 
        muteIcon.classList.remove('fa-volume-up');
        muteIcon.classList.add('fa-volume-mute'); 

        allAudioElements.forEach(audio => {
            audio.muted = true; 
            if (audio.id === 'backgroundMusic') {
                audio.pause();
            }
        });
    } else {
        muteButton.classList.remove('muted');
        muteIcon.classList.remove('fa-volume-mute');
        muteIcon.classList.add('fa-volume-up'); 

        allAudioElements.forEach(audio => {
            audio.muted = false; 
            if (audio.id === 'backgroundMusic') {
                audio.play().catch(error => {
                    console.warn("Gagal memutar musik latar:", error);
                });
            }
        });
    }
});