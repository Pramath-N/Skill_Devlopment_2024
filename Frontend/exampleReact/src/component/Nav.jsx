import Style from "./nav.module.css";

function Nav() {
  return (
    <>
      <div className={Style.container}>
        <nav class="navbar navbar-expand-lg bg-primary">
          <div class="container-fluid">
            <a>
              <img
                width={30}
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                alt=""
              />
            </a>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;
