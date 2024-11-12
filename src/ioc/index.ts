import { container } from "tsyringe";
import { loginController, loginControllerAdapter } from "./constants";

import { adaptRoute } from "@/main/adapters";
import { registerAdapters } from "./adapters.container";
import { registerValues } from "./values.container";
import { registerRepositories } from "./repositories.container";
import { registerControllers } from "./controllers.container";
import { registerServices } from "./services.container";

registerAdapters(container);
registerControllers(container);
registerRepositories(container);
registerServices(container);
registerValues(container);

container.register(loginControllerAdapter, {
  useFactory: (c) => adaptRoute(c.resolve(loginController)),
});

export { container };
