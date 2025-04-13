import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'
import HackerRoom from '../components/HackerRoom'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Rings from '../components/Ring'
import Button from '../components/Button'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Cube from '../components/Cube'
import HeroCamera from '../components/HeroCamera'
const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const sizes = calculateSizes(isSmall, isMobile, isTablet);
    
   
  return (
<section className="min-w-full min-h-screen flex flex-col items-center relative" id='home'>
  <div className="w-full mx-auto flex flex-col items-center gap-3 mt-20 sm:mt-36">
    <p className="text-gray-700 dark:text-gray-300 animate-wave text-center text-2xl sm:text-3xl font-medium font-general-sans">
      Hello I am Shrisha Kumar <span className="waving-hand">👋</span>
    </p>
    <p className="bg-gradient-to-r from-gray-400 to-gray-600 text-transparent bg-clip-text text-center font-bold" id="hero-tag">
      Curiosity in action, unraveling the depths of everything
    </p>
    </div>
    <div className="absolute w-full h-full inset-0"> 
    {/* <Leva/> */}
    <Canvas className='w-full h-full '>
    <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0,0,30]}/>
            <HeroCamera isMobile={isMobile}>
                <HackerRoom  
                scale={sizes.deskScale}
                rotation={[0.1,3.1,0.0]} 
                position={sizes.deskPosition} 
            /> 
        </HeroCamera>
       
        <group>
            <Target position={sizes.targetPosition}/>
            <ReactLogo position={sizes.reactLogoPosition} />
            {/* <Rings position={sizes.ringPosition} /> */}
            <Cube position={sizes.cubePosition}/>
        </group>
        <ambientLight intensity={1}/>
        <directionalLight position={[10,10,10]}/>
    </Suspense>
        
    </Canvas>
    
  </div>
  <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        {/* <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a> */}
      </div>
  
</section>
  )
}

export default Hero
