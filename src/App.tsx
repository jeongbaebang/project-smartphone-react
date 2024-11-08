import Footer from './components/device/Footer';
import Header from './components/device/Header';
import Layout from './components/Layout';
import Screen from './components/device/Screen';

function Smartphone() {
  return (
    <>
      <h1>wanted-challenge-fe-27</h1>
      <Layout>
        <Header />
        <Screen />
        <Footer />
      </Layout>
    </>
  );
}

export default Smartphone;
