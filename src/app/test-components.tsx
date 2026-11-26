import { Image, ScrollView, View } from 'react-native';

export default function TestComponent() {
  return (
    <ScrollView style={{ margin: 20 }}>
      <View style={{ flexDirection: 'column' }}>
        {/* Fixed Size */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 50 }}>
          <Image
            style={{ width: 100, height: 50 }}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
          <Image
            style={{ width: 100, height: 100, borderRadius: 100 / 2 }}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          />
        </View>
      </View>
    </ScrollView>
  );
}