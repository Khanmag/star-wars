import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmsPage from "./pages/films";
import PlanetsPage from "./pages/planets";
import CharactersPage from "./pages/characters";
import Layout from "./Layout";
import NotFoundPage from "./component/NotFoundPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "films",
          element: <FilmsPage />,
        },
        {
          path: "planets",
          element: <PlanetsPage />,
        },
        {
          path: "characters",
          element: <CharactersPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ]
    },
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
