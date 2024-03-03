import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function QueryAnimation() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <LottieView
                autoPlay
                loop
                style={{ 
                    width: 300, // Set width of the LottieView
                    height: 300, // Set height of the LottieView
                }}
                source={require('../../assets/queryAnimation.json')}
            />
        </View>
    );
}
