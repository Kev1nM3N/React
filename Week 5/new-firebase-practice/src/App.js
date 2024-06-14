import './App.css';
import KDLogo from './assets/KD-Logo.png'

function App() {
  return (
    <>
      <nav className='h-[75px] w-full outline outline-red-600 flex justify-evenly items-center'>
          <figure>
            <img src={KDLogo} width={'150px'}></img>
          </figure>

          <ul className='flex justify-evenly w-[300px] p-[2px]'>
            <li>Meetings</li>
            <li>Pendants</li>
            <li>Privacy</li>
          </ul>

          <div className='w-[200px] flex justify-evenly'>
            <button>Login</button>
            <button>Register</button>
          </div>
      </nav>

      <main className='h-[calc(100%-75px)] outline outline-blue-900'>
          <div>
            <div>
              <h1>Go beyond your mind's limitations</h1>
              <h2>Personalized AI powered by what you've seen, said, and heard.</h2>
              <div>
                <button>Test</button>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}

export default App;
