import React from 'react'
import { Layout } from '../../components/layout'
import { HomeContainer } from './styles'
import { Intro } from './intro'
import { About } from './about'
import { Portfolio } from './portfolio'
import { Contact } from './contact'

export const Home: React.FC = () => {
  return (
    <Layout>
      <HomeContainer>
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </HomeContainer>
    </Layout>
  )
}
