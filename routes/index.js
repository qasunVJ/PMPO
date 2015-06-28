var express = require('express');
var router = express.Router();
var appdata = require('../data.json');
var userdata = require('../users.json');


/* GET index page. */
router.get('/', function(req, res, next) {

	var cont = [];
	var col = [];
	col = appdata.column_deco;
	cont = appdata.landing;

  res.render('index', { 
  	title: 'landing',
  	info: cont,
  	deco: col[0] 
  });
});

/* GET more_of_pmpo page. */
router.get('/more', function(req, res, next) {

	var cont = [];
	var col = [];
	col = appdata.column_deco;
	cont = appdata.landing;

  res.render('index', { 
  	title: 'more',
  	info: cont,
  	deco: col[0] 
  });
});

/* GET to-login page. */
router.get('/login', function(req, res, next) {

  var cont = [];
  var col = [];
  col = appdata.column_deco;
  cont = appdata.landing;

  res.render('auth', { 
    title: 'login',
    info: cont,
    deco: col[0] 
  });
});

/* GET to-signin page. */
router.get('/signin', function(req, res, next) {

  var cont = [];
  var col = [];
  col = appdata.column_deco;
  cont = appdata.landing;

  res.render('auth', { 
    title: 'signin',
    info: cont,
    deco: col[0] 
  });
});

/* GET login_inputs. */
router.post('/home', function(req, res, next) {
	var user =[];
	user = userdata.users;
	for (var i = 0; i < user.length; i++) {
		if(user[i].fname == req.body.fname && user[i].password == req.body.password){
			res.render('home', { 
   			title: 'home',
    		fname: req.body.fname,
    		lname: req.body.lname
  		});

		}else{
			res.render('auth',{
				title:'login_fail',
        fname: req.body.fname,
        lname: req.body.lname
			});
		};
	}; 
});

 // GET signin_inputs. 
// router.post('/home', function(req, res, next) {

//   res.render('home',{
//     title:'signin',
//     fname: req.body.fname,
//     lname: req.body.lname
//   });
// });

// GET projects
router.get('/projects', function(req, res, next) {

  res.render('home',{
    title:'projects',
    fname: req.body.fname,
    lname: req.body.lname
  });
});

// GET discussions
router.get('/discuss', function(req, res, next) {

  res.render('home',{
    title:'discussions',
    fname: req.body.fname,
    lname: req.body.lname
  });
});


module.exports = router;
