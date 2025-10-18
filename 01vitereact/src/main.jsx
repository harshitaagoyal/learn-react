import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function App() {
  return (
    <>
    <a href='https://google.com' target='_blank'>Go to google</a>
    </>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//     href:'https://www.google.com',
//     target:'_blank',
//   },
//   children : 'Go to Google',
// };

const reactElement = React.createElement(
  'a',
  {
    href:'https://www.google.com',
    target:'_blank',
  },
  'Go to Google'
);

const anotherElement = (
  <a href='https://www.google.com' target='_blank'>Go to Google</a>
)

createRoot(document.getElementById('root')).render(

    App()
)
