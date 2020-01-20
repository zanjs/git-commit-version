#!/usr/bin/env node

'use strict';
// 当前脚本的工作目录的路径
let cwd = '"' + process.cwd() + '"'

// 获取git版本
let fs = require("fs")
let gitHEAD = fs.readFileSync('.git/HEAD', 'utf-8').trim()
console.log('gitHEAD')
console.log(gitHEAD)
let ref = gitHEAD.split(': ')[1] // refs/heads/master
let refHas = true
if (!ref) {
  ref = gitHEAD.split(': ')[0]
  refHas = false
}
console.log('ref')
console.log(ref)
let gitVersion = ""

if (refHas) {
  gitVersion  = fs.readFileSync('.git/' + ref, 'utf-8').trim() // git版本号，
} else {
  gitVersion = ref
}

console.log(gitHEAD)
console.log(gitVersion)

module.exports = {
  CURRENT_WORK_DIR: cwd, // 当前脚本的工作目录的路径
  GIT_VERSION: gitVersion,
}