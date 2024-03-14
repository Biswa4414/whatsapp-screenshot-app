import React, {useState, useRef} from 'react';
import {View, Button, Linking} from 'react-native';
import ViewShot from 'react-native-view-shot';

const App = () => {
  const [whatsappOpened, setWhatsappOpened] = useState(false);
  const viewShotRef = useRef();

  const openWhatsApp = () => {
    const phoneNumber = '8917348647';
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;

    Linking.openURL(whatsappUrl);
    setWhatsappOpened(true);
  };

  const takeScreenshot = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      console.log('Screenshot captured:', uri);
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {!whatsappOpened && (
        <Button title="Open WhatsApp" onPress={openWhatsApp} />
      )}
      {whatsappOpened && (
        <ViewShot ref={viewShotRef} style={{flex: 1}}>
          <Button title="Take Screenshot" onPress={takeScreenshot} />
        </ViewShot>
      )}
    </View>
  );
};

export default App;
