#!/usr/bin/env node
import workerpool from "workerpool"
const cacheFile = "./.website-cache/transpiled-worker.mjs"
const { parseMarkdown, processHtml } = await import(cacheFile)
workerpool.worker({
  parseMarkdown,
  processHtml,
})
