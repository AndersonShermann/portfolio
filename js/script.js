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


const design_card_butttons = document.querySelectorAll('.design-card');
const introduction_text = document.querySelectorAll('.introduction-text');

const single_profile_card = document.querySelectorAll('.single-profile-card');
const testimonial_card = document.querySelectorAll('.testimonial-card');

design_card_butttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        introduction_text.forEach((introduction, introductionIndex) => {
            if (index === introductionIndex) {
                introduction.style.display = 'block';
            } else {
                introduction.style.display = 'none';
            }
        });
        design_card_butttons.forEach((btn, btnIndex) => {
            if (index === btnIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
                
            }
        });
    });
});

single_profile_card.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        testimonial_card.forEach((testimonialCard, testimonialCardIndex) => {
            if (index === testimonialCardIndex) {
                testimonialCard.style.display = 'block';
            } else {
                testimonialCard.style.display = 'none';
            }
        });
        single_profile_card.forEach((cardBtn, cardIndex) => {
            if (index === cardIndex) {
                cardBtn.classList.add('profile-card-active');
            } else {
                cardBtn.classList.remove('profile-card-active');
            }
        });
    });
});