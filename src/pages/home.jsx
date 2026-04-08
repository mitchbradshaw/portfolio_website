import { Container, Text, HStack } from '@chakra-ui/react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const Home = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <Text fontSize="30" fontWeight="bold" textAlign="center" mb={8}>
        Welcome to my portfolio
      </Text>
      <HStack align="start" flexWrap="wrap" gap={4}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </HStack>
    </Container>
  )
}

export default Home
