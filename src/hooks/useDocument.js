import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  //	realtime document data
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        //	check if data exist
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError('No document exist');
        }
      },
      (error) => {
        console.log(error.message);
        setError('failed to get document');
      }
    );

    //	unsubscribe on unmount
    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};
