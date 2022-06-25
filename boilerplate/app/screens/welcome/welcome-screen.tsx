import { StackScreenProps } from '@react-navigation/stack';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { NavigatorParamList } from '../../navigators';

const FULL: ViewStyle = { flex: 1, backgroundColor: '#2af' };

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, 'welcome'>> = observer(
  ({ navigation }) => {
    return (
      <View testID="WelcomeScreen" style={FULL}>
        <Text>Hi</Text>
      </View>
    );
  },
);
