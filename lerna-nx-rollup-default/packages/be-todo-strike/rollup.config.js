import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import typescript from "@rollup/plugin-typescript"

export default [
  {
    input: "lib/be-todo-strike.ts",
    output: [
      {
        file: "dist/lib/esm/be-todo-strike.js",
        format: "es",
      },

      {
        file: "dist/lib/node/be-todo-strike.js",
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
