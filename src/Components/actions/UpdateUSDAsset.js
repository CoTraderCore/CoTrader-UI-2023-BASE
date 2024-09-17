import React, { useState, useEffect } from 'react';
import { SmartFundABIV7, EtherscanLink } from '../../config';
import { fromWei } from 'web3-utils';
import { isAddress } from 'web3-validator';
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Select,
    FormControl,
    InputGroup,
    Text,
    Alert,
    useColorModeValue, FormLabel
} from '@chakra-ui/react'

const symbols = ['BDAI', 'BUSD'];
const assets = {
    BDAI: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3',
    BUSD: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
};

const UpdateUSDAsset = (props) => {
    const [newUSDTokenAddress, setNewUSDTokenAddress] = useState('');
    const [currentUSDTokenAddress, setCurrentUSDTokenAddress] = useState('');
    const [currentUSDTokenSymbol, setCurrentUSDTokenSymbol] = useState('');
    const [symbolsArray, setSymbolsArray] = useState([]);
    const [fundContract, setFundContract] = useState(null);
    const [show, setShow] = useState(false);
    const [showSuccessMsg, setShowSuccessMsg] = useState(false);
    const [totalWeiDeposited, setTotalWeiDeposited] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const initData = async () => {
            const contract = new props.web3.eth.Contract(SmartFundABIV7, props.smartFundAddress);
            const currentTokenAddress = await contract.methods.coreFundAsset().call();

            const totalWeiDepositedInWei = await contract.methods.totalWeiDeposited().call();
            const totalWeiDeposite = Number(fromWei(String(totalWeiDepositedInWei),'ether'));
            const currentTokenSymbol = Object.keys(assets).find(
                (k) => assets[k].toLowerCase() === currentTokenAddress.toLowerCase()
            );
            if (isMounted) {
                setCurrentUSDTokenAddress(currentTokenAddress);
                setCurrentUSDTokenSymbol(currentTokenSymbol);
                setSymbolsArray(symbols);
                setFundContract(contract);
                setTotalWeiDeposited(totalWeiDeposite);
            }
        };

        initData();
        return () => {
            isMounted = false;
        };
    }, [props.smartFundAddress, props.web3]);


    const setAddressBySymbol = (e) => {
        for (let [key, value] of Object.entries(assets)) {
            if (key === e.target.value) setNewUSDTokenAddress(value);
        }
    };

    const changeUSDToken = async () => {
        if (isAddress(newUSDTokenAddress)) {
            await fundContract.methods
                .changeStableCoinAddress(newUSDTokenAddress)
                .send({ from: props.accounts[0], gasPrice: await props.web3.eth.getGasPrice() });
            setShowSuccessMsg(true);
        } else {
            alert('Please select a valid token address');
        }
    };

    let modalClose = () => setShow(false);
    const allbtnBg = useColorModeValue("#039be5", "#039be5")
    const modalbg = useColorModeValue("#fff", "gray.700")

    return (
        <>
            <Button flexGrow="1" minWidth={{ base: '100%', md: 'auto' }} bg={allbtnBg} color="#fff" sx={{ _hover: { backgroundColor: "#027CB8" } }} onClick={() => setShow(true)}>
                Stable token
            </Button>

            <Modal isOpen={show} onClose={modalClose}>
                <ModalOverlay />
                <ModalContent bg={modalbg} >
                    <ModalHeader>
                        Update USD asset
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Alert status="warning">
                            Your current fund USD token :&nbsp;
                            <strong>
                                <a
                                    style={{ color: "#7500ff" }}
                                    href={EtherscanLink + 'token/' + currentUSDTokenAddress}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {currentUSDTokenSymbol}
                                </a>
                            </strong>
                        </Alert>
                        <FormControl>
                            <InputGroup mt={5} sx={{ display: "flex", flexDirection: "column" }}>
                                <Text >
                                    <FormLabel >Set new USD token</FormLabel>
                                </Text>
                                <Select onChange={(e) => setAddressBySymbol(e)}>
                                    <option value="...">...</option>
                                    {symbolsArray.map((item, key) => (
                                        <option value={assets[item]} key={key}>
                                            {item}
                                        </option>
                                    ))}
                                </Select>
                            </InputGroup>

                            {totalWeiDeposited === 0 ?
                                (
                                    <Button mt={3} colorScheme='green' variant="outline" onClick={() => changeUSDToken()}>
                                        Set new token
                                    </Button>
                                ) : (
                                    <Alert mt={2} status="error">
                                        <small>
                                            You can't change the stable coin address because a deposit has already been made in the current USD
                                            token
                                        </small>
                                    </Alert>
                                )}

                            {showSuccessMsg ? (
                                <>
                                    <br />
                                    <br />
                                    <Alert status="success">
                                        Token will be changed after confirmation of the transaction
                                    </Alert>
                                </>
                            ) : null}
                        </FormControl>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default UpdateUSDAsset;
