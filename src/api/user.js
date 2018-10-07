import axios from "./index";

export const getUserList = () => {
	return axios.request({
		url: "/user/index",
		method: "get"
	})
}

export const addUser = (data) => {
	return axios.request({
		url: "/user/add",
		method: "post",
		data
	})
}
