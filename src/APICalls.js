import axios from "axios";

const backendURL = "http://h4g-backend.herokuapp.com";

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
