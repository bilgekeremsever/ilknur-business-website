const PageHeader = ({ pageHeaderText }) => {
  return (
    <section className="page-header">
      <div className="container">
        <h1>{pageHeaderText}</h1>
      </div>
    </section>
  )
}

export default PageHeader
