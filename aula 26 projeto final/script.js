document.addEventListener('DOMContentLoaded', function () {
    const imagem = document.getElementById('imagem');

    function animarImagem() {
        let alturaOriginal = 0;
        let alturaMaxima = -15; 
        let duracao = 800; 
        let intervalo = 10; 
        let passos = duracao / intervalo;
        let passo = 0;
        let direcao = 1;

        function atualizarPosicao() {
            passo++;
            let progresso = passo / passos;
            let novaAltura = direcao === 1 
                ? alturaOriginal + progresso * (alturaMaxima - alturaOriginal) 
                : alturaMaxima + progresso * (alturaOriginal - alturaMaxima);

            imagem.style.transform = `translateY(${novaAltura}px)`;

            if (passo >= passos) {
                passo = 0;
                direcao *= -1;
                setTimeout(atualizarPosicao, intervalo);
            } else {
                setTimeout(atualizarPosicao, intervalo);
            }
        }

        atualizarPosicao();
    }

    animarImagem();
});
