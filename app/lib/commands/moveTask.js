import { commandPost } from "@/app/lib/commands/commandPost";

const ADD_URL = process.env.NEXT_PUBLIC_PERSONALTASKS_URL + "/move/";

const moveTask = async (id) => {
  if (id !== null && id !== undefined) {
    let body = {
      id: id,
    };

    await commandPost(ADD_URL, body);
  }
};

export { moveTask };
