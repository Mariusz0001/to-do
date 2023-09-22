const commandPost = async (additionalURL, body) =>
{
    const params = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(body),
        method: "POST",
      };

    await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + additionalURL, params)
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

export { commandPost };