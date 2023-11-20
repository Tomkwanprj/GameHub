import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b2e5615bd9c84e3981f794148b55cfb5",
  },
});
