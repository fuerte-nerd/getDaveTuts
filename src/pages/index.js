import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import NavBar from '../components/NavBar'

import { Container } from 'reactstrap'

export default function Index() {
    return (
        <Layout>
            <SEO title="Home" />
            <NavBar />
            <Container>
                <div className="min-vh-100"></div>
                <div className="min-vh-100"></div>
            </Container>
        </Layout>
    )
}
