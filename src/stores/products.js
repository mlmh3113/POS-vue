import { computed ,ref } from "vue";
import { defineStore } from "pinia";
import { collection, addDoc , where ,query, limit , orderBy , updateDoc, doc , deleteDoc , getDoc } from "firebase/firestore"; 
import { useFirestore , useCollection , useFirebaseStorage } from "vuefire"
import {ref as storageRef , deleteObject } from "firebase/storage";


export const useProductsStore = defineStore("products", () => {
    const db = useFirestore()
    const storage = useFirebaseStorage()

    const selectedCategory = ref()

    const categories = [
    { id: 1, name: "Buzos" },
    { id: 2, name: "Zapatillas" },
    { id: 3, name: "Lentes" },
  ];

  const q = query(
    collection(db, "products"),
    )

  const productsCollection = useCollection(q)

  const noResults = computed(() => {
    if (productsCollection.value) {
      return productsCollection.value.length === 0;
    } else {
      return false;
    }
  })

  const categoryOptions = computed(() => {
    const options = [
      { label: "Seleccione una categoria", value: null },
      ...categories.map((category) => {
        return {
          label: category.name,
          value: category.id,
        };
      }),
    ];
    return options;
  });


  const createProduct = async (product) => {
    const collectionRef = collection(db, "products");
    try {
        await addDoc(collectionRef, product);
    } catch (error) {
        console.log(error);
    }
  };


const updateProduct = async (docRef, product) => {
  try {
    const { image , url , ...values } = product;
    if(image.length){
      await updateDoc(docRef,{
        ...values,
        image: url.value,
      });
      
    }else{
      await updateDoc(docRef, values);
    }
    
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

const deleteProduct = async (id) => {
  try {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);
      const {image} = docSnap.data();
      const imageRef = storageRef(storage, image);

      await Promise.all([
        deleteDoc(docRef),
        deleteObject(imageRef)
      ])
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

const filteredProducts = computed(() => {
    if(!selectedCategory.value){
      return (productsCollection.value).filter(product => product.availability > 0)
    }
    return (productsCollection.value.filter(product => product.category === selectedCategory.value)).filter(product => product.availability > 0)
})


  return {
    createProduct,
    categories,
    categoryOptions,
    productsCollection,
    noResults, 
    updateProduct,
    deleteProduct,
    filteredProducts,
    selectedCategory,
    categories
  };
});
