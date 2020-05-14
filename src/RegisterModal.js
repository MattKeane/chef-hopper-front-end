import React, { useState } from "react"
import { Modal, Input, Button } from "semantic-ui-react"

export default function RegisterModal(props) {

const closeRegisterModal = () => {
		props.setRegistering(false)
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
						// value={username}
						// onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<Input
						label="Email"
						placeholder="Enter Email"
						name="email"
					/>
				</div>
				<div>
					<Input
						type="password"
						label="Password"
						name="password"
						// value={password}
						// onChange={handlePasswordChange}
					/>
				</div>
				<div>
					<Input
						type="password"
						label="Re-enter Password"
						name="verifyPassword"
					/>
				</div>
				<div>
					<Button
						// onClick={handleClick}
					>
						Register
					</Button>
				</div>
			</div>			
		</Modal>
	)

}