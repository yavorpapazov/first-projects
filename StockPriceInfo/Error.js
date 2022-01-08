import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

function Error({setError}) {
	return (
		<Container>
			<Typography variant='h6'>
				Something went wrong...
			</Typography>
			<Button onClick={() => setError(false)} color='primary' variant='contained' size='large'>
				Refresh
			</Button>
		</Container>
	)
}
export default Error