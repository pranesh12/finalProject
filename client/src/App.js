import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import Navbar from "./components/Navbar/Navbar";
import AddCourses from "./pages/Admin/AddCourses";
import AddTeacher from "./pages/Admin/AddTeacher";
import Admin from "./pages/Admin/Admin.jsx";
import Dashboard from "./pages/Admin/DashBoard/DashBoard";
import UserList from "./pages/Admin/UserList";
import Atricles from "./pages/Articles/Atricles";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import AdminPrivateRoute from "./pages/PrivateRoute/AdminPrivateRoute";
import ArticleUpdate from "./pages/Admin/ArticleUpdate";

function App() {
  return (
    <>
      <Router>
        <Route path={["/articles", "/auth", "/:name/:id", "/"]}>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/auth" component={Auth}></Route>
            <Route path="/:name/:id" component={Details}></Route>
            <Route path="/articles" component={Atricles}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </Route>
      </Router>

      <Router>
        <Route>
          <Switch>
            <AdminPrivateRoute exact path="/admin">
              <Admin />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/addcourse">
              <AddCourses />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/addteacher">
              <AddTeacher />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/edit/:id">
              <ArticleUpdate />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/UserList">
              <UserList />
            </AdminPrivateRoute>
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
