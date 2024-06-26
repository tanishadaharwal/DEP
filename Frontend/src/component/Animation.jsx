import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Animation() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
                autoPlay
                loop
                style={{ 
                    width: 300, // Set width of the LottieView
                    height: 300, // Set height of the LottieView
                }}
                source={require('../../assets/studyAnimation.json')}
            />
            <Text className="text-2xl font-semibold text-[#3772ff] text-center mb-8" >Study Time!</Text>
        </View>
    );
}
