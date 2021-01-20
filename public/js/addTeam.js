console.log("add a team page connection success");

const teamNameInput = $("#teamNameInput");
const touchdownInput = $("#touchdownInput");
const addTeamForm = $("#addTeambtn");

addTeamForm.on("click", function (event) {
  event.preventDefault();
  console.log("add team button clicked");
  $(".hidden").removeClass("hidden");

  const teamNameInputVal = teamNameInput.val().trim();
  const touchdownInputVal = touchdownInput.val().trim();

  const team = {
    name: teamNameInputVal,
    touchdowns: touchdownInputVal,
  };
  console.log(team);

  fetch("/teams", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(team),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      for (let i = 0; i < data.length; i++) {
        const addDataDb = data[i];
        console.log(addDataDb);

        $("#newTeamAdded").append(
          `<ul>${
            "TEAM NAME: " +
            [addDataDb.name] +
            " || TOUCHDOWNS: " +
            [addDataDb.touchdowns]
          } </ul>`
        );
      }
    });
});
