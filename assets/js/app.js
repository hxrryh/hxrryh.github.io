let squad = [
    {
        name: "main",
        link: "https://steamcommunity.com/id/graded/"
    },
    {
        name: "alt",
        link: "https://steamcommunity.com/id/timestamp"
    },
    {
        name: "yt",
        link: "https://www.youtube.com/harryuwu"
    },
    {
        name: "twitter",
        link: "https://twitter.com/HxrryH"
    }
];


$(document).ready(function() {
    shuffle(squad);
    for (let i = 0; i < squad.length; i++) {
        $("#squad").append('<a target="_blank" href="'+squad[i].link+'">'+squad[i].name+'</a><br>');
    }
});


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
}