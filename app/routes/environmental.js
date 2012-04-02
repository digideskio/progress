
/*
 * GET environmental page.
 */

exports.environmental = function(req, res){
  res.render('environmental', {title: 'Environmental'
                      ,tabs: {economic: "economic"
                             ,environmental: "environmental"
                             }
                      }
            );
};
