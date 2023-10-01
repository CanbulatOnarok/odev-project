
import "../style/categories.scss";




const Categories = ({ data,setCurrentCategory }) => {




  return (
    <div className='categories'>
      <div className="title">
      <h1>Categories</h1>
      </div>
      <ul>
        {data.map(category => (
          <li key={category.id} 
          onClick={()=> setCurrentCategory(category.categoryName)} >
            {category.categoryName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories