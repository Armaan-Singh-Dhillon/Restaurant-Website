import { readFile } from 'fs/promises';
import { collection, doc, setDoc, writeBatch } from "firebase/firestore";
import db from '../firebaseConfig.js';

try {
    const newCityRef = collection(db, "dishes");
    const jsonData = await readFile(new URL('./data.json', import.meta.url));
    const jsonProducts = JSON.parse(jsonData);

    const batch = writeBatch(db);

    jsonProducts.forEach((product) => {
        const newProductRef = doc(newCityRef);
        batch.set(newProductRef, product);
    });

    await batch.commit();

    console.log("Data stored in Firebase successfully!");
    process.exit(0);
} catch (error) {
    console.error("Error storing data in Firebase:", error);
    process.exit(1);
}
