import * as stdEnv from "../dist/index.mjs";

console.log({
  ...stdEnv,
  _process: "-",
  process: "-",
});
