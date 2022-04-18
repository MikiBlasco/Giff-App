


  export const getFetchGifs = async(category) => {
       
    //encodeURI = para eliminar espacios y cosas "raras" del nombre buscado y así facilitar que la petición entra correctamente. 
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI (category)  }l&limit=10&api_key=3ru77v1lLiGpdJ4wvM43cgoVeD68cFdT`
    const resp = await fetch( url );
    const {data}= await resp.json();

    const gifs = data.map( img => {
        
      return {
          id: img.id,
          title: img.title,
          url: img.images?.downsized_medium.url
      }
    })

    return gifs; //esto retorna la RESOLUCIÓN DE LA PROMESA con la colección de imgs.
}