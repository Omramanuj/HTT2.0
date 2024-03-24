import React from "react";
import { useLocation,Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledTooltip,
} from "reactstrap";
import { useAuth } from "../ClientAuth";
import { usePageVisits } from "../PageVisitContext"; // Adjust the import path as necessary


export default function MainNavbar() {
  const { IsUserLoggedIn,  clientLogout } = useAuth();
  const { incrementPageVisit } = usePageVisits();
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const location = useLocation();
  
  React.useEffect(() => {
    if(location.pathname === '/index' || location.pathname === '/login'){
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };}
  }, []);


  const handleNavLinkClick = (pageName) => {
    console.log(`NavLink clicked for ${pageName}`);
    incrementPageVisit(pageName);
     // Increment the page visit counter
  };

  return (
    <div >
      {collapseOpen ? (
        <div
        
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + ((location.pathname === '/index' || location.pathname === '/login') ? navbarColor : "")} expand="lg" style={{backgroundColor: '#15803d'}}>
        <div className="container flex">
          <div className="navbar-translate">
            <NavbarBrand
              href="/index"
              id="navbar-brand"
            >
              <div className="brand-heading flex items-center justify-center">
                <div className="brand-logo h-[3.5rem] w-[3.5rem]">
                  <img src="/assets/img/logo.png"></img>
                </div>
                
                FAT TO SLIM
              </div>

            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Hello There!
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <Link
                  to="/index"
                  className="nav-link"
                >
                
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>Home</p>
                </Link>
              </NavItem>
              <NavItem>
               
                  <Link
                    to="/services"
                     onClick={() => handleNavLinkClick('services')}
                     className="nav-link"
                  >
                    {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                    <p>Treatment & Services</p>
                  </Link>
                
              </NavItem>
              
              <NavItem>
                <Link
                  to="/aboutus"
                  onClick={() => handleNavLinkClick('aboutUs')}
                  className="nav-link"
                >
                  {/* <i className="now-ui-icons arrows-1_cloud-download-93"></i> */}
                  <p>About Us</p>
                </Link>
              </NavItem>
              
              <NavItem>
                <Link
                  className="nav-link btn btn-neutral"
                  style={{color: '#15803d'}}
                  to="/appointment"
                  id="upgrade-to-pro"
                >
                  <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
                  <p>Book An Appointment</p>
                </Link>
              </NavItem>
              <NavItem>
                <Button
                  className="nav-link"
                  style={{backgroundColor: '#15803d'}}
                  href={"/login"}
                  id="upgrade-to-pro"
                  onClick={IsUserLoggedIn ? clientLogout : () => {}}
                >
                  <i className="now-ui-icons users_circle-08 mr-1"></i>
                  <p>{IsUserLoggedIn ? "Logout" : "Login/Sign Up"}</p>
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
      </Navbar>
    </div>
  );
}