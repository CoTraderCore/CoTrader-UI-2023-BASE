import React from 'react';
import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalCloseButton, useDisclosure, Text, useColorModeValue, } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { EtherscanLink } from '../../config.js';
import { inject, observer } from 'mobx-react';
import { RandomAvatar } from 'react-random-avatars';


const ManagerModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const modalbg = useColorModeValue("#fff", "gray.700")
    const modalfooterbg = useColorModeValue("gray.100", "#3D3762")
    const btnColor = useColorModeValue("#00C6C0", "#fff")

    return (
                    <Box>
                        <Text gap={1} fontWeight={500} display="flex" alignItems="center" justifyContent="center" >
                            Owner: <RandomAvatar name={props.owner} size="14" /><small onClick={onOpen} style={{ color: "#039be5", cursor: "pointer" }}><strong>{String(props.owner).replace(String(props.owner).substring(4, 38), "...")}</strong></small>
                        </Text>
                        <Modal isOpen={isOpen} onClose={onClose} aria-labelledby="example-modal-sizes-title-sm">
                            <ModalOverlay />
                            <ModalContent bg={modalbg}>
                                <ModalHeader>View Manager Info</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box mt={5} style={{ display: "flex", justifyContent: "space-around" }}>
                                        <Link to={"/user-txs/" + props.owner} >
                                            <Button color={btnColor} >Get all txs</Button>
                                        </Link>
                                        <Button>
                                            <a style={{ color: btnColor, textDecoration: "none" }} href={EtherscanLink + "address/" + props.owner} target="_blank" rel="noopener noreferrer">Etherscan</a>
                                        </Button>
                                    </Box>
                                </ModalBody>
                                <ModalFooter bg={modalfooterbg} borderBottomRadius={5}>
                                    <Text fontSize="sm" fontWeight={500}>
                                        Address: {props.owner}
                                    </Text>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
    );
};

export default inject('MobXStorage')(observer(ManagerModal));
