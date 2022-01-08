import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import IconButton from '@material-ui/core/IconButton'
import Wrapper from './StockItem.styles'

function StockItem({id, ticker, close, handleRemove}) {
	return (
		<Wrapper>
			<Card className='card'>
			<CardHeader 
				action={
					<IconButton onClick={() => handleRemove(id)} color='primary' variant='contained' size='small'>
            			<DeleteOutlined />
          			</IconButton>
				}
				title={`${ticker}: $${close}`}
			/>
			</Card>
		</Wrapper>
	)
}
export default StockItem