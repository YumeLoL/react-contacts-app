import overview from '../images/overview-icon.png'
import contacts from '../images/contacts-icon.png'
import setting from "../images/setting-icon.png";


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
        label: "Setting",
        route: "/setting",
        active: isRouteActive("/setting"),
        icon: <img src={setting} alt="icon" />, 
      },
      
    ];
    return menu;
  };
  
  export default useMenu;
  