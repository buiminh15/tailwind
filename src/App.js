import Header from './components/Header'
import Layout from './components/Layout'
import Subjects from './components/Subjects'
import CollectionContainer from './containers/CollectionContainer'
import PopularLocalities from './containers/PopularLocalities'
import SubjectsContainer from './containers/SubjectsContainer'

function App() {
  return (
    <div className='h-screen w-screen overflow-x-hidden bg-slate-500'>
      <Layout>
        <Header />
        <SubjectsContainer />
        <CollectionContainer />
        <PopularLocalities />
      </Layout>
    </div>
  )
}

export default App
