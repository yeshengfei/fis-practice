// 启用 es6-babel 插件，解析 .es6 后缀为 .js
fis.match('*.es6', {
  rExt: '.js',
  parser: fis.plugin('es6-babel')
});

fis.match('**/*.less', {
  rExt: '.css', // from .less to .css
  parser: fis.plugin('less-2.x', {
    // fis-parser-less-2.x option
  })
});

// 采用 commonjs 模块化方案。
fis.hook('commonjs', {
  baseUrl: './modules',
  extList: ['.js', '.jsx', '.es6']
});

// 开启模块化开发
// fis.hook('module');
// 改用 npm 方案，而不是用 fis-components
fis.unhook('components');
fis.hook('node_modules');

fis.match('/{node_modules,modules}/**.{js,jsx}', {
  isMod: true
});

fis.match('*.es6', {
  isMod: true
});

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    // allInOne: true
  })
});


fis.media('prod')

    // 对 js 做 uglify 压缩。
    .match('*.{js,jsx,es6}', {
      optimizer: fis.plugin('uglify-js')
    })
    // .match('node_modules/**.js',{
    //   packTo: '/static/common.js'
    // })
    .match('::package', {
      postpackager: fis.plugin('loader', {
        allInOne: true
      })
    })
    // .match('::package', {
    //
    //   // 更多用法请参考： https://github.com/fex-team/fis3-packager-deps-pack
    //   packager: fis.plugin('deps-pack', {
    //     'pkg/index.js': /*当有多条时，请用数组*/[
    //       'modules/Developer.es6',
    //       'modules/Developer.es6:deps', // 以及其所有依赖
    //     ]
    //   })
    // })
