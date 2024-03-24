import React from 'react'
import { Layout } from '../../components/layout'
import { HomeContainer } from './styles'

export const Home: React.FC = () => {
  return (
    <Layout>
      <HomeContainer>
        <span>Home</span>
      </HomeContainer>
    </Layout>
  )
}
