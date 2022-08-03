

    //Creating Global Variables to use in the loops

const ulList  = document.getElementById('navbar__list');
const allSecs = document.querySelectorAll('section');


    // building the navigation bar
    //set a for loop to loop over the sections to add the <a> and <li> elements for each section
  for(let i = 0 ; i < allSecs.length ; i++ ) {

    
       const listEl   = document.createElement("li");
       const anchorEl = document.createElement("a");
    
    
    /**getting the values out of the sections ('data-nav') attributes,
     *and setting them to the <a> elements as a text
     */  
       
       anchorEl.innerText = allSecs[i].dataset.nav ;   
       
    
    /** getting the values out of the id attributes
     *  and setting them to the created href attributes as links to these sections 
     */  
                   
       anchorEl.setAttribute('href' , `#${allSecs[i].id}`);           
    
    // settig a class to these <a> elements to add to them some styles  
       anchorEl.classList.add('menu__link');
    
    // and finally appendig these <a> elements inside the <li> elements 
    // and appendig these <li> elements to the <ul> element
    
       listEl.append(anchorEl);     
       ulList.append(listEl);
       
      
   };   
     




 // Scroll to section on link click

/**  using the onclick event for each link to go to the selected section in the nav bar
 *   by using the scrollTo() method and The Window Object to scroll through the page
 *   to the top of the clicked section by using .offsetTop property
 */
 const allLinks = document.querySelectorAll('a');


 allLinks.forEach( (link) => {
  link.onclick = (evt) => {
    const selectedSection = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top : selectedSection.offsetTop ,
      behavior : "smooth",
    });
    evt.preventDefault();

  }
});







/** using the Intersection Observer API, if statment and the isIntersecting property  
 *  to observe the sections to add  or remove the 'my-active-class' and the 'selected' classes depending on how much of the section proportion is shown
 */ 





const observer = new IntersectionObserver(callBackFunc , {

 root: null,
 threshold: 0.6,
 rootMargin: "-11px",
});



function callBackFunc (entries){
  entries.forEach( entry => {


    if (entry.isIntersecting ) {
  
      allLinks.forEach(link => {
  
         if (link.innerText === entry.target.getAttribute("data-nav")) {
  
           link.classList.add('selected');
  
         }else {
  
           link.classList.remove('selected');
  
         };
     });
  
      entry.target.classList.add("my-active-class");
   }else {
      entry.target.classList.remove("my-active-class");
    }  

  });
};



 // it will apply to all sections 

allSecs.forEach( section =>{

observer.observe(section);

})

