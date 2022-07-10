import MainNavigation from './MainNavigation'
import classes from './Layout.module.css'

function Layout({children}) {
  //The Layout component renders the whole application
  return (
    <div className={classes.layout}>
      <main>{children}</main>
      <MainNavigation />
    </div>
  )
}
export default Layout