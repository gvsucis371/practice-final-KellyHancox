// Grab all elements with class 'hl-header'
let headers = document.getElementsByClassName('hl-header');
// Loop through the header elements
for (i=0; i<headers.length; i++) {
    // Add a click event to each header
    headers[i].addEventListener('click', Hide);
    // Create the arrow element
    let newElement = document.createElement("SPAN");
    newElement.innerHTML = "\u25B6";
    // Place the arrow as the first child of the header element
    headers[i].insertBefore(newElement,headers[i].childNodes[0]);
}

function Hide() {
    // Set x to the first sibling element after the header (the ul element). This points to whatever called the click event (the header)
    let x = this.nextElementSibling;
    console.log(x)
    console.log(x.hidden)
    // Toggle the hidden attribute and the css visibility attribute (the ordinals list had styling prventing hidden from working on its own)
    if (x.hidden == false){
        x.hidden = true;
        x.style.visibility="hidden";
        // Set the first child of the header (the arrow) to point down
        this.firstChild.innerHTML = "\u25BC";
    }
    else {
        x.hidden = false;
        x.style.visibility="visible";
        // Set the first child of the header (the arrow) to point right
        this.firstChild.innerHTML = "\u25B6";
    }
}