export default async function session() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user_id");
  if (user === null && token === null) {
    return false;
  } else {
    let data = { user, token };
    console.warn(data);
    let result = await fetch(process.env.REACT_APP_BACKEND + "/session", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    return result.data.active_session;
  }
}
