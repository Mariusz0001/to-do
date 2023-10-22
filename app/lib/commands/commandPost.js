import { getUserToken } from "@/app/lib/utils";

const commandPost = async (additionalURL, body) => {
  const params = {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${getUserToken()}`,
    },
    body: JSON.stringify(body),
    method: "POST",
  };

  await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + additionalURL, params)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      //todo disable on prod
      console.log("error", error);
    });
};

export { commandPost };
