import { useState, useEffect } from "react"
import styles from "./Shop.module.css"
import CommonSection from "../../components/common-section/CommonSection"
import ProductList from "../../components/product-list/ProductList"
import products from "../../assets/data/products"
const Shop = () => {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filter, setFilter] = useState("")
  const [order, setOrder] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const handleFilter = e => {
    const filterValue = e.target.value
    if (filterValue === "all") {
      setFilteredProducts(products)
    } else {
      const filtered = products.filter(item => item.category === filterValue)
      setFilteredProducts(filtered)
    }
  }

  const handleOrder = e => {
    const order = e.target.value
    if (order === "asc") {
      const orderedProducts = [...filteredProducts]
      setFilteredProducts(
        orderedProducts.sort((a, b) =>
          a.productName.localeCompare(b.productName)
        )
      )
    } else if (order === "des") {
      const orderedProducts = [...filteredProducts].sort((a, b) =>
        b.productName.localeCompare(a.productName)
      )
      setFilteredProducts(orderedProducts)
    }
  }

  const handleSearch = e => {
    const searchValue = e.target.value
    const newProducts = products.filter(item =>
      item.productName.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredProducts(newProducts)
  }
  return (
    <div className={styles.container}>
      <CommonSection title='Shop' />
      <div className={styles.filter_box}>
        <div className={styles.widget}>
          <select onChange={handleFilter}>
            <option value='all'>Filter by category</option>
            <option value='sofa'>sofa</option>
            <option value='mobile'>mobile</option>
            <option value='chair'>chair</option>
            <option value='watch'>watch</option>
          </select>
        </div>
        <div className={styles.widget}>
          <select onChange={handleOrder}>
            <option value=''> Sort by</option>
            <option value='asc'>ascending</option>
            <option value='des'>descending</option>
          </select>
        </div>

        <div className={styles.input_box}>
          <input
            type='text'
            onChange={handleSearch}
            placeholder='searh products'
          />
        </div>
      </div>
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default Shop
