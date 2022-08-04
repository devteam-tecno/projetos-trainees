module.exports = {
    async Headers() {
        return [
            {
                source: '/:path*',
                Headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' }
                ]
            }
        ]
    }
}