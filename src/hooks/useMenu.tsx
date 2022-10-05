import overview from '../images/overview-icon.png'
import contacts from '../images/contacts-icon.png'
import setting from "../images/setting-icon.png";
import gallery from "../images/gallery.png";
import receipt from "../images/receipt.png";


const isRouteActive = (route: string) => {
    //   return true if the route is active
    const isActive =
      route === window.location.pathname ||
      window.location.pathname.includes(route);
    return isActive;
  };
  const homeRouteActive = (route: string) => {
    const isActive = route === window.location.pathname;
    return isActive;
  };
  
  const useMenu = () => {
    const menu = [
      { 
        label: "Overview", 
        route: "/", 
        active: homeRouteActive("/"),
        icon: <img src={overview} alt="icon"/>, 
    },
      {
        label: "Contacts",
        route: "/contacts",
        active: isRouteActive("/contacts"),
        icon: <img src={contacts} alt="icon"/>, 
      },
      {
        label: "Edit",
        route: "/edit",
        active: isRouteActive("/edit"),
        icon: <img src={gallery} alt="icon" />, 
      },
      {
        label: "Manage",
        route: "/manage",
        active: isRouteActive("/manage"),
        icon: <img src={receipt} alt="icon" />, 
      },
      {
        label: "Setting",
        route: "/setting",
        active: isRouteActive("/setting"),
        icon: <img src={setting} alt="icon" />, 
      },
      
    ];
    return menu;
  };
  
  export default useMenu;
  