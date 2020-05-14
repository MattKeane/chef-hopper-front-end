import React, { useState } from "react"
import { Modal } from "semantic-ui-react"

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
			This is the log in Modal
		</Modal>
	)
}