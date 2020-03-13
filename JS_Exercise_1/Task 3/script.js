const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const addUserBtn = document.getElementById("addUser");
const tbody = document.getElementById("tbody");
const updateUserBtn = document.getElementById("updateUser");
let id;
let firstName1;
let lastName1;
let currentUser = '';

function User(ids, fname, lname){
    this.id = ids;
    this.firstName1 = fname;
    this.lastName1 = lname;
       
}

let user1 = new User(0, "Ravi", "Pathekar");
let user2 = new User(1, "Darshan", "Vesatiya");
let user3 = new User(2, "Hardik", "Motwani");
let user4 = new User(3, "Dhairya", "Shah");
let user5 = new User(4, "Jatin", "Jain");
let user6 = new User(5, "Meet", "Shah");
let user7 = new User(6, "Aman", "Gupta");
let user8 = new User(7, "Nawal", "Kishor");
let user9 = new User(8, "Mayur", "Shah");
let user10 = new User(9, "Hardik", "Pandya");


// console.log(user1);

let users1 = [user1, user2, user3, 
    user4, user5, user6, user7,
     user8, user9, user10];

    // console.log(users1[1]);

function showUserTable(){
    tbody.innerHTML = '';
    let id=0;
    for(let i=0;i<users1.length;i++){
        tbody.innerHTML += `<tr>
        <td>${users1[i].firstName1}</td>
        <td>${users1[i].lastName1}</td>
        <td><button class="btn btn-secondary" onclick="edit(${id})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteUser(${id})">Delete</button></td>
      </tr>`;
      id++;
    }

}
showUserTable();

function saveUser(){
    if(firstName.value.trim() == ''||lastName.value.trim() ==  ''){
        alert("Provide First Name & Last Name");
        return 0;
    }
    let x = users1.length;
    let userObj = new User(`${x}`, firstName.value, lastName.value);
    users1.push(userObj);
    firstName.value = '';
    lastName.value = '';
    showUserTable();
}

addUserBtn.addEventListener("click",function(){
    saveUser();
})

function updateUser(){
    users1[currentUser].firstName1 = firstName.value;
    users1[currentUser].lastName1 = lastName.value;
    addUserBtn.style.display = "initial";
    updateUserBtn.style.display = "none";
    showUserTable();
    firstName.value='';
    lastName.value ='';
}

function edit(i){
    firstName.value = users1[i].firstName1;
    lastName.value = users1[i].lastName1;
    addUserBtn.style.display = "none";
    updateUserBtn.style.display = "initial";
    currentUser = i;
}

updateUserBtn.addEventListener("click", function(){
    updateUser();
})

function deleteUser(i){
    users1.splice(i,1);
    showUserTable();
}
