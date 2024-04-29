import { createBrowserRouter } from "react-router-dom";
import Aceuil from "../Components/Aceuil";
import Recherche from "../Components/Recherche";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Aceuil />,
    },
    {
        path: '/recherche',
        element: <Recherche />,
    }
]);


export default Routes;