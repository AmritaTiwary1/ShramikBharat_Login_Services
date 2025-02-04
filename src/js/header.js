const headerHTML = `<header class="section-navbar">
      <div class="head container">
        <div class="web-brand">
          <a href="/">
            <img
              src="./images/018-day-and-night.png"
              alt="brand logo"
              class="brand-logo"
            />
          </a>
          <p class="brand-name">Shramik Bharat</p>
        </div>

        <navbar class="navbar">
          <ul>
            <li class="nav-link"><a href="/" class="nav-link">home</a></li>
            <li class="nav-link" id="services">
              <div class="menu">
                <a href="#" class="nav-link"
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
                <a href="#" class="nav-link"
                  >resources <i class="fa-solid fa-chevron-down"></i
                ></a>
                <ul class="dropdown">
                  <li class="resources-menu"><a href="#">Why Choose Us</a></li>
                  <li class="resources-menu">
                    <a href="#">How To Get Started</a>
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
              <a href="contact.html" class="nav-link">contact us</a>
            </li>
          </ul>
        </navbar>

        <div class="account">
          <button class="login-btn">login</button>
          <button class="register-btn">register</button>
        </div>
      </div>
    </header>
`;

const headerElem = document.querySelector(".section-header");
headerElem.insertAdjacentHTML("afterbegin", headerHTML);
