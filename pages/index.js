
export default function Home() {
  return (
    <main id="home">
    <h1 class="lg-heading">
      Ali
      <span class="text-secondary">Alzubair</span>
    </h1>
    <h2 class="sm-heading">
      Web Developer, Programmer, Designer & Entrepreneur
    </h2>
    <div class="icons">
      <a href="#!">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
 
  </main>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
