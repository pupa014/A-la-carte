firebase.database().ref('limitedorder/announced/'+shop).once('value').then((dataSnapshot) => {
      let desiredValue = dataSnapshot.val();
      document.getElementById('announce').innerHTML += "<tr><td>"+ desiredValue +"</td></tr>"
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    })
