import path from "path"
import { readFileSync } from "fs"

/**
 * All constants relating to helpers or handlers
 */
export const ORIGIN_NAME = "origin"
export const UPSTREAM_NAME = "upstream"
export const WEBSITE_SOURCE_BRANCH = "v4"
export const cwd = process.cwd()
export const cacheDir = path.join(cwd, ".website-cache")
export const cacheFile = "./src/.website-cache/transpiled-build.mjs"
export const fp = "./src/build.ts"
export const { version } = JSON.parse(readFileSync("./package.json").toString())
export const contentCacheFolder = path.join(cacheDir, "content-cache")
