import { commandPost } from "@/app/lib/commands/commandPost";

const ADD_URL = process.env.NEXT_PUBLIC_PERSONALTASKS_URL+"/edit/";

const editTask = async (id, taskName) => {
  let body = {
    id: id,
    name: taskName
  };

  await commandPost(ADD_URL, body);
}

export { editTask };

