
//parameter transferred from button (Parameter same as category)
function filterPost(value) {
 
 //Button class code
 let buttons = document.querySelectorAll(".button-value");
 buttons.forEach((button) => {
 //analyses if value equals innerText
 if (value.toUpperCase() == button.innerText.toUpperCase()) {
  button.classList.add("active");
 } else {
  button.classList.remove("active");
 }
    });
  
    //selects all Posts to display
    let elements = document.querySelectorAll(".Pcard");
    //to loop through all Posts
    elements.forEach((element) => {
      //display all Posts  on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //to check if element have category class
        if (element.classList.contains(value)) {
          //this will display element from category
          element.classList.remove("hide");
        } else {
          //this will just hide the other elements
          element.classList.add("hide");
        }
      }
    });
}
  




//Search button click
document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".Pcard-name");
    let Pcards = document.querySelectorAll(".Pcard");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching Pcard
        Pcards[index].classList.remove("hide");
      } else {
        //hide others
        Pcards[index].classList.add("hide");
      }
    });
});
  




//Initially display all posts
window.onload = () => {
filterPost("all");
};
  



//autocomplete serch box
let searchable = [
    'UX CaseStudy | Lighthouse',
    'BIM and Eng | Website-ReCaseStudy',
    'LUMOS:HnM Graphic CaseStudy',
    'Portfolio DZYN',
    'Mobile Search Design',
    'CaseStudy: SAVOR-Food delivery App',
    'fitGYM',
    'Ai-Professor',
    'Minimalistic D E S I G N',
    'Trade APP',
    'Mechimed Technologies',
    'TEDx WOMEN CIT',
    'L O K I',
    'Project Design',
    
];
const searchInput = document.getElementById('search-input');
const searchWrapper = document.querySelector('.wrap');
const resultsWrapper = document.querySelector('.results');
  
searchInput.addEventListener('keyup', () => {
let results = [];
let input = searchInput.value;
    if (input.length) {
      results = searchable.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
      });
    }
    renderResults(results);
});
  
function renderResults(results) {
    if (!results.length) {
      return searchWrapper.classList.remove('show');
    }
  
    const content = results
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join('');
  
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}
  