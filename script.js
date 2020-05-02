$(document).ready(function () {
  $('img').hover(function () {
    $(this).css("width", "+=25px");
  },
    function () {
      $(this).css("width", "-=25px");
    });
});

function changeColor(bc, c){
  document.body.style.backgroundColor = bc;
  document.body.style.color = c;
}

let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    gitObject.forEach(element => {
      let repo = document.createElement("a");
      repo.setAttribute('href', element.html_url);
      repo.setAttribute('target', '_blank');
      repo.innerHTML = element.name;
      let bre = document.createElement('br');
      document.getElementById('repos').appendChild(bre);
      document.getElementById('repos').appendChild(repo);
    });
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/Beastskyler/repos", true);
gitHubRequest.send();