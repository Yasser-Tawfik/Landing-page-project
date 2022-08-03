

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
     //const text = sections[i].getAttribute('data-nav');

     anchorEl.innerText = sections[i].dataset.nav ;   
     
 /**getting the values of the id atributes
  * and setting them to the created href attributes to make links to these sections 
 */  
     const ids = sections[i].id;            
     anchorEl.setAttribute('href' , `#${ids}`);           
 
     // settig a class to these anchor elements to add to them some styles  
     anchorEl.classList.add('menu__link');


     listEl.appendChild(anchorEl);     
     docFrag.appendChild(listEl); 
     

    
        
        };   
        
        





        
        //const links =  document.querySelector(allLinks.href = `#${section.id}`);
      

    
/*
        for ( section of sections){

            let sectionTitle = section.getAttribute("data-nav");

            for (link of allLinks){
               
                    link.addEventListener('click', evt => {
                        evt.preventDefault();
                            section.scrollIntoView({
                                behavior :"smooth",
                             
                           });
                         });    

               }

               


            };
                
                  

            

        };

*/



















   // Scroll to section on link click
 //making an event listener to make the navigating and scrolling through the page smooth when cliking on the section links



/*
       const allLinks = document.querySelectorAll('a');
        allLinks.forEach(  link => {

            link.addEventListener('click', smoothScrolling);

        });

    function smoothScrolling (evt){
        evt.preventDefault();
        sections.forEach( section => {
            section.scrollIntoView({
                behavior :"smooth",
        });
     });        
   };

*/








 
 
   ulList.appendChild(docFrag);
   const allLinks = document.querySelectorAll('a');



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
  
 
 
 
 
 /** making an event listener to add 'my-active-class' to the sections that are in the view port
 *   while scrooling to distinguish them and to highlight the selected section in the nav bar
 */

 
 //window.addEventListener('scroll',() => {

 /*
    window.onscroll = function () {
   sections.forEach(section => { 

    const topOfTheSection = section.getBoundingClientRect().top;

    if (topOfTheSection > -325 && topOfTheSection <225 ) {

allLinks.forEach( link => {

if ( link.innerText === section.getAttribute("data-nav")){

link.classList.add('selected');

} else {

link.classList.remove('selected');

 };
});

section.classList.add("my-active-class");
    } else{
section.classList.remove("my-active-class");
    }

  });
};
 */



const observer = new IntersectionObserver(callBackFunction , {

  root: null,
  threshold: 0.6,
  rootMargin: "-11px",
});



function callBackFunction (entries, observer){
  entries.forEach( entry => {


    if (entry.isIntersecting ) {

      allLinks.forEach(link => {

        if (link.innerText === entry.target.getAttribute("data-nav")) {

          link.classList.add('selected');

        } else {

          link.classList.remove('selected');

        };
      });

      entry.target.classList.add("my-active-class");
    } else {
      entry.target.classList.remove("my-active-class");
    }


  });
  };
  


  
sections.forEach( section =>{

  observer.observe(section);

})












  
  
  
  