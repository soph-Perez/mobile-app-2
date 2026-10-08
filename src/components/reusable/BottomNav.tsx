import {View, StyleSheet, Image} from 'react-native';
import {Link} from 'expo-router';

import Foundation from '@expo/vector-icons/Foundation';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';

const BottomNav = () => {
  return(
    <View style={styles.container}>
      <Link href="/">
        <Foundation name="home" size={32} color="white" />
      </Link>

      <Link href="/reels">
        <Octicons name="video" size={32} color="white" />
      </Link>

      <Link href="/messages">
        <Feather name="send" size={32} color="white" />
      </Link>

      <Link href="/fyp">
        <Feather name="search" size={32} color="white" />
      </Link>

      <Link href="/profile">
        <Image
          source={require('@/assets/images/pfps/profile-pic.jpeg')}
          style={styles.profilePic}
        />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#0B0F14",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 30,
    alignItems: 'center'
  },
  profilePic: {
    width: 36,
    height: 36,
    borderRadius: 18,
  }
})

export default BottomNav;