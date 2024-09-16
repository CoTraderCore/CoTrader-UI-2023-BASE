import React, { useState } from 'react'
import { Button, Checkbox, FormControl, FormLabel, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Tooltip, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import { APIEnpoint, SmartFundABIV7 } from '../../../config';
import setPending from '../../../utils/setPending';

function Withdraw(props) {
    const [percent, setPercent] = useState(50);
    const [isConvert, setIsConvert] = useState(false);

    const withdraw = async (address, percent) => {

        if (percent >= 0 && percent <= 100) {
            const contractABI = SmartFundABIV7;
            const contract = new props.web3.eth.Contract(contractABI, address);
            const shares = await contract?.methods.balanceOf(props.accounts[0]).call();

            if (shares > 0) {
                try {
                    const totalPercentage = await contract.methods.TOTAL_PERCENTAGE().call();
                    const currentPercent = (totalPercentage / 100) * percent;

                    const block = await props.web3.eth.getBlockNumber();

                    let txCount = await axios.get(APIEnpoint + 'api/user-pending-count/' + props.accounts[0]);
                    txCount = txCount.data.result;

                    const params = props.version === 6 ? [currentPercent, isConvert] : [currentPercent];

                    contract.methods
                        .withdraw(...params)
                        .send({ from: props.accounts[0] })
                        .on('transactionHash', (hash) => {
                            props.pending(true, txCount + 1);
                            setPending(address, 1, props.accounts[0], block, hash, "Withdraw");
                        });
                } catch (e) {
                    alert('Can not verify transaction data, please try again in a minute');
                }

            } else {
                alert('Empty deposit');
            }
        }

    };

    const change = (e) => {
        setPercent(e.target.value);
    };
    const { isOpen, onOpen, onClose } = useDisclosure()
    const allbtnBg = useColorModeValue("#039be5", "#039be5")
    return (
        <React.Fragment>
        {
            !props.web3 ? (
                <Tooltip hasArrow label="Please connect to web3">
                    <Button flexGrow="1" minWidth={{ base: '100%', sm: "auto" }} bg={allbtnBg} color="#fff" sx={{ _hover: { backgroundColor: "#027CB8" } }}>Withdraw</Button>
                </Tooltip>
            ) : (
                <Button onClick={onOpen} flexGrow="1" minWidth={{ base: '100%', sm: "auto" }} bg={allbtnBg} color="#fff" sx={{ _hover: { backgroundColor: "#027CB8" } }}>Withdraw</Button>
            )
        }
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader> Withdraw from smart fund</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Percent {percent} %</FormLabel>
                            <input
                                className='range-100'
                                type='range'
                                value={percent}
                                min="1"
                                name='Percent'
                                max="100"
                                onChange={(e) => change(e)}
                            />
                            {
                                props.version === 6 ?
                                    (
                                        <Stack mt={2} spacing={5} direction='row'>
                                            <Checkbox colorScheme='red' checked={isConvert} onChange={() => setIsConvert(!isConvert)}>
                                                {`Try convert assets to ${props.mainAsset}`}
                                            </Checkbox>
                                        </Stack>
                                    ) : null
                            }

                            <Button mt={3} colorScheme='green' variant='outline' mr={3} onClick={() => {
                                withdraw(props.address, percent)
                            }}>
                                Withdraw
                            </Button>

                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </React.Fragment>
    )
}

export default Withdraw
