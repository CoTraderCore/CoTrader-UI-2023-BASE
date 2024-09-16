const WhiteListedTokens = ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "0xd6df932a45c0f255f85145f286ea0b292b21c90b", "0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f", "0xb33eaad8d922b1083446dc23f610c2567fb5180f", "0x2791bca1f2de4661ed88a30c99a7a9449aa84174", "0xc2132d05d31c914a87c6611c10748aeb04b58e8f", "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063", "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6", "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39", "0xf2b5a8c37278bcdd50727d5ca879f8e5a4642e2e", "0xa1428174f516f527fafdd146b883bb4428682737", "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4", "0xda537104d6a5edd53c6fbba9a898708e465260b6", "0x831753dd7087cac61ab5644b308642cc1c33dc13", "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270", "0x69cbc7449ee102eb792f1656744bf1a7c1bacb7e", "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c", "0xfdc26cda2d2440d0e83cd1dee8e8be48405806dc", "0x2a93172c8dccbfbc60a39d56183b7279a2f647b4", "0x71b821aa52a49f32eed535fca6eb5aa130085978", "0x033d942a6b495c4071083f4cde1f17e986fe856c", "0xf84bd51eab957c2e7b7d646a3427c5a50848281d", "0x46f48fbdedaa6f5500993bede9539ef85f4bee8e", "0x7cdc0421469398e0f3aa8890693d86c840ac8931", "0x9c49ba0212bb5db371e66b59d1565b7c06e4894e", "0xd85d1e945766fea5eda9103f918bd915fbca63e6", "0xecf8f2fa183b1c4d2a269bf98a54fce86c812d3e", "0x2727ab1c2d22170abc9b595177b2d5c6e1ab7b7b", "0x0e59d50add2d90f5111aca875bae0a72d95b4762", "0x42435f467d33e5c4146a4e8893976ef12bbce762", "0x8a2870fb69a90000d6439b7adfb01d4ba383a415", "0xd28449bb9bb659725accad52947677cce3719fd7", "0xfed16c746cb5bfed009730f9e3e6a673006105c7", "0xa0e390e9cea0d0e8cd40048ced9fa9ea10d71639", "0xdb3b3b147a030f032633f6c4bebf9a2fb5a882b5", "0x07738eb4ce8932ca961c815cb12c9d4ab5bd0da4", "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619", "0x104592a158490a9228070e0a8e5343b499e125d0", "0x3e121107f6f22da4911079845a470757af4e1a1b", "0x8d1566569d5b695d44a9a234540f68d393cdc40d", "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7", "0x23d29d30e35c5e8d321e1dc9a8a61bfd846d4c5c", "0x521cddc0cba84f14c69c1e99249f781aa73ee0bc", "0xe6fc6c7cb6d2c31b359a49a33ef08ab87f4de7ce", "0x313d009888329c9d1cf4f75ca3f32566335bd604", "0x6968105460f67c3bf751be7c15f92f5286fd0ce5", "0xfb65ef42f7c8a70ff73f627db6e9ba2aff1f20fa", "0xc3ec80343d2bae2f8e680fdadde7c17e71e114ea", "0x2b88ad57897a8b496595925f43048301c37615da", "0x127984b5e6d5c59f81dacc9f1c8b3bdc8494572e", "0x03247a4368a280bec8133300cd930a3a61d604f6", "0x361a5a4993493ce00f61c32d4ecca5512b82ce90", "0x48e3883233461c2ef4cb3fcf419d6db07fb86cea", "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a", "0x3809dcdd5dde24b37abe64a5a339784c3323c44f", "0x043a3aa319b563ac25d4e342d32bffb51298db7b", "0x840195888db4d6a99ed9f73fcd3b225bb3cb1a79", "0x7fbc10850cae055b27039af31bd258430e714c62", "0x034b2090b579228482520c589dbd397c53fc51cc", "0xb77e62709e39ad1cbeebe77cf493745aec0f453a", "0x8f18dc399594b451eda8c5da02d0563c0b2d0f16", "0x72d6066f486bd0052eefb9114b66ae40e0a6031a", "0xe86e8beb7340659dddce61727e500e3a5ad75a90", "0x232eab56c4fb3f84c6fb0a50c087c74b7b43c6ad", "0x2628d301b161db70e3dbbac88d9d900ca426ff02", "0xfdde616084427f0a231d0664a985e1f820e34693", "0xab0b2ddb9c7e440fac8e140a89c0dbcbf2d7bbff", "0x82b6205002ecd05e97642d38d61e2cfeac0e18ce", "0x282d8efce846a88b159800bd4130ad77443fa1a1", "0x66768ad00746ac4d68ded9f64886d55d5243f5ec", "0xf153eff70dc0bf3b085134928daeea248d9b30d0", "0xd921f8318cfd786bab1ea7492673f053c518ac04", "0x6ab6d61428fde76768d7b45d8bfeec19c6ef91a8", "0x2bf9b864cdc97b08b6d79ad4663e71b8ab65c45c", "0x7075cab6bcca06613e2d071bd918d1a0241379e2", "0x05089c9ebffa4f0aca269e32056b1b36b37ed71b", "0xf7d9e281c5cb4c6796284c5b663b3593d2037af2", "0x7ff2fc33e161e3b1c6511b934f0209d304267857", "0xe82808eaa78339b06a691fd92e1be79671cad8d3", "0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32", "0x1a13f4ca1d028320a707d99520abfefca3998b7f", "0x60d55f02a771d515e077c9c2403a1ef324885cec", "0x5c2ed810328349100a66b82b78a1791b101c9d61", "0x28424507fefb6f7f8e9d3860f56504e4e5f5f390", "0x8df3aad3a84da6b69a4da8aec3ea40d9091b2ac4", "0x1d2a0e5ec8e5bbdca5cb219e649b565d8e5c3360", "0x27f8d03b3a2196956ed754badc28d73be8830a6e", "0x172370d5cd63279efa6d502dab29171933a610af", "0xfbdd194376de19a88118e84e279b977f165d01b8", "0x3a3df212b7aa91aa0402b9035b098891d276572b", "0x8a953cfe442c5e8855cc6c61b1293fa648bae472", "0x348e62131fce2f4e0d5ead3fe1719bc039b380a9", "0xe840b73e5287865eec17d250bfb1536704b43b21", "0xd86b5923f3ad7b585ed81b448170ae026c65ae9a", "0xaaa5b9e6c589642f98a1cda99b9d024b8407285a", "0xacd7b3d9c10e97d0efa418903c0c7669e702e4c0", "0xa3860f969075045d82de85b06bb665f93c4bae32", "0xc168e40227e4ebd8c1cae80f7a55a4f0e6d66c97", "0x7a5dc8a09c831251026302c93a778748dd48b4df", "0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603", "0xdbf31df14b66535af65aac99c32e9ea844e14501", "0x4c4bf319237d98a30a929a96112effa8da3510eb", "0x580a84c73811e1839f75d86d75d88cca0c241ff4", "0xa3fa99a148fa48d14ed51d610c367c61876997f1", "0xd0f3121a190d85de0ab6131f2bcecdbfcfb38891", "0xd5d84e75f48e75f01fb2eb6dfd8ea148ee3d0feb", "0x76e63a3e7ba1e2e61d3da86a87479f983de89a7e", "0xa6b37fc85d870711c56fbcb8afe2f8db049ae774", "0x1c954e8fe737f99f68fa1ccda3e51ebdb291948c", "0x72572ccf5208b59f4bcc14e6653d8c31cd1fc5a0", "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3", "0x4a81f8796e0c6ad4877a51c86693b0de8093f2ef", "0xfbe49330e7b9f58a822788f86c1be38ab902bab1", "0x03cba0cff3bf727711eae7ef11d152dce3163901", "0x59e9261255644c411afdd00bd89162d09d862e38", "0xc3fdbadc7c795ef1d6ba111e06ff8f16a20ea539", "0x692597b009d13c4049a947cab2239b7d6517875f", "0xf239e69ce434c7fb408b05a0da416b14917d934e"]

export default WhiteListedTokens