window.onload = () => {
    filterMaterials()
}

const filterMaterials = () => {
    filterSubject(document.getElementById("subject").value)
    filterStatus(document.getElementById("status").value)
}

const filterSubject = (subject) => {
    let allElements;
    allElements = document.getElementsByClassName("filter");
    if (subject == "any") {
        subject = "";
    }
    
    for (let i = 0; i < allElements.length; i++) {
        RemoveItem(allElements[i]);
        if (allElements[i].className.indexOf(subject) > -1) {
            AddItem(allElements[i])
        }
    }
}

const filterStatus = (status) => {
    let allElements
    allElements = document.getElementsByClassName("checkbox");
    allStatus = document.getElementsByClassName("status");
    for (let i = 0; i < allElements.length; i++) {
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

const AddItem = (element) => {
    let elementClasses;
    elementClasses = element.className.split(" ");
    if (elementClasses.indexOf("show" == -1)) {
        element.className += " show";
    }
    
}

const RemoveItem = (element) => {
    let elementClasses;
    elementClasses = element.className.split(" ");
    while (elementClasses.indexOf("show") > -1) {
        elementClasses.splice(elementClasses.indexOf("show"), 1)
    }
    element.className = elementClasses.join(" ");
}

