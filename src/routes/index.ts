// Imported Routes
import { storeRoutes } from "./store.route";
import { categoryRoutes } from "./category.route";

// Exported Routes
export const routes = [
  {
    route: storeRoutes,
    prefix: "/stores",
  },
  {
    route: categoryRoutes,
    prefix: "/categories",
  },
];
