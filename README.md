Budget Bloom

Welcome to the Budget Bloom Application! This tool is designed to help you manage your finances by creating budgets and tracking expenses.

Features

User Authentication: Welcome new users and greet returning users by name.
Budget Management: Create and manage multiple budgets.
Expense Tracking: Add and categorize expenses under specific budgets.
View Expenses: View a table of recent expenses, with an option to see all expenses.
Installation

To get started with the application, follow these steps:

Clone the repository:
git clone https://github.com/yourusername/budgeting-app.git

Navigate to the project directory:
cd budgeting-app

Install dependencies:
npm install

Run the application:
npm start

Usage

Dashboard
When you first access the application, you'll be greeted with a welcome message.

New Users: Enter your name to create a new account.
Returning Users: Your name will be displayed, and you can start managing your budgets and expenses.
Adding a Budget
Click on the "Add Budget" form.
Enter the name of the budget and the total amount allocated for that budget.
Click "Create Budget" to save.
Adding an Expense
Click on the "Add Expense" form.
Select the budget under which the expense falls.
Enter the name and amount of the expense.
Click "Create Expense" to save.
Viewing and Managing Budgets and Expenses
Existing Budgets: All your budgets are listed. You can view details of each budget.
Recent Expenses: A table of recent expenses is shown. Click "View all expenses" to see a full list.
Code Structure

Components
Intro: A welcome screen for new users.
AddBudgetForm: A form to add new budgets.
AddExpenseForm: A form to add new expenses.
BudgetItem: A component to display individual budgets.
Table: A component to display expenses in a tabular format.
Helpers
createBudget: Function to create a new budget.
createExpense: Function to create a new expense.
deleteItem: Function to delete an item (expense).
fetchData: Function to fetch data from localStorage.
waait: Function to introduce a delay (for demo purposes).
Loader
dashboardLoader: Function to load user data, budgets, and expenses.
Actions
dashboardAction: Handles different user actions such as creating a new user, creating a budget, creating an expense, and deleting an expense.
Technologies Used

React: For building the user interface.
React Router: For handling routing in the application.
React Toastify: For displaying toast notifications.
Local Storage: For storing user data, budgets, and expenses locally.
License

This project is licensed under the MIT License.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
