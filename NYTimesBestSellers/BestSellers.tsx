import React from 'react'
import { useQuery } from 'react-query'
import { SingleBookType } from './App'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import Wrapper from './BestSellers.styles'
import SingleBook from './Book/SingleBook'

interface Props {
	addToLibrary: (selectedBook: SingleBookType) => void
}
interface BooksType {
	results: {
		books: SingleBookType[]
	}
}
async function getData(): Promise<BooksType> {
	let url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=iUk6gAe1K9oarQC0qJ3bXn2tX1i5UFym`
	let response = await fetch(url)
	let responseData = await response.json()
	return responseData
}
function BestSellers({addToLibrary}: Props) {
	let {data, isLoading, error} = useQuery<BooksType>('books', getData)
	if(isLoading) {
		return <LinearProgress />
	} else if(error) {
		return <h1>Something went wrong...</h1>
	}
	let result = data?.results.books.map(item => 
		<Grid item key={item.rank} xs={12} sm={6} md={4}>
			<SingleBook singlebook={item} addToLibrary={addToLibrary}/>
		</Grid>
	)
 	return (
		<Wrapper>
			<Container>
				<h1 className='title'>The New York Times Best Sellers</h1>
				<Grid container spacing={3}>
					{result}
				</Grid>
			</Container>
		</Wrapper>
  	)
}
export default BestSellers