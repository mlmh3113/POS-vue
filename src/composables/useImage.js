import { ref , computed } from "vue";
import { useFirebaseStorage } from "vuefire";
import { ref as refStorage, uploadBytesResumable ,getDownloadURL } from "firebase/storage";
import { uid } from "uid";

export default function useImage() {
  const storage = useFirebaseStorage();

  const url = ref(null);

  const onFileChange = (event) => {
    const file = event.target.files[0];
    const sRef = refStorage(storage, `products/${uid()}.jpg`);
    const uploadTask = uploadBytesResumable(sRef, file);

    uploadTask.on(
      "state_changed",()=>{},
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          url.value = downloadURL;
          
        });
      }
    )
  
  };

  const isImageUploaded = computed(() => url.value !== null);

  return {
    onFileChange,
    url,
    isImageUploaded
  };
}
