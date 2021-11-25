import FormView from "../pages/form/view/FormView";
import ListView from "../pages/list/view/ListView";

const publicPaths = [
  {
    path: "/form",
    pageTitle: "Form",
    element: <FormView />,
    exact: false,
  },
  {
    path: "/",
    element: <ListView />,
    exact: true,
  },
];

export { publicPaths };
