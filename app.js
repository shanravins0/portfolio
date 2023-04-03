
const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controlls');
const secBtn = document.querySelectorAll('.control');
const allSection = document.querySelector('.main-content');


function PageTransition() {
    //Button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener('click', function () {
            let curentBtn = document.querySelectorAll('.active-btn');
            curentBtn[0].className = curentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'; //Here spacing is imp
        })
    }

    //Sections Active Class
    allSection.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btns
            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active')
        }
    })

}

PageTransition();