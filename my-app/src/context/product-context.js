import React,{useContext,createContext, useEffect , useState} from 'react'

const ProductContext = createContext()

const ProductProvider = ({children}) => {
    const [productsList , setProductsList] = useState([])
    useEffect(()=>{
        console.log("Component is mounted")
        fetch('/api/products')
            .then((res) => res.json())
            .then(({products}) => setProductsList([...products]))
    },[])
    
    return(
        <ProductContext.Provider value = {{productsList}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext)

export {ProductProvider,useProduct}
