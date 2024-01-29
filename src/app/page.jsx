
import '@styles/global.css';

export const metadata = {
  title:"promptia",
  description:"discover share ai prompts"
}
function Rootlayout({children}) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient'/>
        </div> 
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default Rootlayout;