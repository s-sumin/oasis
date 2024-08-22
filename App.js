import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>파밍</Text>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </View>

      <View style={styles.mainContent}>
        <LinearGradient
          colors={['#E3EAFB', '#FFFFFF']}
          style={styles.circleContainer}
        >
          <View style={styles.circle}>
            <Text style={styles.circleText}>80%</Text>
          </View>
        </LinearGradient>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>습도: 55%</Text>
          <Text style={styles.infoText}>일조량: 10시간</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>내 작물 바로가기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>경보: 태풍경보</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>공지사항</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="home" size={24} color="#0E6CA5" />
          <Text style={styles.footerText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
          <Text style={styles.footerText}>채팅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="people-outline" size={24} color="black" />
          <Text style={styles.footerText}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Text style={styles.footerText}>마이</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.footerText}>설정</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  circleContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#0E6CA5',
  },
  circleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0E6CA5',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#E3EAFB',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#E3EAFB',
    paddingVertical: 8,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default App;