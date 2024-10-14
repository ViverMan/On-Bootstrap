window.addEventListener('scroll', function () {
    document.querySelector('#header-nav').classList.toggle('headernav-scroll', window.scrollY > 135);
});

window.addEventListener('scroll', function () {

    let topBtn = document.querySelector('#top');

    topBtn.classList.toggle('d-block', window.scrollY > 300);

    topBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

//-----------Открытие карзины по клику--------------//
let offcanvasCartEl = document.querySelector('#offcanvasCart');
let offcanvasCart = new bootstrap.Offcanvas(offcanvasCartEl);

document.getElementById('cart-open').addEventListener('click', (e) => {
    e.preventDefault();
    offcanvasCart.toggle();
});


//-----------скролл вниз с закрытием cart--------------//



document.querySelectorAll('.closecart').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        offcanvasCart.hide();
        // let href = item.href.split('#').pop();
        let href = item.dataset.href;

        offcanvasCartEl.addEventListener('hidden.bs.offcanvas', () => {
            document.getElementById(href).scrollIntoView();
        })

    })
});
//-------------------------//


$(document).ready(function () {
    $(".owl-carousel-full").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
});

//---------------------- validation--------------------//

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

//----------------------/ validation--------------------//
