const imagens = document.querySelectorAll(".imagem");

const setaVoltar = document.getElementById("setaEsquerda");

const setaAvancar = document.getElementById("setaDireita");

let imagemAtual = 0;



setaAvancar.addEventListener('click', function () {
    const totalDeImagens = imagens.length -1;

    if(imagemAtual === totalDeImagens){
        return;
    }

    imagemAtual++;

    imagens.forEach(imagem => {
        imagem.classList.remove('ativo')
    });

    imagens[imagemAtual].classList.add('ativo')

});

setaVoltar.addEventListener('click', function () {

    if(imagemAtual === 0){
        console.log('não tem mais como voltar')
    return;
    }

    imagemAtual--;

    imagens.forEach((imagem) => {
        imagem.classList.remove('ativo');
    });

    imagens[imagemAtual].classList.add('ativo')

})