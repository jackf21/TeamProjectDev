var ScrollInterval;

window.onload = () => {
    document.getElementById("radioStart").checked = true;
    ScrollInterval = setInterval("Scroll()", 5000);
}

function Scroll() {
  var value, radioButtons;
  radioButtons = document.getElementsByName("contentScroll")
  
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      radioButtons[i].checked = false;
      value = radioButtons[i].value;
    }
  }
  value++;
  if (value > 3) {
    value = 1;
  }
  radioButtons[value-1].checked = true;
}

function AutoScroll() {
  Scroll();
  clearInterval(ScrollInterval);
  ScrollInterval = setInterval("Scroll()", 5000);
}

function ManualScroll() {
  clearInterval(ScrollInterval);
  ScrollInterval = setInterval("AutoScroll()", 20000);
}
