

$(document).ready(function() {


  $(document).on("click", ".deleteButton", (e) => {
      const targetId = e.target.getAttribute("data-id");

      $.ajax({
          //url: "/teams/" + targetId,
          url: `/teams/${targetId}`,
          method: "DELETE"
      }).then(res => {
            location.reload()
      })

      console.log("good")
  })

 

})



