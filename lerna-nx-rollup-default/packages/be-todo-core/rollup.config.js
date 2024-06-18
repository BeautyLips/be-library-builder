import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

export default [
  {
    input: "lib/be-todo-core.ts",
    external: ["@gurovdmitriy/be-todo-strike"],
    output: [
      {
        file: "dist/lib/esm/be-todo-core.js",
        format: "es",
      },

      {
        file: "dist/lib/node/be-todo-core.js",
        format: "cjs",
      },
    ],

    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      json(),
    ],
  },
]
