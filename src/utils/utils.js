import Home from '../Container/Home/Home'
import AboutMe from '../Container/AboutMe/AboutMe'
import Resume from '../Container/Resume/Resume'
import Projects from '../Container/Projects/Projects';
import ContactMe from '../Container/ContactMe/ContactMe';

export const TOTAL_SCREENS = [
    {
        screen_name : "Home",
        component : Home,
    },
    {
        screen_name : "About",
        component : AboutMe,
    },
    {
        screen_name : "Resume",
        component : Resume,
    },
    {
        screen_name : "Projects",
        component : Projects
    },

    

]


export const GET_SCREEN_INDEX = (screen_name) => {
    if(!screen_name) return - 1
    for(let i = 0; i < TOTAL_SCREENS.length; i++){
        if(TOTAL_SCREENS[i].screen_name === screen_name) return i;
    }
    return - 1;
}