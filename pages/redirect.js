export default function getStaticProps(context) {
  return {
    redirect: {
      destination: '/',
      permanent: true
    },
  }
}
