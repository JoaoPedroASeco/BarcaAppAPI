// Imported Routes
import { storeRoutes } from "./store.route";
import { categoryRoutes } from "./category.route";
import { storeCategoriesRoutes } from "./storeCategories.route";

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
  {
    route: storeCategoriesRoutes,
    prefix: "store-categories",
  },
];
