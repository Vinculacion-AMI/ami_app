const get = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Autorizations: localStorage.getItem("token"),
    },
  });

  if (response.status === 200) {
    const json = await response.json();
    return json;
  } else {
    return false;
  }
};

export default get;
