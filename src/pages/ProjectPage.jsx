import { useParams, useNavigate } from 'react-router-dom'
import { Container, Text, Image, Button, HStack, Badge } from '@chakra-ui/react'
import { projects } from '../data/projects'

const ProjectPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <Container py={12}>
        <Text>Project not found.</Text>
        <Button mt={4} onClick={() => navigate('/')}>Back to Home</Button>
      </Container>
    )
  }

  return (
    <Container maxW="container.lg" py={12}>
      <Button variant="ghost" mb={6} onClick={() => navigate('/')}>← Back</Button>
      <Text fontSize="3xl" fontWeight="bold" mb={2}>{project.title}</Text>
      <HStack mb={6}>
        {project.techStack.map(tech => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </HStack>
      <Image src={project.thumbnail} alt={project.title} borderRadius="md" mb={6} />
      <Text fontSize="md">{project.fullDescription}</Text>
      {project.link && (
        <Button mt={8} as="a" href={project.link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Button>
      )}
    </Container>
  )
}

export default ProjectPage
