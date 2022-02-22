import Layout from './components/layout/Layout';
import Head from './components/layout/Head';

export default function About() {
  return (
    <Layout>
      <Head title="Home" />
      <div className="container">
        <h1>About page</h1>
      </div>
    </Layout>
  )
}