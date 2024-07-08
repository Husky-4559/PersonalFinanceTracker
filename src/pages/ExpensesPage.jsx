//react router dom exports
import { useLoaderData } from "react-router-dom";

// helpers import
import { fetchData } from "../helpers";

//component import
import Table from "../components/Table";

//loader
export function expensesLoader() {
	const expenses = fetchData("expenses");
	return { expenses };
}

const ExpensesPage = () => {
	const { expenses } = useLoaderData();

	return (
		<div className="grid-lg">
			<h1>All Expenses</h1>
			{expenses && expenses.length > 0 ? (
				<div className="grid-md">
					<h2>
						Recent Expenses <small>({expenses.length}total)</small>
					</h2>
					<Table expenses={expenses} />
				</div>
			) : (
				<p>No Expenses To Show</p>
			)}
		</div>
	);
};

export default ExpensesPage;
