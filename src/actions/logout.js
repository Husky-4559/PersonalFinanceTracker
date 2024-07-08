// react-router-dom imports
import { redirect } from "react-router-dom";

//helpers
import { deleteItem } from "../helpers";

//library
import { toast } from "react-toastify";

export async function logoutAction() {
	//Delete the user
	deleteItem({
		key: "userName",
	});
	deleteItem({
		key: "budgets",
	});
	deleteItem({
		key: "expenses",
	});
	toast.success("You've Sucessfully Deleted Your Account!");
	//return redirect
	return redirect("/");
}
