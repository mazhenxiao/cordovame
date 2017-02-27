/**
 * Created by mazhenxiao on 2017/1/17.
 */

module.exports={
    entry:{
     default:"./default.js"
    },
   output:{
       filename:"[name].js",
       path:__dirname+"/dist/"
   },
    module:{
        loaders:[{
            test:/.\/dist\/*.js/,
            exclude:/.min.js/,
            loader:"uglify"
        }
        ]
    }


}