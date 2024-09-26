import axios from "axios";
import { REGISTER_URL } from "../utils/constants"
import { LOGIN_URL } from "../utils/constants";

export class AuthService {

    static async register(formData) {
        const res = await axios.post(`${REGISTER_URL}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return res.data;
    }

    static async login(formData) {
        const res = await axios.post(`${LOGIN_URL}`, formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        return res.data;
      }
}