
function showPage(id) {
    elements = document.getElementsByClassName("page");
    for (var i = 0, element; element = elements[i++];) {
        element.style.display = "block";
    }
    document.getElementById(id).style.display = "contents";
}   