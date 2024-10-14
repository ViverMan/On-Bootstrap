

fetch('/js/data/countrys.json')
    .then((res) => res.json())
    .then((json) => {
        let html = '';
        json['coutries'].forEach((el) => {
            html = html + `<option value="${el.code}">${el.name}</option>`
        });
        document.querySelector('#country').innerHTML = html;
    });