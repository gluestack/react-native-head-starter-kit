import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from './gluestack-ui.config';
import CreatePassword from './src/screens/Login/CreatePassword';
import LoginNav from './src/navigation/LoginNav';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <LoginNav />
    </GluestackUIProvider>
  );
}
