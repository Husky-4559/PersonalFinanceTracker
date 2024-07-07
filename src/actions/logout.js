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
	toast.success("You've Sucessfully Deleted Your Account!");
	//return redirect
	return redirect("/");
}
