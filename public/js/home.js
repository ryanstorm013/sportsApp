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

    // Function to grab teams from the database
    const getTeams = () => {
      fetch(`/api/teams`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success in getting teams:", data);
        })
        .catch((error) => console.error("Error:", error));
    };

    getTeams();
  });
});
