import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'JetBrains Mono', JetBrains, monospace" },
        body: { value: "'JetBrains Mono', JetBrains, monospace"},
        mono: { value: "'JetBrains Mono', JetBrains, monospace" },
      },
    },
  },
  globalCss: {
    body: {
      bg: 'black',
      color: 'white',
      _light: {
        bg: 'white',
        color: 'black',
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
