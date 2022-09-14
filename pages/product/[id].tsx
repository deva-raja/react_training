import React from 'react';
import { useRouter } from 'next/router';

function Id() {
   const router = useRouter();
   const query = router.query;
   console.log(query.id , 'the query');
   return (
      <>
         <div>Id</div>
         <div>Id</div>
         <div>{query.id}</div>
      </>
   );
}

export default Id;
