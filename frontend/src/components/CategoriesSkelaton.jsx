import React from 'react'

const CategoriesSkelaton = ({count}) => {
  return (
    <div className="flex flex-col gap-3">
    {Array(count).fill().map((_, index) => (
      <div key={index} className="h-8 w-40 bg-gray-300 rounded animate-pulse"></div>
    ))}
  </div>
  )
}

export default CategoriesSkelaton
