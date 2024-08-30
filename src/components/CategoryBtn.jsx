
import React from 'react'
import './css/CategoryBtn.css'

const CategoryBtn = ({label, onClick}) => {
  return (
    <>
    <button onClick={onClick} className="category-btn">
    {label}
    </button>
    </>
  )
}

export default CategoryBtn