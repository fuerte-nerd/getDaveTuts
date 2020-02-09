import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container } from 'reactstrap'

export default function Index() {
    return (
        <Layout>
            <SEO title="Home" />
            <Container>
                Starting point
            </Container>
        </Layout>
    )
}
