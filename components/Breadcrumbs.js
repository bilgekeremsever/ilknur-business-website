import Link from "next/link"
import { useRouter } from "next/router"

/*
DISCLAIMER! Due to the fact that there is a special situation on breadcrumb texts, 
breadcrumbsData prop will be passed like the following:
const breadcrumbs = [
    { title: "Anasayfa", path: "/" },
    { title: "Route - 1", path: "/subroute1" },
    { title: "Route - 2" },
  ]
Do not pass path if you want unclickable text crumb.
*/
const Crumb = ({ crumb }) => {
  return (
    <li className="breadcrumb__item">
      {crumb.path && (
        <Link href={crumb.path}>
          <a>{crumb.title}</a>
        </Link>
      )}

      {!crumb.path && crumb.title}
    </li>
  )
}

const Breadcrumbs = ({ breadcrumbsData }) => {
  return (
    <div className="container breadcrumb">
      <ul className="breadcrumb__list">
        {breadcrumbsData.map((crumb, index) => (
          <Crumb key={index} crumb={crumb} />
        ))}
      </ul>
    </div>
  )
}

export default Breadcrumbs
