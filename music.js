class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.playlist = Array.from(document.querySelectorAll('.playlist-item'));
        this.currentTrack = 0;
        this.isPlaying = false;

        // UI Elements
        this.playBtn = document.getElementById('play-btn');
        this.playIcon = document.getElementById('play-icon');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.trackTitle = document.getElementById('track-title');
        this.progress = document.querySelector('.progress');

        this.initializePlayer();
        this.addEventListeners();
    }

    initializePlayer() {
        this.audio.src = this.playlist[0].dataset.track;
        this.trackTitle.textContent = this.playlist[0].querySelector('.track-name').textContent;
    }

    addEventListeners() {
        this.playBtn.addEventListener('click', () => this.togglePlay());
        this.prevBtn.addEventListener('click', () => this.playPrevious());
        this.nextBtn.addEventListener('click', () => this.playNext());
        
        this.playlist.forEach((item, index) => {
            item.addEventListener('click', () => this.selectTrack(index));
        });

        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.playNext());
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            this.playIcon.src = 'https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/play.svg';
        } else {
            this.audio.play();
            this.playIcon.src = 'https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/pause.svg';
        }
        this.isPlaying = !this.isPlaying;
    }

    playNext() {
        this.currentTrack = (this.currentTrack + 1) % this.playlist.length;
        this.loadAndPlayTrack();
    }

    playPrevious() {
        this.currentTrack = (this.currentTrack - 1 + this.playlist.length) % this.playlist.length;
        this.loadAndPlayTrack();
    }

    selectTrack(index) {
        this.currentTrack = index;
        this.loadAndPlayTrack();
    }

    loadAndPlayTrack() {
        const track = this.playlist[this.currentTrack];
        this.audio.src = track.dataset.track;
        this.trackTitle.textContent = track.querySelector('.track-name').textContent;
        
        // Update active track in playlist
        this.playlist.forEach(item => item.classList.remove('active'));
        track.classList.add('active');

        this.audio.play();
        this.isPlaying = true;
        this.playIcon.src = 'https://cdn.jsdelivr.net/npm/lucide-static@0.344.0/icons/pause.svg';
    }

    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        this.progress.style.width = `${progress}%`;
    }
}

// Initialize player when page loads
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});