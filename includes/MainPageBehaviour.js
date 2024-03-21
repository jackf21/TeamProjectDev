var ScrollInterval;

window.onload = () => {
    document.getElementById("radioStart").checked = true;
    ChangeContent();
    ScrollInterval = setInterval("Scroll()", 5000);
}

function Scroll() {
  var radioButtons, value;
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
  ChangeContent();
}

function AutoScroll() {
  clearInterval(ScrollInterval);
  ScrollInterval = setInterval("Scroll()", 5000);
  Scroll();
}

function ManualScroll() {
  clearInterval(ScrollInterval);
  ScrollInterval = setInterval("AutoScroll()", 20000);
  ChangeContent();
}

function ChangeContent() {
  var radioButtons, articles, value;
  radioButtons = document.getElementsByName("contentScroll")
  articles = document.getElementsByClassName("wholeArticle")

  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      value = (radioButtons[i].value - 1) * 3;
    }
  }

  for(var i = 0; i < articles.length; i++) {
    RemoveItem(articles[i])
  }

  for (var i = 0; i < 3; i++) {
    AddItem(articles[value + i])
  }
}

function AddItem(element) {
  var elementClasses;
  elementClasses = element.className.split(" ");
  if (elementClasses.indexOf("show" == -1)) {
      element.className += " show";
  }
  
}

function RemoveItem (element) {
  var elementClasses;
  elementClasses = element.className.split(" ");
  while (elementClasses.indexOf("show") > -1) {
      elementClasses.splice(elementClasses.indexOf("show"), 1)
  }
  element.className = elementClasses.join(" ")
}
