// User Model for Firebase

import { db } from '../config/db.js';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';

const usersCollection = collection(db, 'usuarios');


class User {
    constructor({ id, email, password, role }) {
        this.id = id;
        this.email = email;
        this.password = password; 
    }


    async comparePassword(plainTextPassword) {
        return plainTextPassword === this.password;
    }

    static async find() {
        const querySnapshot = await getDocs(usersCollection);
        return querySnapshot.docs.map(doc => new User({ id: doc.id, ...doc.data() }));
    }

    static async findOne(email) {
        const q = query(usersCollection, where('email', '==', email), limit(1));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            return null;
        }

        const userDoc = querySnapshot.docs[0];
        return new User({ id: userDoc.id, ...userDoc.data() });
    }
}

export default User;