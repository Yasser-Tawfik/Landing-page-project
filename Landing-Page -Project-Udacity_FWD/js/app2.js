
  //Creating Global Variables to use in the loops and other things
  
  const docFrag  = document.createDocumentFragment();
  const ulList   = document.getElementById('navbar__list');
  const sections = document.querySelectorAll('section');
 
 
  const creatingTheNavBar = {
    creatingAnchorElements : () => {

      sections.forEach( (section) => {


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
      });    

    },

    creatingListElements : () => {

      sections.forEach( (section) =>{
      const listEl   = document.createElement("li");

      listEl.appendChild(anchorEl);     
      docFrag.appendChild(listEl); 
      });

    },

makingSmoothScrolling : () => {
  allLinks.forEach( (link) => {
    link.onclick = (evt) => {
      evt.preventDefault();
      const currentSection = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top : currentSection.offsetTop ,
        behavior : "smooth",
      });
    }
  });



},



  } 

  ulList.appendChild(docFrag);



document.addEventListener(
    'DOMContentLoaded',
     creatingTheNavBar.creatingAnchorElements().bind(creatingTheNavBar)
);

document.addEventListener(
  'DOMContentLoaded',
   creatingTheNavBar.creatingListElements().bind(creatingTheNavBar)
);

document.addEventListener(
  'DOMContentLoaded',
   creatingTheNavBar.makingSmoothScrolling().bind(creatingTheNavBar)
);



/*
const allLinks = document.querySelectorAll('a');



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
  */
