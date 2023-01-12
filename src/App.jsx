import './App.css'
import Header from './components/header'
import ScrollIndicator from "./components/scrollIndicator"
import Page1 from './screens/Page1.jsx'
import Page2 from './screens/Page2.jsx'
import Page3 from './screens/Page3.jsx'
import Page4 from './screens/Page4.jsx'
import Page5 from './screens/Page5.jsx'
import Page6 from './screens/Page6.jsx'

const pages = [1, 2, 3, 4, 5, 6];

export default function App() {
  return (
    <main>
      <Header />
      <ScrollIndicator pages={pages} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </main>
  )
}
