import fetch from "isomorphic-fetch";

export function fetchPopularRepos(title = all) {
  const encodedURI = encodeURI(
    `https://www.goodreads.com/book/auto_complete?format=json&q=${title}`
  );

  return fetch(encodedURI, { mode: "no-cors" })
    .then(data => data.text())
    .then(repos => {
      return repos ? JSON.parse(repos) : {};
    })
    .catch(error => {
      console.log("err", error);
      return null;
    });
}
