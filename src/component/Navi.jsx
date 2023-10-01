import React from 'react'
import "../style/Navi.scss";
import Logo from "../image/ürünler.png"

const Navi = ({data}) => {
  return (
    <nav>
      <div className="logo">
      <img src={Logo} alt="logo" />
      <h1>Onarok Company</h1>
      </div>
      <ul>
        {data.map(category => (
          <li key={category.id}>{category.categoryName}</li>
        ))}
      </ul>
    </nav>

  )
}

export default Navi