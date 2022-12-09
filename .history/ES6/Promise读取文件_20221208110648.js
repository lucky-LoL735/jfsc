//2.Promise读取文件
    //2.1 引入fs模块
    const fs = require('fs')//fs是node里文件系统模块？
    //2.2 调用方法读取文件
    fs.readFile('../README.md',(err,data)=> {
      //如果失败，则抛出错误
      if(err) throw err;
      //如果没有出错，则输出内容
      console.log(data.toString())
    })