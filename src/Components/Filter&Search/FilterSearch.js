import React from 'react'
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Tab, TabList, TabPanel, TabPanels, Tabs, useColorModeValue, useDisclosure,} from '@chakra-ui/react'
import FundFilter from '../navigation/FilterAndSearch/FundFilter'
import FundSearch from '../navigation/FilterAndSearch/FundSearch'


function FilterSearch(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()


  const btnRef = React.useRef(null)
  const allbtnBg = useColorModeValue("#039be5", "#039be5")
  const allbtntxtcolor=useColorModeValue("#fff","gray.200")
  return (
    <React.Fragment>
      <Box>
          <Button ref={btnRef}  width={{base:"100%",md:"auto"}} onClick={onOpen} bg={allbtnBg} color={allbtntxtcolor} sx={{ _hover: { backgroundColor: "#027CB8" },padding:"0 50px",textTransform:"uppercase" }}>Filter Funds</Button>
      </Box>
      <Modal
      onClose={onClose}
      finalFocusRef={btnRef}
      isOpen={isOpen}
   
    >
      <ModalOverlay />
      <ModalContent >
        <ModalHeader textTransform={"capitalize"}>Filter and search smart funds</ModalHeader>
        <ModalCloseButton/>
        <ModalBody >
        <Tabs variant='enclosed'>
        <TabList>
          <Tab>Filter</Tab>
          <Tab>Search</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FundFilter onCloseModal={onClose} MobXStorage={props.MobXStorage} {...props} />
          </TabPanel>
          <TabPanel>
          <FundSearch onCloseModal={onClose} MobXStorage={props.MobXStorage} {...props} />
          </TabPanel>
        </TabPanels>
      </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
    </React.Fragment>
  )
}

export default FilterSearch
