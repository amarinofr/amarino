require('dotenv').config()

const express = require('express')
const fetch = require('node-fetch')

const path = require('path')
const staticGzip = require('express-static-gzip')

const app = express()
const port = 3000

const Prismic = require('@prismicio/client')
const prismicH = require('@prismicio/helpers')

const accessToken = process.env.PRISMIC_ACCESS_TOKEN
const endpoint = process.env.PRISMIC_ENDPOINT


const handleLinkResolver = (doc) => {
  if (doc.type === 'home') return `/${doc.uid}`
  if (doc.type === 'about') return `/${doc.uid}`
  if (doc.type === 'work') return `/work/${doc.uid}`
  return '/'
}

const client = Prismic.createClient(endpoint, {
  fetch,
  accessToken,
  handleLinkResolver
})

app.use((req, res, next) => {
  res.locals.ctx = {
    prismicH
  }
  next()
})

app.use(staticGzip(path.join(__dirname, 'public'), { index: false, enableBrotli: true, orderPreference: ['br', 'gz'] }))
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'pug')

app.get('/', async (req, res) => {
  const home = await client.getSingle('homepage')
  const intro = await client.getSingle('intro')
  const projects = await client.getAllByType('works', {
    fetchLinks: [
      'works.data.title',
      'works.data.project_number',
      'works.data.skills',
      'works.data.featured_image',
      'works.data.featured_image_2',
      'works.data.featured_image_3',
      'works.data.featured_image_4',
      'works.uid',
      'works.href'
    ]
  })

  res.render('pages/home', { intro, home, projects })
})

app.get('/about', async (req, res) => {
  const about = await client.getSingle('about')
  const intro = await client.getSingle('intro')

  res.render('pages/about', { about, intro })
})

app.get('/work/:uid', async (req, res) => {
  const single = await client.getByUID('works', req.params.uid)
  const intro = await client.getSingle('intro')
  const projects = await client.getAllByType('works', {
    fetchLinks: [
      'works.data.title',
      'works.uid',
      'works.href'
    ]
  })

  res.render('pages/work', {
    single, intro, projects
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
