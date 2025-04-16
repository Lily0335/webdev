
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from "./Header"
import Main from "./maincontent"

function Page(){
  return (
    <>
    <Header />
    <Main />
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
 
    <Page />
 
)
