import React from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from './gluestack-ui.config';
import LoginNav from './src/navigation/LoginNav';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <LoginNav />
    </GluestackUIProvider>
  );
}
