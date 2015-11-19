/**
 * RegistrationController
 *
 * @description :: Server-side logic for managing registrations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

export function signup(req, res){

		function validateEmail(email){
				var match = email.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
					if(match){
						return true;
					}
					else{
						return false;
					}
				}

		sails.log.debug('Hi Baby');
		var firstname = req.body.firstname;
		var lastname = req.body.lastname;
		var email = req.body.email;
		var password = req.body.password;
		var repassword = req.body.repassword;

		if(firstname.trim().length > 0 && lastname.trim().length > 0 && email.trim().length > 0 && 
			password.trim().length > 5 && repassword.trim().length > 0 && 
			 validateEmail(email.trim())&& password === repassword){	

				const query = {
					'email': email
				};
				sails.log.debug('Whoa Baby');
				User.mongoose.findAsync(query)
				.then( results => {

					if(results.length == 0){
						sails.log.debug("Creating...");
						var user = new User.mongoose({
							'firstName': firstname,
							'lastName': lastname,
							'email': email,
							'password': password
						});

						user.saveAsync()
						.then(function (savedUser){
							sails.log.debug(JSON.stringify(savedUser));
						})
						.catch(function(e){
							sails.log.debug(e);
						});
						res.send(200, {
							'success': true
						});
					}
					else{
						sails.log.debug('Nu Huh');
						res.send(400, {
							'firstname': firstname,
							'lastname': lastname,
							'email': email,
							'error': "User already exists!",
							Form: true
						});
					}
			});
		}
		else{	
			sails.log.debug("Invalid Input!");
			res.send(400, {
				'firstname': firstname,
				'lastname': lastname,
				'email': email,
				'error': "Invalid Input!",
				Form: true
			});
		}
};

