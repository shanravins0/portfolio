
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

// Toggle theme

const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click',() =>{
    let element = document.body;
    element.classList.toggle('light-mode')
})

}

PageTransition();

//Contact form

// const form = document.getElementById('contact-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const subject = document.getElementById('subject').value;
//   const message = document.getElementById('message').value;

//   const formData = new FormData();
//   formData.append('entry.799228094', name); // replace 1234567890 with the actual field ID for Name in the Google Form
//   formData.append('entry.579005095', email); // replace 0987654321 with the actual field ID for Email in the Google Form
//   formData.append('entry.714709535', subject); // replace 2468013579 with the actual field ID for Subject in the Google Form
//   formData.append('entry.94457689', message); // replace 1357902468 with the actual field ID for Message in the Google Form

//   fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSds997ZwEQq97dSpZd40T5TV2udQcu76IjqsOqoYU6zEDRcug/formResponse?usp=pp_url&entry.799228094=' + name + '&entry.579005095=' + email + '&entry.714709535=' + subject + '&entry.94457689=' + message, {
//     method: 'POST',
//     body: formData
//   })
//   .then(response => {
//     // handle response from Google Forms API
//   })
//   .catch(error => {
//     // handle error
//   });
// });
