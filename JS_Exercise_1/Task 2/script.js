const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const addUserBtn = document.getElementById("addUser");
const tbody = document.getElementById("tbody");
const updateUserBtn = document.getElementById("updateUser");

let users = [];
let currentUser = '';

function showUsersTable(){
    console.log(users);
    tbody.innerHTML = '';
    for(let i = 0; i<users.length;i++){
        users[i].id = i+1;
        tbody.innerHTML += `<tr>
        <td>${users[i].firstName}</td>
        <td>${users[i].lastName}</td>
        <td><button class="btn btn-secondary" onclick="edit(${i})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteUser(${i})">Delete</button></td>
      </tr>`;
    }
}


 
function saveUser(){
    if(firstName.value.trim() == ''||lastName.value.trim() ==  ''){
        alert("Provide First Name & Last Name");
        return 0;
    }
    let userObj = {
        id:'',
        firstName: firstName.value,
        lastName: lastName.value
    };

    users.push(userObj);
    firstName.value = '';
    lastName.value = '';
    console.log(users);
    showUsersTable();
}

function updateUser(){
    users[currentUser].firstName = firstName.value;
    users[currentUser].lastName = lastName.value;
    addUserBtn.style.display = "initial";
    updateUserBtn.style.display = "none";
    showUsersTable();
    firstName.value='';
    lastName.value ='';
}

addUserBtn.addEventListener("click",function(){
    saveUser();
})

function edit(i){
    console.log(i);
    firstName.value = users[i].firstName;
    lastName.value = users[i].lastName;
    addUserBtn.style.display = "none";
    updateUserBtn.style.display = "initial";
    currentUser = i;
}

updateUserBtn.addEventListener("click", function(){
    updateUser();
})

function deleteUser(i){
    users.splice(i,1);
    showUsersTable();
}
