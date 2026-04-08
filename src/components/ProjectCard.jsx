import { Card, Image, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()

  return (
    <Card.Root maxW="sm" overflow="hidden" cursor="pointer" onClick={() => navigate(`/projects/${project.id}`)}>
      <Image src={project.thumbnail} alt={project.title} h={48} w="full" objectFit="cover" />
      <Card.Body gap="2">
        <Card.Title>{project.title}</Card.Title>
        <Card.Description>{project.description}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid" onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.id}`) }}>
          See More
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default ProjectCard
