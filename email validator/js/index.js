// console.log("..hey..");

let result = {
  tag: "",
  free: true,
  role: false,
  user: "jaish.2002",
  email: "jaish.2002@gmail.com",
  score: 0.64,
  state: "deliverable",
  domain: "gmail.com",
  reason: "valid_mailbox",
  mx_found: true,
  catch_all: null,
  disposable: false,
  smtp_check: true,
  did_you_mean: "",
  format_valid: true
};

submitbtn.addEventListener("click", async (e) => {
  e.preventDefault()
  console.log("clicked");
  ResultCont.innerHTML= '<img src="img/loading.svg" width="40" alt=""></img>'
  let key = "ema_live_bVqB63sRSgKLs5ywmFD5edaVRHz5Oo1l36vywCoL";
  let email = document.getElementById("username").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
  let res = await fetch(url)
  let result = await res.json()
  let str = ``;
  for (key of Object.keys(result)) {
    // console.log(key)
    if(result[key] !== "" && result[key] !== " "){
    str = str + `<div>${key}: ${result[key]}</div>`;
  }}
  console.log(str)
  ResultCont.innerHTML = str;
});
