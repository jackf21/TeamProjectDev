window.onload = () => {
    filterMaterials()
}

function filterMaterials() {
    filterSubject(document.getElementById("subject").value)
    filterStatus(document.getElementById("status").value)
}

function filterSubject(subject) {
    var allElements;
    allElements = document.getElementsByClassName("filter");
    if (subject == "any") {
        subject = "";
    }
    
    for (var i = 0; i < allElements.length; i++) {
        RemoveItem(allElements[i]);
        if (allElements[i].className.indexOf(subject) > -1) {
            AddItem(allElements[i])
        }
    }
}

function filterStatus(status) {
    var allElements
    allElements = document.getElementsByClassName("checkbox");
    allStatus = document.getElementsByClassName("status");
    for (var i = 0; i < allElements.length; i++) {
        if (allElements[i].className.indexOf("show") > -1) {
            RemoveItem(allElements[i])
            if (status == "any") {
                AddItem(allElements[i])
            }
            else if (status == "finished" && allStatus[i].checked) {
                AddItem(allElements[i])
            }
            else if (status == "unfinished" && !allStatus[i].checked) {
                AddItem(allElements[i])
            }
        }
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
