import { isLoggedIn } from "./auth";

class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("click", (e) => {
        const target = e.target.closest("a");
        if (!(target instanceof HTMLAnchorElement)) return;
        e.preventDefault();
        this.navigate(target.getAttribute("href"));
      });
      this.navigate(window.location.pathname);
    });

    // URL이 변경될 때마다 navigate를 호출
    window.addEventListener("popstate", () => {
      this.navigate(window.location.pathname);
    });
  }

  render(view) {
    view.render();
  }

  navigate(path) {
    const route =
      this.routes.find((route) => route.path === path) ||
      this.routes.find((route) => route.path === "*");
    if (route) {
      if (!isLoggedIn() && route.path === "/profile") {
        this.navigateTo("/login");
      } else 
      if (isLoggedIn() && route.path === "/login") {
        this.navigateTo("/");
      } else {
        this.render(route.view);
      }
    }
  }

  navigateTo(path) {
    window.history.pushState(null, null, path);
    this.navigate(path);
  }

}

export default Router;
