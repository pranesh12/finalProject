import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./components/Details/Details";
import AddCourses from "./pages/Admin/AddCourses";
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
import AddTourGuide from "./pages/Admin/AddTourGuide";
import TourGuideUpdate from "./pages/Admin/TourGuideUpdate";
import ReviewPrivateRoute from "./pages/PrivateRoute/ReviewPrivateRoute";

function App() {
  return (
    <>
      <Router>
        <Route>
          <Switch>
            <Route path="/auth" component={Auth}></Route>
            <Route path="/:name/:id" component={Details}></Route>
            <Route path="/articles" component={Atricles}></Route>
            <ReviewPrivateRoute
              exact
              path="/review"
              component={Addreview}
            ></ReviewPrivateRoute>
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
            <AdminPrivateRoute exact path="/admin/addtourguide">
              <AddTourGuide />
            </AdminPrivateRoute>
            <AdminPrivateRoute exact path="/admin/tourguideEdit/:id">
              <TourGuideUpdate />
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
