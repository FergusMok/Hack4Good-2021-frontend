import axios from "axios";

const backendURL = "http://127.0.0.1:5000 ";

export function getInterestsFromGithub(callback, username) {
  const params = { githubID: username };
  axios
    .get(backendURL + "/githubinfo", { withCredentials: true, params: params })
    .then((response) => {
      callback(response.concepts);
    });
}
