import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { Search } from 'lucide-react'
import { useState } from 'react'
import { useProductsContext } from '@/shared/hooks/useProductsContext'

export const InputSearch = () => {
  const { searchProducts } = useProductsContext()
  const [value, setValue] = useState('')

  const handleSearch = () => {
    if (!value.trim()) return
    searchProducts(value)
    setValue('')
  }

  return (
    <div className="flex w-full max-w-lg items-center rounded-md bg-white pr-1 pl-3 shadow-sm focus-within:ring-2 focus-within:ring-blue-600">
      <Input
        type="text"
        placeholder="Pesquisar na ChapettaStore"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        className="border-none bg-transparent text-black focus-visible:ring-0"
      />
      <Button
        size="sm"
        onClick={handleSearch}
        className="bg-blue-600 px-5 text-white hover:bg-blue-700"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  )
}
