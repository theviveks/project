let tablinks = document.getElementsByClassName("title1");
let tabcontents = document.getElementsByClassName("title-con");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("activelink");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-con");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("active-con");
}


//------------------------------------//

let workItems = document.querySelectorAll('.work');
let visibleItems = 3; // Number of initially visible items

function updateItemVisibility() {
    for (let i = 0; i < workItems.length; i++) {
        if (i < visibleItems) {
            workItems[i].style.display = 'inline-block';
        } else {
            workItems[i].style.display = 'none';
        }
    }
}

updateItemVisibility();

let loadMoreBtn = document.querySelector('#load-more');
let showLessBtn = document.createElement('button');
showLessBtn.innerText = "See less";
showLessBtn.style.display = 'none'; // Initially hide the "Show Less" button
loadMoreBtn.parentNode.appendChild(showLessBtn);

loadMoreBtn.onclick = () => {
    visibleItems += 3;
    updateItemVisibility();

    if (visibleItems >= workItems.length) {
        loadMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'flex'; // Show "Show Less" when all items are visible
    }
};

showLessBtn.onclick = () => {
    visibleItems = 3; // Reset to show only 3 items
    updateItemVisibility();

    loadMoreBtn.style.display = 'flex'; // Show "See more" button
    showLessBtn.style.display = 'none'; // Hide "Show Less" button
};

//-------------------------------//

var sidemenu = document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-300px"
}