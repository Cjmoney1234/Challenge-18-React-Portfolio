import React from 'react';

export default function Home() {
  return (
    <section >
        <div >
            <h3 class="occupation">Bootcamp Student</h3>

            <p class="bio"> This is my portfolio which includes a combination of past, present, and future projects. Majority of my projects are from my bootcamp, which is helping me break into the tech industy.
          My fasination in technology grew since I began working full-time as an accountant. In my previous position I dabbed a bit in MYSQL which piqued my interest at first. I also have a very creative side that people do not know about me. Although it is quite dificult to manage both my day job and the bootcamp I am certain that this is what I want
          to do. Being able to create a fully functional web app is my goal.<br></br><br></br>
          Click the portfolio tab to see all my current projects!</p> 
        </div>

        <div class="body">
          <input type="radio" name="position" />
          <input type="radio" name="position" checked />
          <input type="radio" name="position" />
          <main id="carousel">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
          </main>
        </div>
    </section>

    

      
    
  );
}
