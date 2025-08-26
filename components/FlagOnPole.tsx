import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import CountryFlag from 'react-native-country-flag';

interface FlagOnPoleProps {
    source?: any;
    isoCode?: string;
    isImage?: boolean;
    side?: 'left' | 'right';
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Scale values
const poleWidth = screenWidth * 0.12;
const poleHeight = screenHeight * 0.005;
const flagWidth = screenWidth * 0.16;
const flagHeight = flagWidth * 0.67;

export default function FlagOnPole({
    source,
    isoCode,
    isImage,
    side = 'left',
}: FlagOnPoleProps) {
    const isLeft = side === 'left';

    return (
        <View style={[styles.wrapper, isLeft ? styles.leftWrapper : styles.rightWrapper]}>
            <View style={[styles.poleAndFlag, isLeft ? styles.leftLayout : styles.rightLayout]}>
                {/* Pole */}
                <View style={styles.pole} />

                {/* Gap */}
                <View style={{ width: screenWidth * 0.02 }} />

                {/* Flag */}
                {isImage ? (
                    // Nepal custom flag
                    <Image
                        source={source}
                        style={[styles.nepalFlag, isLeft ? styles.nepalLeft : styles.nepalRight]}
                    />
                ) : (
                    <CountryFlag
                        isoCode={isoCode!}
                        size={flagHeight}
                        style={[styles.flag, isLeft ? styles.leftFlag : styles.rightFlag]}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: screenHeight * 0.04,
        alignItems: 'flex-start',
    },
    leftWrapper: {
        transform: [{ rotate: '-45deg' }],
    },
    rightWrapper: {
        transform: [{ rotate: '45deg' }],
    },
    poleAndFlag: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftLayout: {
        flexDirection: 'row',
    },
    rightLayout: {
        flexDirection: 'row-reverse',
    },

    // Pole
    pole: {
        width: poleWidth,
        height: poleHeight,
        backgroundColor: '#8B4513',
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
    },

    // Rectangular flags
    flag: {
        width: flagWidth,
        height: flagHeight,
        resizeMode: 'contain',
        zIndex: 2,
    },
    leftFlag: {
        transform: [{ rotate: '90deg' }],
        marginLeft: -(flagWidth / 2.5),
        marginTop: screenHeight * 0.07,
    },
    rightFlag: {
        transform: [{ rotate: '-90deg' }],
        marginRight: -(flagWidth / 2.5),
        marginTop: screenHeight * 0.07,
    },

    // Nepal flag
    nepalFlag: {
        width: flagWidth * 1.5,
        height: flagHeight * 2,
        resizeMode: 'contain',
        zIndex: 2,
    },
    nepalLeft: {
        marginLeft: -(flagWidth * 0.75),
        marginTop: screenHeight * 0.04,
        transform: [{ rotate: '90deg' }],
    },
    nepalRight: {
        marginRight: -(flagWidth * 0.5),
        marginTop: screenHeight * 0.05,
        transform: [{ rotate: '0deg' }],
    },
});
