

// default credentials
if (!localStorage.getItem("credentials")) {
    localStorage.setItem("credentials", JSON.stringify({
        username: "admin",
        password: "1234"
    }));
}

function login() {
    let enteredUser = document.getElementById("username").value;
    let enteredPass = document.getElementById("password").value;

    let saved = JSON.parse(localStorage.getItem("credentials"));

    if (enteredUser === saved.username && enteredPass === saved.password) {
        localStorage.setItem("loggedIn" , "true");
        window.location.href = "index.html";
        alert("Login successful!");
    } else {
        document.getElementById("loginError").innerText = "Invalid username or password!";
        alert("The Credentials that you are using are incorrect...!");
    }
}



// logout
function logout() {
    localStorage.setItem("loggedIn", "false");
    window.location.href = "login.html";
    alert("You have been logged out.");
}


let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
    let amount = document.getElementById("amount").value;
    let desc = document.getElementById("description").value;

    if (amount === "" || desc === "") 
        return alert("Please enter both amount and description.");

    expenses.push({ amount: Number(amount), desc });
    localStorage.setItem("expenses", JSON.stringify(expenses));

    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";

    loadExpenses();
}

function loadExpenses() {
    let list = document.getElementById("expenseList");
    let total = 0;

    list.innerHTML = "";

    expenses.forEach((item, index) => {
        total += item.amount;

        let li = document.createElement("li");
        li.innerHTML = `
            ₹${item.amount} - ${item.desc}
            <button2 onclick="deleteExpense(${index})">Delete</button>
        `;
        list.appendChild(li);
    });

    document.getElementById("totalAmount").innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    loadExpenses();
}

if (location.pathname.includes("index.html")) {
    loadExpenses();
}
