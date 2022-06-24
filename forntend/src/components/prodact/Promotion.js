import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
 const Promotion = () => {
  const dispatch = useDispatch();
  return (
    <div>
    <img  src='data:image/png;base64,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'/>
    <label>
    <h1>Les soldes sont une pratique commerciale consistant à vendre avec une réduction de prix des produits invendus et proposés à la vente depuis plus d'un mois, notamment dans le cas de vêtements.</h1>

    </label>
    <div>
        {/* 👇️ react router link */}
        <Link to="/ProdactList">
          <button>--</button>
        </Link>

        
          
        
      </div>
    </div>
  )
}
export default Promotion 