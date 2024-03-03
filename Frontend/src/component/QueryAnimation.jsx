import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function QueryAnimation() {
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <LottieView
                autoPlay
                loop
                style={{ 
                    width: 200, // Set width of the LottieView
                    height: 200, // Set height of the LottieView
                }}
                source={require('../../assets/queryAnimation.json')}
            />
        </View>
    );
}
