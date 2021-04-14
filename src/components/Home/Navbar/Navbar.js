import React from 'react';

const Navbar = () => {
    return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link ms-5 active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Dental Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Reviews</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-5" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
    );
};

export default Navbar;