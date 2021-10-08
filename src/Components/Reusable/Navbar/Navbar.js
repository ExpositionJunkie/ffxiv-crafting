import React, {useState} from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";
import { useTransition, animated} from "react-spring";
import "./Style/Navbar.css";

function ToggleNav(aDiv, toggle) {
    const transitions = useTransition(toggle, {
      from: { position: "absolute", opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      delay: 200,
      trail: 3,
      onProps: (toggle) => (!toggle ? { reset: true, reverse: true } : toggle),
    });
    return transitions(({ opacity }, item) =>
      item ? (
        <animated.div
          style={{
            position: "fixed",
            left: 0,
            zIndex: 100,
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
            transform: opacity.to((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          {aDiv}
        </animated.div>
      ) : (
        <animated.div
          style={{
            left: "-100%",
            position: "absolute",
            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
            transform: opacity.to((y) => `translate3d(0,${y}px,0)`),
          }}
        >{aDiv}</animated.div>
      )
    );
  }

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return(
        <div>
        <div className="navbar">
        <IconContext.Provider value={{ color: "#ffff", size: "3rem" }}>
            <Link to="#" className="menu-bars" value={{ color: "#ffff" }}>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </IconContext.Provider>
        </div>
        <IconContext.Provider value={{ color: "#ffff", size: "5rem" }}>
          <nav className={sidebar ? "nav-menu-active" : "nav-menu"}>
            {ToggleNav(
              <ul className="nav-menu-items" onClick={showSidebar}>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        <React.Fragment className="nav-icon">
                          {item.icon}
                        </React.Fragment>
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>,
              sidebar
            )}
          </nav>
          </IconContext.Provider>
      </div>
    )
}

export default Navbar;