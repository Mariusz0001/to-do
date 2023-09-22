import { commandPost } from "@/app/lib/commands/commandPost";

const ADD_URL = "/move/";

const moveTask = async (id) => {
  if (id !== null && id !== undefined) {
    let body = {
      id: id,
    };

    await commandPost(ADD_URL, body);
  }
};

export { moveTask };
