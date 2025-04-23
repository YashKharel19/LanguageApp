// components/SearchBar.tsx
import React from 'react';
import { TextInput, View } from 'react-native';

const SearchBar = ({ value, onChangeText, placeholder }: { value: string; onChangeText: (text: string) => void; placeholder: string }) => {
    return (
        <View className="bg-gray-100 px-4 py-2 rounded-lg w-full mb-2">
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                className="text-base text-gray-800"
            />
        </View>
    );
};

export default SearchBar;
