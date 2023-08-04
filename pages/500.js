import Layout from './layouts/layout_error';
export default function Custom500() {
  return (
    <Layout>
      <div className={'p-error'}>
        <h1 className={'text-3xl font-black'}>500 - Server-side error occurred -</h1>
      </div>
    </Layout>
  )
}