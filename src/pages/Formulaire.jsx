import React, { useState } from 'react'
import { addDataToCollection } from '../commonjs/db' ;

const Formulaire = () => {

    //init form value
    const [formPrenom, setFormPrenom] = useState() ;

    //init error state
    const [errPrenom , setErrPrenom ] = useState(false) ; 

    const enregistrer = (event) => { 

        event.preventDefault();
        
        // recupération des champs du formulaire 
        const { prenom , telephone  , information } =  event.target ;

        // gestion des erreurs 
        if(prenom.value == ''){
            setErrPrenom(true) ;
            return ;
        }else{
            setErrPrenom(false) ; 
        }

        // formatage de la donnée à ajouter dans collection
        const data = {
                prenom      : prenom.value,
                telephone   : telephone.value ,
                information : information.value ,
        }

        addDataToCollection('contact' , data) ;
       
        // reset form
        setFormPrenom('') ;



     }

  return (
    <div>
        Formulaire

        <form onSubmit={enregistrer}>
            <label> Prénom : </label>
            <input  type='text'  
                value={formPrenom }
                onChange={prenom=>setFormPrenom(prenom.value)}
            name='prenom' />
            <br/>
            { errPrenom && <span> Vous devez saisir votre prénom</span> }
            <br/>

            <label> Téléphone : </label>
            <input  type='number'   name='telephone' />


            <br/>


            <label>Information :</label>
            <textarea name='information'  >

            </textarea>
            <br/>
            <button type='submit'>Enregistrer</button>


        </form>




    </div>
  )
}

export default Formulaire