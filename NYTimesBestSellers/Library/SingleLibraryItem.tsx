import React from 'react'
import { SingleBookType } from '../App'
import Button from '@material-ui/core/Button'
import Wrapper from './SingleLibraryItem.styles'

interface Props {
	singlebook: SingleBookType
	removeFromLibrary: (myRank: number) => void
}
function SingleLibraryItem({singlebook, removeFromLibrary}: Props) {
 	return (
		<Wrapper>
			<div>
				<h3>{singlebook.title}</h3>
			</div>
			<div>
				<img src={singlebook.book_image} alt={singlebook.title}/>
			</div>
			<div>
				<h4>{singlebook.author} (Author)</h4>
				<br />
				<h5>{singlebook.description}</h5>
			</div>
			<div>
            	<a href={singlebook.amazon_product_url} target="_blank" rel="noreferrer"><h3>See book on Amazon</h3></a>
          	</div>
			<Button onClick={() => removeFromLibrary(singlebook.rank)}>Remove from my list</Button>
		</Wrapper>
  	)
}
export default SingleLibraryItem