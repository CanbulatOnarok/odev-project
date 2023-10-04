
import "../style/categories.scss";




const Categories = ({categoryList }) => {




  return (
    <div className='categories'>
      <div className="title">
      <h1>Categories</h1>
      </div>
      <ul>
        {categoryList.map(categories => (
          <li key={categories.id}  >
            {categories.categoryName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories