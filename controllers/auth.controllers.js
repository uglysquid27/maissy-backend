//importing modules
const bcrypt = require('bcrypt');
const { users } = require('./../models');
const jwt = require('jsonwebtoken');
const apiResponse = require('./../traits/api-response');

// Assigning users to the variable User
const User = users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
	try {
		const { userName, email, password } = req.body;
		const data = {
			userName,
			email,
			password: await bcrypt.hash(password, 10),
		};
		//saving the user
		const user = await User.create(data);

		//if user details is captured
		//generate token with the user's id and the secretKey in the env file
		// set cookie with the token generated
		if (user) {
			let token = jwt.sign({ id: user.id }, process.env.secretKey, {
				expiresIn: 1 * 24 * 60 * 60 * 1000,
			});

			res.cookie('jwt', token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
			//send users details
			apiResponse.sucess(res, user, 201);
		} else {
			apiResponse.error(res, 'Details are not correct', 409);
		}
	} catch (e) {
		apiResponse.error(res, e.message, 500);
	}
};

//login authentication
const testi = async (req, res) => {
	try {
		res.setHeader('Content-Type', 'application/json');
		const email = req.body.email;
		apiResponse.sucess(res, email, 200);
	} catch (e) {
		apiResponse.error(res, e.message, 500);
	}
	// const response = await users.findAll({ where: { email: 'sample@gmail.com' } });
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		//find a user by their email
		const user = await users.findOne({
			where: {
				email: email,
			},
		});

		//if user email is found, compare password with bcrypt
		if (user) {
			const isSame = await bcrypt.compare(password, user.password);

			//if password is the same
			//generate token with the user's id and the secretKey in the env file

			if (isSame) {
				let token = jwt.sign({ id: user.id }, process.env.secretKey, {
					expiresIn: 1 * 24 * 60 * 60 * 1000,
				});

				//if password matches wit the one in the database
				//go ahead and generate a cookie for the user
				res.cookie('jwt', token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
				//send user data
				apiResponse.sucess(res, { access_token: token, user: user }, 200);
			} else {
				apiResponse.error(res, 'Authentication failed', 401);
			}
		} else {
			apiResponse.error(res, 'Authentication failed', 401);
		}
	} catch (e) {
		apiResponse.error(res, e.message, 500);
	}
};

module.exports = {
	signup,
	login,
	testi,
};
