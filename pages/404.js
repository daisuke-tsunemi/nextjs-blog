import Layout from './layouts/layout_error';
export default function Custom404() {
  return (
    <Layout>
      <div className={'pageError'}>
        <h1 className={'text-3xl font-black'}>404 - Page Not Found -</h1>
      </div>
    </Layout>
  )
}