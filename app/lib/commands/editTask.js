import { commandPost } from "@/app/lib/commands/commandPost";

const ADD_URL = "/edit/";

const editTask = async (id, taskName) => {
  let body = {
    id: id,
    name: taskName
  };

  await commandPost(ADD_URL, body);
}

export { editTask };

