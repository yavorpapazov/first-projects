import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Layout from './Layout'
import LayoutMobile from './LayoutMobile'
import BestSellers from './BestSellers'
import MyLibrary from './MyLibrary'

export interface SingleBookType {
	amazon_product_url: string
	author: string
	book_image: string
	description: string
	rank: number
	title: string
}
function App() {
	const matches = useMediaQuery('(min-width:800px)')
	let [myList, setMyList] = useState<SingleBookType[]>([])
	function addToLibrary(selectedBook: SingleBookType) {
		setMyList([...myList, selectedBook])
	}
	function removeFromLibrary(myRank: number) {
		let newList = myList.filter(item => item.rank !== myRank)
		setMyList(newList)
	}
	let core = (
		<Switch>
			<Route exact path="/">
				<BestSellers addToLibrary={addToLibrary} />
			</Route>
			<Route exact path="/mylibrary">
				<MyLibrary myList={myList} removeFromLibrary={removeFromLibrary} />
			</Route>
		</Switch>
	)
	let layout = (
		<Layout>
			{core}
		</Layout>
	)
	let layoutMobile = (
		<LayoutMobile>
			{core}
		</LayoutMobile>
	)
 	return (
		<Router>
			{matches ? layout : layoutMobile}
		</Router>		
  	)
}
export default App