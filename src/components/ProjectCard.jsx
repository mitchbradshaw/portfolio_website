import { Card, Image, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'next-themes'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Card.Root w="full" overflow="hidden" cursor="pointer" bg={resolvedTheme === "light" ? "#000000" : "#ffffff"} onClick={() => navigate(`/projects/${project.id}`)}>
      <Image src={project.thumbnail} alt={project.title} />
      <Card.Body gap="2">
        <Card.Title color={resolvedTheme === "light" ? "#ffffff" : "#000000"}>{project.title}</Card.Title>
        <Card.Description color={resolvedTheme === "light" ? "#ffffff" : "#000000"}>{project.description}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid" bg={resolvedTheme === "light" ? "#9f86ff" : "#5969ff"} onClick={(e) => { e.stopPropagation(); navigate(`/projects/${project.id}`) }}>
          See More
        </Button>
      </Card.Footer>
    </Card.Root>
  )
}

export default ProjectCard
