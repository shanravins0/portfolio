
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

//Contact form

// function postToGoogle() {
//     var field1 = $("#Name").val();
//     var field2 = $("#Email").val();
//     var field3 = $("#Subject").val();
//     var field4 = $("#Message").val();

//     $.ajax({
//       url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSds997ZwEQq97dSpZd40T5TV2udQcu76IjqsOqoYU6zEDRcug/formResponse",
//       data: {
//         "entry.799228094": field1,
//         "entry.579005095": field2,
//         "entry.714709535": field3,
//         "entry.94457689": field4
//       },
//       type: "POST",
//       dataType: "xml",
//       success: function (d) {
//         $('#contact-form').trigger('reset');
//       },
//       error: function (x, y, z) {
//         $('#contact-form').trigger('reset');
//       }
//     });
//     return false;
//   }

  
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbyUP1mJaQqXw6ryQKMMrwSAgLb7PLMsx69Xqliu83OJEZmiuwDh7S10CNLyEJ5ePXbt/exec'
    // const form = document.forms['contact-form']

    // form.addEventListener('submit', e => {
    //   e.preventDefault()
    //   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    //     .then(response => console.log('Success!', response))
    //     .catch(error => console.error('Error!', error.message))
    // })
  
    var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {
            // you can put any JS code here
            window.open('page2.html', '_blank');

          });
        });