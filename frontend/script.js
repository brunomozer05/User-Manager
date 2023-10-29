const crud = async () => {
  const url = "http://localhost:8080/1";

  const request = await fetch(url, {
    body: JSON.stringify({
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      birthDate: document.getElementById('birthDate').value,
      number: Number.parseInt(document.getElementById('number').value),
    }),
    method: "PUT",
    headers: {"Content-Type": "application/json"}
  });  

  // const request = await fetch(url).then(res => res.json())

  console.log(request)
};
