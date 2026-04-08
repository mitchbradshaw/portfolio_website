import { Flex, Box, HStack, Button, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { useTheme } from 'next-themes'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMoon, IoSunny } from 'react-icons/io5'

const Navbar = () => {
    const { resolvedTheme, setTheme } = useTheme()
    const toggleColorMode = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')

    return (<Box px={12}>
        <Flex
        h={20}
        alignItems={"center"}
        justifyContent={"space-between"}>

        <RouterLink to={"/about"}>
        <Box
        fontSize={28}
        fontWeight={"bold"}
        >Mitch Bradshaw.</Box>
        </RouterLink>

        <HStack spacing={2} alignItems={"center"}>
        <Link href={"https://github.com/mitchbradshaw"} target="_blank">
            <Button bg={"transparent"}>
                <FaGithub fontSize={15} color={resolvedTheme === "light" ? "#000000" : "#ffffff"} />
            </Button>
        </Link>
        <Link href={"https://www.linkedin.com/in/mitch-bradshaw-9625b41b3/"} target="_blank">
            <Button bg={"transparent"}>
                <FaLinkedin fontSize={15} color={resolvedTheme === "light" ? "#000000" : "#ffffff"} />
            </Button>
        </Link>
        <Button bg={"transparent"} onClick={toggleColorMode}>
            {resolvedTheme === "light" ? <IoMoon color={"#000000"}/> : <IoSunny color={"#ffffff"}/>}
        </Button>
        </HStack>

        </Flex>
    </Box>);
}

export default Navbar
