module.exports = function Route(app) {
	app.get('/', function (req, res) {
		res.render('index', {title: 'Your Kickin Survey Page!'});
	});

	app.post('/process', function (req, res) {
		console.log('POST INFO', req.body);

		req.session.name = req.body.name;
		req.session.location = req.body.location;
		req.session.language = req.body.language;
		req.session.comment = req.body.comment;
		//req.session.email = req.body.email;
		req.session.sessionID = req.sessionID;
		req.session.save(function() {
			res.render('survey-answer', {title: "Your Awesome Info", person_info: req.session}); //this says
			//go to this view page and take with it the session info. The object holds it all
			//res.redirect('/');
		});
	});
}