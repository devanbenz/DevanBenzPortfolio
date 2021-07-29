import './App.css';
import download from 'downloadjs';



const Header = ({ gh, li, resume }) => {
  return (
    <div className='grid grid-cols-2'>
      <div className='flex'>
        <p className='text-2xl border-black border-r-2 border-b-2 font-mono p-5 not-italic subpixel-antialiased'>
          <i className='font-black'>Devan Benz</i><i className='font-thin'> // Full-stack Developer</i>
        </p>
      </div>
      <div className='flex justify-end'>
        <p className='text-right  font-mono p-5'>
          <button onClick={gh} className='transition duration-500 ease-in-out border-r-2 border-b-2 border-green-300 p-2 hover:border-black'>Github</button> -
          <button onClick={li} className='transition duration-500 ease-in-out border-r-2 border-b-2 border-green-300 p-2 hover:border-black'>Linkedin</button> -
          <button onClick={resume} className='transition duration-500 ease-in-out border-r-2 border-b-2 border-green-300 p-2 hover:border-black'>Resume</button>
        </p>
      </div>
    </div>
  )  
}


const App = () => {

  const openLink = (url) => {
    window.open(url, '_blank')
  }

  const resume = async () => {
    const res = await fetch('/api/resume',{method:'GET'})
    const blob = await res.blob()
    download(blob, 'Resume.pdf')
  }

  return (
    <div className='container mx-auto border bg-green-300'>
      <div className='container mx-auto p-10'>
        <Header gh={() => openLink('https://github.com/devanbenz')}
        li={() => openLink('https://www.linkedin.com/in/devan-benz-b03a8894/')}
        resume={resume} />
      </div>
    </div>
  )
}

export default App;
