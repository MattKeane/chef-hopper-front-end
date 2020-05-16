import React, { useState } from "react"
import { Modal, Input, Button } from "semantic-ui-react"

export default function LogInModal(props) {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

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
		props.logIn(username, password)
	}

	return (
		<Modal
			open={true}
			closeIcon={true}
			onClose={closeLogInModal}
		>
			<div className="login-form">
				<h3>Enter Username and Password</h3>
				<p>{props.message}</p>
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