import { useState } from "react"
import { Dropdown } from "react-bootstrap"
import { useRouter } from "next/router"

// Add filter on route query, listen the route from parent component to take action.
const DropdownFilter = ({ filters }) => {
  const router = useRouter()

  const activateFilter = (e) => {
    // one single listener on parent
    if (e.target.nodeName != "BUTTON") return 0

    // Add query to route.
    router.push(
      {
        pathname: router.pathname,
        query: e.target.value && { filter: e.target.value },
      },
      undefined,
      { scroll: false }
    )
  }

  return (
    <div className="container dropdown-filter">
      <Dropdown>
        <Dropdown.Toggle
          size="sm"
          variant="secondary"
          id="dropdown-filter-toggle">
          {(router.query.filter &&
            filters.data.find((x) => x.id == router.query.filter).attributes
              .tag) || <span>Tümü</span>}
        </Dropdown.Toggle>

        <Dropdown.Menu align="end" onClick={activateFilter}>
          {/* Add first element empty statically to remove filter query */}
          <Dropdown.Item as="button" value="">
            Tümü
          </Dropdown.Item>
          {filters.data.map((filter, index) => {
            return (
              <Dropdown.Item key={index} as="button" value={filter.id}>
                {filter.attributes.tag}
              </Dropdown.Item>
            )
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropdownFilter
