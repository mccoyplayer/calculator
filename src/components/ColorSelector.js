import React from 'react'

import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Dialog from '@material-ui/core/Dialog'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export default function ColorSelector(props) {
	const { activeDialog, dialog, color, content, handleChange } = props

	return (
		<Dialog
			open={dialog}
			disableBackdropClick
			disableEscapeKeyDown
			fullWidth={true}
			maxWidth="md"
			aria-labelledby="dialog-title">
			<DialogTitle id="dialog-title">Color selector</DialogTitle>
			<DialogContent>
				<RadioGroup
					aria-label="Color selector"
					name="color"
					value={color[activeDialog]}
					onChange={handleChange}>
					{content.map(color => (
						<FormControlLabel
							value={color}
							key={color}
							control={<Radio />}
							label={color}
						/>
					))}
				</RadioGroup>
			</DialogContent>
		</Dialog>
	)
}
