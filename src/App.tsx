import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import AthleteList from "./pages/athleteList/athleteList";
import AthleteForm from "./pages/athleteForm/athleteForm";
import Schedule from "./pages/schedule/Schedule";
import Login from "./pages/login/login";
import Layout from "./components/layout/layout";

const isLogin = !!localStorage.getItem("token")

const routes: RouteObject[] = [
    {
        path: "/",
        element: isLogin ? <Layout></Layout> : <Navigate to="/login"/>,
        children: [
            {
                path: "",
                element :  <AthleteList/> ,
            }, {
                path: "create",
                element :  <AthleteForm/> ,
            }, {
                path: "edit/:id",
                element :  <AthleteForm/> ,
            }, {
                path: "detail",
                element :  <Schedule/> ,
            },
        ]
    },
    {
        path: "/login",
        element: isLogin ? <Navigate to="/"></Navigate> : <Login/>,
    }
]

function App() {

    const routesRendered = useRoutes(routes)

    return (
        <div className="App">
            {/*<Routes>*/}
            {/*    <Route path="/" element={<AthleteList/>}></Route>*/}
            {/*    <Route path="/create" element={<AthleteForm/>}></Route>*/}
            {/*    <Route path="/edit/:id" element={<AthleteForm/>}></Route>*/}
            {/*    <Route path="/detail" element={<Schedule/>}></Route>*/}
            {/*</Routes>*/}
            {routesRendered}
        </div>
    );
}

export default App;
