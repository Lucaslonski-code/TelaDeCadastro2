import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx' // importação de componentes, arquivos, imagens, etc

// import Home from './pages/Home/index.jsx' //import default
// import { App, App2 as Appp } from './App.jsx' //import nomeado
// necessário {}, e todos os elementos exportados, ou seja, o nome tem que ser o mesmo do export,
//  ou usar "as" para renomear.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)
