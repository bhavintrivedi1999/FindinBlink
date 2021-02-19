// front end data read
const serviceList = document.querySelector('#service-list');
const form = document.querySelector('#add-service-form');
function renderservice(doc) {
    let li = document.createElement('li');
    let services = document.createElement('span');
    let firstname = document.createElement('span');
    let lastname = document.createElement('span');
    let phonenumber = document.createElement('span');
    let street = document.createElement('span');
    let city = document.createElement('span');
    let state = document.createElement('span');
    let zipcode = document.createElement('span');
    let email = document.createElement('span');

    li.setAttribute('data_id', doc.id);

    services.textContent = doc.data().services;
    firstname.textContent = doc.data().firstname;
    lastname.textContent = doc.data().lastname;
    phonenumber.textContent = doc.data().phonenumber;
    street.textContent = doc.data().street;
    city.textContent = doc.data().city;
    state.textContent = doc.data().state;
    zipcode.textContent = doc.data().zipcode;
    email.textContent = doc.data().email;

    li.appendChild(services);
    li.appendChild(firstname);
    li.appendChild(lastname);
    li.appendChild(phonenumber);
    li.appendChild(street);
    li.appendChild(city);
    li.appendChild(state);
    li.appendChild(zipcode);
    li.appendChild(email);


    serviceList.appendChild(li);
};

// // get data in to datastore
// db.collection('service').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderservice(doc);
//     });
// });



// deta send to datastore
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('service').add({
        services: form.services.value,
        firstname: form.firstname.value,
        lastname: form.firstname.value,
        phonenumber: form.phonenumber.value,
        street: form.street.value,
        city: form.city.value,
        state: form.state.value,
        zipcode: form.zipcode.value,
        email: form.email.value

    });
    // blanck frontend after data submiting 
    form.services.value = '';
    form.image.value = '';
    form.firstname.value = '';
    form.lastname.value = '';
    form.phonenumber.value = '';
    form.street.value = '';
    form.city.value = '';
    form.state.value = '';
    form.zipcode.value = '';
    form.email.value = '';

});

// uploding photo in storage
function uploadImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector("#image").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
        contentType: file.type
    };
    const task = ref.child(name).put(file, metadata)
};


// search something
function SearchA() {
    db.collection('service').where('services','==','Doctor').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderservice(doc);
        });
    });
};

function SearchB() {
    db.collection('service').where('services','==','Electrician').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderservice(doc);
        });
    });
};

function SearchC() {
    db.collection('service').where('services','==','Plumber').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            renderservice(doc);
        });
    });
};
