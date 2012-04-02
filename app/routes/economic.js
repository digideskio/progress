
/*
 * GET economic page.
 */

exports.economic = function(req, res){
  res.render('economic', {title: 'Economic'
                         ,tabs: {economic: 'economic'
                                ,environmental: 'environmental'
                                }
                         });
};
