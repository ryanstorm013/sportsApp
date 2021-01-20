// const { response } = require("express");

$(document).ready(function () {
  //   console.log("sanity check");

  const teamSearch = $("#teamSearch");
  const formSubmit = $("#searchTeamBtn");
  const viewAllTeams = $("#viewTeamsBtn");

  formSubmit.on("click", function (event) {
    event.preventDefault();

    console.log("search button - clicked");
    const userTeamSearch = teamSearch.val().trim();
    console.log(userTeamSearch);
  });

  viewAllTeams.on("click", function (event) {
    event.preventDefault();
    console.log("view all - clicked");
    $(".hidden").removeClass("hidden");

    //Thomas Try
    fetch("/teams")
      .then((response) => response.json())
      .then((data) => console.log(data));

    // something else to add to html div
  });
});
