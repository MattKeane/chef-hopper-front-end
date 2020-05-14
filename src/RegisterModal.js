import React, { useState } from "react"
import { Modal } from "semantic-ui-react"

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
			This is the register modal.
		</Modal>
	)

}