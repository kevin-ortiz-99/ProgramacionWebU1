//colocamos un parametro para que el usuario tenga la opcion de escribri o seleccionar una casilla 
function Leer(i) {
    const juego = document.getElementById("input").value;
    //api freeGame
    //https://www.freetogame.com/api-doc
    const key='0f23f129d3msh786e2270206687bp196f3fjsn8c99174a6629';
    if(i!="0"){
        const api_url=`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${i}&rapidapi-key=${key}`
        buscar3(api_url);
    }if(juego!=""){
        const api_url=`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${juego}&rapidapi-key=${key}`  
        buscar3(api_url);
    }
}

function buscar1(api_url){

    fetch(api_url)
      .then(data => {
        return data.json()
      }).then(resultado=>{
            console.log(resultado);             
            
            resultado.map((p)=>{
            document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
            <img width='100%' src=${p.thumbnail} alt="No hay thumbnail"></img></div>`;
        })
           
             
    });


}

const buscar2=async(api_url)=>{

    const data= await fetch(api_url);
    const respuesta= await data.json();
    const Search = await respuesta;

    console.log(Search);

    if(Search!=null)
    {   
        document.getElementById("lista").innerHTML='';
        Search.map((p)=>{
                document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                <img width='100%' src=${p.thumbnail} alt="No hay thumbnail"></img>
                <details>
                    <summary>${p.title}</summary>
                    <p>Plataforma:${p.platform} <br>
                    Fecha De Lanzamiento:${p.release_date} <br>
                    Pagina Oficial:${p.game_url}</p>
                </details> 
            </div>`;
        })

    }

}    

     
const buscar3=async(api_url)=>{

    const respuesta= await axios(api_url);
    //en este caso la api manda los datos directos y no dentro de otro arreglo 
    //en caso de tener los datos dentro de otro arreglo poner 
    //const Search = await respuesta.data.Search;

    const Search = await respuesta.data;
    console.log(respuesta.data);
    
    //console.log(Search);

    
    if(Search!=null)
    {
        document.getElementById("lista").innerHTML='';
        
        Search.map((p)=>{
            document.getElementById("lista").innerHTML+=`<div style="margin-top:10px;">
                <img width='100%' src=${p.thumbnail} alt="No hay thumbnail"></img>
                <details>
                    <summary>${p.title}</summary>
                    <p>Plataforma:${p.platform} <br>
                    Fecha De Lanzamiento:${p.release_date} <br>
                    Pagina Oficial:${p.game_url}</p>
                </details> 
            </div>`;
            //se agrego una apartado de informacion para cada juego sobre la fecha, plataforma, etc.
        })
    }
}
