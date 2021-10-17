const ajaxCall = (callback) => callback(["user1"]);

const getUsers = (callback) => {
	ajaxCall((data) => {
		const users = data.map(el => {
			const str = el.split("");
			str[0] = str[0].toUpperCase();
			return str.join("");
		});
		callback(users);
	});
}

getUsers(console.log);