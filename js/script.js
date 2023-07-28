/*Escreve letras no main*/
function escrevendoLetra() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrTexto.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML+=letra;
            }, 75 * i);
        });
    }

    const titulo = document.querySelector('.digitando');

    ativaLetra(titulo);
}

escrevendoLetra();

/*Verifica se um determinado elemento está na View Port */
function verificaViewPort(){
    const observer = new IntersectionObserver(entries => {
        console.log(entries);
    
        Array.from(entries).forEach( entry => {
            if (entry.intersectionRatio >= .5) {
                entry.target.classList.add('init-hidden-off');
            }
        })
    
    }, {
        threshold: [0, .5, 1]
    })
    
    Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
        observer.observe(element);
    })
}

verificaViewPort();


/*Transição das experiências e education*/
function sobreMim(){
    const divExperiencia = document.querySelectorAll('.experience-content div')
    const liExperiencia = document.querySelectorAll('.experience-content ul li')
    const divEducation = document.querySelectorAll('.education-content div')
    const liEducation = document.querySelectorAll('.education-content ul li')

    function slideShow(index){
        divExperiencia.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperiencia.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divExperiencia[index].classList.add('ativo');
        liExperiencia[index].classList.add('ativo');
    }
    slideShow(0);

    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao)=>{
            botao.classList.remove('ativo');
        })
        divEducation[index].classList.add('ativo');
        liEducation[index].classList.add('ativo');
    }
    slideShow2(0);

    liExperiencia.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    liEducation.forEach((event, index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
    });
}
sobreMim();