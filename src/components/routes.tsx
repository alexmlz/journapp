import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import JournalPage from "../pages/JournalPage";
import JournalDetailPage from "../pages/JournalDetailsPage";
//import ListGroup from "./ListGroup";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/journals", element: <JournalPage /> },
  { path: "/journals/:id", element: <JournalDetailPage /> },
]);

export default router;
