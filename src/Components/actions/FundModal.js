import React from 'react';
import {  Text, Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, ModalCloseButton, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { EtherscanLink } from '../../config.js';
import { observer, inject, } from 'mobx-react';
import { RandomAvatar } from 'react-random-avatars';

const FundModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const modalbg = useColorModeValue("#fff", "gray.700")
    const modalfooterbg = useColorModeValue("gray.100", "#3D3762")
    const btnColor = useColorModeValue("#00C6C0", "#fff")

    return (
                    <Box>
                        <Text gap={1} fontWeight={{ base: "700", md: "500" }} display="flex" alignItems="center" justifyContent="center">
                        Smart Fund: <RandomAvatar name={props.smartFundAddress} size="14" /><small onClick={onOpen} style={{ color: "#039be5", cursor: "pointer" }}><strong >{String(props.smartFundAddress).replace(String(props.smartFundAddress).substring(4, 38), "...")}</strong></small>
                        </Text>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent bg={modalbg}>
                                <ModalHeader>View fund info</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Box pb={5} display={'flex'} justifyContent={'space-around'}>
                                        <Link to={"/fund-txs/" + props.smartFundAddress} width="100%" >
                                          <Button color={btnColor}>Get all txs</Button>
                                        </Link>
                                    </Box>
                                    <Button width="100%" ><a  href={EtherscanLink + "address/" + props.smartFundAddress} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: btnColor }}>See fund on Etherscan</a></Button>
                                </ModalBody>
                                <ModalFooter bg={modalfooterbg} borderBottomRadius={5}>
                                    <Text display="flex" fontSize="sm" fontWeight={500}> Address: {props.smartFundAddress}</Text>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
    );
};

export default inject('MobXStorage')(observer(FundModal));
