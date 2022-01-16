import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import Wrapper from './Layout.styles'

interface LayoutProps {
	children: React.ReactNode
}
const useStyles = makeStyles({
	paper: {
		width: 200
	},
	active: {
        background: '#f4f4f4'
    },
	notactive: {
    	background: '#ffffff'
    }
})
function Layout(props: LayoutProps) {
	const classes = useStyles()
	const history = useHistory()
	const location = useLocation()
	const myMenu = [
		{
			text: 'Best Sellers',
			icon: <StarBorderIcon />,
			path: '/'
		},
		{
			text: 'My Library',
			icon: <LibraryBooksIcon />,
			path: '/mylibrary'
		}
	]
	return (
		<Wrapper>
			<div className='root'>
				<Drawer 
					className='drawer'
					variant='permanent'
					anchor='left'
					classes={{paper: classes.paper}}
				>
					<Typography className='mymenu' variant='h5'>
						My Menu
					</Typography>
					<List>
						{myMenu.map(item => 
							<ListItem 
								button
								key={item.text}
								onClick={() => history.push(item.path)}
								className={location.pathname === item.path ? classes.active : classes.notactive}
							>
								<ListItemIcon>{item.icon}</ListItemIcon>
								<ListItemText primary={item.text} />
							</ListItem>
						)}
					</List>
				</Drawer>
				<div>
					{props.children}
				</div>
			</div>
		</Wrapper>
  	)
}
export default Layout