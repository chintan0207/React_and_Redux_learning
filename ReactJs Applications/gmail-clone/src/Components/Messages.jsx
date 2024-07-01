/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import Message from "./Message"
import { db } from "../firebase"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import appSlice, { setEmails } from "../redux/appSlice"

const Messages = () => {


  const dispatch = useDispatch();
  const { searchText, emails } = useSelector(store => store.appSlice);
  const [tempEmails, setTempEmails] = useState(emails);

  useEffect(() => {

    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => {
        const data = doc.data();
        // Convert Firestore timestamp to an ISO string
        const createdAt = data.createdAt ? data.createdAt.toDate().toISOString() : null;
        return { ...data, createdAt, id: doc.id };
      });
      dispatch(setEmails(allEmails));
    });
    return () => unsubscribe()
  }, []);

  useEffect(() => {
    const filterEmail = emails?.filter((email) => {
      return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) || email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
    })
    setTempEmails(filterEmail)
  }, [searchText, emails]);

  return (
    <>
      {
        tempEmails && tempEmails?.map((email) => <Message key={email.id} email={email} />)
      }

    </>
  )
}

export default Messages