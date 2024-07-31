let myrow = document.getElementsByClassName("myrow")
let rowplay = document.getElementById("rowplay")
let varNum;
let card = document.getElementsByClassName("card")
let mainCard = document.getElementById("mainCard")
let myarrow = document.getElementById("myarrow")
let container = document.getElementsByClassName("container")
let cardContent = document.getElementsByClassName("cardContent")
let row1 = document.getElementsByClassName("row1")
let songItems = Array.from(document.getElementsByClassName("songItems"))
let isCardDown = 0
let myplay = document.getElementById("myplay");
let heart = document.getElementById("heart");
let liked = 1;
let currentSongIndex = 0;
let songimg = document.getElementsByClassName("songimg")

let mySongArray1 = [
    
        {
            url: 'static/songs/playlist2/whatjhumka.mp3',
            cover: 'static/covers/playlist2/whatjhumka.jpg',
            title: ' What jhumka',
            artist: 'Arjit, Pritam ',
            album: "Rocky...",
            youtube: "https://youtu.be/87JIOAX3njM?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/pyaarhotakaibaar.mp3',
            cover: 'static/covers/playlist2/pyaarhotakaibaar.jpg',
            title: ' Pyaar Hota Kai Baar Hai',
            artist: 'Arjit, Pritam',
            album: "Tu Jhuti Mai Makkar",
            youtube: "https://youtu.be/HZsRjrYW-lk?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/raatanlambiyan.mp3',
            cover: 'static/covers/playlist2/raatanlamiyan.jpg',
            title: ' Raatan Lambiyan',
            artist: 'Tanishik',
            album: "Shershaah",
            youtube: "https://youtu.be/gvyUuxdRdR4?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/maanmerijaan.mp3',
            cover: 'static/covers/playlist2/maanmerijaan.jpg',
            title: ' Maan Meri Jaan',
            artist: 'King',
            album: "Champagne Talk ",
            youtube: "https://youtu.be/VuG7ge_8I2Y?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/rangisari.mp3',
            cover: 'static/covers/playlist2/rangisari.jpeg',
            title: ' Rangisari',
            artist: 'Kanishk',
            album: "Jugjugg Jeyo",
            youtube: "https://youtu.be/bSAlE_WgHxY?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/oobolega.mp3',
            cover: 'static/covers/playlist2/oobolega.jpg',
            title: ' Oo Bolega',
            artist: 'Devi Sri Prasad',
            album: "Pushpa The Rise",
            youtube: "https://youtu.be/sqmNziU3OxQ?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/terevaste.mp3',
            cover: 'static/covers/playlist2/terevaste.jpg',
            title: ' Tere Vaste',
            artist: 'Arjit',
            album: "Zara Hatke Zara Bachke",
            youtube: "https://youtu.be/g5WZLO8BAC8?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/tuaakedekhle.mp3',
            cover: 'static/covers/playlist2/tuaakedekhle.jpeg',
            title: ' Tu Aake Dekhle',
            artist: 'king ',
            album: "Tu Aake Dekhle",
            youtube: "https://youtu.be/A66TYFdz8YA?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/kesariya.mp3',
            cover: 'static/covers/playlist2/kesariya.jpg',
            title: ' Kesariya',
            artist: 'Pritam, Arjit',
            album: "Brahmastra",
            youtube: "https://youtu.be/BddP6PYo2gs?feature=shared",
            dispMainElement: '1'
        },
        {
            url: 'static/songs/playlist2/besharamrang.mp3',
            cover: 'static/covers/playlist2/besharamrang.jpg',
            title: ' Besharam Rang',
            artist: 'Vishal Dadlani',
            album: "Pathaan",
            youtube: "https://youtu.be/huxhqphtDrM?feature=shared",
            dispMainElement: '1'
        }
      
    // Add more songs in a similar format
];


let playlist1 = [
    {
        url: 'static/songs/playlist1/atmyworst.mp3',
        cover: 'static/covers/playlist1/atmyworst.jpg',
        title: ' At My Worst',
        artist: 'Pink Sweats',
        album: "Pink Planet",
        youtube: "https://youtu.be/8CEJoCr_9UI?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/alone.mp3',
        cover: 'static/covers/playlist1/alone.jpg',
        title: ' Alone II',
        artist: 'Alan Walker',
        album: "Alone",
        youtube: "https://youtu.be/HhjHYkPQ8F0?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/levitating.mp3',
        cover: 'static/covers/playlist1/levitating.jpg',
        title: ' Levitating',
        artist: 'Dua Lipa ',
        album: "Future Nostalgia",
        youtube: "https://youtu.be/TUVcZfQe-Kw?feature=shared",
        dispMainElement: '1'

    },
    {
        url: 'static/songs/playlist1/stay.mp3',
        cover: 'static/covers/playlist1/stay.jpg',
        title: ' Stay',
        artist: 'Justin Bieber',
        album: "Stay ",
        youtube: "https://youtu.be/kTJczUoc26U?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/middleofthenight.mp3',
        cover: 'static/covers/playlist1/middleofthenight.jpg',
        title: ' Middle Of The Night',
        artist: 'Elley Duhe',
        album: "Bravo Hits 116",
        youtube: "https://youtu.be/oSHzUD-uqKY?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/perfect.mp3',
        cover: 'static/covers/playlist1/perfect.jpg',
        title: ' Perfect',
        artist: 'Ed Sheeran',
        album: "Divide",
        youtube: "https://youtu.be/2Vv-BfVoq4g?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/senorita.mp3',
        cover: 'static/covers/playlist1/senorita.jpg',
        title: ' Senorita',
        artist: 'Shawn Mendes',
        album: "Senorita",
        youtube: "https://youtu.be/Pkh8UtuejGw?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/bones.mp3',
        cover: 'static/covers/playlist1/bones.jpg',
        title: ' Bones',
        artist: 'Imagine Dragons  ',
        album: "Mercury Acts 1 & 2",
        youtube: "https://youtu.be/TO-_3tck2tg?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/memories.mp3',
        cover: 'static/covers/playlist1/memories.jpg',
        title: ' Memories',
        artist: 'Maroon 5',
        album: "Jordi",
        youtube: "https://youtu.be/SlPhMPnQ58k?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/girlslikeyou.mp3',
        cover: 'static/covers/playlist1/girlslikeyou.jpg',
        title: ' Girls Like You',
        artist: 'Maroon 5',
        album: "Red Pill Blues",
        youtube: "https://youtu.be/aJOTlE1K90k?feature=shared",
        dispMainElement: '1'

    },
    // Add more songs in a similar format
];

let playlist2 = [
    {
        url: 'static/songs/playlist2/whatjhumka.mp3',
        cover: 'static/covers/playlist2/whatjhumka.jpg',
        title: ' What jhumka',
        artist: 'Arjit, Pritam ',
        album: "Rocky...",
        youtube: "https://youtu.be/87JIOAX3njM?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/pyaarhotakaibaar.mp3',
        cover: 'static/covers/playlist2/pyaarhotakaibaar.jpg',
        title: ' Pyaar Hota Kai Baar Hai',
        artist: 'Arjit, Pritam',
        album: "Tu Jhuti Mai Makkar",
        youtube: "https://youtu.be/HZsRjrYW-lk?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/raatanlambiyan.mp3',
        cover: 'static/covers/playlist2/raatanlamiyan.jpg',
        title: ' Raatan Lambiyan',
        artist: 'Tanishik',
        album: "Shershaah",
        youtube: "https://youtu.be/gvyUuxdRdR4?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/maanmerijaan.mp3',
        cover: 'static/covers/playlist2/maanmerijaan.jpg',
        title: ' Maan Meri Jaan',
        artist: 'King',
        album: "Champagne Talk ",
        youtube: "https://youtu.be/VuG7ge_8I2Y?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/rangisari.mp3',
        cover: 'static/covers/playlist2/rangisari.jpeg',
        title: ' Rangisari',
        artist: 'Kanishk',
        album: "Jugjugg Jeyo",
        youtube: "https://youtu.be/bSAlE_WgHxY?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/oobolega.mp3',
        cover: 'static/covers/playlist2/oobolega.jpg',
        title: ' Oo Bolega',
        artist: 'Devi Sri Prasad',
        album: "Pushpa The Rise",
        youtube: "https://youtu.be/sqmNziU3OxQ?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/terevaste.mp3',
        cover: 'static/covers/playlist2/terevaste.jpg',
        title: ' Tere Vaste',
        artist: 'Arjit',
        album: "Zara Hatke Zara Bachke",
        youtube: "https://youtu.be/g5WZLO8BAC8?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/tuaakedekhle.mp3',
        cover: 'static/covers/playlist2/tuaakedekhle.jpeg',
        title: ' Tu Aake Dekhle',
        artist: 'king ',
        album: "Tu Aake Dekhle",
        youtube: "https://youtu.be/A66TYFdz8YA?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/kesariya.mp3',
        cover: 'static/covers/playlist2/kesariya.jpg',
        title: ' Kesariya',
        artist: 'Pritam, Arjit',
        album: "Brahmastra",
        youtube: "https://youtu.be/BddP6PYo2gs?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/besharamrang.mp3',
        cover: 'static/covers/playlist2/besharamrang.jpg',
        title: ' Besharam Rang',
        artist: 'Vishal Dadlani',
        album: "Pathaan",
        youtube: "https://youtu.be/huxhqphtDrM?feature=shared",
        dispMainElement: '1'
    }
    // Add more songs in a similar format
];

let playlist3 = [
    {
        url: 'static/songs/playlist3/calmdown.mp3',
        cover: 'static/covers/playlist3/calmdown.jpg',
        title: ' Calm Down',
        artist: 'Rema,Selena Gomez',
        album: "Rave & Roses",
        youtube: "https://youtu.be/WcIcVapfqXw?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/paintthetownred.mp3',
        cover: 'static/covers/playlist3/paintthetownred.jpg',
        title: ' Paint The Town Red',
        artist: 'Doja Cat',
        album: "Paint The Town Red",
        youtube: "https://youtu.be/m4_9TFeMfJE?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/cupid.mp3',
        cover: 'static/covers/playlist3/cupid.jpg',
        title: ' Cupid',
        artist: 'Fifty Fifty',
        album: "The Beginning : Cupid",
        youtube: "https://youtu.be/Qc7_zRjH808?feature=shared",
        dispMainElement: '1'

    },
    {
        url: 'static/songs/playlist3/barbieworld.mp3',
        cover: 'static/covers/playlist3/barbieworld.jpg',
        title: ' Barbie World',
        artist: 'Nicki Minaj',
        album: "Barbie World ",
        youtube: "https://youtu.be/CUj2AWEJnwQ?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/untilifoundyou.mp3',
        cover: 'static/covers/playlist3/untilifoundyou.jpg',
        title: ' Until I Found You',
        artist: 'Stephen Sanchez',
        album: "Until I Found You",
        youtube: "https://youtu.be/GxldQ9eX2wo?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/asitwas.mp3',
        cover: 'static/covers/playlist3/asitwas.jpg',
        title: ' As It Was',
        artist: 'Harry Styles',
        album: "Harry's House",
        youtube: "https://youtu.be/H5v3kku4y6Q?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/watermelonsugar.mp3',
        cover: 'static/covers/playlist3/watermelonsugar.jpg',
        title: ' Watermelon Sugar ',
        artist: 'Harry Styles',
        album: "Fine Line",
        youtube: "https://youtu.be/E07s5ZYygMg?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/shivers.mp3',
        cover: 'static/covers/playlist3/shivers.jpg',
        title: ' Shivers',
        artist: 'Ed Sheeran  ',
        album: "Shivers",
        youtube: "https://youtu.be/Il0S8BoucSA?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/flowers.mp3',
        cover: 'static/covers/playlist3/flowers.jpg',
        title: ' Flowers',
        artist: 'Miley Cyrus',
        album: "Endless Summer Vacation",
        youtube: "https://youtu.be/G7KNmW9a75Y?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/dancethenight.mp3',
        cover: 'static/covers/playlist3/dancethenight.jpg',
        title: ' Dance The Night',
        artist: 'Dua Lipa',
        album: "Dance The Night",
        youtube: "https://youtu.be/OiC1rgCPmUQ?feature=shared",
        dispMainElement: '1'

    },
    // Add more songs in a similar format
];
let playlist4 = [
    {
        url: 'static/songs/playlist4/matargashti.mp3',
        cover: 'static/covers/playlist4/matargashti.jpg',
        title: ' Matargashti',
        artist: 'Mohit Chauhan',
        album: "Tamasha",
        youtube: "https://youtu.be/6vKucgAeF_Q?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/iktara.mp3',
        cover: 'static/covers/playlist4/iktara.jpg',
        title: ' Iktara',
        artist: 'Amit Trivedi',
        album: "Wake Up Sid",
        youtube: "https://youtu.be/fSS_R91Nimw?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/ilahi.mp3',
        cover: 'static/covers/playlist4/ilahi.jpg',
        title: ' Ilahi',
        artist: 'Pritam , Arjit',
        album: "Yeh Jawani Hai Deewani",
        youtube: "https://youtu.be/fdubeMFwuGs?feature=shared",
        dispMainElement: '1'

    },
    {
        url: 'static/songs/playlist4/showmethethumka.mp3',
        cover: 'static/covers/playlist4/showmethethumka.jpg',
        title: ' Show Me The Thumka',
        artist: 'Pritam',
        album: "Tu Jhooti Main Makkar",
        youtube: "https://youtu.be/KgpFBdapobY?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/galtisemistake.mp3',
        cover: 'static/covers/playlist4/galtisemistake.jpg',
        title: ' Galti Se Mistake',
        artist: 'Pritam , Arjit',
        album: "Jagga Jassos",
        youtube: "https://youtu.be/05TA9jNnCdU?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/kyakaroon.mp3',
        cover: 'static/covers/playlist4/kyakaroon.jpg',
        title: ' Kya karron',
        artist: 'Shankar-Loy',
        album: "Wake Up Sid",
        youtube: "https://youtu.be/nHCwoQk8ToA?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/mainbadhiya.mp3',
        cover: 'static/covers/playlist4/mainbadhiya.jpg',
        title: ' Main Badhiya',
        artist: 'Sonu Nigam',
        album: "Sanju",
        youtube: "https://youtu.be/lk4lraE0wxU?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/bheegisi.mp3',
        cover: 'static/covers/playlist4/bheegisi.jpg',
        title: ' Bheegi Si',
        artist: 'Pritam , Mohit ',
        album: "Raajneeti",
        youtube: "https://youtu.be/yHWPO9DDnsk?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/subhanallah.mp3',
        cover: 'static/covers/playlist4/subhanallah.jpg',
        title: ' Subhanallah',
        artist: 'Pritam',
        album: "Yeh Jawani Hai Deewani",
        youtube: "https://youtu.be/QYO6AlxiRE4?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/breakupsong.mp3',
        cover: 'static/covers/playlist4/breakupsong.jpg',
        title: ' Breakup Song',
        artist: 'Pritam , Arjit',
        album: "Ae Dil Hai Mushkil",
        youtube: "https://youtu.be/kd5KqlmcHNo?feature=shared",
        dispMainElement: '1'

    },
    // Add more songs in a similar format
];
let playlist5 = [
    {
        url: 'static/songs/playlist5/soorajkibahoon.mp3',
        cover: 'static/covers/playlist5/soorajkibahoon.jpg',
        title: ' Sooraj ki Bahoon',
        artist: 'Dominique',
        album: "Zindagi Na Milegi Dobara",
        youtube: "https://youtu.be/Isb7WV4d17I?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist5/patakhaguddi.mp3',
        cover: 'static/covers/playlist5/patakhaguddi.jpg',
        title: ' Patakha Guddi',
        artist: 'Sultana',
        album: "Highway",
        youtube: "https://youtu.be/8HDTS80dlr4?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist5/rangisari.mp3',
        cover: 'static/covers/playlist5/rangisari.jpg',
        title: ' Rangi Sari',
        artist: 'Kavita',
        album: "Rangi Sari",
        youtube: "https://youtu.be/jY8mAWdQFOA?feature=shared",
        dispMainElement: '1'

    },
    {
        url: 'static/songs/playlist5/daarudesi.mp3',
        cover: 'static/covers/playlist5/daarudesi.jpg',
        title: ' Daaru Desi',
        artist: 'Benny Dayal',
        album: "Cocktail",
        youtube: "https://youtu.be/3nA1hmKCRpE?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist5/dhoopsamakan.mp3',
        cover: 'static/covers/playlist5/dhoopsamakan.jpg',
        title: ' Dhoop Sa Makan',
        artist: 'Shekhar',
        album: "Break Ke Baad",
        youtube: "https://youtu.be/vEi8i-LATnc?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist5/loveyouzindagi.mp3',
        cover: 'static/covers/playlist5/loveyouzindagi.jpg',
        title: ' Love You Zindagi',
        artist: 'Amit Trivedi',
        album: "Dear Zindagi",
        youtube: "https://youtu.be/bw7bVpI5VcM?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist5/doobey.mp3',
        cover: 'static/covers/playlist5/doobey.jpg',
        title: ' Doobey',
        artist: 'oaff',
        album: "Doobey",
        youtube: "https://youtu.be/6eGCi4SVy94?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist5/masakali.mp3',
        cover: 'static/covers/playlist5/masakali.jpg',
        title: ' Masakali',
        artist: 'Mohit Chauhan ',
        album: "Delhi-6",
        youtube: "https://youtu.be/SS3lIQdKP-A?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist5/dildhadaknedo.mp3',
        cover: 'static/covers/playlist5/dildhadaknedo.jpg',
        title: ' Dil Dhadakne Do',
        artist: 'Priyanka Chopra',
        album: "Dil Dhadakne Do",
        youtube: "https://youtu.be/56ZzM4mz4yY?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist5/ajableher.mp3',
        cover: 'static/covers/playlist5/ajableher.jpg',
        title: ' Ajab Leher',
        artist: 'Neeraj',
        album: "Break Ke Baad",
        youtube: "https://youtu.be/G-pRQFsHUo0?feature=shared",
        dispMainElement: '1'

    },
    // Add more songs in a similar format
];
let playlist6 = [
    {
        url: 'static/songs/playlist1/levitating.mp3',
        cover: 'static/covers/playlist1/levitating.jpg',
        title: ' Levitating',
        artist: 'Dua Lipa ',
        album: "Future Nostalgia",
        youtube: "https://youtu.be/TUVcZfQe-Kw?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist6/patakhaguddi.mp3',
        cover: 'static/covers/playlist6/patakhaguddi.jpg',
        title: ' Patakha Guddi',
        artist: 'Sultana',
        album: "Highway",
        youtube: "https://youtu.be/8HDTS80dlr4?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist1/girlslikeyou.mp3',
        cover: 'static/covers/playlist1/girlslikeyou.jpg',
        title: ' Girls Like You',
        artist: 'Maroon 5',
        album: "Red Pill Blues",
        youtube: "https://youtu.be/aJOTlE1K90k?feature=shared",
        dispMainElement: '1'

    },
    {
        url: 'static/songs/playlist1/senorita.mp3',
        cover: 'static/covers/playlist1/senorita.jpg',
        title: ' Senorita',
        artist: 'Shawn Mendes',
        album: "Senorita",
        youtube: "https://youtu.be/Pkh8UtuejGw?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/oobolega.mp3',
        cover: 'static/covers/playlist2/oobolega.jpg',
        title: ' Oo Bolega',
        artist: 'Artist 2',
        album: "Pushpa",
        youtube: "https://youtu.be/sqmNziU3OxQ?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist6/loveyouzindagi.mp3',
        cover: 'static/covers/playlist6/loveyouzindagi.jpg',
        title: ' Love You Zindagi',
        artist: 'Amit Trivedi',
        album: "Dear Zindagi",
        youtube: "https://youtu.be/bw7bVpI5VcM?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/untilifoundyou.mp3',
        cover: 'static/covers/playlist3/untilifoundyou.jpg',
        title: ' Until I Found You',
        artist: 'Stephen Sanchez',
        album: "Until I Found You",
        youtube: "https://youtu.be/GxldQ9eX2wo?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist3/dancethenight.mp3',
        cover: 'static/covers/playlist3/dancethenight.jpg',
        title: ' Dance The Night',
        artist: 'Dua Lipa',
        album: "Dance The Night",
        youtube: "https://youtu.be/OiC1rgCPmUQ?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist2/besharamrang.mp3',
        cover: 'static/covers/playlist2/besharamrang.jpg',
        title: ' Besharam Rang',
        artist: 'Pathan',
        album: "Deepika",
        youtube: "https://youtu.be/sqmNziU3OxQ?feature=shared",
        dispMainElement: '1'
    },
    {
        url: 'static/songs/playlist4/mainbadhiya.mp3',
        cover: 'static/covers/playlist4/mainbadhiya.jpg',
        title: ' Main Badhiya',
        artist: 'Sonu Nigam',
        album: "Sanju",
        youtube: "https://youtu.be/lk4lraE0wxU?feature=shared",
        dispMainElement: '1'

    },
    // Add more songs in a similar format
];
// Logic of Changing Number to Play Icon
// for (var i = 0; i < myrow.length; i++) {
//     myrow[i].addEventListener('mouseover', () => {
//         console.log("mouseover")
//         varNum = rowplay.innerHTML
//         rowplay.innerHTML = `<i class="fa-solid fa-play"></i>`

//     })
// }
// for (var i = 0; i < myrow.length; i++) {
//     myrow[i].addEventListener('mouseout', () => {
//         console.log("mouseout")
//         // varNum = rowplay.innerHTML
//         rowplay.innerHTML = `${varNum}`

//     })
// }

// ********************* CARD JS *****************************

let btnclick = document.getElementById("btnclick")
let coverimg = document.getElementById("coverimg")
let songtitle = document.getElementById("songtitle")
let sartist = document.getElementById("sartist")

let audio = new Audio()
// let sname = "static/songs/playlist1/whatjhumka.mp3"  
// dispMainElement 0 - show list , 1 -  showcard 

function songClick(sname, scover, stitle, sarti, youtube, dispMainElement) {

    // Get the index of the clicked song
    const clickedSongIndex = mySongArray1.findIndex(song => song.url === sname);

    // Update the currentSongIndex
    currentSongIndex = clickedSongIndex;

    let songName = sname

    // let audio = new Audio(`${songName}`);
    audio.src = `${songName}`

    let myplay = document.getElementById("myplay");
    let progress = document.getElementById("progress")
    let currentTimedisp = document.getElementById("currentTimedisp")
    let maxDuration = document.getElementById("maxDuration")


    coverimg.src = scover

    songtitle.innerHTML = `${stitle}  `

    sartist.innerHTML = `${sarti} `

    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = sname; // Set the href to the song's URL
    downloadLink.download = `${stitle}.mp3`; // Set the download filename

    const youtubelink = document.getElementById("youtubelink");
    youtubelink.href = youtube; // Set the href to the song's URL


    // Logic For Toggle in Between Playlist & Card
    if (dispMainElement == 1) {
        for (var i = 0; i < card.length; i += 1) {
            // flex tha toh flex dikhega na bhai 
            card[i].style.display = 'flex';
        }
        for (var i = 0; i < container.length; i += 1) {
            container[i].style.display = 'none';
        }
    }



    audio.play();
    myplay.classList.remove("fa-circle-play")
    myplay.classList.add("fa-circle-pause")
    myplay.classList.add("fa-spin")
    //     time updater on display 
    setInterval(() => {
        let durationMin = Math.floor(audio.duration / 60)
        let durationSec = Math.floor(audio.duration % 60)
        maxDuration.innerHTML = `${durationMin} : ${durationSec}`

        let currentMin = Math.floor(audio.currentTime / 60)
        let currentSec = Math.floor(audio.currentTime % 60)
        currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
    }, 100)


    // Play And Pause Songs
    myplay.addEventListener('click', () => {
        console.log("clicked on pause")
        if (audio.paused || audio.currentTime <= 0) {
            audio.play();
            myplay.classList.remove("fa-circle-play")
            myplay.classList.add("fa-circle-pause")
            myplay.classList.add("fa-spin")
            //     time updater on display 
            setInterval(() => {
                let durationMin = Math.floor(audio.duration / 60)
                let durationSec = Math.floor(audio.duration % 60)
                maxDuration.innerHTML = `${durationMin} : ${durationSec}`

                let currentMin = Math.floor(audio.currentTime / 60)
                let currentSec = Math.floor(audio.currentTime % 60)
                currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
            }, 100)

            // console.log(audio.currentTime)
        }
        else {
            audio.pause();
            myplay.classList.remove("fa-circle-pause")
            myplay.classList.add("fa-circle-play")
            myplay.classList.remove("fa-spin")
        }
    })

    // Progress indicator 
    audio.addEventListener('timeupdate', () => {
        // console.log("timeupdate")
        let songProgress;
        songProgress = parseInt((audio.currentTime / audio.duration) * 100)
        // console.log(songProgress)
        progress.value = songProgress

    })

    // Progress on click updater
    progress.addEventListener('click', () => {
        audio.currentTime = (progress.value * audio.duration) / 100
        audio.play();
        myplay.classList.remove("fa-circle-play")
        myplay.classList.add("fa-circle-pause")
        myplay.classList.add("fa-spin")


    })


}

// Get the playlist identifier from the URL
const urlParams = new URLSearchParams(window.location.search);
const playlistIdentifier = urlParams.get('playlist');

switch (playlistIdentifier) {
    case 'playlist1':
        console.log("Selected : Playlist 1")
        mySongArray1 = [...playlist1]
        heroimg.src = "https://i.scdn.co/image/ab67706f00000003193ebd86618b9b80f2994770"
        break;
    case 'playlist2':
        console.log("Selected : Playlist 2")
        mySongArray1 = [...playlist2]
        heroimg.src = "https://i.scdn.co/image/ab67706f00000002bb356f4951404ce7362ab02c"
        break;
    case 'playlist3':
        console.log("Selected : Playlist 3")
        mySongArray1 = [...playlist3]
        heroimg.src = "https://i.scdn.co/image/ab67706f00000002a9631162322d66ffd169a263"
        break;
    case 'playlist4':
        console.log("Selected : Playlist 4")
        mySongArray1 = [...playlist4]
        heroimg.src = "https://i.scdn.co/image/ab67706f00000002e0eabf6b7bb7735a065636aa"
        break;
    case 'playlist5':
        console.log("Selected : Playlist 5")
        mySongArray1 = [...playlist5]
        heroimg.src = "https://i.scdn.co/image/ab67706c0000da84dbe10cee5b12d82ab7d307e0"
        break;
    case 'playlist6':
        console.log("Selected : Playlist 6")
        mySongArray1 = [...playlist6]
        heroimg.src = "https://i.scdn.co/image/ab67616d0000b27399dcaf80953b083cc7139a5f"
        break;
    case 'playlist7':
        console.log("Selected : Playlist7")
        mySongArray1 = [...playlist2]
        heroimg.src = "https://i.scdn.co/image/ab67616d0000b27399dcaf80953b083cc7139a5f"
        break;
    case 'playlist8':
        console.log("Selected : Playlist8")
        mySongArray1 = [...playlist1]
        heroimg.src = "https://i.scdn.co/image/ab67616d0000b2735f0a59daa1b8f11bfbfe94f3"
        break;
    case 'playlist9':
        console.log("Selected : Playlist9")
        mySongArray1 = [...playlist2]
        heroimg.src = "https://i.scdn.co/image/ab67616d00001e02ba071b7b2ffb03ccb472425ds"
        break;
    case 'playlist10':
        console.log("Selected : Playlist10")
        mySongArray1 = [...playlist1]
        heroimg.src = "https://i.scdn.co/image/ab67616d0000b2730aa032c07e9fe3ab2b3efdd5"
        break;
    case 'playlist11':
        console.log("Selected : Playlist11")
        mySongArray1 = [...playlist5]
        heroimg.src = "https://i.scdn.co/image/ab67616d0000b273723ec3c4b6035f1f9837e10e"
        break;
    case 'playlist12':
        console.log("Selected : Playlist12")
        mySongArray1 = [...playlist3]
        heroimg.src = "https://i.scdn.co/image/ab67616d0000b2732a038d3bf875d23e4aeaa84e"
        break;
    case 'playlist13':
        console.log("Selected : Playlist13")
        mySongArray1 = [...playlist2]
        heroimg.src = "https://i.scdn.co/image/ab67706c0000da841269859e2271a2c9b31d06d9"
        break;
    case 'playlist14':
        console.log("Selected : Playlist14")
        mySongArray1 = [...playlist1]
        heroimg.src = "https://i.scdn.co/image/ab67706f00000002fb216d1ce13d5a4952a6180e"
        break;
    case 'playlist15':
        console.log("Selected : Playlist15")
        mySongArray1 = [...playlist4]
        heroimg.src = "https://i.scdn.co/image/ab67706c0000da84199c6523a18a92d016f0ae6f"
        break;
    case 'playlist16':
        console.log("Selected : Playlist16")
        mySongArray1 = [...playlist3]
        heroimg.src = "https://i.scdn.co/image/ab67706f00000002fa440a5b00b94e1b40954df4"
        break;
}


// Toggle arrow logic Card <----> Playlist  
function togglearrow() {


    if (isCardDown == 0) {
        // if(audio.paused){
        //     myplay.classList.remove("fa-circle-pause")
        //     myplay.classList.remove("fa-spin")
        //     myplay.classList.add("fa-circle-play")
        // }else{console.log("all good")}
        for (var i = 0; i < container.length; i += 1) {
            container[i].style.display = 'block';
        }
        myarrow.classList.remove("fa-chevron-down")
        myarrow.classList.add("fa-angle-up")

        // 1 = true 
        isCardDown = 1
    }
    else {
        for (var i = 0; i < card.length; i += 1) {
            // flex tha toh flex dikhega na bhai 
            card[i].style.display = 'flex';
        }
        for (var i = 0; i < container.length; i += 1) {
            container[i].style.display = 'none';
        }
        myarrow.classList.remove("fa-angle-up")
        myarrow.classList.add("fa-chevron-down")

        isCardDown = 0
    }



    // myplay.classList.remove("fa-circle-play")
    // myplay.classList.add("fa-circle-pause")
    // myplay.classList.add("fa-spin")
    //     time updater on display 
    setInterval(() => {
        let durationMin = Math.floor(audio.duration / 60)
        let durationSec = Math.floor(audio.duration % 60)
        maxDuration.innerHTML = `${durationMin} : ${durationSec}`

        let currentMin = Math.floor(audio.currentTime / 60)
        let currentSec = Math.floor(audio.currentTime % 60)
        currentTimedisp.innerHTML = `${currentMin} : ${currentSec} `
    }, 100)



}

function toggleheart() {
    // 0-false , 1 -true  

    if (liked == 1) {
        heart.style.color = "red"
        liked = 0
        heart.style.transition = "all 0.5s ease-out"
    } else {
        heart.style.color = "black"
        liked = 1
        heart.style.transition = "all 0.5s ease-in"
    }
}

songItems.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByClassName("songimg")[0].src = mySongArray1[i].cover
    element.getElementsByClassName("titlesong")[0].innerText = mySongArray1[i].title
    element.getElementsByClassName("songalbum")[0].innerText = mySongArray1[i].album
    element.getElementsByClassName("songartist")[0].innerText = mySongArray1[i].artist
})


// Iterate through each song item & add a click event listener
songItems.forEach((songItem, index) => {
    songItem.addEventListener('click', () => {
        // Get the song details from  array
        const songDetails = mySongArray1[index];

        // Calls the songClick function with the song details
        songClick(songDetails.url, songDetails.cover, songDetails.title, songDetails.artist, songDetails.youtube, songDetails.dispMainElement);
    });
});


function playNextSong() {
    currentSongIndex++; // Move to the next song
    if (currentSongIndex >= mySongArray1.length) { // Check if index is out of bounds
        currentSongIndex = 0; // Wrap around to the first song
    }

    const currentTimedisp = document.getElementById("currentTimedisp");
    currentTimedisp.innerHTML = "0:00";

    const nextSong = mySongArray1[currentSongIndex];
    songClick(nextSong.url, nextSong.cover, nextSong.title, nextSong.artist, nextSong.youtube, 0);
    const progress = document.getElementById("progress");
    progress.value = 0;
}

// Add an event listener to your "Next" button
document.getElementById("myskipnext").addEventListener("click", playNextSong);


function playPreviousSong() {
    currentSongIndex--; // Move to the previous song
    if (currentSongIndex < 0) { // Check if index is out of bounds
        currentSongIndex = mySongArray1.length - 1; // Wrap around to the last song
    }

    const previousSong = mySongArray1[currentSongIndex];
    songClick(previousSong.url, previousSong.cover, previousSong.title, previousSong.artist, previousSong.youtube, 0); // 0 to display in the list, not card

    // Reset the progress bar to 0 when starting a new song
    const progress = document.getElementById("progress");
    progress.value = 0;
}

// Add an event listener to your "Previous" button
document.getElementById("myskipprevious").addEventListener("click", playPreviousSong);



document.getElementById("myqueue").addEventListener("click", () => {
    if (isCardDown != 1) {

        togglearrow()
    }
    else {
        if ('scrollBehavior' in document.documentElement.style) {
            document.documentElement.scrollTop = 0;
        }
    }
});

function playIconOnHover(row) {
    const songItemplay = row.querySelector('.songItemplay');
    songItemplay.innerHTML = '<i class="fa-solid fa-play"></i>';
}

function numberOnHoverOut(row) {
    const songItemplay = row.querySelector('.songItemplay');
    songItemplay.textContent = songItemplay.getAttribute('id');
}


// Function to play the next song automatically
function playNextSong() {
    currentSongIndex++; 
    if (currentSongIndex >= mySongArray1.length) { 
        currentSongIndex = 0; 
    }

    const nextSong = mySongArray1[currentSongIndex];
    songClick(nextSong.url, nextSong.cover, nextSong.title, nextSong.artist, nextSong.youtube, 0); // 0 to display in the list, not card
}


audio.addEventListener('ended', playNextSong);




