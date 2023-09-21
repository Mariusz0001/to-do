const ADD_URL = "/move/";

const moveTask = async (id) =>
{
    const updatingTask = {
        id: id
      };

    const params = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(updatingTask),
        method: "POST",
      };

    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + ADD_URL, params)
        .then((data) => {
          console.log("data", data);
        })
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => {
          console.log("error", error);
        });
}

export { moveTask };
