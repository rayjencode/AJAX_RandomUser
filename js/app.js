const btn = document.getElementById('btn');
const firstname = document.getElementById('first');
const lastname = document.getElementById('last');
const street = document.getElementById('street');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const photo = document.getElementById('photo');

const url = 'https://randomuser.me/api/';

btn.addEventListener('click', function () {
    getPerson(url);
});

function getPerson(url) {
    const ajax = new XMLHttpRequest();

    ajax.open('GET', url, true);

    ajax.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);

            const {
                name: { first },
                name: { last },
                email,
                cell,
                location: {
                    street: { name },
                },
                picture: { large },
            } = data.results[0];

            firstname.textContent = first;
            lastname.textContent = last;
            street.textContent = name;
            phone.textContent = cell;
            email.textContent = email;
            photo.src = large;

            console.log(data);
        } else {
            this.onerror();
        }
    };

    ajax.onerror = function () {
        console.log(`Error Found`);
    };
    ajax.send();
}
