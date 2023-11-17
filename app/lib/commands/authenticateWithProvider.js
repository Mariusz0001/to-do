import axios from "axios";
import { LOGIN_PROVIDER_TYPE } from "../enums/loginProviderType";

const GOOGLE_ADD_URL = "/google";

export const authenticateWithProvider = async (provider, tokenId) => {
  switch (provider) {
    case LOGIN_PROVIDER_TYPE.GOOGLE: {
      return await axios
        .post(
          process.env.NEXT_PUBLIC_BACKEND_URL +
            process.env.NEXT_PUBLIC_USER_URL +
            GOOGLE_ADD_URL,
          { tokenId }
        )
        .then((response) => {
          return response.data;
        });
    }
  }
};
