import {
  cardimg1,
  cardimg2,
  cardimg3,
  cardimg4,
  goggleimg,
  fbimg,
  check,
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
  name: "email",
  id: "email",
  type: "email",
  placeholder: "Enter your email.",
};
const input2 = {
  label: "Confirm your email",
  id: "email",
  name: "email",
  type: "email",
  placeholder: "Enter your email again.",
};
const input3 = {
  label: "Create a password",
  id: "password",
  name: "password",
  type: "password",
  placeholder: "Create a password",
};
const input4 = {
  label: "What should we call you?",
  id: "text",
  name: "text",
  type: "text",
  placeholder: "Enter a profile name.",
};
const input5 = {
  head: "What's your date of birth?",
  label: "Year",
  id: "year",
  type: "year",
  name: "year",
  placeholder: "YYYY",
};
const input6 = {
  label: "Month",
  id: "year",
  type: "month",
  name:"month",
  placeholder: "Month",
};
const input7 = {
  label: "Day",
  id: "Day",
  type: "number",
  placeholder: "DD",
  name: "day",
  min: 1,
  max: 31,
};

const email = {
  label: "Enter your email",
  id: "email",
  type: "email",
  placeholder: "Enter your email.",
  name: "email",
};
const password = {
  label: "Enter your password",
  id: "password",
  type: "password",
  placeholder: "Enter your Password.",
  name: "password",
};

// Login input data end

// footer data start

// const list1 = {
//   li1: "company",
//   li2: "About",
//   li3: "Jobs",
//   li4: "For the Record",
// };
// const list2 = {
//   li1: "company",
//   li2: "About",
//   li3: "Jobs",
//   li4: "For the Record",
// };
// const list3 = {
//   li1: "company",
//   li2: "About",
//   li3: "Jobs",
//   li4: "For the Record",
// };
// footer data end

// Plans card data start

const plansCard1 = {
  head: "One-time plans available",
  headerbg: "d-none",
  title: "Mini",
  p1: "From ₹7/day",
  p2: "1 account on mobile only",
  img: check,
  tikBlock: "d-none ",
  check1: "Ad-free music listening on mobile",
  check2: "Group Session",
  check3: "Download 30 songs on 1 mobile device",
  button: "VIEW PLANS",
  terms: "Terms and conditions apply.",
  bottomMargin: "6rem",
};

const plansCard2 = {
  Header: "1 month free",
  headerbg: "bg-primary",
  head: "One-time plans available",
  title: "Individual",
  p1: "₹119/month after offer period",
  p2: "1 account",
  img: check,
  tikBlock: "d-none",
  check1: "Ad-free music listening",
  check2: "Group Session",
  check3: "Download 10k songs/device on 5 devices",
  button: "VIEW PLANS",
  terms: "Terms and conditions apply.",
  months:
    "1 month free not available for users who have already tried Premium.",
  bottomMargin: "6rem",
};

const plansCard3 = {
  Header: "1 month free",
  headerbg: "bg-primary",
  head: "One-time plans available",
  title: "Duo",
  p1: "₹149/month after offer period",
  p2: "2 account",
  img: check,
  tikBlock: "d-flex",
  check1: "For couples who live together",
  check2: "Ad-free music listening",
  check3: "Group Session",
  check4: "Download 1/0k songs/device, on 5 devices per account",
  button: "VIEW PLANS",
  terms: "Terms and conditions apply.",
  months:
    "1 month free not available for users who have already tried Premium.",
  bottomMargin: "2.5rem",
};

const plansCard4 = {
  Header: "1 month free",
  headerbg: "bg-primary",
  head: "One-time plans available",
  title: "Family",
  p1: "₹179/month after offer period",
  p2: "Up to 6 accounts",
  img: check,
  tikBlock: "d-flex",
  check1: "For family who live together",
  check2: "Block explicit music",
  check3: "Ad-free music listening",
  check4: "Group Session",
  check5: "Download 10k songs/device on 5 devices",
  button: "VIEW PLANS",
  terms: "Terms and conditions apply.",
  months:
    "1 month free not available for users who have already tried Premium.",
  bottomMargin: "2rem",
};

// Plans card data End

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
  email,
  password,
  // list1,
  // list2,
  // list3,
  plansCard1,
  plansCard2,
  plansCard3,
  plansCard4,
};
