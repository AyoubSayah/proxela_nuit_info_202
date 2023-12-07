import BackgrounDiv from './components/BackgrounDiv'
import Container from './components/Container'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CanvasLine from '../modules/home/components/CanvasAnimation2'
const Layout = () => (
  <div>
    <Navbar />
    <BackgrounDiv />
    <CanvasLine />

    <Container />
    <Footer />
  </div>
)

export default Layout
