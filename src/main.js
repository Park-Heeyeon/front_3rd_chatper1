import BasicLayout from "./layout/BasicLayout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/NotFoundPage";
import Router from "./utils/router";

const homePage = new BasicLayout(new HomePage());
const profilePage = new BasicLayout(new ProfilePage());
const loginPage = new LoginPage();
const errorPage = new ErrorPage();

const routes = [
  { path: "/", view: homePage },
  { path: "/profile", view: profilePage},
  { path: "/login", view: loginPage },
  { path: "*", view: errorPage },
];

export const router = new Router(routes);
