// front end data read
const serviceList = document.querySelector('#service-list');
const form = document.querySelector('#add-service-form');
function renderservice(doc) {
    
    let li = document.createElement('li');
    // let services = document.createElement('span');
    let firstname = document.createElement('span');
    let lastname = document.createElement('span');
    let phonenumber = document.createElement('span');
    // let street1 = document.createElement('span');
    // let street2 = document.createElement('span');
    // let city = document.createElement('span');
    // let state = document.createElement('span');
    // let zipcode = document.createElement('span');
    // let email = document.createElement('span');

    li.setAttribute('data_id', doc.id);

    // services.textContent = doc.data().services;
    firstname.textContent = doc.data().firstname;
    lastname.textContent = doc.data().lastname;
    phonenumber.textContent = doc.data().phonenumber;
    // street1.textContent = doc.data().street1;
    // street2.textContent = doc.data().street2;
    // city.textContent = doc.data().city;
    // state.textContent = doc.data().state;
    // zipcode.textContent = doc.data().zipcode;
    // email.textContent = doc.data().email;

    // li.appendChild(services);
    li.appendChild(firstname);
    li.appendChild(lastname);
    li.appendChild(phonenumber);
    // li.appendChild(street1);
    // li.appendChild(street2);
    // li.appendChild(city);
    // li.appendChild(state);
    // li.appendChild(zipcode);
    // li.appendChild(email);

    serviceList.appendChild(li);
};
// search something
db.collection('service').where('services', '==', 'Plumber').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderservice(doc);
    });
});
