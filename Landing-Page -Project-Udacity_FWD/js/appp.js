

  //Creating Global Variables to use in the loops and other things
  
 const docFrag  = document.createDocumentFragment();
 const ulList   = document.getElementById('navbar__list');
 const sections = document.querySelectorAll('section');


   // building the nav bar
//set a loop to loop over the sections to add the <a> and <li> elements for each section
 sections.forEach( (section) =>{


    const listEl   = document.createElement("li");
    const anchorEl = document.createElement("a");

    // settig a class to these anchor elements to add to them some styles  
    anchorEl.classList.add('menu__link');

/**getting the values of the sections ('data-nav') attributes,
 *and setting them to the <a> elements as a text
*/  
    const text = section.getAttribute('data-nav');
    anchorEl.textContent = text ;   
    
/**getting the values of the id atributes
 * and setting them to the created href attributes to make links to these sections 
*/  
    const ids = section.id;            
    anchorEl.setAttribute('href' , `#${ids}`);           

    listEl.appendChild(anchorEl);     
    docFrag.appendChild(listEl); 

  // Scroll to section on link click
//making an event listener to make the navigating and scrolling through the page smooth when cliking on the section links
anchorEl.addEventListener('click', (evt) =>{
  evt.preventDefault();
  section.scrollIntoView({
      behavior :"smooth",
     
  });
});
  });


  ulList.appendChild(docFrag);
  const allLinks = document.querySelectorAll('a');






/** making an event listener to add 'my-active-class' to the sections that are in the view port
*   while scrooling to distinguish them and to highlight the selected section in the nav bar
*/

window.onscroll = function () {


//window.addEventListener('scroll',() => {
  sections.forEach(section => {
   

 const viewedSection   = document.querySelector(`a[href="#${section.id}"]`);
  
 const topOfTheSection = section.getBoundingClientRect().top;

 // Adding class 'selected' to section when near top of viewport
 if (topOfTheSection > -325 && topOfTheSection < 225  ){

   section.classList.add('my-active-class');
   viewedSection.classList.add('selected');
 
 } else{

  section.classList.remove('my-active-class');
  viewedSection.classList.remove('selected');
 
 }
})


  };  

