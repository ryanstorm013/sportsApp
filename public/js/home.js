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

    fetch("/teams")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
          const dataDb = data[i];
          console.log(dataDb);

          // const strData = JSON.stringify(dataDb);

          $("#displayAllteams").append(
            `<ul>${
              "TEAM NAME: " +
              [dataDb.name] +
              " || TOUCHDOWNS: " +
              [dataDb.touchdowns]
            } </ul>`
          );
        }
      });
  });

  // predictions API

  // fetch("https://api-football-v1.p.rapidapi.com/v2/predictions/157462", {
  //   method: "GET",
  //   headers: {
  //     "x-rapidapi-key": "364a164466msh24f0cfc3cb4a195p18731ajsn7513dd3705cb",
  //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  //   },
  // })
  //   .then((responseApi) => {
  //     console.log(responseApi);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
});
