// ============================================
// HEXAGONS - TREASURE HUNT GAME
// ============================================

// GAME DATA
const GAME_DATA = {
  "currentGame": {
    "id": "main",
    "title": "Gioco del Giorno",
    "date": "2025-01-15",
    "clues": [
      {
        "title": "Impressionismo",
        "text": "Sul sito del <a href='https://www.musee-orsay.fr/it/collezioni' target='_blank'>Museo d'Orsay</a> trovi un dipinto di Claude Monet che rappresenta una gazza in un campo innevato. Che titolo ha questo quadro in francese?",
        "answer": ["7ea5cfbfae96a00e0aaea4a948946efa8c5542fa9f2ce0b0956e7f7b90e52666"],
        "extra": "Indizio per la domanda finale: <b>44° 29' 37.8&quot;</b>",
        "picture": "images/1 - La Gazza.jpg",
        "errorMessage": "Filtra la ricerca per <i>peintures</i> per vedere solo i dipinti"
      },
      {
        "title": "Un vaso etrusco",
        "text": "Sul sito del <a href='https://www.metmuseum.org/art/collection' target='_blank'>Metropolitan Museum of Art</a> di New York, trova un lekythos etrusco. Quanto è alto (in cm) questo manufatto?",
        "answer": ["c621ffab314c9d540ebc364864a0f6e834fb14e6e90d1c30c30d6f2322c0c522", "e0b04046fbfbc96f3437e4718a8a15e7eb5936298a36a8c2039226d1c5f41845"],
        "extra": "Indizio per la domanda finale: <b>S</b>",
        "picture": "images/2 - Lekythos.jpg",
        "errorMessage": "Ci sono molti lekythos, ma solo uno <i>etrusco</i>: filtra per provenienza"
      },
      {
        "title": "Sabotaggio",
        "text": "<a href='https://en.wikipedia.org/' target='_blank'>Wikipedia</a> ha un articolo sul <i>Simple Sabotage Field Manual</i>, un manuale di sabotaggio  scritto dall'Office of Strategic Services degli Stati Uniti negli anni 40. L'articolo rimanda a un link esterno di Wikisource, che contiene l'intero documento. Con che parola finisce il quarto capitolo?",
        "answer": ["0f4168490e38b8447e11ba4bd656aa11b925bd22af30bac464bc153fdb608501"],
        "extra": "Indizio per la domanda finale: <b>168° 39' 26.5&quot;</b>",
        "picture": "images/3 - Sabotaggio.jpg",
        "errorMessage": "Cerca il link a Wikisource nella sezione riassuntiva sotto &quot;Full text&quot;"
      },
      {
        "title": "Indie Orientali",
        "text": "Su <a href='https://www.davidrumsey.com/' target='_blank'>David Rumsey Maps</a> c'è una mappa delle Indie Orientali (East Indies) pubblicata nel 1832. Con che nome è indicata l'isola subito a ovest dell'isola di Lombock?",
        "answer": ["8550a0638140d5a913df979c201c7d39e242182caf055b90df9c5a2d10c09e3c"],
        "extra": "Indizio per la domanda finale: <b>W</b>",
        "picture": "images/4 - East Indies.jpg",
        "errorMessage": "Filtra per <i>East Indies</i> e per <i>1832</i>"
      },
      {
        "title": "Lingue più parlate",
        "text": "<a href='https://www.britannica.com/' target='_blank'>Britannica.com</a> riporta una lista di lingue ordinate per numero totale di parlanti nel mondo. Trova la lingua al venticinquesimo posto. In che paese ha il maggior numero di parlanti?",
        "answer": ["d4328f17fc46dfde5a0a2cbc09fd28abab29b0e63dba80133a212e2403361cf4"],
        "extra": "Indizio per la domanda finale: <b>[coordinate][lettera], [coordinate][lettera]</b>",
        "picture": "images/5 - Lingue.jpg",
        "errorMessage": "Il nome della pagina è <i>Languages by total number of speakers</i>"
      },
      {
        "title": "Città misteriosa",
        "text": "Trova gli antipodi delle coordinate che hai raccolto nei livelli precedenti. Puoi convertirle su <a href='https://www.antipodesmap.com/#coordinates-converter' target='_blank'>Antipodes Map</a>. In che città ci troviamo?",
        "answer": ["23b611dc72bae9791d2ad6422c936bb66fc9fc46ddff11aa08667c4c16bf77b0"],
        "extra": "&nbsp;",
        "picture": "images/6 - Nord Italia.jpg",
        "errorMessage": "Fai zoom in per trovare la città esatta"
      }
    ]
  },
  "previousGames": [
    {
      "id": "game-20250406",
      "title": "Arte Europea🎨🖼️",
      "date": "2025-11-30",
      "description": "Dipinti di artisti europei tra XVI e XX secolo",
      "clues": [
        {
          "title": "Orologio notturno",
          "text": "Sul sito del <a href='https://www.britishmuseum.org/collection/' target='_blank'>British Museum</a> trovi un notturlabio (<i>nocturnal</i> in inglese) con tre parole incise sul braccio. Quali sono queste tre parole?",
          "answer": ["08df1aff312d594a568476fc429cf76b20ccc903667dfef8d5a9d08a292c4376"],
          "extra": "Indizio per la domanda finale: <b>The Rhinoceros</b>",
          "picture": "images/7 - Notturlabio.jpg",
          "errorMessage": "I---- H--- N-----"
        },
        {
          "title": "Giardino delle delizie",
          "text": "Nel sito <a href='https://archief.ntr.nl/tuinderlusten/en.html' target='_blank'>Jheronimus Bosch - The Garden of Earthly Delights</a> trovi una guida molto dettagliata del famoso dipinto. Tra i moltissimi animali rappresentati, ce n’è uno che porta sul dorso due spatole bianche (Platalea leucorodia). Che animale è?",
          "answer": ["c6cd3494650dc72bbbfd2bdbab28fea9eec33aa7623237d34303c37c34037393", "7aaa000cd016fafc9bc403ccef2957ceffdff37cd22222eefe163bbbbd428ba8"],
          "extra": "Indizio per la domanda finale: <b>1515</b>",
          "picture": "images/8 - Bosch.jpg",
          "errorMessage": "Cerca nel pannello centrale"
        },
        {
          "title": "Cézanne al MoMA",
          "text": "Tra ottobre 2021 e marzo 2023, il dipinto Still Life with Apples di Paul Cézanne è stato esposto nella Galleria Lillie P. Bliss del <a href='https://www.moma.org/collection/' target='_blank'>MoMA</a> di New York accanto a due altri dipinti. Alla sua sinistra aveva la Notte Stellata di Van Gogh. Che dipinto aveva invece alla sua destra? Scrivi solo il titolo",
          "answer": ["751822f68672c3ee38c3e543b6d5938e43c65656754a4808f1776d2eee7475cc", "909071ff8bc7e2aee338b65ca7f9e3a30e726db0b21234e877c2e5620bb863b8", "200941b1859b8606317563cb38077b3f653d0e43b851c1e6beae49f906a5cb7a"],
          "extra": "Indizio per la domanda finale: <b>View of Lake Nemi</b>",
          "picture": "images/9 - Still Life.jpg",
          "errorMessage": "In fondo alla pagina del quadro troverai l’elenco delle gallerie in cui è stato esposto"
        },
        {
          "title": "Sibylle",
          "text": "Sul sito del <a href='https://collections.louvre.fr/en/' target='_blank'>Louvre</a> cerca un dipinto di Giovanni Paolo Panini che rappresenta una sibilla (<i>sibylle</i>) tra rovine antiche. Quante persone sono rappresentate in questa scena?",
          "answer": ["4fc82b26aecb47d2868c4efbe3581732a3e7cbcc6c2efb32062c08170a05eeb8", "9043402da0ddf12f45b1a71e6925019336c448f3e11e5601d1bfdde8f338a463"],
          "extra": "Indizio per la domanda finale: <b>1843</b>",
          "picture": "images/10 - Sibylle.jpg",
          "errorMessage": "Usa l’advanced search per trovare più velocemente il quadro"
        },
        {
          "title": "X Degrees of Separation",
          "text": "Sul sito <a href='https://artsexperiments.withgoogle.com/xdegrees/8gHu5Z5RF4BsNg/BgHD_Fxb-V_K3A' target='_blank'>X Degrees of Separation</a> puoi vedere il percorso che collega due opere d'arte diverse in base alla loro somiglianza estetica. Prendi come punto di inizio il quadro di Van Gogh <i>Landscape from Saint Remy</i>, e come punto finale il quadro di Friedrich <i>Abbey among Oak Trees</i>. Che artista ha dipinto il quadro centrale di questo percorso?",
          "answer": ["392b4eebac1a18a09a323b2fc962be3f308bad3b11ae843316ad7349a6f95d6c", "da81702bb27c1dbb7d8946ff8935efe183e5d4586f02351d87f275e433a6b919"],
          "extra": "Indizio per la domanda finale: <b>The Blank Signature</b>",
          "picture": "images/11 - Van Gogh Friedrich.jpg",
          "errorMessage": "Il quadro centrale fu dipinto da un pittore francese nel 1883"
        },
        {
          "title": "Artisti europei",
          "text": "I tre dipinti che hai trovato negli indizi precedenti sono conservati alla <a href='https://www.nga.gov/artworks' target='_blank'>National Gallery of Art</a> di Washington. Cerca il paese di nascita dei tre artisti che li hanno dipinti. Che paese confina con questi tre stati?",
          "answer": ["119c06d09a675d1bc8717b25c1bd54143e4b1a60787f1a657edc5639991be1c3"],
          "extra": "Indizio finale: <b>1965</b>",
          "picture": "images/12 - Tre artisti.jpg",
          "errorMessage": "Dopo aver trovato i tre paesi cerca su Google Maps. C’è un solo stato che confina con tutti e tre"
        }
      ]
    },
    {
      "id": "game-20250405",
      "title": "Mondo Antico🏺🏛️",
      "date": "2025-11-30",
      "description": "Roma, Grecia ed Egitto nell'antichità",
      "clues": [
        {
          "title": "Cursus publicus",
          "text": "Sul sito <a href='https://orbis.stanford.edu/' target='_blank'>Stanford ORBIS</a>, trovi una mappa che traccia i tempi di percorrenza di ogni tratta della rete stradale dell’Impero Romano. Spedire una lettera tramite cursus publicus, il servizio postale dell’impero, impiegava già tempi molto brevi. Quanti giorni ci avrebbe messo una lettera ad arrivare da Roma ad Aquinicum tramite questo servizio (<i>horse relay</i> sul sito)?",
          "answer": ["aacf25e52b1347c149a8f355c20d38bb922d4743114e5c5bd9a58b982f47719c", "77065cda8fe1551871ba934cfef4df0f9e8a5f7fb63909b25bf0ccebbe807e18"],
          "extra": "Indizio per la domanda finale: <b>Aristotele</b>",
          "picture": "images/13 - Cursus publicus.jpg",
          "errorMessage": "Scegli <i>Horse Relay</i> nel campo mode. Le altre impostazioni non cambiano il tempo di percorrenza"
        },
        {
          "title": "Papiri di Ercolano",
          "text": "Il sito <a href='https://www.chartes.it/' target='_blank'>Chartes</a> conserva le digitalizzazioni dei Papiri di Ercolano. Tre di questi contengono il De Rerum Natura di Lucrezio. Trova i loro codici identificativi (numeri a 4 cifre) e sommali.",
          "answer": ["ac4584b90286aec1085d8c45ce6c667fd81ec6fa46248ba10f9a5d354aad9710"],
          "extra": "Indizio per la domanda finale: <b>Historia Animalium</b>",
          "picture": "images/14 - Papiro.jpg",
          "errorMessage": "Il nome dell’autore in latino è <i>Lucretius</i>"
        },
        {
          "title": "Piramidi",
          "text": "Nell’archivio del sito del <a href='https://archiviofotografico.museoegizio.it/it/' target='_blank'>Museo Egizio di Torino</a>, nella sezione dedicata a Giza, troviamo 27 fotografie storiche delle piramidi. Trova l’unica in cui si vedono esattamente due piramidi e due dromedari. Chi è l’autore di questa fotografia? Scrivi solo il cognome.",
          "answer": ["0e175a6f45fa2238ff609deae4176430aca9487ebca716d1c19b70a38455d178"],
          "extra": "Indizio per la domanda finale: <b>Aristotelis Opera</b>",
          "picture": "images/15 - Piramidi.jpg",
          "errorMessage": "Naviga nella sezione <i>Giza</i> e poi <i>Piramidi</i> per trovare l’elenco di 27 fotografie"
        },
        {
          "title": "Un mosaico romano a Berlino",
          "text": "Nella collezione dei <a href='https://www.smb.museum/en/research/online-catalogues-databases/' target='_blank'>Musei Statali di Berlino</a> si trovano diverse collezioni di vari musei della città. Per prima cosa trova la collezione del <i>Antikensammlung</i>. Al suo interno, cerca <i>Mosaik</i>. Troverai diversi mosaici, tra cui uno che rappresenta un centauro. In che anno è stato rinvenuto questo mosaico?",
          "answer": ["457f8d7fda944376d24150aa30ed8ceee9490ca8ae4f8a7c3a413c9d524362d2"],
          "extra": "Indizio per la domanda finale: <b>Volumen Primum</b>",
          "picture": "images/16 - Mosaico.jpg",
          "errorMessage": "&quot;Anno di scoperta&quot; in tedesco si dice <i>Fundjahr</i>"
        },
        {
          "title": "Rovine romane in Algeria",
          "text": "Il sito della <a href='https://akon.onb.ac.at/' target='_blank'>Biblioteca Nazionale Austriaca</a> ha una raccolta di cartoline dal mondo, navigabili su mappa. Trova la città algerina di Batna. Vicino ad essa è indicata una cartolina di un antico sito archeologico romano. Come si chiama la città riportata nella fotografia?",
          "answer": ["32b09fff6fcdbf03405e09875055acbdfdb5f903277de1ed9fb56c97cedcced7"],
          "extra": "Indizio per la domanda finale: <b>Praefatio</b>",
          "picture": "images/17 - Algeria.jpg",
          "errorMessage": "Puoi usare la barra di ricerca per trovare più velocemente Batna"
        },
        {
          "title": "Aristotele",
          "text": "Sul sito Perseus Catalog cerca il libro indicato negli indizi precedenti, poi vai alla pagina indicata. Quale è la prima parola di questa pagina?",
          "answer": ["de98e5ea566225a14a9a6b3086253f6ddb4b90f537eddbfe582e3f099aae7336"],
          "extra": "&nbsp;",
          "picture": "images/18 - Aristotele.jpg",
          "errorMessage": "Troverai due edizioni dello stesso libro: scegli quella con il titolo in latino, non quella in tedesco"
        }
      ]
    },
  ]
};

// Utility: Get URL parameter
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Utility: Hash string using SHA-256
async function hashString(str) {
    const normalized = str.toLowerCase().trim();
    const msgBuffer = new TextEncoder().encode(normalized);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ============================================
// SOUND MANAGER
// ============================================
class SoundManager {
    constructor() {
        this.enabled = localStorage.getItem('soundEnabled') !== 'false';
        this.sounds = {
            correct: this.createSound([523.25, 659.25, 783.99], 0.3),
            wrong: this.createSound([329.63, 293.66], 0.2),
            complete: this.createSound([523.25, 659.25, 783.99, 1046.50], 0.4)
        };
        this.setupToggle();
    }

    createSound(frequencies, duration) {
        return () => {
            if (!this.enabled) return;
            
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                frequencies.forEach((freq, i) => {
                    const oscillator = audioContext.createOscillator();
                    const gainNode = audioContext.createGain();
                    
                    oscillator.connect(gainNode);
                    gainNode.connect(audioContext.destination);
                    
                    oscillator.frequency.value = freq;
                    oscillator.type = 'sine';
                    
                    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                    
                    oscillator.start(audioContext.currentTime + i * 0.1);
                    oscillator.stop(audioContext.currentTime + duration + i * 0.1);
                });
            } catch (e) {
                console.log('Audio not supported');
            }
        };
    }

    setupToggle() {
        const toggle = document.getElementById('soundToggle');
        if (!toggle) return;
        
        this.updateToggleUI(toggle);
        
        toggle.addEventListener('click', () => {
            this.enabled = !this.enabled;
            localStorage.setItem('soundEnabled', this.enabled);
            this.updateToggleUI(toggle);
        });
    }

    updateToggleUI(toggle) {
        toggle.textContent = this.enabled ? '🔊' : '🔇';
        toggle.classList.toggle('muted', !this.enabled);
    }

    play(soundName) {
        if (this.sounds[soundName]) {
            this.sounds[soundName]();
        }
    }
}

// ============================================
// GAME ENGINE
// ============================================
class TreasureHunt {
    constructor() {
        this.soundManager = new SoundManager();
        this.isPreviousGame = getUrlParameter('mode') === 'previous';
        this.selectedGameId = localStorage.getItem('selectedGameId');
        this.currentLevel = 0;
        this.clues = [];
        this.gameData = GAME_DATA;
        this.hasShownError = false;
        
        this.init();
    }

    init() {
        this.loadGameData();
        this.setupEventListeners();
        this.initializeProgressBar();
        this.loadGameProgress();
        
        // Auto-start if coming from games list
        if (getUrlParameter('autostart') === 'true') {
            // Use setTimeout to ensure DOM is ready
            setTimeout(() => this.startGame(), 100);
        }
    }

    loadGameData() {
        try {
            // Select appropriate game from embedded data
            if (this.isPreviousGame && this.selectedGameId) {
                const game = this.gameData.previousGames.find(g => g.id === this.selectedGameId);
                this.clues = game ? game.clues : this.gameData.currentGame.clues;
            } else {
                this.clues = this.gameData.currentGame.clues;
            }
        } catch (error) {
            console.error('Error loading game data:', error);
            alert('Errore nel caricamento del gioco. Ricarica la pagina.');
        }
    }

    setupEventListeners() {
        const startBtn = document.getElementById('startButton');
        const submitBtn = document.getElementById('submitAnswer');
        const answerInput = document.getElementById('answerInput');
        const resetBtn = document.getElementById('resetButton');
        const prevBtn = document.getElementById('prevLevel');
        const nextBtn = document.getElementById('nextLevel');
        
        if (startBtn) startBtn.addEventListener('click', () => this.startGame());
        if (submitBtn) submitBtn.addEventListener('click', () => this.checkAnswer());
        if (answerInput) answerInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') this.checkAnswer();
        });
        if (resetBtn) resetBtn.addEventListener('click', () => this.resetGame());
        if (prevBtn) prevBtn.addEventListener('click', () => this.navigateLevel(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => this.navigateLevel(1));
    }

    initializeProgressBar() {
        const progressBar = document.getElementById('progressBar');
        if (!progressBar) return;
        
        progressBar.innerHTML = this.clues.map((_, index) => 
            `<span class="progress-dot" data-level="${index}"></span>`
        ).join('');
        
        // Add click handlers to dots
        progressBar.querySelectorAll('.progress-dot').forEach((dot, index) => {
            dot.addEventListener('click', () => this.jumpToLevel(index));
        });
    }

    updateProgressBar() {
        const maxSolved = this.getMaxSolvedLevel();
        
        this.clues.forEach((_, index) => {
            const dot = document.querySelector(`.progress-dot[data-level="${index}"]`);
            if (!dot) return;
            
            dot.classList.remove('completed', 'current');
            
            if (index < this.currentLevel) {
                dot.classList.add('completed');
            } else if (index === this.currentLevel) {
                dot.classList.add('current');
            }
            
            // Enable clicking on completed levels
            dot.style.cursor = index <= maxSolved ? 'pointer' : 'default';
        });
        
        // Update arrow buttons
        const prevBtn = document.getElementById('prevLevel');
        const nextBtn = document.getElementById('nextLevel');
        
        if (prevBtn) prevBtn.disabled = this.currentLevel === 0;
        if (nextBtn) nextBtn.disabled = this.currentLevel >= maxSolved;
    }

    loadGameProgress() {
        const storageKey = this.isPreviousGame ? `progress-${this.selectedGameId}` : 'treasureHuntLevel';
        const savedLevel = localStorage.getItem(storageKey);
        
        if (savedLevel) {
            this.currentLevel = parseInt(savedLevel);
        }
        
        this.updateProgressBar();
    }

    saveGameProgress() {
        const storageKey = this.isPreviousGame ? `progress-${this.selectedGameId}` : 'treasureHuntLevel';
        localStorage.setItem(storageKey, this.currentLevel);
    }

    getMaxSolvedLevel() {
        const storageKey = this.isPreviousGame ? `progress-${this.selectedGameId}` : 'treasureHuntLevel';
        const savedLevel = localStorage.getItem(storageKey);
        return savedLevel ? parseInt(savedLevel) : 0;
    }

    startGame() {
        const welcomeScreen = document.getElementById('welcomeScreen');
        const gameScreen = document.getElementById('gameScreen');
        
        console.log('Starting game...', { welcomeScreen, gameScreen, clues: this.clues.length });
        
        if (welcomeScreen) welcomeScreen.classList.add('hidden');
        if (gameScreen) gameScreen.classList.remove('hidden');
        
        this.loadLevel(this.currentLevel);
    }

    loadLevel(level, transition = false) {
        if (level >= this.clues.length) {
            this.showCompletionScreen();
            return;
        }

        const clue = this.clues[level];
        const gameContent = document.querySelector('.game-content');
        
        // Apply transition animation
        if (transition && gameContent) {
            gameContent.classList.add('slide-out');
            setTimeout(() => {
                this.renderLevel(clue);
                gameContent.classList.remove('slide-out');
                gameContent.classList.add('slide-in');
                setTimeout(() => gameContent.classList.remove('slide-in'), 400);
            }, 400);
        } else {
            this.renderLevel(clue);
        }
        
        this.hasShownError = false;
        this.updateProgressBar();
    }

    renderLevel(clue) {
        const clueTitle = document.getElementById('clueTitle');
        const clueText = document.getElementById('clueText');
        const imageContainer = document.getElementById('clueImage');
        const answerInput = document.getElementById('answerInput');
        const feedbackMessage = document.getElementById('feedbackMessage');
        const extraClue = document.getElementById('extraClue');
        
        // Update text content
        if (clueTitle) clueTitle.textContent = clue.title;
        if (clueText) clueText.innerHTML = clue.text;
        
        // Update image - hide container if no picture
        if (imageContainer) {
            if (clue.picture) {
                const img = new Image();
                img.onload = () => {
                    imageContainer.innerHTML = '';
                    imageContainer.appendChild(img);
                    imageContainer.style.display = 'flex';
                };
                img.onerror = () => {
                    // Hide image container if image fails to load
                    imageContainer.style.display = 'none';
                    console.warn('Image failed to load:', clue.picture);
                };
                img.src = clue.picture;
                img.alt = clue.title;
            } else {
                imageContainer.innerHTML = '';
                imageContainer.style.display = 'none';
            }
        }
        
        // Show extra clue immediately if it exists
        if (extraClue && clue.extra && clue.extra !== '&nbsp;') {
            extraClue.innerHTML = clue.extra;
            extraClue.classList.remove('hidden');
        } else if (extraClue) {
            extraClue.classList.add('hidden');
        }
        
        // Clear input and feedback
        if (answerInput) answerInput.value = '';
        if (feedbackMessage) feedbackMessage.classList.add('hidden');
    }

    async checkAnswer() {
        const input = document.getElementById('answerInput');
        const userAnswer = input ? input.value.trim() : '';
        
        if (!userAnswer) {
            this.showFeedback('Inserisci una risposta!', 'error');
            return;
        }

        try {
            const userHash = await hashString(userAnswer);
            const correctHashes = this.clues[this.currentLevel].answer;

            if (correctHashes.includes(userHash)) {
                // Correct answer
                this.soundManager.play('correct');
                this.showFeedback('✓ Risposta corretta!', 'success');
                
                setTimeout(() => {
                    this.currentLevel++;
                    this.saveGameProgress();
                    this.loadLevel(this.currentLevel, true);
                }, 800);
            } else {
                // Wrong answer
                this.soundManager.play('wrong');
                const clue = this.clues[this.currentLevel];
                const errorMsg = clue.errorMessage || 'Risposta errata. Riprova!';
                this.showFeedback(errorMsg, 'error');
                
                this.hasShownError = true;
            }
        } catch (error) {
            console.error('Error checking answer:', error);
            this.showFeedback('Si è verificato un errore. Riprova!', 'error');
        }
    }

    showFeedback(message, type) {
        const feedback = document.getElementById('feedbackMessage');
        if (!feedback) return;
        
        feedback.innerHTML = message;
        feedback.className = `feedback-message ${type}`;
        feedback.classList.remove('hidden');
    }

    navigateLevel(direction) {
        const newLevel = this.currentLevel + direction;
        const maxSolved = this.getMaxSolvedLevel();
        
        if (newLevel >= 0 && newLevel <= maxSolved && newLevel < this.clues.length) {
            this.currentLevel = newLevel;
            this.loadLevel(this.currentLevel, true);
        }
    }

    jumpToLevel(level) {
        const maxSolved = this.getMaxSolvedLevel();
        
        if (level <= maxSolved && level < this.clues.length) {
            this.currentLevel = level;
            this.loadLevel(this.currentLevel, true);
        }
    }

    showCompletionScreen() {
        this.soundManager.play('complete');
        
        const gameContent = document.querySelector('.game-content');
        const answerSection = document.querySelector('.answer-section');
        const completionScreen = document.getElementById('completionScreen');
        const progressContainer = document.querySelector('.progress-container');
        const completionForm = document.getElementById('completionForm');
        
        if (gameContent) gameContent.classList.add('hidden');
        if (progressContainer) progressContainer.classList.add('hidden');
        if (answerSection) answerSection.classList.add('hidden');
        if (completionScreen) completionScreen.classList.remove('hidden');
        
        // Show form only for main game winner
        if (completionForm) {
            completionForm.classList.remove('hidden');
        }
        
        // Clear progress for main game
        if (!this.isPreviousGame) {
            localStorage.removeItem('treasureHuntLevel');
        }
    }

    resetGame() {
        // Clear all progress
        localStorage.removeItem('treasureHuntLevel');
        if (this.selectedGameId) {
            localStorage.removeItem(`progress-${this.selectedGameId}`);
        }
        localStorage.removeItem('selectedGameId');
        
        // Redirect to games list
        window.location.href = 'games.html';
    }
}

// ============================================
// INITIALIZE
// ============================================
if (document.getElementById('startButton')) {
    new TreasureHunt();
}

// ============================================
// HOW TO PLAY MODAL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const howToPlayButton = document.getElementById('howToPlayButton');
    const modal = document.getElementById('howToPlayModal');
    const closeModal = document.getElementById('closeModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    if (howToPlayButton && modal) {
        // Open modal
        howToPlayButton.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });
        
        // Close modal - X button
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
        
        // Close modal - bottom button
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                modal.classList.add('hidden');
            });
        }
        
        // Close modal - click outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
        
        // Close modal - ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
            }
        });
    }
});
