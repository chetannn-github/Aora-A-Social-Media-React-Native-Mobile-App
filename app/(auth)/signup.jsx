import { View, Text, Image, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from 'react-native'
import React, { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'
import Logo from "../../assets/images/logo.png"
import eyehide from "../../assets/icons/eye-hide.png"
import eye from "../../assets/icons/eye.png"
import useSignup from '../../hooks/authHooks/useSignup'
import Checkbox from 'expo-checkbox'

const signup = () => {
  let [showPassword , setShowPassword] = useState(false);
  let handleSignup = useSignup();
  let inputs = useRef({email:"",password:"",username:"",gender:selectedGender, fullName:"" });
  let toggleShowPassword = () =>{
    setShowPassword(!showPassword);
  }
  const [selectedGender, setSelectedGender] = useState({
    male: false,
    female: false,
  });

  const handleCheckboxChange = (gender) => {
    setSelectedGender((prev) => ({
      male: gender === 'male' ? !prev.male : false,
      female: gender === 'female' ? !prev.female : false,
    }));
  };
  

  return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='never'>
        <View className="bg-primary flex-1 h-full w-full items-center pt-[15%]">
          <View id='container' className="h-fit w-[90%]">
            <Image className="w-1/3" resizeMode="contain" source={Logo} />

            <View className="h-fit w-full gap-y-2">
              <Text className="text-2xl font-semibold text-white">Sign up</Text>

              <View className="flex gap-y-2">
                <Text className="text-lg text-[#cdcde0]">username</Text>
                <TextInput
                  onChangeText={(text) => inputs.current.username = text}
                  placeholder='your unique username'
                  placeholderTextColor={"#7B7B8B"}
                  className="focus:border-secondary focus:border-2 h-[55px] text-white text-base rounded-lg bg-[#1E1E2D] px-4"
                />
              </View>

              <View className="flex gap-2">
                <Text className="text-lg text-[#cdcde0]">email</Text>
                <TextInput
                  onChangeText={(text) => inputs.current.email = text}
                  placeholder='your email address'
                  placeholderTextColor={"#7B7B8B"}
                  className="focus:border-secondary focus:border-2 h-[55px] text-white text-base rounded-lg bg-[#1E1E2D] px-4"
                />
              </View>

              


              <View className="flex gap-2">
                <Text className="text-lg text-[#cdcde0]">fullName</Text>
                <TextInput
                  onChangeText={(text) => inputs.current.fullName = text}
                  placeholder='your fullName'
                  placeholderTextColor={"#7B7B8B"}
                  className="focus:border-secondary focus:border-2 h-[55px] text-white text-base rounded-lg bg-[#1E1E2D] px-4"
                />
              </View>
              <View className="flex gap-2">
                <Text className="text-lg text-[#cdcde0]">gender</Text>
                 
                <View className="flex flex-row w-full gap-5 h-10  ">
                  <View className="flex-row items-center gap-3" >
                    <Checkbox
                      value={selectedGender.male}
                      onValueChange={() => handleCheckboxChange('male')}
                      color={selectedGender.male ? '#ff8c00' : undefined}
                      className ="mr-[10px]"
                    />
                    <Text className="text-white text-lg">Male</Text>
                  </View>
                  <View className="flex flex-row items-center  gap-10">
                    <Checkbox
                      value={selectedGender.female}
                      onValueChange={() => handleCheckboxChange('female')}
                      color={selectedGender.female ? '#ff8c00' : undefined}
                      
                    />
                    <Text className="text-lg text-white ml-4">Female</Text>
                  </View>
                </View>
                
              </View>
              <View className="flex gap-1 ">
                <Text className="text-lg text-[#cdcde0]">password</Text>
                <View className="flex flex-row justify-between">
                  <TextInput
                    onChangeText={(text) => inputs.current.password = text}
                    secureTextEntry={!showPassword}
                    placeholder='enter your password'
                    placeholderTextColor={"#7B7B8B"}
                    className="focus:border-2 focus:border-secondary h-[55px] w-[100%] text-white text-base rounded-lg bg-[#1E1E2D] px-4"
                  />
                  <TouchableOpacity className="w-10 -translate-x-10 flex items-center justify-center" onPress={toggleShowPassword}>
                    <Image className="w-[25px] h [25px]" resizeMode='contain' source={showPassword ? eyehide : eye} />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => handleSignup(inputs.current.email, inputs.current.username, inputs.current.password)}
                className="py-3 px-2 rounded-lg flex justify-center items-center font-bold text-[#161622] bg-secondary"
              >
                <Text className="text-lg font-semibold">Sign Up</Text>
              </TouchableOpacity>

              <Link href={"/login"} className='w-full h-10 text-center'>
                <Text className="text-[#787b8b] text-base">Already have an account? <Text className="text-secondary">Login</Text></Text>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    
  
  )
}
export default signup