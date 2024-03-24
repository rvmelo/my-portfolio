import React from 'react'
import { HeaderContainer, NavigationWrapper } from './styles'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <span>rvtheone.dev</span>
      <NavigationWrapper>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </NavigationWrapper>
    </HeaderContainer>
  )
}
