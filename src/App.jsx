import { Canvas } from "@react-three/fiber"
import { Mesh } from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"; 
import { mx_bilerp_1 } from "three/src/nodes/materialx/lib/mx_noise.js"
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
// const RotatingMesh = () => {
//   const meshRef = useRef(null)
//   useFrame((state, delta) => {
//     meshRef.current.rotation.x += delta;
//   }) 
//   return(
//     <mesh ref={meshRef}>
//       <cylinderGeometry args={[1,1,1]}/>
//       <meshLambertMaterial color={'white'}/>
//     </mesh>
//   )

// }
const App = () => {
  console.log("help me");
      return (
        // <div className="container">
        // <Canvas style={{ height:'100vh' , width:'100vh' , display:"flex" , justifyContent:'center', alignItems:'center'}}>
        //   <OrbitControls enableDamping autoRotate/>
        //   <directionalLight  color="red" intensity={0.7}></directionalLight>
        //   <RotatingMesh/>
        // </Canvas>
          
        // </div>
        <main className="max-w-full max-auto">
          <Navbar/>
          <Hero/>
          <About/>
          <Projects/>
{/*           <Contact/> */}
          <Footer/>
        </main>
      )
}
export default App
