import React, { useState } from "react"
import { Modal, Input, Button } from "semantic-ui-react"

export default function LogInModal(props) {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [message, setMessage] = useState("")

	const closeLogInModal = () => {
		props.setLoggingIn(false)
	}

	const handleUsernameChange = (e) => {
		setUsername(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleClick = async () => {
		try {
			const url = process.env.REACT_APP_API_URL + "/api/v1/auth/login/"
			const payload = {
				username: username,
				password: password
			}
			const logInResponse = await fetch(url, {
				method: "POST",
				body: JSON.stringify(payload),
				headers: {
					"Content-Type": "application/json"
				}
			})
			const logInJson = await logInResponse.json()
			if (logInJson.status === 200) {
				props.setCurrentUser(logInJson.data)
				closeLogInModal()
			} else {
				setMessage(logInJson.message)
			}
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<Modal
			open={true}
			closeIcon={true}
			onClose={closeLogInModal}
		>
			<div className="login-form">
				<h3>Enter Email and Password</h3>
				<p>{message}</p>
				<div>
					<Input
						label="Username"
						placeholder="Enter Username"
						name="username"
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<Input
						type="password"
						label="Password"
						name="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<div>
					<Button
						onClick={handleClick}
					>
						Sign In
					</Button>
				</div>
			</div>
		</Modal>
	)
}