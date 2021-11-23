import FormView from "../pages/form/view/FormView";

const publicPaths = [
  {
    path: "/form",
    element: <FormView />,
    exact: false,
  },
  {
    path: "/list",
    exact: false,
  },
  {
    path: "/",
    element: <FormView />,
    exact: true,
  },
];

export { publicPaths };
