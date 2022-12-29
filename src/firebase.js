
const getFals = async () => {
    try {
        const response = await onSnapshot(doc(db, "fals", auth.currentUser.uid), (doc) => {
            return (doc.data())
        })
        return () => {
            response();
        }
    } catch (error) {
        console.log(error);
    }
}