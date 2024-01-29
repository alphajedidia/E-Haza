import { Home, LocationOn, QuestionAnswerRounded } from "@mui/icons-material";
import Avatar from "../components/avatar/avatar";
import SearchIcon from '@mui/icons-material/Search';

export const Links = [
    {
        to:"/",
        label:"Home",
        icon: <Home style={{fontSize:32}}/>
    },
    {
        to:"/message",
        label:"Message",
        icon: <QuestionAnswerRounded style={{fontSize:30}}/>
    },
    {
        to:"/map",
        label:"Map",
        style:"center-link",
        icon:<LocationOn style={{fontSize:31}}/>
    },
    {
        to:"/search",
        label:"Search",
        icon:<SearchIcon style={{fontSize:31}}/>
    },
    {
        to:"/details/profile",
        label:"Profile",
        icon:<Avatar url={null} size={39} />
    }
]