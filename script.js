function search() {
    let listContainer = document.getElementById('list');
    let listItems = document.getElementsByClassName('listItem');
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase(); 

    let noResults = true;
    for (i = 0; i < listItems.length; i++) { 
        if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
            listItems[i].style.display="none";
            continue;
        }
        else {
            listItems[i].style.display="flex";
            noResults = false; 
            listContainer.style.display = noResults ? "none" : "block";
        }
    }
    
}
const cancelButton = document.getElementById('cancel');
const list = document.getElementById('list');

cancelButton.addEventListener('click', function () {
	contain.style.zIndex = '-2';
  list.style.display = 'none';
});

const searchInput = document.getElementById('searchbar');
const contain = document.getElementById('contain');

    searchInput.addEventListener('input', function () {
            const searchTerm = searchInput.value;

            if (searchTerm.length > 0) {
                // If there is input in the search box, set a higher z-index for the list
                contain.style.zIndex = '99';
            } else {
                // If the search box is empty, reset the z-index to its original value
                contain.style.zIndex = '-2';
            }
});




const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }
// //js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
        
        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// //js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
//  // js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});