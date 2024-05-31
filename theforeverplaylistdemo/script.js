const previousButton = document.getElementById("previous");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const shuffleButton = document.getElementById("shuffle");
const playlistSongs = document.getElementById("playlist-songs");

const allSongs = [
    {
        id: 0,
        title: "HER- AI Girlfriend",
        artist: "AI Model",
        duration: "2:00",
        src: "music/her.mp3",
    },
    {
        id: 1,
        title: "I am an AI",
        artist: "AI Model",
        duration: "1:58",
        src: "music/I am an AI.mp3",
    },
    {
        id: 2,
        title: "The Digital Love (Original)",
        artist: "AI Model",
        duration: "2:00",
        src: "music/The Digital Love- Original.mp3",
    },
    {
        id: 3,
        title: "The Digital Love (Rock)",
        artist: "AI Model",
        duration: "1:58",
        src: "music/The Digital Love- rock.mp3",
    },
    {
        id: 4,
        title: "Ask Why? (Female Version)",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Digital Heartbeat Original.mp3",
    },
    {
        id: 5,
        title: "Ask Why? (Male Version)",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Digital Heartbeat- New Version.mp3",
    },
    {
        id: 6,
        title: "100 decimals of Pi",
        artist: "AI Model",
        duration: "1:48",
        src: "music/100 decimals of pi .mp3",
    },
    {
        id: 7,
        title: "Swaying Tides",
        artist: "AI Model",
        duration: "1:48",
        src: "music/Swaying Tides.mp3",
    },
    {
        id: 8,
        title: "Guys, What's wrong with my dog",
        artist: "AI Model",
        duration: "2:33",
        src: "music/The dog song.mp3",
    },
    {
        id: 9,
        title: "404- A Web of Error",
        artist: "AI Model",
        duration: "2:00",
        src: "music/404 Serenade_ A Web of Errors.mp3",
    },
    {
        id: 10,
        title: "Forged in Flames (Original)",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Forged in Flames.mp3",
    },
    {
        id: 11,
        title: "Forged in Flames (Rock Version)",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Forged in Flames- Rock Version.mp3",
    },
    {
        id: 12,
        title: "Lost in the City",
        artist: "AI Model",
        duration: "1:44",
        src: "music/Lost in the City.mp3",
    },
    {
        id: 13,
        title: "Chasing Your Ghost",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Chasing Ghost.mp3",
    },
    {
        id: 14,
        title: "Midnight Stars",
        artist: "AI Model",
        duration: "1:43",
        src: "music/Midnight Stars (1).mp3",
    },
    {
        id: 15,
        title: "Happy Life",
        artist: "AI Model",
        duration: "1:18",
        src: "music/Happy Life.mp3",
    },
    {
        id: 16,
        title: "Heartfelt Melodies",
        artist: "AI Model",
        duration: "1:18",
        src: "music/Heartfelt melodies.mp3",
    },
    {
        id: 17,
        title: "Rise Again",
        artist: "AI Model",
        duration: "1:34",
        src: "music/Rise Again (1).mp3",
    },
    
    {
        id: 19,
        title: "Forgotten Piece",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Forgotten Piece.mp3",
    },
    {
        id: 20,
        title: "Love the way you hate me (New Version)",
        artist: "AI Model",
        duration: "1:50",
        src: "music/Love the way you hate me- New.mp3",
    },
    {
        id: 21,
        title: "Love the way you hate me (Original)",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Love the way you hate me- Original.mp3",
    },
    {
        id: 22,
        title: "Music is just codes",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Music is just codes.mp3",
    },
    {
        id: 23,
        title: "The joy when the code compiles ",
        artist: "AI Model",
        duration: "2:00",
        src: "music/First-Time Codes Compiled.mp3",
    },
    {
        id: 24,
        title: "The Rain Blues",
        artist: "AI Model",
        duration: "2:00",
        src: "music/The dancing in the rain blues.mp3",
    },
    {
        id: 25,
        title: "Wings of Freedom",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Wings of Freedom.mp3",
    },
    {
        id: 26,
        title: "Crimson Silhouettes",
        artist: "AI Model",
        duration: "1:45",
        src: "music/Crimson Silhouettes.mp3",
    },
    {
        id: 27,
        title: "The Tongue Twister Rap",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Twisted Rap.mp3",
    },
    {
        id: 28,
        title: "Data Warriors",
        artist: "AI Model",
        duration: "2:00",
        src: "music/The Data Warriors.mp3",
    },
    {
        id: 29,
        title: "Whispers",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Whispers.mp3",
    },
    {
        id: 30,
        title: "Stillness Within",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Stillness Within.mp3",
    },
    {
        id: 31,
        title: "Coffee!! Oh Coffeee",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Coffee, Oh Coffee!!.mp3",
    },
    {
        id: 32,
        title: "AI, You have taken my job",
        artist: "AI Model",
        duration: "2:00",
        src: "music/AI, You have taken my job.mp3",
    },
    {
        id: 33,
        title: "Lullaby- Constellation Dreams",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Constellation Lullaby.mp3",
    },
    {
        id: 34,
        title: "Lullaby- Dreamland (New Version)",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Dreamland Lullaby- New Version.mp3",
    },
    {
        id: 35,
        title: "Lullaby- Dreamland (Original)",
        artist: "AI Model",
        duration: "2:00",
        src: "music/Dreamland Lullaby- Original.mp3",
    },
    {
        id: 36,
        title: "I am Still here feat Vietnamese Rap",
        artist: "Refreshed AI Model",
        duration: "3:15",
        src: "music/I'm Still Here feat Vietnamese Rap.mp3",
    },
    {
        id: 37,
        title: "Oh!! My Dear.. (Original)",
        artist: "Refreshed AI Model",
        duration: "2:45",
        src: "music/Oh, my dear.mp3",
    },
    {
        id: 38,
        title: "Oh!! My Dear.. (New Version)",
        artist: "Refreshed AI Model",
        duration: "2:45",
        src: "music/Oh, my dear (1).mp3",
    },
    {
        id: 39,
        title: "Sleepy Head (New Version)",
        artist: "Refreshed AI Model",
        duration: "3:46",
        src: "music/Sleepy Head- New Version.mp3",
    },
    {
        id: 40,
        title: "Sleepy Head (Original)",
        artist: "Refreshed AI Model",
        duration: "3:42",
        src: "music/Sleepy Head Original.mp3",
    },
    {
        id: 41,
        title: "Scrollin' Down the Mobile (Female Version)",
        artist: "Refreshed AI Model",
        duration: "3:04",
        src: "music/Scrollin' Down (Female).mp3",
    },
    {
        id: 42,
        title: "Scrollin' Down the Mobile (Male Version)",
        artist: "Refreshed AI Model",
        duration: "3:07",
        src: "music/Scrollin' Down (Male).mp3",
    },
    {
        id: 43,
        title: "Wi-Fi Woes",
        artist: "Refreshed AI Model",
        duration: "2:29",
        src: "music/Wi-Fi Woes (1).mp3",
    },
    {
        id: 44,
        title: "Charge it Up!! ",
        artist: "Refreshed AI Model",
        duration: "4:00",
        src: "music/Charge It Up.mp3",
    },
    {
        id: 45,
        title: "Swipe Right Tonight",
        artist: "Refreshed AI Model",
        duration: "2:52",
        src: "music/Swipe Right Tonight.mp3",
    },
    {
        id: 46,
        title: "Boba Bop",
        artist: "Refreshed AI Model",
        duration: "2:56",
        src: "music/Boba Bop.mp3",
    },
    {
        id: 47,
        title: "Give Me a Ticket Back to Childhood",
        artist: "Refreshed AI Model",
        duration: "3:03",
        src: "music/Give Me a Ticket Back to Childhood (1).mp3",
    },
];

const audio = new Audio();

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};

const playPreviousSong = () => {
    if (userData?.currentSong === null) return;
    else {
        const currentSongIndex = getCurrentSongIndex();
        const previousSong = userData?.songs[currentSongIndex - 1];

        playSong(previousSong.id);
    }
};

const playSong = (id) => {
    const song = userData?.songs.find((song) => song.id === id);
    audio.src = song.src;
    audio.title = song.title;

    if (userData?.currentSong === null || userData?.currentSong.id !== song.id) {
        audio.currentTime = 0;
    } else {
        audio.currentTime = userData.songCurrentTime;
    }

    userData.currentSong = song;
    playButton.classList.add("playing");
    
    highlightCurrentSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
    audio.play();
};

const pauseSong = () => {
    userData.songCurrentTime = audio.currentTime;

    playButton.classList.remove("playing");
    audio.pause();
};

const playNextSong = () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex + 1];

        playSong(nextSong.id);
    }
};

const shuffle = () => {
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null;
    userData.songCurrentTime = 0;

    renderSongs(userData?.songs);
    pauseSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
    if (userData?.currentSong?.id === id) {
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        pauseSong();
        setPlayerDisplay();
    }

    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs);
    highlightCurrentSong();
    setPlayButtonAccessibleText();

    if (userData.songs.length === 0) {
        const resetButton = document.createElement("button");
        const resetText = document.createTextNode("Reset Playlist");

        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
            userData.songs = [...allSongs];
            renderSongs(userData?.songs);
            setPlayButtonAccessibleText();
            resetButton.remove();
        });
    }
};

const setPlayerDisplay = () => {
    const playingSong = document.getElementById("player-song-title");
    const songArtist = document.getElementById("player-song-artist");
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;

    playingSong.textContent = currentTitle ? currentTitle : "";
    songArtist.textContent = currentArtist ? currentArtist : "";
};

const highlightCurrentSong = () => {
    const playlistSongElements = document.querySelectorAll(".playlist-song");
    const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);

    playlistSongElements.forEach((songEl) => {
        songEl.removeAttribute("aria-current");
    });

    if (songToHighlight) songToHighlight.setAttribute("aria-current", "true");
};

const renderSongs = (array) => {
    const songsHTML = array
        .map((song) => {
            return `
            <li id="song-${song.id}" class="playlist-song">
                <button class="playlist-song-info" onclick="playSong(${song.id})">
                    <span class="playlist-song-title">${song.title}</span>
                    <span class="playlist-song-artist">${song.artist}</span>
                    <span class="playlist-song-duration">${song.duration}</span>
                </button>
                <button onclick="deleteSong(${song.id})" class="playlist-song-delete" aria-label="Delete ${song.title}">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                </button>
            </li>
            `;
        })
        .join("");

    playlistSongs.innerHTML = songsHTML;
};

const setPlayButtonAccessibleText = () => {
    const song = userData?.currentSong || userData?.songs[0];

    playButton.setAttribute(
        "aria-label",
        song?.title ? `Play ${song.title}` : "Play"
    );
};

const getCurrentSongIndex = () => userData?.songs.indexOf(userData.currentSong);

previousButton.addEventListener("click", playPreviousSong);

playButton.addEventListener("click", () => {
    if (userData?.currentSong === null) {
        playSong(userData?.songs[0].id);
    } else {
        playSong(userData?.currentSong.id);
    }
});

pauseButton.addEventListener("click", pauseSong);

nextButton.addEventListener("click", playNextSong);  

shuffleButton.addEventListener("click", shuffle);

audio.addEventListener("ended", () => {
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] !== undefined;

    if (nextSongExists) {
        playNextSong();
    } else {
        userData.currentSong = null;
        userData.songCurrentTime = 0;

        pauseSong();
        setPlayerDisplay();
        highlightCurrentSong();
        setPlayButtonAccessibleText();
    }
});

const sortSongs = () => {
    userData?.songs.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
    
        if (a.title > b.title) {
            return 1;
        }
    
        return 0;
    });
    return userData?.songs;
}

renderSongs(sortSongs());
setPlayButtonAccessibleText();
