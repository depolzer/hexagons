// ============================================
// GAMES LIST PAGE
// ============================================

// GAME DATA
const GAME_DATA = {
  "currentGame": {
    "id": "main",
    "title": "Arte, Mappe, Libri🗺️",
    "date": "2025-01-15"
  },
  "previousGames": [
    {
      "id": "game-20250406",
      "title": "Arte Europea🎨🖼️",
      "date": "2025-11-30",
      "description": "Dipinti di artisti europei tra XVI e XX secolo"
    },
    {
      "id": "game-20250405",
      "title": "Mondo Antico🏺🏛️",
      "date": "2025-11-30",
      "description": "Roma, Grecia ed Egitto nell'antichità"
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
    loadGamesList();
});

function loadGamesList() {
    try {
        const gameList = document.getElementById('gameList');
        if (!gameList) return;
        
        // Clear loading state
        gameList.innerHTML = '';
        
        // Add current game first
        if (GAME_DATA.currentGame) {
            const currentGameItem = createGameItem(
                GAME_DATA.currentGame.title,
                '',
                'main',
                true
            );
            gameList.appendChild(currentGameItem);
        }
        
        // Add previous games
        if (GAME_DATA.previousGames && GAME_DATA.previousGames.length > 0) {
            GAME_DATA.previousGames.forEach(game => {
                const gameItem = createGameItem(
                    game.title,
                    game.description,
                    game.id,
                    false
                );
                gameList.appendChild(gameItem);
            });
        }
        
        // If no games available
        if (!GAME_DATA.currentGame && (!GAME_DATA.previousGames || GAME_DATA.previousGames.length === 0)) {
            gameList.innerHTML = '<p style="text-align: center; color: var(--text-light);">Nessuna partita disponibile al momento.</p>';
        }
        
    } catch (error) {
        console.error('Error loading games list:', error);
        const gameList = document.getElementById('gameList');
        if (gameList) {
            gameList.innerHTML = '<p style="text-align: center; color: var(--error);">Errore nel caricamento delle partite.</p>';
        }
    }
}

function createGameItem(title, description, gameId, isCurrentGame) {
    const gameItem = document.createElement('div');
    gameItem.className = 'game-item';
    
    const gameInfo = document.createElement('div');
    gameInfo.className = 'game-info';
    
    const gameTitle = document.createElement('div');
    gameTitle.className = 'game-title';
    gameTitle.textContent = title;
    
    const gameDescription = document.createElement('div');
    gameDescription.className = 'game-date';
    
    if (isCurrentGame) {
        gameDescription.textContent = '⭐ Partita principale - Mix di argomenti';
        gameDescription.style.fontWeight = '600';
        gameDescription.style.color = 'var(--primary-purple)';
    } else {
        gameDescription.textContent = description;
    }
    
    gameInfo.appendChild(gameTitle);
    gameInfo.appendChild(gameDescription);
    
    const playButton = document.createElement('button');
    playButton.className = 'play-btn';
    playButton.textContent = 'Gioca';
    playButton.addEventListener('click', () => startGame(gameId, isCurrentGame));
    
    gameItem.appendChild(gameInfo);
    gameItem.appendChild(playButton);
    
    return gameItem;
}

function startGame(gameId, isCurrentGame) {
    if (isCurrentGame) {
        // Clear any previous game selection and go to main game
        localStorage.removeItem('selectedGameId');
        window.location.href = '../index.html';
    } else {
        // Set selected game and redirect with parameters
        localStorage.setItem('selectedGameId', gameId);
        window.location.href = '../index.html?mode=previous&autostart=true';
    }
}
