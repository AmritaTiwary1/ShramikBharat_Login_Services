const headerHTML = ` <header class="section-navbar">
      <div class="head container">
        <div class="web-brand">
         
          <h2 class="brand-name">Shramik Bharat</h2>
        </div>

        <navbar class="navbar">
          <ul>
            <li class="nav-link"><a href="/" class="nav-link">home</a></li>
            <li class="nav-link" id="services">
              <div class="menu">
                <a href="" class="nav-link"
                  >services <i class="fa-solid"></i
                ></a>
              </div>
            </li>
            <li class="nav-link">
              <a href="/" class="nav-link">blogs</a>
            </li>
            <li class="nav-link">
              <a href="contact.html" class="nav-link">contact us</a>
            </li>
          </ul>
        </navbar>

        <div class="account">
          <a href="Login.html"><button class="login-btn">login</button></a>
          
         <a href="Register.html"><button class="register-btn">register</button></a> 
        </div>
      </div>
    </header>
`;

const headerElem = document.querySelector(".section-header");
headerElem.insertAdjacentHTML("afterbegin", headerHTML);
