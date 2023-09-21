import { commandPost } from "@/app/lib/commands/commandPost";

const ADD_URL = "/add/";

const addTask = async (taskName, type) => {
  let body = {
    name: taskName,
    type: type
  };

  await commandPost(ADD_URL, body);
}

export { addTask };

