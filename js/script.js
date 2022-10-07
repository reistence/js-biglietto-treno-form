// Pseudo code
/*
Ask the user for their name with input
Ask the user the distance in km with input
Calculate fee distance * 0.21€ and round it to 2 decimal numbers 
Discount 20%Under 40%Over
Apply discount if necessary:

U : (((Distance * 0.21) * 0.2) * 100) / 100
O : (((Distance * 0.21) * 0.4) * 100) / 100

Show in the table the data given from the user into the ticket section:
name
fee
generate coach rnd nr. (from 1 to 9)
generate cp code rnd nr. (from 9200 to 9400)

*/

//DATA
const userNameInput = document.getElementById("name");
const userDistanceInput = document.getElementById("distance");
const userAgeInput = document.getElementById("age");
const age = userAgeInput.value;

//btns
const generateBtn = document.getElementById("generate");
const cancelBtn = document.getElementById("cancel");

// generate btn
generateBtn.addEventListener("click", function () {
  //input values
  const userName = userNameInput.value;
  console.log(userName);
  //insert the value in the table
  document.getElementById("username").innerHTML = userName;

  const distance = parseFloat(userDistanceInput.value);
  console.log(distance);
  const userAge = userAgeInput.value;
  console.log(userAge);

  // calc fee
  const fee = distance * 0.21;
  console.log(fee);
  const ticketFee = Math.round(fee * 100) / 100;
  console.log(ticketFee);
  let discountedTicket;
  let offer;

  if (userAgeInput.value === "underage") {
    // calc 20% discount
    discountedTicket = Math.round((ticketFee - ticketFee * 0.2) * 100) / 100;
    console.log(discountedTicket);
    //insert the value in the table
    document.getElementById("fee").innerHTML = "€ " + discountedTicket;
    //generate under offer
    offer = "Underage Offer";
    document.getElementById("offer").innerHTML = offer;
  } else if (userAgeInput.value === "over") {
    // calc 40% discount
    discountedTicket = Math.round((ticketFee - ticketFee * 0.4) * 100) / 100;
    console.log(discountedTicket);
    //insert the value in the table
    document.getElementById("fee").innerHTML = "€ " + discountedTicket;
    //generate senior offer
    offer = "Senior Offer";
    document.getElementById("offer").innerHTML = offer;
  } else {
    // NO discount
    discountedTicket = ticketFee;
    //insert the value in the table
    document.getElementById("fee").innerHTML = "€ " + discountedTicket;
    //generate std offer
    offer = "Standard Offer";
    document.getElementById("offer").innerHTML = offer;
  }

  //RND DETAILS

  //generate rnd coach nr
  const coachNumber = Math.floor(Math.random() * (9 - 1 + 1) + 1);
  console.log(coachNumber);
  //insert the value in the table
  document.getElementById("coach").innerHTML = coachNumber;
  //generate rnd cp code
  const cpCode = Math.floor(Math.random() * (9400 - 9200 + 1) + 9200);
  //insert the value in the table
  document.getElementById("cp-code").innerHTML = cpCode;
});

// cancel btn
cancelBtn.addEventListener("click", function () {
  userNameInput.value = "";
  userDistanceInput.value = "";
  userAgeInput.value = "";
});
