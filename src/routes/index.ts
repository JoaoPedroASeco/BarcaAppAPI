// Imported Routes
import { partnerRoutes } from "./partner.route";
import { storeCategoryRoutes } from "./storeCategory.route";
import { storeStatusRoutes } from "./storeStatus.route";
import { userRoleRoutes } from "./userRole.route";

// Exported Routes
export const routes = [
  {
    route: partnerRoutes,
    prefix: "/partners",
  },
  {
    route: storeCategoryRoutes,
    prefix: "/store-categories",
  },
  {
    route: storeStatusRoutes,
    prefix: "/store-statuses",
  },
  {
    route: userRoleRoutes,
    prefix: "/user-roles",
  },
];
