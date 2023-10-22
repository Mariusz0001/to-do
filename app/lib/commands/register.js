const ADD_URL = "/user/register/";

export const register = async (username, email, password) => {
  if (username && username.length && password && password.length && email && email.length) {
    var details = {
      userName: username,
      email: email,
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
      })
      .catch((error) => {
        return error;
      });
  }
};
