import axios from "axios";

const backendURL = "http://127.0.0.1:5000";

export function getInterestsFromGithub(callback, username) {
  const params = { githubID: username };
  console.log(params);
  const url = backendURL + "/githubinfo";
  console.log(url);

  axios.get(url, { params: params }).then((response) => {
    console.log(response);
    callback(response.data.concepts);
  });
}
