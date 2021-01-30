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
          // const styleDisplayAllEl = $("<div>");
          // const divText = `TEAM: ${dataDb.name} || TOUCHDOWNS: ${dataDb.touchdowns}`;
          var editBtn = $("<a>EDIT</a>");
          editBtn.attr("href", `/home/edit/?id=${dataDb.id}`);
          // styleDisplayAllEl.text(divText);
          // styleDisplayAllEl.append(editBtn);
          // styleDisplayAllEl.append();

          $("#displayAllteams")
            .append(editBtn)
            .append(
              `<div id="styleDisplayAll">${
                "TEAM: " +
                [dataDb.name] +
                " || TOUCHDOWNS: " +
                [dataDb.touchdowns]
              }
                <button type="submit" data-id=${
                  dataDb.id
                } class="deleteButton">Delete</button>

            </div>`,
              editBtn
            );
        }

        //when the delete button is clicked, send the data to the backend to delete the button
        $("#deleteButton").on("click", function (event) {
          event.preventDefault();

          console.log("delete button - clicked");
        });
      });
  });
});
