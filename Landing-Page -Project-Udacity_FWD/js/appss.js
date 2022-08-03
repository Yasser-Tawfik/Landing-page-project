
  //Creating Global Variables to use in the loops and other things
  
  const docFrag  = document.createDocumentFragment();
  const ulList   = document.getElementById('navbar__list');
  const sections = document.querySelectorAll('section');
 
 
    // building the nav bar
 //set a loop to loop over the sections to add the <a> and <li> elements for each section
 for(let i = 0 ; i < sections.length ; i++ ) {
 
 
     const listEl   = document.createElement("li");
     const anchorEl = document.createElement("a");
 
 
 /**getting the values of the sections ('data-nav') attributes,
  *and setting them to the <a> elements as a text
 */  
     const text = sections[i].getAttribute('data-nav');
     anchorEl.textContent = text ;   
     
 /**getting the values of the id atributes
  * and setting them to the created href attributes to make links to these sections 
 */  
     const ids = sections[i].id;            
     anchorEl.setAttribute('href' , `#${ids}`);    
     
          // settig a class to these anchor elements to add to them some styles  

     anchorEl.classList.add('menu__link');

 
     listEl.appendChild(anchorEl);     
     docFrag.appendChild(listEl); 
 
   // Scroll to section on link click
 //making an event listener to make the navigating and scrolling through the page smooth when cliking on the section links
     anchorEl.addEventListener('click', (evt) =>{
         evt.preventDefault();
         sections[i].scrollIntoView({
             behavior :"smooth",
            
         });
     });
   };
 
 
   ulList.appendChild(docFrag);
 
   const links = document.querySelectorAll('a');

 
 
 
 
 /** making an event listener to add 'my-active-class' to the sections that are in the view port
 *   while scrooling to distinguish them and to highlight the selected section in the nav bar
 */



/*
 //window.addEventListener('scroll',() => {

 
    window.onscroll = function () {

   sections.forEach(section => {
 


  const topOfTheSection = section.getBoundingClientRect().top;
  const  sectionTitle = section.getAttribute("data-nav");

 
  // Adding class 'selected' to section when near top of viewport

  for ( let link of allLinks){


  if (topOfTheSection > -325 && topOfTheSection < 225  && link.textContent === sectionTitle  ) {
 
    section.classList.add('my-active-class');
    link.classList.add('selected');

  } else{

   section.classList.remove('my-active-class');
   link.classList.remove('selected');
  };
    };
});
});
  */












/*
 window.addEventListener('scroll',() => {

    for (let i =0 ; i < allLinks.length ; i++) { 
  const viewedSection =  document.querySelector(`a[href="#${section.id}"]`);
  const topOfTheSection = section.getBoundingClientRect().top;

  if (viewedSection === `#${section.id}` && topOfTheSection > -325 && topOfTheSection < 225 ){

    viewedSection.classList.add('selected');


  } else {

   viewedSection.classList.remove('selected');


  }

  }


    })
  */

















    window.onscroll = function () {
        for (let section of sections) {
          const sectionDim = section.getBoundingClientRect();
          let sectionTitle = section.getAttribute("data-nav");
      
          const links = document.querySelectorAll("li");
          if (sectionDim.top >= 0 && sectionDim.top < 300) {
            for (let link of links) {
                section.classList.remove('my-active-class');

              link.classList.remove("selected");
              if (link.textContent === sectionTitle) {
                section.classList.add('my-active-class');
                link.classList.add("selected");
              

              }
            }
          }
        }
      };
