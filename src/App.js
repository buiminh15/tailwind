import Header from "./components/Header";
import Layout from "./components/Layout";
import CollectionContainer from "./containers/CollectionContainer";
import GetApp from "./containers/GetApp";
import PopularLocalities from "./containers/PopularLocalities";
import SubjectsContainer from "./containers/SubjectsContainer";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-slate-500">
      <Header />
      <Layout>
        <SubjectsContainer />
        <CollectionContainer />
        <PopularLocalities />
        <GetApp />
      </Layout>
    </div>
  );
}

export default App;
