import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';

const App: () => Node = () => {
  const [count, setCount] = useState(0);
  const [offset, setCountOffset] = useState(1);

  const setOffsetHandler = offsetValue => {
    setCountOffset(offsetValue);
  };

  const increaseCounterHandler = () => {
    setCount(count + offset);
  };

  const decreaseCounterHandler = () => {
    setCount(count - offset);
  };

  const resetCounterHandler = () => {
    setCount(0);
  };

  return (
    <SafeAreaView style={styles.mainBody}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View>
        <Text style={{fontSize: 24, color: 'black'}}>COUNTER APP</Text>
      </View>
      <View style={styles.counterRowView}>
        <TouchableOpacity
          style={styles.decreaseCounterView}
          onPress={() => decreaseCounterHandler()}>
          <Text style={styles.counterText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.counterView}
          onPress={() => resetCounterHandler()}>
          <Text style={styles.counterText}>{count}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.increaseCounterView}
          onPress={() => increaseCounterHandler()}>
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behaviour={Platform.OS === 'android' ? 'height' : 'padding'}
        style={styles.writeTaskWrapper}>
        <Text style={{fontSize: 18, color: 'black'}}>Counter Offset:</Text>
        <TextInput
          style={styles.offsetInput}
          placeholder=" "
          placeholderTextColor="grey"
          keyboardType={'number-pad'}
          onChangeText={text => setCountOffset(Number(text))}
          value={offset.toString()}
        />
      </KeyboardAvoidingView>
      <View style={{flex: 1}}></View>
      <View>
        <Text style={{color: 'grey'}}>
          Made by: Chandramauli Shastri 20BRS1163
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  counterRowView: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  counterView: {
    height: 150,
    width: 150,
    borderRadius: 500,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#87CEFA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
  increaseCounterView: {
    height: 80,
    width: 80,
    borderRadius: 32,
    backgroundColor: '#00FA9A',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  decreaseCounterView: {
    height: 80,
    width: 80,
    borderRadius: 32,
    backgroundColor: '#FA8072',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  offsetInput: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderColor: '#55BCF6',
    borderWidth: 1,
    width: 100,
    color: 'black',
    fontSize: 24,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: '25%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default App;

//https://dribbble.com/shots/14185541-Figma-UI-kit-React-components-Stepper-outlined
