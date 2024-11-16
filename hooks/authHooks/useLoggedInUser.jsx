import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { addLoggedInUser } from "../../redux/userSlice";
import { useEffect } from "react";


function useLoggedInUser() {
    const dispatch = useDispatch();
    const loadUserFromAsyncStorage = async () => {
        try {
            const user = await AsyncStorage.getItem('loggedInUser');
            if (user !== null) {
                return JSON.parse(user);
            }
        } catch (error) {
            console.error("Failed to load user from AsyncStorage", error);
        }
        return null;
    };

    useEffect(() => {
        const initializeUser  = async () => {
            const user = await loadUserFromAsyncStorage();
            if (user) {
                dispatch(addLoggedInUser(user));
            }
            console.log(user);
             
        };
        initializeUser ();
    }, []);
}

export default useLoggedInUser