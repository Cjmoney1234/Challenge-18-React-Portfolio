import React from 'react';

export default function Portfolio() {
  return (
    <div>
        <li class="project-list"> Weather Dashboard </li>
            <li class="project-explination">This is a 5 day weather forecast. You can search any city that you wish to know the weather!</li>
        <li class="project-list"> Foodie Central </li>
            <li class="project-explination">This is the first project completed during my time in bootcamp, 
            I was assigned Lead Front End Devekoper. My team and I created an application that allows the user to find local resturants in any city.
            If you wish to add your favorite local resturant then you can submit using the modal.</li>
        <li class="project-list"> Foodie Central Cribs </li>
            <li class="project-explination">This is the second project completed during my time in bootcamp, I was assigned Lead JS Devekoper & Assistant Back End Developer. My team and I created an application that allows the user to create a recipe list.
            </li>
        <li class="project-list"> Foodi3C3ntral </li>
        <li class="project-explination">This is the third project completed during my time in bootcamp, I was assigned Lead JS Devekoper & Assistant Back End Developer. My team and I created an application that allows the user to create a recipe list.
            </li>

        
<br></br>
    
        <section class="page-section" id="projects">
            <h2>My Projects</h2>
                <div>
                    <figure class="grid-container">
                        <a id="weatherDashboard" class="grid-item grid-item-snippet" href="https://cjmoney1234.github.io/weather-dashboard/">
                            <figcaption> Weather Dashboard <span>HTML, CSS, JS</span></figcaption>
                        </a>
                    </figure>
                    <figure class="grid-container">
                        <a id="project1" class="grid-item grid-item-snippet" href="https://phoenix-ceri.github.io/FoodieCentral/" >
                            <figcaption> Foodie Central <span>HTML, CSS, JS</span></figcaption>
                        </a>
                    </figure>
                    <figure class="grid-container">
                        <a id="project2" class="grid-item grid-item-snippet" href="https://pure-island-77704.herokuapp.com/" >
                            <figcaption> Foodie Central <span>HTML, CSS, JS, Node.JS, MYSQL</span></figcaption>
                        </a>
                    </figure>
                    <figure class="grid-container">
                        <a id="project3" class="grid-item grid-item-snippet" href="https://foodi3-c3ntral.vercel.app/" >
                            <figcaption> Foodie Central <span>React, JS, Node.JS, GraphQL</span></figcaption>
                        </a>
                    </figure>


                </div>
        </section>
    </div>
  );
}
