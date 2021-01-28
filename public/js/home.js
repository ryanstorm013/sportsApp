// const { response } = require("express");

$(document).ready(function () {
  //   console.log("sanity check");

  const teamSearch = $("#teamSearch");
  const formSubmit = $("#searchTeamBtn");
  const viewAllTeams = $("#viewTeamsBtn");
  // const updateTeams = $(".updateButton");

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

    fetch("/api/teams")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
          const dataDb = data[i];
          console.log(dataDb);
          const styleDisplayAllEl = $("<div>");
          const divText = `TEAM: ${dataDb.name} || TOUCHDOWNS: ${dataDb.touchdowns}`;
          // const updateBtn = $("<button>");
          // updateBtn.text(`Update`);
          // inputField.attr("value", `${dataDb.touchdowns}`)
          var editBtn = $("<a><button>EDIT</button></a>");
          editBtn.attr("href", `/home/edit/?id=${dataDb.id}`);

          // updateBtn.on("click", function () {
          //   console.log("update clicked");
          //   fetch("/api/teams", {
          //     method: "PUT",
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //     body: JSON.stringify(updateData),
          //   })
          //     .then((response) => console.log(response))
          //     .then((response) => response.json())
          //     .then((data) => {
          //       console.log(data);

          //       for (let i = 0; i < data.length; i++) {
          //         const updateDb = data[i];
          //         console.log(updateDb);

          //         // const strData = JSON.stringify(dataDb);
          //       }
          //     });
          // });

          styleDisplayAllEl.text(divText);
          styleDisplayAllEl.append(editBtn);
          // styleDisplayAllEl.append(updateBtn);
          $("#displayAllTeams").append(styleDisplayAllEl);

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

            } <button data-id=${
              dataDb.id
            } id="deleteButton"></button><button id="updateButton"></button><button id="favoriteButton"></button></div>`

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

$(".deleteButton").on("click", function () {
  // event.preventDefault();

  console.log("Update - Clicked");

  // fetch("/api/teams")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);

  // for (let i = 0; i < data.length; i++) {
  //   const updateDb = data[i];
  //   console.log(updateDb);

  //   // const strData = JSON.stringify(dataDb);
  // }
  // })
});
