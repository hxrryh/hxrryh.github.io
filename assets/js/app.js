let admins = [
    {
        name: "harry",
        link: "https://steamcommunity.com/profiles/76561198077417337"
    },
    {
        name: "damian",
        link: "https://steamcommunity.com/profiles/76561198866241522"
    },
    {
        name: "brad",
        link: "https://steamcommunity.com/profiles/76561198007878675"
    },
    {
        name: "nik",
        link: "https://steamcommunity.com/profiles/76561198833000716"
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
