import Head from 'next/head'
import Nav from '../components/nav.js'
import Intro from '../components/intro.js'
import Footer from '../components/footer.js'
import Collection from '../components/collection'
import Services from '../components/services'

function Home() {
  return (
    <>
      <Head>
        <title>PartyPanda.Club</title>
        <link rel="icon" href="../partypandaclubdot.svg" />
      </Head>
      <Intro />
      <Services />
      <Footer />

    </>
  )
}

export default Home
