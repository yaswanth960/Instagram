import React from 'react';
import {View, Text, StyleSheet, ScrollView,Image} from 'react-native';

const userrss=[{
    user:'yash',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
},{
    user:'sai',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
},{
    user:'sathi',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
},{
    user:'sukesh',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
},{
    user:'raju',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
},{
    user:'sandeep',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
},{
    user:'vinay',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
},{
    user:'pavan',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
},{
    user:'sunil',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGz9fWFv-pxAs88VY_QWNDKq-2-mkR2Yj3Mw&usqp=CAU'
}]

const Stories = () => {
  return (
    <View  >
      <ScrollView
      
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {userrss.map((story,index) => (
            <Image source={{uri:story}} Style={{height:100,width:100,borderRadius:10}}  />
        ))}
         </ScrollView>
        <Text>Hello000000</Text>
        

    </View>
  );
};

const styles=StyleSheet.create({
    imagee:{
        height:100,width:100,borderRadius:50,top:20
    }
})

export default Stories;
