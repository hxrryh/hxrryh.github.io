let squad = [
    {
        name: "seph",
        link: "https://steamcommunity.com/id/sexpectation"
    },
    {
        name: "luke",
        link: "https://steamcommunity.com/id/timestamp"
    },
    {
        name: "loz",
        link: "https://steamcommunity.com/id/charm"
    },
    {
        name: "dizzent",
        link: "https://steamcommunity.com/id/dizzently"
    },
    {
        name: "trahax",
        link: "https://steamcommunity.com/id/lid"
    },
    {
        name: "death",
        link: "https://steamcommunity.com/id/-death"
    },
    {
        name: "nik",
        link: "https://steamcommunity.com/id/sexualobject/"
    }
    {
        name: "rain",
        link: "https://steamcommunity.com/id/meIodrama/"
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
