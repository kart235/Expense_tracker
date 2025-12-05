# Expense Tracker

A simple web-based Expense Tracker application with login functionality. This project allows users to log in, add expenses, view a list of expenses, and see the total amount spent. All data is stored locally in the browser using `localStorage`.

## Features

- **Login System**: Basic authentication using default credentials (username: `admin`, password: `1234`).
- **Expense Management**: Add, view, and delete expenses.
- **Total Calculation**: Automatically calculates and displays the total expenses.
- **Persistent Storage**: All data is saved in the browser's local storage.
- **Logout Functionality**: Securely log out and redirect to the login page.

## Files

- `index.html`: Main expense tracker interface.
- `login.html`: Login page for authentication.
- `script.js`: Handles login, logout, expense management, and local storage logic.
- `style.css`: Styles for the application UI.

## How to Use

1. Open `login.html` in your browser.
2. Log in using the default credentials:
   - Username: `admin`
   - Password: `1234`
3. After logging in, you will be redirected to the expense tracker page (`index.html`).
4. Add expenses by entering the amount and description, then click "Add Expense".
5. View your expenses and total amount. Delete expenses as needed.
6. Click "Logout" to end your session.

## Customization

- You can change the default credentials in `script.js`.
- All data is stored in `localStorage` and will persist until cleared from the browser.

