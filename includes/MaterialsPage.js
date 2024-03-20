window.onload = () => {
    filterMaterials("any")
}

function filterMaterials(item) {
    var x, i;
    x = document.getElementsByClassName("filter");
    if (item = "any") {
        item = "filter";
    }
    
    for (i = 0; i < x.length; i++) {
        RemoveItem(x[i], "show");
        if (x[i].className.indexOf(item) > -1) {
            AddItem(x[i], "show")
        }
    }
}

function AddItem(item, name) {
    var arr1;
    arr1 = item.className.split(" ");
    if (arr1.indexOf(name == -1)) {
        item.className += " " + name;
    }
    
}

function RemoveItem (item, name) {
    var arr1;
    arr1 = item.className.split(" ");
    while (arr1.indexOf(name) > -1) {
        arr1.splice(arr1.indexOf(name), 1)
    }
    item.className = arr1.join(" ")
}