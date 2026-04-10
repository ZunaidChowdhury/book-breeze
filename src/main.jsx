import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ListedBooks from './pages/ListedBooks';
import PagesToRead from './pages/PagesToRead';
import BookDetails from './pages/BookDetails';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "listed-books", Component: ListedBooks },
      { path: "pages-to-read", Component: PagesToRead },
      { path: "about", Component: About },
      { path: "books/:bookId", Component: BookDetails },
      { path: "*", Component: NotFound },
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
