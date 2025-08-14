import React, { useState, useCallback } from 'react';
import { Text, View, LayoutChangeEvent, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const CONTAINER_SIZE_FACTOR = 0.7; // Take 80% of screen width
const containerSize = screenWidth * CONTAINER_SIZE_FACTOR;

type Props = {
    letter: string;
};

const AutoSizeLetter = ({ letter }: Props) => {
    const [fontSize, setFontSize] = useState(containerSize * 0.6); // Start big
    const [measured, setMeasured] = useState(false);

    const handleLayout = useCallback(
        (event: LayoutChangeEvent) => {
            if (measured) return; // only adjust once

            const { width } = event.nativeEvent.layout;
            const maxAllowed = containerSize * 0.8;

            if (width > maxAllowed) {
                // Shrink proportionally
                const scaleFactor = maxAllowed / width;
                setFontSize((prev) => prev * scaleFactor);
            }

            setMeasured(true);
        },
        [measured]
    );

    return (
        <View
            className="flex-1 justify-center items-center"
            style={{
                width: containerSize,
                height: containerSize,
            }}
        >
            <Text
                onLayout={handleLayout}
                style={{
                    fontSize,
                    color: 'black',
                    textAlign: 'center',
                }}
            >
                {letter}
            </Text>
        </View>
    );
};
export default AutoSizeLetter;

