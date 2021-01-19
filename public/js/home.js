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

    // function getTeams(userTeamSearch) {
    //     $.post("/api/login", {
    //       email: email,
    //       password: password
    //     })
    //       .then(function() {
    //         window.location.replace("/members");
    //         // If there's an error, log the error
    //       })
    //       .catch(function(err) {
    //         console.log(err);
    //       });
    //   }
  });

  viewAllTeams.on("click", function (event) {
    event.preventDefault();

    console.log("view all - clicked");
  });
});
