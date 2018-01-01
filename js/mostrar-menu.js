//document.getElementById("cambiar").addEventListener("click", cambiarContenido, false);

var cambios=document.querySelectorAll("#menu-clientes li");

for(var i=0;cambios.length;i++){
    cambios[i].addEventListener("click", cambiarContenido, false);
}

function cambiarContenido(e){
    
    if(e.target==cambiar1){
        
        $("article").html("<h2>PyMES</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus accusantium pariatur similique amet at odit voluptate                      dolor reiciendis aut, voluptas iure, dignissimos fuga officiis sit deserunt. Deleniti dolores, sit eum.Tenetur sit deleniti ab                      corporis dignissimos ipsam quaerat iste a saepe fuga temporibus optio architecto, quo necessitatibus id cupiditate eos, atque esse                  autem consequuntur quia nobis? Porro quasi ab pariatur.</p>");
         
        $("article").addClass(".contenido");
      
              
    }
    
     if(e.target == cambiar2){
        $("article").html("<h2>CORPORACIONES</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ne  corporis dignissimos ipsam quaerat iste a saepe fuga temporibus optio architecto, quo necessitatibus id cupiditate eos, atque esse                  autem consequuntur quia nobis? Porro quasi ab pariatur.</p>");
        
        $("article").addClass(".contenido");
               
    }
    
     if(e.target == cambiar3){
        $("article").html("<h2>PERSONAL</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus acce, dignissimos fuga officiis sit deserunt. Deleniti dolores, sit e</p>");
        
        $("article").addClass(".contenido");
              
    }
}


     
    
 