import '@styles/global.css';

const Home = () =>{
  return(
    <section className="w-full fex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md: hidden"/>
        <span className="orange_gradient">Ai Powdered prompts</span>
        </h1>
        <p className="desc text-center">
          promptopia is an open-source Ai prompting tool
          for modern world to discover, create and share creative prompts
        </p>
        {/* Feed Component */}
    </section>
  )
}
export default Home;