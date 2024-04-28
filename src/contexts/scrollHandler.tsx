import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
} from 'react'

interface ScrollHandlerContextData {
  handleScroll: (ref: React.RefObject<HTMLDivElement>) => void
  aboutRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
  introRef: React.RefObject<HTMLDivElement>
  portfolioRef: React.RefObject<HTMLDivElement>
}

const ScrollHandlerContext = createContext({} as ScrollHandlerContextData)

export const ScrollHandlerProvider = ({ children }: PropsWithChildren) => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)

  const handleScroll = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <ScrollHandlerContext.Provider
      value={{
        handleScroll,
        aboutRef,
        contactRef,
        introRef,
        portfolioRef,
      }}
    >
      {children}
    </ScrollHandlerContext.Provider>
  )
}

export function useScrollHandler() {
  const context = useContext(ScrollHandlerContext)

  if (!context) {
    throw new Error(
      'Scroll Handler Context must be used within a Scroll Handler Provider',
    )
  }

  return context
}
