_.extend(exports
        ,require('./economic')
        ,require('./environmental'));

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', {title: 'Progress'
                      ,tabs: {economic: "economic"
                             ,environmental: "environmental"
                             }
                      }
            );
};
