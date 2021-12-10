import { Link, routes } from '@redwoodjs/router'

const MainLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>home</Link>
          </li>
          <li>
            <Link to={routes.about()}>about</Link>
          </li>
          <li>
            <Link to={routes.contact()}>contact</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default MainLayout
