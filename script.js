const container = document.querySelector(".vocals");
const songs = [
    {
        title: "Dil da jaani",
        duration: "7:20",
        path: "vocals/Dil-da-jaani.mp3",
        image: "https://c.saavncdn.com/040/Dil-da-Jaani-Punjabi-2019-20190513144217-500x500.jpg",
    },
    {
        title: "A Ku baku",
        duration: "7:20",
        path: "vocals/koo-baku.mp3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnN8BYWyvKYm28yBl9UatbLbSWuaswClfmi5Ch0IB6ss-u1XBzC_Wn0TIvkVseMNMmR_E&usqp=CAU",
    },
    {
        title: "Alone",
        duration: "7:20",
        path: "vocals/Alone.mp3",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnN34YsnHrjwMHl7OQyPWguw2bqBTDJFl3C5qaoftDd17t1LtDLQAe9dkqH92Rcef184_3xIP5qgdBPDuqeEZNIA",
    },
    {
        title: "Dark Side",
        duration: "7:20",
        path: "vocals/dark-side.mp3",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnN34YsnHrjwMHl7OQyPWguw2bqBTDJFl3C5qaoftDd17t1LtDLQAe9dkqH92Rcef184_3xIP5qgdBPDuqeEZNIA",
    },
    {
        title: "Faded",
        duration: "7:20",
        path: "vocals/faded.mp3",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnN34YsnHrjwMHl7OQyPWguw2bqBTDJFl3C5qaoftDd17t1LtDLQAe9dkqH92Rcef184_3xIP5qgdBPDuqeEZNIA",
    },
    {
        title: "Who I Am ",
        duration: "7:20",
        path: "vocals/who-i-am.mp3",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnN34YsnHrjwMHl7OQyPWguw2bqBTDJFl3C5qaoftDd17t1LtDLQAe9dkqH92Rcef184_3xIP5qgdBPDuqeEZNIA",
    },
    {
        title: "Jinnu Karna Ay Yaad",
        duration: "7:20",
        path: "vocals/Vocals.mp3",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQgMGG0EG_E-L-rPjdFwESaJK65LXIpfB67oLCM-4EeEPm7SvQ6xqqMU8tRtJuirwOZwbAbh2ThWvqZnJE",
    },
    {
        title: "Saiyaan Official",
        duration: "7:20",
        path: "vocals/Saian.mp3",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbvtK23O-rQZmJp-X9x6a-5sffzUptfS0DoYUULL-8oxMqSEijuZoWB0_IQd1X6zr4ZXybyZDYRFGzhX_cZdNq_g",
    },
    {
        title: "Sahil Pe Khare Ho",
        duration: "7:20",
        path: "vocals/Sahil-pw.mp3",
        image: "https://i1.sndcdn.com/artworks-000041261547-yrsr6b-t500x500.jpg",
    },
    {
        title: "Parizad",
        duration: "7:20",
        path: "vocals/Parizad.mp3",
        image: "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/66f265e7c55baf001ce0e0c1.png",
    },
    {
        title: "Sheher-zaat",
        duration: "7:20",
        path: "vocals/Sheherzaat.mp3",
        image: "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljfGVufDB8fDB8fHww",
    },
    {
        title: "Ik Phul Motiye",
        duration: "7:20",
        path: "vocals/ik-phul.mp3",
        image: "https://i1.sndcdn.com/artworks-fM7jOcfhC0LvyBRm-sldyNA-t500x500.jpg",
    },
    {
        title: "Mujh se Pehli si",
        duration: "7:20",
        path: "vocals/mujh-se-pehli.mp3",
        image: "https://i.ytimg.com/vi/fUKoNyxcT-o/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYACzgWKAgwIABABGGUgSShBMA8=&rs=AOn4CLCJhJZtCEyhrCfeQM8XQUFNNmwdkA",
    },
    {
        title: "Kar ke Bahane",
        duration: "7:20",
        path: "vocals/kar-ke-bahane.mp3",
        image: "https://i.ytimg.com/vi/ymQwy49KEbc/hqdefault.jpg",
    },
    {
        title: "Khudi Ka Sirre Nihan",
        duration: "7:20",
        path: "vocals/khudi-ka.mp3",
        image: "https://i.ytimg.com/vi/_eoTKAujwUw/maxresdefault.jpg",
    },
    {
        title: "Jinna Beqadran",
        duration: "7:20",
        path: "vocals/beqadran.mp3",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0K4afyznwwEsSQtAKVDLH24WiZEkAl2GqvA&s",
    },
    {
        title: "Hairan Hua",
        duration: "7:20",
        path: "vocals/Hairan.mp3",
        image: "https://i.ytimg.com/vi/QqI5pMJuFbE/maxresdefault.jpg",
    },
    {
        title: "Ab teri yaad",
        duration: "7:20",
        path: "vocals/idiot.mp3",
        image: "https://i.ytimg.com/vi/kB3g8V_X2No/maxresdefault.jpg",
    },
    {
        title: "Chan Sajna",
        duration: "7:20",
        path: "vocals/sajna.mp3",
        image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQgMGG0EG_E-L-rPjdFwESaJK65LXIpfB67oLCM-4EeEPm7SvQ6xqqMU8tRtJuirwOZwbAbh2ThWvqZnJE",
    },
];

const sortedSongs = songs.sort((a, b) => a.title.localeCompare(b.title));

let currentlyPlayingAudio = null; // Tracks currently playing audio
let currentlyPlayingDiv = null; // Tracks the parent div of the currently playing audio

document.addEventListener("DOMContentLoaded", () => {
    sortedSongs.forEach((song,index) => {
        // Create the vocal div
        const vocalDiv = document.createElement("div");
        vocalDiv.classList.add(
            "vocal",
            "bg-gray-100",
            "flex",
            "items-center",
            "relative",
            "flex-wrap",
            "overflow-hidden",
            "mb-4",
            "rounded-xl"
        );

        // Create the song image
        const image = document.createElement("img");
        image.src = song.image;
        image.classList.add("object-cover", "p-3", "w-20", "h-20", "rounded-full");

        // Create the play button
        const playButton = document.createElement("i");
        playButton.classList.add("fa-solid", "fa-play", "play-icon", "absolute", "left-9");
        playButton.style.color = "#f7f7f7";

        // Create the pause button
        const pauseButton = document.createElement("i");
        pauseButton.classList.add("fa-solid", "fa-pause", "pause-icon", "absolute", "left-9", "hidden");
        pauseButton.style.color = "#f7f7f7";

        // Create the title and duration
        const title = document.createElement("h2");
        title.textContent = song.title;
        title.classList.add("w-60", "overflow-hidden");
        const duration = document.createElement("span");
     
     

        // Create the audio element
        let audio = document.createElement("audio");
        duration.textContent = "..."; 
        audio.addEventListener("loadedmetadata", () => {
            const minutes = Math.floor(audio.duration / 60);
            const seconds = Math.floor(audio.duration % 60).toString().padStart(2, "0");
            duration.textContent = ` (${minutes}:${seconds})`; // Update duration in minutes:seconds format
        });
        title.appendChild(duration);
        audio.src = song.path;
        audio.controls = true;
        audio.classList.add("absolute", "bottom-1", "left-14");

        // Append children to vocalDiv
        vocalDiv.appendChild(image);
        vocalDiv.appendChild(playButton);
        vocalDiv.appendChild(pauseButton);
        vocalDiv.appendChild(title);
        vocalDiv.appendChild(audio);

        // Append vocalDiv to the container
        container.appendChild(vocalDiv);

        // Play Button Click Handler
        vocalDiv.onclick = () => {
            // Stop the currently playing audio if it's a different one
            if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
                currentlyPlayingAudio.pause();
                currentlyPlayingDiv.style.color = "black";
                const previousPlayButton = currentlyPlayingDiv.querySelector(".play-icon");
                const previousPauseButton = currentlyPlayingDiv.querySelector(".pause-icon");
                previousPlayButton.classList.remove("hidden");
                previousPauseButton.classList.add("hidden");
            }

          if (audio.paused) {
        audio.play();
        currentlyPlayingAudio = audio; // Update the reference
        currentlyPlayingDiv = vocalDiv; // Update the parent div reference
        vocalDiv.style.color = "#6082B6"; // Highlight current song
        playButton.classList.add("hidden");
        pauseButton.classList.remove("hidden");
    } else {
        audio.pause();
        vocalDiv.style.color = "black";
        playButton.classList.remove("hidden");
        pauseButton.classList.add("hidden");
    }}


        

    });
});
