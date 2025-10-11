import { useContext, useState } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export const InputSearch = () => {
  const { handleButtonSearch } = useContext(ProductContext)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="m-10 flex justify-center">
      <TextField
        placeholder="Pesquise um produto"
        variant="outlined"
        size="small"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleButtonSearch(inputValue)
            setInputValue('')
          }
        }}
        sx={{
          width: 350,
          backgroundColor: 'white',
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#ccc' },
            '&:hover fieldset': { borderColor: '#8f44fd' },
            '&.Mui-focused fieldset': { borderColor: '#8f44fd' },
          },
        }}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    handleButtonSearch(inputValue)
                    setInputValue('')
                  }}
                >
                  <SearchIcon sx={{ color: '#8f44fd' }} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </div>
  )
}
