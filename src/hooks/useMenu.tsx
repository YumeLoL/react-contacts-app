import overview from '../images/overview-icon.png'
import contacts from '../images/contacts-icon.png'
import details from '../images/details-icon.png'


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
        active: isRouteActive("/"),
        icon: <img src={overview} alt="icon"/>, 
    },
      {
        label: "Contacts",
        route: "/contacts",
        active: isRouteActive("/contacts"),
        icon: <img src={contacts} alt="icon"/>, 
      },
      {
        label: "Contacts",
        route: "/contacts",
        active: isRouteActive("/contacts"),
        icon: <img src={contacts} alt="icon"/>, 
      },
      {
        label: "Contacts",
        route: "/contacts",
        active: isRouteActive("/contacts"),
        icon: <img src={contacts} alt="icon"/>, 
      },
    ];
    return menu;
  };
  
  export default useMenu;
  