const headerHTML = `  <header class="section-navbar container">
        <div class="web-brand">
        <i class="hamburger fa-solid fa-burger"></i>
          <a href="/">
          <img
            src="./assets/images/logo.svg"
            alt="brand logo"
            class="brand-logo"
          />
        </a>
        </div>

        <div class="navbar">
        <navbar>
        <i class="cross fa-solid fa-xmark"></i>
          <ul>
            <li class="nav-link">
              <a href="/" class="nav-link">home</a>
            </li>
            <li class="nav-link" id="services">
              <div class="menu">
                <a href="#services" class="nav-link"
                  >services <i class="fa-solid fa-chevron-down"></i
                ></a>
                <ul class="dropdown">
                  <li class="services-menu"><a href="#">Labourer</a></li>
                  <li class="services-menu"><a href="#">Plumber</a></li>
                  <li class="services-menu"><a href="#">Electrician</a></li>
                  <li class="services-menu"><a href="#">Welder</a></li>
                  <li class="services-menu"><a href="#">Painter</a></li>
                </ul>
              </div>
            </li>
            <li class="nav-link" id="resources">
              <div class="menu">
                <a href="#resources" class="nav-link"
                  >resources <i class="fa-solid fa-chevron-down"></i
                ></a>
                <ul class="dropdown">
                  <li class="resources-menu">
                    <a href="#why">Why Us ?</a>
                  </li>
                  <li class="resources-menu">
                    <a href="#">Get Started</a>
                  </li>
                  <li class="resources-menu"><a href="#"></a></li>
                  <li class="resources-menu"><a href="#"></a></li>
                  <li class="resources-menu"><a href="#"></a></li>
                </ul>
              </div>
            </li>
           <li class="nav-link">
              <a href="#blogs" class="nav-link">blogs</a>
            </li>
            <li class="nav-link">
              <a href="/contact.html" class="nav-link">contact us</a>
            </li>
          </ul>
        </navbar>
        </div>

        <div class="account">
          <a class="login-btn" href="/Login.html">login</a>
        <a class="register-btn" href="/register.html">register</a>
        </div>
      </div>
    </header>
`;

const headerElem = document.querySelector(".section-header");
headerElem.insertAdjacentHTML("afterbegin", headerHTML);
