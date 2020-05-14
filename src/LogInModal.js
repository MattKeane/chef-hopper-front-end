import React, { useState } from "react"
import { Modal, Input, Button } from "semantic-ui-react"

export default function LogInModal(props) {
	const closeLogInModal = () => {
		props.setLoggingIn(false)
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
					/>
				</div>
				<div>
					<Input
						type="password"
						label="Password"
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