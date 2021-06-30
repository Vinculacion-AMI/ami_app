const post = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-type": "application/json",
        Autorizations: localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
};
export default post;
