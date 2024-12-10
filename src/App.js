import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import TourContextProvider from "./store/tour-context";
import RootLayout from "./pages/rootLayout";
import SettingsRootLayout from "./pages/settingsRootLayout";
import OverviewPage from "./pages/overview";
import TourPage from "./pages/tour/tourPage";
import Users from "./pages/user/users";
import EditUser from "./pages/user/editUser";
import UserDetail from "./pages/user/userDetail";
import BookingsPage from "./pages/bookingsPage";
import BookingOnTour from "./components/booking/bookingOnTour";
import BillingsPage from "./pages/billingsPage";
import ReviewsPage from "./pages/reviewsPage";
import ReviewOnTour from "./components/review/reviewOnTour";
import Login from "./pages/loginPage";
import Signup from "./pages/signUpPage";
import ManageToursPage from "./pages/manageTourPage";
import CreateTourPage from "./pages/createTourPage";
import EditTourPage from "./pages/editTourPage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: "tours",
        children: [
          {
            index: true,
            element: <OverviewPage />,
          },
          {
            path: ":tourId",
            element: <TourPage />,
          },
        ],
      },
      {
        path: "users",
        element: <SettingsRootLayout />,
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: ":userId",
            // element: <UserDetail />,
            children: [
              {
                index: true,
                element: <UserDetail />,
              },
              {
                path: "edit",
                element: <EditUser />,
              },
            ],
          },
          {
            path: "booking",
            element: <BookingsPage />,
          },
          {
            path: "review",
            element: <ReviewsPage />,
          },
          {
            path: "billing",
            element: <BillingsPage />,
          },
          {
            path: "new",
            element: <CreateTourPage />,
          },
          {
            path: "manage-tours",
            // element: <ManageToursPage />,
            children: [
              {
                index: true,
                element: <ManageToursPage />,
              },
              {
                path: "edit",
                element: <EditTourPage />,
              },
            ],
          },
        ],
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <Signup />,
      },
      {
        path: "me",
        element: <SettingsRootLayout />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  );
}

export default App;
