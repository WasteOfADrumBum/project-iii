import axios from "axios";

export const userDataMount = async () => {
  try {
    const token = localStorage.getItem("__token__");
    axios
      .get("/api/v1/users/", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        const userData = res.data.data.data;
        console.log(userData);
      });
  } catch (error) {
    console.log("userDataMount catch " + error);
  }
};
