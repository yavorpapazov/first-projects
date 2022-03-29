import { Fragment } from 'react'
import MainNavigation from './MainNavigation'

function Layout({children}) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  )
}
export default Layout