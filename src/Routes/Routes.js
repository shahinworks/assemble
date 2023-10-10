// Layouts
import AnonymousLayout from "../Layouts/AnonymousLayout";
import MainLayout from "../Layouts/MainLayout";

// Pages
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import CreateUser from "../Pages/CreateUser";
import ListUsers from "../Pages/ListUser";

export const routes = [
{
    layout: AnonymousLayout,
    routes: [
      {
        name: 'login',
        title: 'Login page',
        component: Login,
        path: '/login',
        isPublic: true,
      }
    ]
  },
{
    layout: MainLayout,
    routes: [
      {
        name: 'home',
        title: 'Home page',
        component: Home,
        path: '/home'
      },
      {
        name: 'users',
        title: 'Users',
        hasSiderLink: true,
        routes: [
          {
            name: 'list-users',
            title: 'List of users',
            hasSiderLink: true,
            component: ListUsers,
            path: '/users'
          },
          {
            name: 'create-user',
            title: 'Add user',
            hasSiderLink: true,
            component: CreateUser,
            path: '/users/new'
          }
        ]
      }
    ]
  }
];


// export const Routes = renderRoutes(routes);