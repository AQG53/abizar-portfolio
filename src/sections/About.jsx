import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { useState } from 'react';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('abizergadi5253@gmail.com')

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }
    
  return (
    <section className='c-space my-20' id='about'>
        <h3 className='head-text'>About Me</h3>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full py-5'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain'/>
                    
                    <div>
                        <p className='grid-headtext'>Hi, I am Abizar</p>
                        <p className='grid-subtext'> A passionate full-stack developer with 1 year of hands-on experience building dynamic web applications. Skilled in both frontend and backend development, with a creative edge in crafting 3D animated websites. Also focused on integrating AI/ML solutions to create smarter, more interactive user experiences.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'> I specialize in full-stack development using React, Express.js, and Node.js, with experience in both MongoDB and MySQL databases. I’m also proficient in core web technologies including HTML, CSS, and JavaScript/TypeScript, and have hands-on experience in 3D web design using Three.js.</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                        height={326}
                        width={326}
                        backgroundColor='rgba(0,0,0,0)'
                        backgroundImageOpacity={0.5}
                        showAtmosphere
                        showGraticules
                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>I Work Remotely Across Most Timezones</p>
                        <p className='grid-subtext'>I am based in Karachi, Pakistan, with remote work available.</p>
                        <Button name="Contact Me" isBeam containerClass='w-full mt-10'/>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>My Passion for Coding</p>
                        <p className='grid-subtext'>I love solving real-world problems and buildings valuable solutions through code. Coding isn't just my profession - it is my passion.</p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="/assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top'/>
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contact Me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>abizergadi5253@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About