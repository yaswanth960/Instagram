import React from 'react';
import {View, Text, SafeAreaView, StyleSheet,Image, TouchableOpacity} from 'react-native';

const Header = () => {
  return (
    <View  style={{justifyContent:'space-between',flexDirection:'row'}}>
     
      <Image
        style={{ width:100,
            height:50,
            resizeMode:'contain',
            left:15
            }}
        source={require('../../assets/Instagram_logo.png')}
      />
      
      <View style={{flexDirection:'row'}}  >
        <TouchableOpacity>
        <Image
        style={styles.icon}
      
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmKgbwbkx4gJh5MhvUx3HDiiCH7xp3JnetHQ&usqp=CAU',
        }}
      />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image
      style={styles.icon}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9McdSNfS7CDWP_OglNss2Jv9fKP4P_Ucp9g&usqp=CAU',
        }}
      />
        </TouchableOpacity>
        <TouchableOpacity>
          
        <Image
        style={styles.icon}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMbfiBRwO_goxfKbZRVDw9_3qtKiMMIP8EMA&usqp=CAU',
        }}
      />
      <View style={styles.unreadbadge} >
            <Text style={styles.unreadbadgeText} >
              11
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles= StyleSheet.create({
  icon:{
    width:25,
    height:25,
    resizeMode:'contain',
    marginTop:15,
    marginRight:20
  },
  unreadbadge:{
    backgroundColor:'#eb5146',
    width:23,
    height:18,
    bottom:25,
    left:10,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  },
  unreadbadgeText:{
    color:'white',
    fontWeight:'600'
  }
})

export default Header;
