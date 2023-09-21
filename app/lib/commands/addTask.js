const ADD_URL = "/add/";

const addTask = async (taskName, type) =>
{
    const newTask = {
        name: taskName,
        type: type
      };

    const params = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newTask),
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

export { addTask };
