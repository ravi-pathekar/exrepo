const firstname = document.querySelector("#firstName");
const lastname = document.querySelector("#lastName");
const addUserBtn = document.querySelector("#addUser");
const updateUserBtn = document.querySelector("#updateUser");
const table = document.querySelector(".table");
const tbody = document.querySelector("#tbody");
let currentUser = null;

// ---------------- Getting Data from database ------------------------------
const fetchData = () => {
    fetch('http://localhost:4000')
        .then(response => response.json())
        .then(data => display(data));
}

// ------------------ Displaying Data on the HTML page -----------------------
const display = (data) => {
    tbody.innerHTML = '';
    for (let q of data) {

        let fn = q.firstname;
        let ln = q.lastname;
        addUserBtn.style.display = "initial";
        updateUserBtn.style.display = "none";

        tbody.innerHTML += `<tr>
                <td>${fn}</td>
                <td>${ln}</td>
                <td><button class="btn btn-secondary" onclick="edit('${q._id}')">Edit</button></td>
                <td><button class="btn btn-danger" onclick="deleteUser('${q._id}')">Delete</button></td>
              </tr>`;
    }
}

fetchData();

// --------------------- Creating new user in database ---------------------------
const postUser = () => {
    const fname = firstname.value;
    const lname = lastname.value;

    let postObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: fname,
            lastname: lname
        })
    };

    fetch('http://localhost:4000', postObj)
        .then(resp => resp.json())
        .then(dis => fetchData())
        .catch(err => console.log(err));

    firstname.value = '';
    lastname.value = '';
}

addUserBtn.addEventListener('click', () => postUser());

// ------------------- Deleting a user from Database ---------------------------
const deleteUser = (id) => {

    console.log(id);
    fetch(`http://localhost:4000/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => fetchData());
}

const show = (data) => {
    firstname.value = data.firstname;
    lastname.value = data.lastname;
    addUserBtn.style.display = "none";
    updateUserBtn.style.display = "initial";
}

// ------------------------ Updating a user in database -------------------
const edit = (id) => {
    currentUser = id;
    fetch(`http://localhost:4000/${id}`)
        .then(res => res.json())
        .then(data => show(data));
}

const updateUser = (id) => {
    let putObj = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            firstname: firstname.value,
            lastname: lastname.value
        })
    };

    fetch(`http://localhost:4000/${id}`, putObj)
        .then(res => res.json())
        .then(data => fetchData());

    firstname.value = '';
    lastname.value = '';
}

updateUserBtn.addEventListener('click', () => updateUser(currentUser));