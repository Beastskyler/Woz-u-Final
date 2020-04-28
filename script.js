$(document).ready(function () {
  $('img').hover(function () {
    $(this).css("width", "25%");
  },
    function () {
      $(this).css("width", "20%");
    });
});

let gitHubRequest = new XMLHttpRequest();
gitHubRequest.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let gitObject = JSON.parse(this.responseText);
    gitObject.forEach(element => {
      document.getElementById("gitBio").innerHTML += element.name;
    });
  }
};
gitHubRequest.open("GET", "https://api.github.com/users/Beastskyler/repos", true);
gitHubRequest.send();