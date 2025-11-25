import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Testimonials from "./Components/Testimonials/Testimonials"
import Treatments from "./Components/Treatments/Treatments"
import UniqueValue from "./Components/UniqueValue/UniqueValue"
import { ToastContainer } from 'react-toastify';



function App() {

  return (
    <main className="text-[#131008]">
      <Hero/>
      <UniqueValue/>
      <Treatments/>
      <Testimonials/>
      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  )
}

export default App
