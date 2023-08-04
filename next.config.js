const path = require('path')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'layoutStyles')],
    includePaths: [path.join(__dirname, 'styles')],
  },
  // リダイレクト
  async redirects() {
    return [
      {
        source: '/redirect',
        destination: '/',
        permanent: true, 
      },
    ];
  },
}