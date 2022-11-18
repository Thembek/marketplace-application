import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';

import { SubInfo, EthPrice, NFTTilte } from './SubInfo';
import { RectButton, CircleButton } from './Button';

const NFTCard = ({ data }) => {
    const navigation = useNavigation()

    return(
        <View
            style={{
                backgrounColor: COLORS.white,
                borderRadius: SIZES.font,
                marginBottom: SIZES.extraLarge,
                margin: SIZES.base,
                ...SHADOWS.dark,
            }}
        >  
            <View
                style={{
                    width: "100%",
                    height: 250,
                }}
            >
                <Image 
                    source={data.image}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderTopLeftRadius: SIZES.font,
                        borderTopRightRadius: SIZES.font,
                    }}
                />

                <CircleButton imgUrl={assest.heart} right={10} top={10} />
            </View>

            <SubInfo />

            <View style={{ width: '100%', padding: SIZES.font}}>
                <NFTTilte 
                    title={data.name}
                    subTitle={data.creator}
                    titleSize={SIZES.large}
                    subTitleSize={SIZES.small}
                />

                <View
                    style={{
                        marginTop: SIZES.font,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <EthPrice price={data.price} />
                    <RectButton 
                        mioWidth={100}
                        fontSize={SIZES.font}
                        handlePress={() => navigation.navigate("Details", { data })}
                    />
                </View>
            </View>
        </View>
    );
};

export default NFTCard;