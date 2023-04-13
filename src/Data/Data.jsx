import {
  cardimg1,
  cardimg2,
  cardimg3,
  cardimg4,
  goggleimg,
  fbimg,
} from "../Utils/images";

// card data start
const card1 = {
  img: cardimg1,
  heading: "Ad-free music listening",
  para: "Enjoy uninterrupted music.",
};
const card2 = {
  img: cardimg2,
  heading: "Offline playback",
  para: "Save your data by listening offline.",
};
const card3 = {
  img: cardimg3,
  heading: "Play everywhere",
  para: "Listen on your speakers, TV, and other favorite devices.",
};
const card4 = {
  img: cardimg4,
  heading: "Pay your way",
  para: "Prepay with Paytm, UPI, and more.",
};
// button data start
const button1 = {
  img: fbimg,
  text: "Sign up with facebook",
  bgcolor: "#405a93",
  border: "none",
  textColor: "white",
};

const button2 = {
  img: goggleimg,
  border: "1px solid gray",
  text: "Sign up with google",
};
// button data end

// Login input data start

const input1 = {
  label: "What's your email?",
  id: "email",
  type: "email",
  placeholder: "Enter your email.",
};
const input2 = {
  label: "Confirm your email",
  id: "email",
  type: "email",
  placeholder: "Enter your email again.",
};
const input3 = {
  label: "Create a password",
  id: "password",
  type: "password",
  placeholder: "Create a password",
};
const input4 = {
  label: "What should we call you?",
  id: "text",
  type: "text",
  placeholder: "Enter a profile name.",
};
const input5 = {
  head: "What's your date of birth?",
  label: "Year",
  id: "year",
  type: "year",
  placeholder: "YYYY",
};
const input6 = {
  label: "Month",
  id: "year",
  type: "month",
  placeholder: "Month",
};
const input7 = {
  label: "Day",
  id: "year",
  type: "number",
  placeholder: "DD",
  min: 1,
  max: 31,
};

// Login input data start

export {
  card1,
  card2,
  card3,
  card4,
  button1,
  button2,
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
};
