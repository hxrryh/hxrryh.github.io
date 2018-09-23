let squad = [
    {
        name: "negatived",
        link: "https://steamcommunity.com/id/egowreck"
    },
    {
        name: "amy",
        link: "https://steamcommunity.com/id/L1E"
    },
    {
        name: "muna",
        link: "https://steamcommunity.com/id/MunaKnif"
    },
    {
        name: "rain",
        link: "https://steamcommunity.com/id/thenownow"
    },
    {
        name: "trahax",
        link: "https://steamcommunity.com/id/lid"
    },
    {
        name: "guap",
        link: "https://steamcommunity.com/id/imguap"
    },
    {
        name: "deef",
        link: "https://steamcommunity.com/id/bought"
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
