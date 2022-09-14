import Image from 'next/image';
import React from 'react';
import Model from '../../assets/model.png';

function Product() {
   return (
      <>
         <div>Product</div>
         {/* <div style={{width:'200px' , height:'300px'}}>
          <Image layout='fill'  src={Model} alt='model' />
         </div> */}
      </>
   );
}

export default Product;
