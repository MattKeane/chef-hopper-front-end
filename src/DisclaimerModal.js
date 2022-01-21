import React from 'react'
import { Modal } from 'semantic-ui-react'

export default function DisclaimerModal(props) {
    const closeModal = () => props.setShowDisclaimer(false)
    return (
        <Modal
            open={ true }
            closeIcon={ true }
            onClose={ closeModal }
        >
            <div id="disclaimer">
                <h2>Disclaimer</h2>
                <p>
                    If you're reading this, you're probably looking at at this app as part of my portfolio. Since I initially deployed this app, it has developed some bugs in production. This isn't surprising since this app relies on webscraping for its data, which involves all sorts of factors that I don't have control over. In particular, many recipes that are coming in from new scrapes are displaying each ingredient as "None". I'm currently working on a fix for this bug, but I don't plan to support this app in the long term. I'll probably be replacing it with something new in the coming months.
                </p>
                <p>
                    Interestingly, about a year after I deployed this, somebody else had the same idea, built a more robust version, and tried to monetize it. They were immediately dragged all over social media by the foodblogger community. This is part of the reason why I'm not interested in long term support for this app. In the meantime, enjoy. I apologize for the broken parts.
                </p>
                <p>-Matt</p>
            </div>
        </Modal>
    )
}