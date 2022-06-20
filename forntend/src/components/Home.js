import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  // const prodacts=useSelector(state=>state.prodactReducer.prodacts)
  // console.log(prodacts)
  return (
    <divn>
    <img  src='https://www.btobmarketers.fr/wp-content/uploads/2018/01/definition-de-la-semaine-native-advertising.jpg'/>
    <h1>E-commerce</h1>
    <p>Boutique en ligne (site e-commerce)
Définition
On appelle généralement un site web une boutique en ligne (ou site e-commerce ou site marchand) lorsque ce dernier permet aux visiteurs de commander et/ou de payer des produits et/ou des services. Le terme est utilisé pour distinguer ce type de site des sites vitrines, dont l’objectif se limite généralement à la présentation d’une entreprise, de ses produits et/ou de ses services.Certains puristes introduisent une nuance entre une boutique en ligne et un site e-commerce, arguant que le premier serait une émanation d’un commerce physique. Dans la pratique, cette différentiation est très peu usitée. En revanche, il ne faut pas confondre la notion de boutique en ligne et celle de drive-to-store, qui consiste à attirer les clients en magasin par le biais du web et du mobile.

Principales fonctions des boutiques en ligne
On peut trouver des sites vitrines permettant de présenter des produits sans être pour autant des sites de vente en ligne. Ces derniers apportent au minimum deux fonctionnalités additionnelles :

La possibilité pour le client de passer une commande, et pour le e-commerçant de suivre cette commande.
La possibilité de payer cette commande directement en ligne.
</p>
    </divn>
  )
}

export default Home