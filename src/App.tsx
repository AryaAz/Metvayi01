import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import AthleteList from "./pages/athleteList/athleteList";
import AthleteForm from "./pages/athleteForm/athleteForm";
import Schedule from "./pages/schedule/Schedule";
import Login from "./pages/login/login";
import Layout from "./components/layout/layout";
import {CounterProvider} from "./pages/counter/counterContext";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";
import {useAppSelector} from "./store/store";


function App() {

    const isLogin = useAppSelector(state=>state.auth.isAuthenticated)

    const routes: RouteObject[] = [
        {
            path: "/",
            element: isLogin ? <Layout></Layout> : <Navigate to="/login"/>,
            children: [
                {
                    path: "",
                    element: <AthleteList/>,
                }, {
                    path: "profile",
                    element: <Profile/>,
                }, {
                    path: "create",
                    element: <AthleteForm/>,
                }, {
                    path: "edit/:id",
                    element: <AthleteForm/>,
                }, {
                    path: "detail",
                    element: <Schedule/>,
                }, {
                    path: "counter",
                    element: <CounterProvider/>,
                },
            ]
        },
        {
            path: "/login",
            element: isLogin ? <Navigate to="/profile"></Navigate> : <Login/>,
        },
        {
            path: "/register",
            element: isLogin ? <Navigate to="/profile"></Navigate> : <Register/>,
        }
    ]

    const routesRendered = useRoutes(routes)

    return (
        <div className="App">
            {routesRendered}
        </div>
    );
}

export default App;
