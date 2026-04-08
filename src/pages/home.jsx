import { Box, SimpleGrid, VStack } from '@chakra-ui/react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const NUM_COLS = 3

const Home = () => {
  const columns = Array.from({ length: NUM_COLS }, (_, i) =>
    projects.filter((_, j) => j % NUM_COLS === i)
  )

  return (
    <Box px={12} py={8} h="100%" overflow="hidden">
      <SimpleGrid columns={{ base: 2, md: 3 }} gap={4} h="100%">
        {columns.map((col, i) => (
          <VStack
            key={i}
            gap={4}
            overflowY="auto"
            h="100%"
            pb={4}
            alignItems="stretch"
            css={{ '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: 'none' }}
          >
            {col.map(project => (
              <Box key={project.id} flexShrink={0}>
                <ProjectCard project={project} />
              </Box>
            ))}
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default Home
