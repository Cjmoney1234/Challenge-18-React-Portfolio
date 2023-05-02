import React from 'react';
import '.././style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <form class="d-flex search" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="#home" onClick={() => handlePageChange('Home')}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={() => handlePageChange('About')}>About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" onClick={() => handlePageChange('Resume')}>Resume</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={() => handlePageChange('Contact')}>
                Contact
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Phone</a></li>
                <li><a class="dropdown-item" href="#">Email</a></li>
                <li class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Linkedin</a></li>
                <li><a class="dropdown-item" href="#">Github</a></li>
              </ul>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
