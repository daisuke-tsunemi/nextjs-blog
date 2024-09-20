import Layout from './layouts/layout_error';
export default function Custom404() {
  return (
    <Layout>
      <div className={'pageError'}>
        <h1 className={'c-txt__xl2 c-txt--center'}>404</h1>
        <h2 className={'c-txt__md c-txt__weight--700 c-txt--center'}>このページは無いみたいです</h2>
      </div>
    </Layout>
  )
}