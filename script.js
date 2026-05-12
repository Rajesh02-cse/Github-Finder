const btn = document.getElementById("searchBtn").addEventListener("click", function() {

  const username = document.getElementById("username").value;
  const api = "https://api.github.com/users/"+ username;

  fetch(api)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {      
      const result = document.getElementById("result");      
      result.innerHTML =`<img src="${data.avatar_url}" width="100" style ="border-radius: 50%;"/>
        <h2 style="color: #fffffe;" >${data.name} </h2>
        <p style="color: #94a1b2;">${data.bio } </p>
        <p>Followers : ${ data.followers}</p>
        <p>Public Repos : ${data.public_repos}</p>
        <a href="${data.html_url }" target ="_blank" style="color: #2cb67d;" >View GitHub Profile</a>`;
    });
});