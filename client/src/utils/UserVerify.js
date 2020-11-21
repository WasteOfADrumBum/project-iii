import axios from "axios";

export const checkUser = async () => {
  try {
    // Get Token
    const token = localStorage.getItem("__token__");
    // Throw Error if there is No Token
    if (!token) throw new Error("No Token");
    // Authorize token bearer
    const response = await axios.get("/api/v1/users", {
      headers: { Authorization: "Bearer " + token },
    });
    console.log("Authorized token bearer response:" + response);
  } catch (error) {
    console.log("checkUser catch " + error);
  }
};
