// Dependecias.
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Indexview, Otherview } from "../../views";

// Definición del router.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Indexview />,
  },
  {
    path: "/other",
    element: <Otherview />,
  },
]);

export default router;
