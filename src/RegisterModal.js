import React, { useState } from "react"
import { Modal, Input, Button } from "semantic-ui-react"

export default function RegisterModal(props) {

	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [verifyPassword, setVerifyPassword] = useState("")
	const [message, setMessage] = useState("")

	const closeRegisterModal = () => {
		props.setRegistering(false)
	}

	const handleUsernameChange = (e) => {
		setUsername(e.target.value)
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleVerifyPasswordChange = (e) => {
		setVerifyPassword(e.target.value)
	}

	const handleClick = async () => {
		if (password === verifyPassword) {
			try {
				const url = process.env.REACT_APP_API_URL + "/api/v1/users/register"
				const payload = {
					credentials: "include",
					username: username,
					email: email,
					password: password
				}
				const registerResponse = await fetch(url, {
					method: "POST",
					body: JSON.stringify(payload),
					headers: {
						"Content-Type": "application/json"
					}
				})
				const registerJson = await registerResponse.json()
				if (registerJson.status === 201) {
					props.setCurrentUser(registerJson.data)
					closeRegisterModal()
				} else {
					setMessage(registerJson.message)
				}
			} catch (err) {
				console.log(err)
			}
		} else {
			setMessage("Passwords must match")
		}
	}


	return (
		<Modal
			open={true}
			closeIcon={true}
			onClose={closeRegisterModal}
		>
			<div className="register-form">
				<h3>Enter Registration Information</h3>
				<p>{message}</p>
				<div className="register-field">
					<Input
						label="Username"
						placeholder="Enter Username"
						name="username"
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>
				<div className="register-field">
					<Input
						label="Email"
						placeholder="Enter Email"
						name="email"
						value={email}
						onChange={handleEmailChange}
					/>
				</div>
				<div className="register-field">
					<Input
						type="password"
						label="Password"
						name="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<div className="register-field">
					<Input
						type="password"
						label="Re-enter Password"
						name="verifyPassword"
						value={verifyPassword}
						onChange={handleVerifyPasswordChange}
					/>
				</div>
				<div>
					<Button
						onClick={handleClick}
					>
						Register
					</Button>
				</div>
			</div>			
		</Modal>
	)

}