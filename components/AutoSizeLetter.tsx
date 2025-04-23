import React, { useState, useEffect } from 'react';
import { Text, View, LayoutChangeEvent, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const CONTAINER_SIZE_FACTOR = 0.8;
const containerSize = screenWidth * CONTAINER_SIZE_FACTOR;

type Props = {
    letter: string;
};

const AutoSizeLetter = ({ letter }: Props) => {
    const [fontSizeClass, setFontSizeClass] = useState<'text-8xl' | 'text-6xl'>('text-8xl');
    const [measurementStage, setMeasurementStage] = useState<'initial' | 'adjusted'>('initial');

    const handleLayout = (event: LayoutChangeEvent) => {
        if (measurementStage === 'adjusted') return; // Prevent further adjustments

        const { width } = event.nativeEvent.layout;
        const maxAllowed = containerSize * 0.8;
        console.log(width)
        console.log(maxAllowed)

        if (width > maxAllowed) {
            // If too big, go smaller and re-measure one more time
            setFontSizeClass('text-6xl');
        }
        else {
            setFontSizeClass('text-8xl');
        }

        setMeasurementStage('adjusted'); // Don't measure again
    };

    return (
        <View
            className="flex-1 justify-center items-center"
            style={{ width: containerSize, height: containerSize }}
        >
            <Text
                onLayout={handleLayout}
                className={`text-black text-center ${fontSizeClass}`}
            >
                {letter}
            </Text>
        </View>
    );
};

export default AutoSizeLetter;
