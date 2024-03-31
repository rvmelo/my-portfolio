import React from 'react'
import { Layout } from '../../components/layout'
import { HomeContainer } from './styles'
import { Intro } from './intro'
import { About } from './about'

export const Home: React.FC = () => {
  return (
    <Layout>
      <HomeContainer>
        <Intro />
        <About />
      </HomeContainer>
    </Layout>
  )
}
