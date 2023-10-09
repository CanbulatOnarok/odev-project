
import "../style/Navi.scss";
import Logo from "../image/ürünler.png"

const Navi = ({categoryList,setSelectedCategory,selectedCategory}) => {

  return (
    <nav>
      <div className="logo">
      <img src={Logo} alt="" />
      <h1>Onarok Company</h1>
      </div>
      <ul>
        {categoryList.map(categories =>
         ((selectedCategory && selectedCategory!== "All Products" )|| categories.categoryName!== "All Products") &&
          <li  key={categories.id} onClick={()=>setSelectedCategory(categories.categoryName)} >{categories.categoryName}</li>
        )}
      </ul>
    </nav>

  )
}

export default Navi