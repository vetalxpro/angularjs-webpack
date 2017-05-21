import { join } from "path";

function root(...paths: string[]) {
  return join(process.cwd(), ...paths);
}

export { root };

