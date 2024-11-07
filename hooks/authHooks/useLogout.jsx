import AsyncStorage from "@react-native-async-storage/async-storage";


function useLogout() {
    let handleLogout = async() =>{
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("loggedInUser");
    }

    return handleLogout;
}

export default useLogout