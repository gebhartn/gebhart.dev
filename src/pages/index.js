import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import config from '../../data/SiteConfig'
import { container } from './index.module.scss'

export default () => (
  <Layout>
    <SEO />
    <Helmet title={`${config.siteTitle} - Full Stack Software Developer`} />
    <div className={container}>
      <Hero />
    </div>
  </Layout>
)
