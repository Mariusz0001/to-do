const ADD_URL = "/user/login/";

export const authenticate = async (username, password) => {
  if (username && username.length && password && password.length) {
    var details = {
      userName: username,
      password: password,
    };
    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + ADD_URL, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(details)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }
};
