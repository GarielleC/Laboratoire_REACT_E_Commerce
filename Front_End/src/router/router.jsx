import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import Home from '../Pages/Home/Home.jsx';
import About from '../Pages/About/About.jsx';
import Antennes from '../Pages/Drones/Antennes.jsx';
import Batteries_FPV from '../Pages/Drones/Batteries_FPV.jsx';
import Cameras_FPV from '../Pages/Drones/Cameras_FPV.jsx';
import Chassis_FPV from '../Pages/Drones/Chassis_FPV.jsx';
import ESC_FPV from '../Pages/Drones/ESC_FPV.jsx';
import FC from '../Pages/Drones/FC.jsx';
import Moteurs from '../Pages/Drones/Moteurs.jsx';
import Radio_FPV from '../Pages/Drones/Radios_FPV.jsx';
import Recepteur from '../Pages/Drones/Recepteurs.jsx';
import Systeme_Video from '../Pages/Drones/Systemes_videos.jsx';
import News from '../Pages/News/news.jsx';
import Batteries from '../Pages/Remote_Controlled/Batteries.jsx';
import Cameras from '../Pages/Remote_Controlled/Cameras.jsx';
import Chassis from '../Pages/Remote_Controlled/ESC.jsx';
import ESC from '../Pages/Remote_Controlled/ESC.jsx';
import Pneus from '../Pages/Remote_Controlled/Pneus.jsx';
import Servomoteurs from '../Pages/Remote_Controlled/Servomoteurs.jsx';
import Telecommandes from '../Pages/Remote_Controlled/Telecommandes.jsx';
import Suspensions from '../Pages/Remote_Controlled/Suspensions.jsx';
import Transmissions from '../Pages/Remote_Controlled/Transmissions.jsx';
import LoadingPage from '../../src/Pages/LoadingPage/Loading.jsx';
import AddComment from '../Pages/AddComment/add.jsx';
import CommentList from '../Pages/Comment/comment.jsx';
import Panier from '../components/Panier/panier.jsx';
import AntennesInfo from '../components/DronesInfos/AntennesInfo.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "drones/antennes",
                element: <Antennes />,
            },
            {
                path: "drones/antennes/details/:id",
                element: <AntennesInfo />,
            },
            {
                path: "batteries-fpv",
                element: <Batteries_FPV />,
            },
            {
                path: "camera-fpv",
                element: <Cameras_FPV />,
            },
            {
                path: "chassis-fpv",
                element: <Chassis_FPV />,
            },
            {
                path: "esc-fpv",
                element: <ESC_FPV />,
            },
            {
                path: "fc",
                element: <FC />,
            },
            {
                path: "moteurs",
                element: <Moteurs />,
            },
            {
                path: "radio-fpv",
                element: <Radio_FPV />,
            },
            {
                path: "recepteur",
                element: <Recepteur />,
            },
            {
                path: "systeme-video",
                element: <Systeme_Video />,
            },
            {
                path: "news",
                element: <News />,
            },
            {
                path: "batteries",
                element: <Batteries />,
            },
            {
                path: "cameras",
                element: <Cameras />,
            },
            {
                path: "chassis",
                element: <Chassis />,
            },
            {
                path: "esc",
                element: <ESC />,
            },
            {
                path: "pneus",
                element: <Pneus />,
            },
            {
                path: "servomoteurs",
                element: <Servomoteurs />,
            },
            {
                path: "suspensions",
                element: <Suspensions />,
            },
            {
                path: "telecommandes",
                element: <Telecommandes />,
            },
            {
                path: "transmissions",
                element: <Transmissions />,
            },
            {
                path: "loadingPage",
                element: <LoadingPage />,
            },
            {
                path: "addComment",
                element: <AddComment />,
            },
            {
                path: "comment",
                element: <CommentList />,
            },
            {
                path: "panier",
                element: <Panier />,
            },
        ],
    },
]);

export default router;