

let API = "http://localhost:8000/api"


export const getAllCategories = ()=>{
    return fetch (`${API}/getallcategories`)
    .then(res=>res.json())
    .catch(err=>console.log(err))

}


export const addCategory =(category_name,token)=>{
    return fetch(`${API}/addcategory`,{
        method:"POST",
        headers:{
            accept:"Application/json",
            "Content-Type":"Application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(response =>{return response.json()})
    .catch(error=>console.log(error))
}


export const getCategoryById = (id)=>{
    return fetch(`${API}/getcategories/${id}`)
    .then(response=>{return response.json()})
    .catch(err=>console.log(err))
}

export const updateCategory = (category_name,id,token)=>{
    return fetch(`${API}/updatecategories/${id}`,{
        method:"PUT",
        headers:{
            accept:"Application/json",
            "Content-Type": "Application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(response =>{return response.json()})
    .catch(error=>console.log(error))
}