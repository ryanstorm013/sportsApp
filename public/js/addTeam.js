console.log("add a team page connection success");

const teamNameInput = $("#teamNameInput");
const touchdownInput = $("#touchdownInput");
const addTeamForm = $("#addTeambtn");

addTeamForm.on("click", function (event) {
  event.preventDefault();

  console.log("add team button clicked");
  const teamNameInputVal = teamNameInput.val().trim();
  const touchdownInputVal = touchdownInput.val().trim();

  console.log(teamNameInputVal);
  console.log(touchdownInputVal);
});
