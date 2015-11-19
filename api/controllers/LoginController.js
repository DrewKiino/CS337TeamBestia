export function login(req, res){
	sails.log.debug('Hello Baby!');
	var email = req.body.email;
	var password = req.body.password;
	var remember = req.body.remember;


		if(email.trim().length > 0 && password.trim().length > 5){

			const query = {
				'email': email
			};

			User.mongoose.findAsync(query)
			.then( results => {
				sails.log.debug(results);
				sails.log.debug(results.length);

				if(results.length == 0){
					sails.log.debug("No such User found!");
					res.send(400, {
							ema: email,
							err: "No such User found!"
						});
				}
				else{
					sails.log.debug(results[0].password);
					sails.log.debug(password);
					if(results[0].password === password){
						sails.log.debug("User found!");

						var day = new Date();
						day.setTime(day.getTime() +(1000*60*60*24));
						var expires = "expires="+day.toUTCString();
						
						if(remember === true){
							res.send(200, {
								name: email,
								login: true,
								remem: true
							});
						}
						else{
							res.send(200, {
								name: email,
								login: true,
								remem: false
							});
						}

					}
					else{
						res.send(400, {
							ema: email,
							err: "Incorrect Password!"
						});
					}
				}
			
			});
		}
		else{
			sails.log('Invalid Input!');

			res.send(400, {
					ema: email,
					err: "Invalid Input!"
				});
		}
};

