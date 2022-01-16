import React from 'react'
import { SingleBookType } from './App'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Wrapper from './MyLibrary.styles'
import SingleLibraryItem from './Library/SingleLibraryItem'

interface Props {
	myList: SingleBookType[]
	removeFromLibrary: (myRank: number) => void
}
function MyLibrary({myList, removeFromLibrary}: Props) {
	let result = myList.map(item => 
		<Grid item key={item.rank} xs={12} sm={6} md={4}>
			<SingleLibraryItem singlebook={item} removeFromLibrary={removeFromLibrary}/>
		</Grid>
	)
 	return (
		<Wrapper>
			<Container>
				<h1 className='title'>My Library</h1>
				<Grid container spacing={3}>
					{result}
				</Grid>
			</Container>
		</Wrapper>
  	)
}
export default MyLibrary