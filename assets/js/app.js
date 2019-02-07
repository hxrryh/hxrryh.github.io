let squad = [
    {
        name: "shy",
        link: "http://steamcommunity.com/profiles/76561198853303153"
    },
    {
        name: "grace",
        link: "http://steamcommunity.com/profiles/76561198254603316"
    },
    {
        name: "skripe",
        link: "http://steamcommunity.com/profiles/76561198139932452"
    },
    {
        name: "dizzent",
        link: "http://steamcommunity.com/profiles/76561197961239534"
    },
    {
        name: "trahax",
        link: "http://steamcommunity.com/profiles/76561198059417586"
    },
    {
        name: "rain",
        link: "http://steamcommunity.com/profiles/76561198074778216"
    },
    {
        name: "nik",
        link: "https://steamcommunity.com/id/sexualobject/"
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
