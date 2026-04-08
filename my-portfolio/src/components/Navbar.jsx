import React from 'react'
import {Flex, Container, Text, VStack} from '@chakra-ui/react'

const Navbar = () => {
    return (<Container>
        <VStack>
            <Text>
                This is the navbar
            </Text>
            <Text>
                This is for all your navigation items
            </Text>
        </VStack>
    </Container>);
}

export default Navbar