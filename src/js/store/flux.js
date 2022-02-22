const BASE_URL = process.env.BASE_URL;


const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			user: {
				username: "",
				id: 0,
				password:"",
				nombre:""
			},
			users:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getUsers: async () => {
				let store = getStore();
				try {
					console.log(BASE_URL);
					let response = await fetch(`${BASE_URL}/users`);
					let listUsers = await response.json();
					console.log(listUsers);
					setStore({users: listUsers});
					return store.users;
				} catch (error) {
					console.log(error);
				}
				
				return true;
			}

		}
	};
};

export default getState;
