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
            `<div id="styleDisplayAll">${
              "TEAM: " +
              [dataDb.name] +
              " || TOUCHDOWNS: " +
              [dataDb.touchdowns]
            }   
                <button type="submit" data-id=${dataDb.id} class="deleteButton">Delete</button>
                <button type="submit" class="updateButton">Update</button>
              
            </div>`
          );
        }
      });
  });
});
