#!/usr/bin/env node
import inquirer from "inquirer"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

/* ******************* */
/* Powered by Cor design pattern */
/* ******************* */

/* ******************* */
/* Configuration */
/* ******************* */

const BUNDLER_TYPES = {
  lerna: "Lerna",
  parcel: "Parcel",
}

const PARCEL_BOILERPLATE_CLASSES = {
  "parcel-default": "Parcel, Default",
}

const LERNA_BOILERPLATE_CLASSES = {
  "lerna-nx-rollup-default": "Lerna + Nx + Rollup, Default",
}

const DIALOG_KEY = {
  bundlerType: "bundlerType",
  projectClass: "projectClass",
  projectName: "projectName",
}

/* ******************* */
/* Classes */
/* ******************* */

class Handler {
  #nextHandler

  setNext(handler) {
    this.#nextHandler = handler
    return this.#nextHandler
  }

  async handle(request) {
    if (this.#nextHandler) {
      return this.#nextHandler.handle(request)
    }

    return null
  }
}

class Bundlers extends Handler {
  async handle() {
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: DIALOG_KEY.bundlerType,
        message: "Select bundler",
        choices: Object.values(BUNDLER_TYPES),
      },
    ])

    return super.handle({ ...answers })
  }
}

class BundlerBoilerplateClasses extends Handler {
  async handle(answersPrev) {
    if (answersPrev.bundlerType === BUNDLER_TYPES.parcel) {
      const answers = await inquirer.prompt([
        {
          type: "list",
          name: DIALOG_KEY.projectClass,
          message: "Select class",
          choices: Object.values(PARCEL_BOILERPLATE_CLASSES),
        },
      ])

      return super.handle({ ...answersPrev, ...answers })
    } else {
      return super.handle({ ...answersPrev })
    }
  }
}

class LernaBoilerplateClasses extends Handler {
  async handle(answersPrev) {
    if (answersPrev.bundlerType === BUNDLER_TYPES.lerna) {
      const answers = await inquirer.prompt([
        {
          type: "list",
          name: DIALOG_KEY.projectClass,
          message: "Select class",
          choices: Object.values(LERNA_BOILERPLATE_CLASSES),
        },
      ])

      return super.handle({ ...answersPrev, ...answers })
    } else {
      return super.handle({ ...answersPrev })
    }
  }
}

class ProjectName extends Handler {
  async handle(answersPrev) {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: DIALOG_KEY.projectName,
        message: "Select name",
        default: `my-library`.toLowerCase(),
      },
    ])

    return super.handle({ ...answersPrev, ...answers })
  }
}

class Setup extends Handler {
  async handle(answersPrev) {
    const { bundlerType, projectClass, projectName } = answersPrev

    let selectedProjectFolder

    if (bundlerType === BUNDLER_TYPES.parcel) {
      selectedProjectFolder = Object.entries(PARCEL_BOILERPLATE_CLASSES).find(
        ([folderName, question]) => question === projectClass,
      )?.[0]
    } else if (bundlerType === BUNDLER_TYPES.lerna) {
      selectedProjectFolder = Object.entries(LERNA_BOILERPLATE_CLASSES).find(
        ([folderName, question]) => question === projectClass,
      )?.[0]
    }

    if (!selectedProjectFolder) {
      console.log(`Coming soon... 😭`)
      return process.exit(1)
    }

    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)

    const projectFolder = path.join(__dirname, selectedProjectFolder)

    if (!fs.existsSync(projectFolder)) {
      console.log(`Coming soon... 😭`)
      return process.exit(1)
    }

    const targetPath = path.resolve(projectName)

    if (fs.existsSync(targetPath)) {
      console.log(`Select name: ${projectName} already exist 😤`)
      return process.exit(1)
    }

    fs.cpSync(projectFolder, projectName, {
      recursive: true,
    })

    console.log("Project created 🥰")
  }
}

/* ******************* */
/* Run */
/* ******************* */

const handlers = [
  Bundlers,
  LernaBoilerplateClasses,
  BundlerBoilerplateClasses,
  ProjectName,
  Setup,
]

const handlersInstances = []

handlers.forEach((Handler) => {
  const instance = new Handler()
  handlersInstances.push(instance)
})

handlersInstances.forEach((h, index, arr) => {
  if (arr[index + 1]) {
    h.setNext(arr[index + 1])
  }
})

handlersInstances.at(0).handle()
