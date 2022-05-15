import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import AddCourses from "./pages/Admin/AddCourses";
import AddTeacher from "./pages/Admin/AddTeacher";
import Admin from "./pages/Admin/Admin.jsx";
import UserList from "./pages/Admin/UserList";
import Atricles from "./pages/Articles/Atricles";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import AdminPrivateRoute from "./pages/PrivateRoute/AdminPrivateRoute";
import ArticleUpdate from "./pages/Admin/ArticleUpdate";
import Addreview from "./components/Review/Addreview";
import Tourguides from "./components/Tourguides/Tourguides";
import AdminTourGuideList from "./pages/Admin/AdminTourGuideList";

function App() {
  return (
    <>
      <Router>
        <Route path={["/articles", "/auth", "/:name/:id", "/review", "/"]}>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/auth" component={Auth}></Route>
            <Route path="/:name/:id" component={Details}></Route>
            <Route path="/articles" component={Atricles}></Route>
            <Route path="/review" component={Addreview}></Route>
            <Route path="/tourguides" component={Tourguides}></Route>
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
            <AdminPrivateRoute exact path="/admin/tourguideslist">
              <AdminTourGuideList />
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
