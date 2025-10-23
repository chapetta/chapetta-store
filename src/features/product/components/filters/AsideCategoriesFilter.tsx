import { useState } from 'react'
import './AsideCategoriesFilter.css'
import { useCategoryContext } from '@/shared/hooks/useCategoryContext'

export const AsideCategoriesFilter = () => {
  const { listCategories, filterByCategorie } = useCategoryContext()

  const [selectedCategorie, setSelectedCategorie] = useState('')

  const handleCategoryChange = (category: string) => {
    setSelectedCategorie(category)
    filterByCategorie(category)
  }

  return (
    <aside className="border-border bg-card text-foreground my-10 flex h-[500px] w-60 flex-col gap-5 rounded-xl border-2 p-4 shadow-sm">
      <h2>Categorias:</h2>
      <nav>
        <ul>
          {listCategories.length > 0 &&
            listCategories.map((categorie) => (
              <li key={categorie} className="m-2 flex gap-3">
                <label className="checkbox-2">
                  <input
                    type="radio"
                    checked={selectedCategorie === categorie}
                    name="categorie"
                    value={categorie}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className="checkbox-input"
                  ></input>
                  <svg className="checkbox-check" width="25" height="25">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </label>
                {categorie}
              </li>
            ))}
        </ul>
      </nav>
    </aside>
  )
}
