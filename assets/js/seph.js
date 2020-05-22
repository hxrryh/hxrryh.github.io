window.onload = () => {
    document.oncontextmenu = () => false;

    volumeSlider.defaultValue = 100;
    player.volume = volumeSlider.value / 1000;
    initializePlayer();
}

var songs = [
    "media/seph/AEOU.mp3",
    "media/seph/Paper Heart.mp3",
    "media/seph/Windows Down.mp3",
    "media/seph/stars.mp3",
    "media/seph/nevermind.mp3",
    "media/seph/bape freestyle.mp3",
];

var songLinks = [
    "https://soundcloud.com/oliverxfrancis3/aeou-1",
    "https://soundcloud.com/oliverxfrancis3/windows-down",
    "https://soundcloud.com/oliverxfrancis3/paper-heart",
    "https://soundcloud.com/oliverxfrancis/stars",
    "https://soundcloud.com/airsh4d3/nevermind",
    "https://soundcloud.com/oliverxfrancis/oliver-bape-freestyle-video-in-description",
];

var playing = Math.floor(Math.random() * songs.length - 1);

function initializePlayer() {
    player.addEventListener('ended', (e) => {
    music.src = songs[playing];
    player.load();
    player.play();
    updateMarquee();
    }, false);
}
function changeVolume (val) {
    player.volume = val / 1000;
}
function playPause(el) {
    if (el.className == "button fas fa-play")
    {
        player.play();
        el.className = "button fas fa-pause";
    }
    else
    {
        player.pause();
        el.className = "button fas fa-play";
    }
    return false;
}
function changeSong(count) {
    playing = (playing + count) % songs.length;
    music.src = songs[playing];
    player.load();
    player.play();
    updateMarquee();
}
function updateMarquee() {
    nowPlaying.innerHTML = songs[playing].substring(10, songs[playing].length - 4);
    nowPlaying.href = songLinks[playing];
    nowPlaying.target = "_blank"; 
}