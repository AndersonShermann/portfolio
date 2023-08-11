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

// /*Verifica se um determinado elemento está na View Port */
// function verificaViewPort(){
//     const observer = new IntersectionObserver(entries => {
//         console.log(entries);
    
//         Array.from(entries).forEach( entry => {
//             if (entry.intersectionRatio >= .5) {
//                 entry.target.classList.add('init-hidden-off');
//             }
//         })
    
//     }, {
//         threshold: [0, .5, 1]
//     })
    
//     Array.from(document.querySelectorAll('.init-hidden')).forEach( element => {
//         observer.observe(element);
//     })
// }

// verificaViewPort();


/*Transição de cards*/
function sobreMim(){
    const experience = document.querySelectorAll('.experience-card')
    const profile_card = document.querySelectorAll('.sigle-profile-card')

    function slideShow(index){
        experience.forEach((div)=>{
            div.classList.remove('active');
        });
        profile_card.forEach((botao)=>{
            botao.classList.remove('active');
        })
        experience[index].classList.add('active');
        profile_card[index].classList.add('active');
    }
    slideShow(0);

    // function slideShow2(index){
    //     divEducation.forEach((div)=>{
    //         div.classList.remove('ativo');
    //     });
    //     liEducation.forEach((botao)=>{
    //         botao.classList.remove('ativo');
    //     })
    //     divEducation[index].classList.add('ativo');
    //     liEducation[index].classList.add('ativo');
    // }
    // slideShow2(0);

    profile_card.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });

    // liEducation.forEach((event, index)=>{
    //     event.addEventListener('click', ()=>{
    //         slideShow2(index)
    //     });
    // });
}
sobreMim();
