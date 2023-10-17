const ADD_URL = "/tokens/connect/";

export const authenticate = async (username, password) => {
  if (username && username.length && password && password.length) {
    var details = {
      userName: username,
      password: password,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + ADD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formBody,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data;
      });
  }
};
