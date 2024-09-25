const game = {
    score: 0,
    isCollision: false,

    jump: function () {
        if (!this.isCollision) {
            this.score++;
        } else {
            this.gameOver();
        }
    },

    detectCollision: function () {
        this.isCollision = true;
    },

    gameOver: function () {
    }
};

// Exemplo de uso
game.jump(); // Pular sem colisão (aumenta a pontuação)
game.detectCollision(); // Simula uma colisão
game.jump(); // Pular após colisão (exibe mensagem de game over)



// let score = 0;
// let bateu = false;
// function jumping() {
//     if(!bateu){
//         score++;
//         console.log("pontuaçao" + score)    
//     }else{
//         alert("Game Over Pontuação final :" + score)

//     }
// }

// function detectCollision(){
//     bateu = true;

// }

// jumping()
// detectCollision()

// const scoreDisplay = document.querySelector('.score');
// let score = 0

// function checkCollision(){
//     const marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'));

//     const  obstacleLeft = parseInt(window.getComputedStyle(pipe).getPropertyValue('left'));

//     if (obstacleLeft < 50 && obstacleLeft > 0 && marioTop >= 120){
//         gameOver();
//     }
// }
// function updateScore(){
//     score++;
//     scoreDisplay.textContent = `Score ${score}`;
// }

// function gameOver(){
//     alert(`Game Over! seu score: ${score} `);

//     score = 0;

//     scoreDisplay.textContent= 'Score: 0';
// }

// setInterval(() => {
//     checkCollision();
//     updateScore()
// }, 10);

const mario = document.querySelector(".mario");

const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 90) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './src/images/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', jump);

