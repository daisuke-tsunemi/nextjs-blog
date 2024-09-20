import Layout from './layouts/layout_error';
export default function Custom500() {
  return (
    <Layout>
      <div className={'pageError'}>
        <h1 className={'c-txt__xl2 c-txt--center'}>500</h1>
        <h2 className={'c-txt__md c-txt__weight--700 c-txt--center'}>サーバーの調子がおかしいようです</h2>
      </div>
    </Layout>
  )
}