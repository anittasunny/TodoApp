import React, {useEffect, useState} from 'react';
import Page from './screens/page';
import AnimatedSplash from 'react-native-animated-splash-screen';

const App = () => {
  const [hasAnimationPlayedOnce, setHasAnimationPlayedOnce] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasAnimationPlayedOnce(true);
    }, 2000);
  }),
    [];

  return (
    <AnimatedSplash
      translucent={true}
      isLoaded={hasAnimationPlayedOnce}
      logoImage={require('./assets/logo.png')}
      backgroundColor={'#262626'}
      logoHeight={800}
      logoWidth={400}>
      <Page />
    </AnimatedSplash>
  );
};

export default App;
