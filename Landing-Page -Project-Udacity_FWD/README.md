# Landing page project

Udacity_FWD Web Front End Nanodegree Content Resources

## Table of Contents


- [Usage](#usage)
- [Description](#description)
- [Tools](#tools)
- [Creator](#creator)

---

## Usage

landing page is a mandatory for any website because it should contain all the important information  about the client to make thier costomers reach to the things they are looking for easily like : 

* thier **main catigories** for inctence if they are a brand that sells clouthes they would have like sectoin for men's wear ,women's wear , shoes and stylish new things. 

* it can contian the **contact** or the **about us** section to reach to them or lead them to anthor pages of the website.
* I used it as a practice so, I have acquired alot of skills  and broken my fear and anxiety barrier of doing this something like this while working at this project.

---

## Description

1. Creating Global Variables to use in the loops and other things.

```javascript

 const ulList  = document.getElementById('navbar__list');
const allSecs = document.querySelectorAll('section');

```

2. building the nav

-  set a for loop to loop over the sections.
```javascript
for(let i = 0 ; i < allSecs.length ; i++ ) {

```

3. creating list element and anchor elements for each section.
    
```javascript

const listEl   = document.createElement("li");
const anchorEl = document.createElement("a");

```


4. getting the values out of the sections ('data-nav') attributes,
 and setting them to the `<a>` elements as a text.

```javascript
       anchorEl.innerText = allSecs[i].dataset.nav ;   

```

 


5. getting the values out of the id attributes
      and setting them to the created href attributes as links to these sections. 

```javascript
 
        anchorEl.setAttribute('href' , `#${allSecs[i].id}`);           


```
 6. settig a class to these anchor elements to add to them some styles. 


```javascript
anchorEl.classList.add('menu__link');
  
```


7. and finally appendig these `<a>` elements inside the `<li>` elements 
     and appendig these `<li>` elements to the `<ul>` element

```javascript
listEl.appendChild(anchorEl);     
docFrag.appendChild(listEl); 
  
```
8. Scroll to section on link click
first I created the variable to  put all the created `<a>` elements it 
and by using the onclick event for each link to go to the selected section in the nav bar
   by using the scrollTo() method and The Window Object to scroll through the page
   to the top of the clicked section by using .offsetTop property

```javascript
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
           
```


9. using the Intersection Observer API, if statment and the isIntersecting property  
 *  to observe the sections to add  or remove the 'my-active-class' and the 'selected' classes depending on how much of the section proportion is shown 

 like `threshold: 0.6,` if the section appear by that propotion on the screen the the classes are added but if not or when it leave then the classes are removed

```javascript
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
  
```



 10. changed some styles in CSS for the classes.
 <br>
 11. added the fourth and the fifth section in HTML. 


---

## Tools

The following is a list of tools used thoroughout the project.

- [Chrome Dev tools](http://labs.udacity.com/udacity-feedback-extension/)
- [The starter code HTML](https://github.com/udacity/fend/blob/refresh-2019/projects/landing-page/index.html)
- [the starter code CSS](https://github.com/udacity/fend/blob/refresh-2019/projects/landing-page/css/styles.css)
- [Nanodegree Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/)
- [MDN Web Docs documentation](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com/)
- code editor : Visual Studio Code.

---

## Creator

**Yasser Tawfik**

