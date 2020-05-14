import React, { useState } from "react"
import { Modal, Input, Button } from "semantic-ui-react"

export default function LogInModal(props) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const closeLogInModal = () => {
		props.setLoggingIn(false)
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
		console.log(email)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
		console.log(password)
	}

	return (
		<Modal
			open={true}
			closeIcon={true}
			onClose={closeLogInModal}
		>
			<div className="login-form">
				<h3>Enter Email and Password</h3>
				<div>
					<Input
						label="Email"
						placeholder="Enter Email"
						name="email"
						value={email}
						onChange={handleEmailChange}
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
					<Button>
						Sign In
					</Button>
				</div>
			</div>
		</Modal>
	)
}