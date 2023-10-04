
import "../style/Navi.scss";
import Logo from "../image/ürünler.png"

const Navi = ({categoryList}) => {

  return (
    <nav>
      <div className="logo">
      <img src={Logo} alt="logo" />
      <h1>Onarok Company</h1>
      </div>
      <ul>
        {categoryList.map(categoryList => (
          <li  key={categoryList.id}>{categoryList.categoryName}</li>
        ))}
      </ul>
    </nav>

  )
}

export default Navi