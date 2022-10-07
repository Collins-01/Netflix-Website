import { red } from '@mui/material/colors';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile, User} from 'firebase/auth';
import {auth, provider} from '../firebase_app';

export class AuthService {
    static async emailSignUp(email:string, password: string){
        const response = await createUserWithEmailAndPassword(auth, email,password);
        return response;
    }
    static async emailLogin(email:string, password: string){
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response;
    }

    static async logOut(){
       return await signOut(auth).then(()=>{return true}).catch((e)=>{return false});
    }
    static async googleSignIn(){
        const res = await signInWithPopup(auth, provider);
        return res;
    }

    static async updateProfile(user: User, name: string){
        const res = await updateProfile(user, {
            displayName: name
        });
        return res;
    }
}