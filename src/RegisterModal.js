import React, { useState } from "react"
import { Modal, Input, Button } from "semantic-ui-react"

export default function RegisterModal(props) {

	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [verifyPassword, setVerifyPassword] = useState("")

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

	const handleClick = () => {
		console.log(username)
		console.log(email)
		console.log(password)
		console.log(verifyPassword)
	}


	return (
		<Modal
			open={true}
			closeIcon={true}
			onClose={closeRegisterModal}
		>
			<div className="register-form">
				<h3>Enter Registration Information</h3>
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