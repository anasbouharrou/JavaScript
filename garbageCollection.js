(function(){
    let Object = {
        name:"John"
    }

    /* Now The Global Variable
     
    "Object" renferences 
     
     the object {name:"Anas"}
     
     the "name" property of John stores a primitive 
     
     so it's painted inside the object  */


    Object = null;

    console.log(Object);


    /* here we didint deleted the 

    the value of Object we just overwritten

    the reference of {name:"Anas"} to null 

    Now What happend To {name:"Anas"} ? 
    
    is javaScript when a data becomes 
    
    unreachable so it will be auto deleted 
    
    From Memory By javaScript Garbage Collector */

    /* Now Lets imagine thats we copied 

    the reference from Object1 to Object2 */ 

    let Object1 = {
        name:"Anas"
    }

    let Object2 = Object1;

    /* Now the  Variables Object1 and 
    
    Object2 Are  Referencing To The Same 
    
    Object {name:"Anas"} */

    Object1 = null;

    /* The Object {name:"Anas"} Wont be 

    Deleted cause it Still referenced from 

    Object2 Variable */ 

    console.log(Object2);

    /* So here the Object {name:"Anas"} 
    
    Is Still In Memory and Only way to remove 

    Is Remove all refenreces to it */ 

    /* -------- More Complex Problem -------- */

    function marry(man,woman){
        woman.husband = man;
        man.wife = woman;
        return {
            father:man,
            mother:woman
        }
    }
    let family = marry({
        name:"Ed"
    },{
        name:"Ely"
    });
    /* ---------- Eplaination Starts  ------------ 

        <global variable>
                |
          Family Object
                |
            <-     ->
            |       |
          Father  Mother
            |       |
        name:"Ed" name:"Ely"

      wife:Mother husband:Father

                ------ Text Explanation ------

      So Basicly the Global Object wich every javascript object

      Stored in Protoypely Store Réference to family Object Variable 

      and family object variable store two reference , to mother Object  
      
      Variable and father Object Variable , and Both Of those Objects 

      store Refenreces to primitive values , and References to each Others .

    ------------Explanation Ended ----------- */



   delete family.father;

   /* We deleted father Reference to Family
   
   So will the Object be deleted ? */ 

   console.log(family);

   /* We still can see the Object even After delted 

   cause we just delted reference from family  

   we need to delete reference from mother too */ 

   delete family.mother.husban;

   /* Now husband object became inreacheble 

   So the object primitives will be deleted 

   By javaScript By Garbage Collector */ 



})();
