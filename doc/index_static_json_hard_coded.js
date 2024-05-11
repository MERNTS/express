const http = require('http')
// 一开始 js 并没有模块化这个概念，但是没有模块化在应对一些大型前端应用开发时是非常不好管理的。所以社区催生出了一个野生模块化规范，叫做CommonJS。至今这个规范仍然被应用在 NodeJS 中。
// 我们都知道在早期JavaScript模块这一概念，都是通过script标签引入js文件代码。当然这写基本简单需求没有什么问题，但当我们的项目越来越庞大时，我们引入的js文件就会越多，这时就会出现以下问题：
// js文件作用域都是顶层，这会造成变量污染 // js文件多，变得不好维护 // js文件依赖问题，稍微不注意顺序引入错，代码全报错 // 后来，ECMA 也意识到了模块化是必须的，在 ES6 中，官方性地将模块化加入到 ES 标准中，这就是大名鼎鼎的ES6 模块。
// 在 CommonJS 中，我们只需要知道两种用法就可以了，也就是require和module.exports。其实上述代码是把整个 A 模块都加载了，然后包装在一个对象里面导入进来。这种加载，我们称之为“运行时加载”。（代码跑起来的时候再去加载模块）
// ES6 module是编译时加载，输出的是接口，CommonJS运行时加载，加载的是一个对象// 像 ES6 模块的话，它的花样就更多一些，比如单单导出这方面，就分什么单独导出、默认导出、转发导出。我们这里可以看看现在比较常见的几种玩法。// ES6模块是静态导入，编译时加载的；而CommonJS是动态导入，运行时加载的；// ES6模块不使用默认导出时，即使导出原始数据类型，导出的仍然是其引用。而CommonJS导出原始数据类型则只是导出一个值而已；
let notes = [
    {        id: 1,        content: "HTML is easy",        important: true    },
    {        id: 2,        content: "Browser can execute only JavaScript",        important: false    },
    {        id: 3,        content: "GET and POST are the most important methods of HTTP protocol",        important: true    }
]
const app = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server started on port ${PORT}`)
