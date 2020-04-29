$(document).ready(function () {
  $('img').hover(function () {
    $(this).css("width", "275px");
  },
    function () {
      $(this).css("width", "250px");
    });
});

let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    gitObject.forEach(element => {
      let repo = document.createElement("a");
      repo.setAttribute('href', element.html_url);
      repo.innerHTML = element.name;
      document.getElementById('repos').appendChild(repo);
    });
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/Beastskyler/repos", true);
gitHubRequest.send();