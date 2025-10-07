import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
app.use(cors())

app.get("/api/search", async (req, res) => {
  const { q } = req.query;

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${q}`;


  try {
    const response = await fetch(url)
    const data = await response.json()

    res.json(data.results || [])
  } catch (err) {
    console.error("Error ao buscar produtos", err)
    res.status(500).json({ error: "Erro ao buscar produtos"})
  }
})


const PORT = 3001;

app.listen(PORT, () => console.log(`servidor rodando em http://localhost:${PORT}`))