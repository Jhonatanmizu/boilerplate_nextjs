/** @type {import('next').NextConfig} */
//eslint-disable-next-line
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  reactStrictMode: true
})
