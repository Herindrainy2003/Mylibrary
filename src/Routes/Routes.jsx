import { createBrowserRouter } from "react-router-dom";
import Aceuil from "../Components/Aceuil";
import Recherche from "../Components/Recherche";
import Addbook from "../Components/Addbook";
import Library from "../Components/Library";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Aceuil />,
    },
    {
        path: '/recherche',
        element: <Recherche />,
    },{
        path : "/add",
        element: <Addbook />,
    },{
        path : "/library",
        element : <Library />,
    }
]);


export default Routes;