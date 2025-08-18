import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import CountryFlag from 'react-native-country-flag';

interface FlagOnPoleProps {
    source?: any;
    isoCode?: string;
    isImage?: boolean;
    side?: 'left' | 'right';
}

export default function FlagOnPole({ source, isoCode, isImage, side = 'left' }: FlagOnPoleProps) {
    const isLeft = side === 'left';

    return (
        <View style={[styles.wrapper, isLeft ? styles.leftWrapper : styles.rightWrapper]}>
            <View style={[styles.poleAndFlag, isLeft ? styles.leftLayout : styles.rightLayout]}>
                {/* Pole */}
                <View style={styles.pole} />

                {/* Gap between pole and flag */}
                <View style={{ width: 10 }} />

                {/* Flag */}
                {isImage ? (
                    // Special case for Nepal (image)
                    <Image
                        source={source}
                        style={[styles.nepalFlag, isLeft ? styles.nepalLeft : styles.nepalRight]}
                    />
                ) : (
                    // Default rectangular flags
                    <CountryFlag
                        isoCode={isoCode!}
                        size={45}
                        style={[styles.flag, isLeft ? styles.leftFlag : styles.rightFlag]}
                    />
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    // === Common wrapper ===
    wrapper: {
        marginBottom: 28,
        alignItems: 'flex-start',
    },
    leftWrapper: {
        transform: [{ rotate: '-45deg' }], // pole slant left
    },
    rightWrapper: {
        transform: [{ rotate: '45deg' }], // pole slant right
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

    // === Pole ===
    pole: {
        width: 50,
        height: 4,
        backgroundColor: '#8B4513',
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 3,
    },

    // === Rectangular flags ===
    flag: {
        width: 60,
        height: 40,
        resizeMode: 'contain',
        zIndex: 2,
    },
    leftFlag: {
        transform: [{ rotate: '90deg' }],
        marginLeft: -25,
        marginTop: 50,
    },
    rightFlag: {
        transform: [{ rotate: '-90deg' }],
        marginRight: -25,
        marginTop: 50,
    },

    // === Nepal flag (custom image) ===
    nepalFlag: {
        width: 90,
        height: 100,
        resizeMode: 'contain',
        zIndex: 2,
    },
    nepalLeft: {
        marginLeft: -45,
        marginTop: 28,
        transform: [{ rotate: '90deg' }], // upright (doesn’t affect pole)
    },
    nepalRight: {
        marginRight: -30,
        marginTop: 40,
        transform: [{ rotate: '0deg' }], // upright (doesn’t affect pole)
    },
});
