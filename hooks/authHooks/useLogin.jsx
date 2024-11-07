import { Alert } from "react-native";
import { validateEmail } from "../../scripts/validateEmail.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


const useLogin = () => {
    const apiUrl = "http://192.168.248.183:3000/api/auth/login";
    
    let handleLogin = async(userName,password) =>{
        const requestBody = {password,userName}
        try {
            console.log(userName,password);
            
            if(!userName || !password){
                Alert.alert("please fill all fields.");
                return;
            }
            

            // make an api call
            const response = await fetch(apiUrl, {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify(requestBody) 
            });
            const userInfo = await response.json();
            console.log(userInfo);
            if(!userInfo.error){
                await AsyncStorage.setItem("token",userInfo?.token);
                await AsyncStorage.setItem("loggedInUser", JSON.stringify(userInfo?.user));
            }else{
                Alert.alert(userInfo.error);
            }
           
            
        } catch (error) {
            console.log(error);
        }

    }
    return handleLogin;
}

export default useLogin