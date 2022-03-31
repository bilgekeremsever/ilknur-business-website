import Head from "next/head"
import Image from "next/image"
import { fetchAdminPanelAPI } from "../../lib/adminPanelApi"
import { setImageAbsolutePath } from "../../lib/adminPanelApiMedia"
import PageHeader from "../../components/PageHeader"
import Breadcrumbs from "../../components/Breadcrumbs"
import DropdownFilter from "../../components/DropdownFilter"
import BsCard from "../../components/BsCard"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

function Urunler({ courseTags }) {
  const breadcrumbs = [{ title: "Anasayfa", path: "/" }, { title: "Eğitim" }]
  const router = useRouter()
  const [courses, setCourses] = useState(null)

  let courseFetchOptions = { populate: "image,course_tag", sort: ["createdAt:desc"] }
  useEffect(() => {
    courseFetchOptions.filters = {
      course_tag: { id: { $eq: router.query.filter } },
    }
    fetch("/api/list-content", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: "/courses", options: courseFetchOptions }),
    })
      .then((res) => res.json())
      .then((data) => {
        setCourses(data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query])

  return (
    <main className="courses-page">
      <Head>
        <title>Ilknur Sever - Eğitim</title>
      </Head>
      <PageHeader pageHeaderText="Eğitim" />
      <Breadcrumbs breadcrumbsData={breadcrumbs} />
      <section>
        <DropdownFilter filters={courseTags} />
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {!courses && <p>Loading...</p>}
            {courses &&
              courses.data.map((course) => (
                <div key={course.id} className="col">
                  <BsCard cardFrame cardData={course} cardLinkPrefix="/egitim/" />
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export async function getServerSideProps() {
  const courseTagsRes = await fetchAdminPanelAPI("/course-tags")
  const courseTags = await courseTagsRes.json()

  return { props: { courseTags } }
}
export default Urunler
