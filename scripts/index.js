#!/usr/bin/env node

var fs = require('fs');
var path = require('path');

var path2 = process.argv.slice(2)[0];
var commitMsg = fs.readFileSync(path2, 'utf-8')

var pattern = /feat|fix/g;

console.log(commitMsg);

if (!pattern.test(commitMsg)) {
    console.log(' 提交代码信息不符合规范，信息中应包含字符"feat|fix".\n');
    process.exit(1);
}


process.exit(0);

