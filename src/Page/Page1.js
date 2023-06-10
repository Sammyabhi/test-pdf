import React from 'react'
import Header from '../Components/Header/Header';
import FormField from '../Components/Form/fromfield';

const Page1 = () => {
    // home page of the app 
    return (
        <div>
        <div className='heade-area'>
           <Header/>
         
        </div>
          <div  className='fromfield-area'>
          <FormField/>
      </div>
      </div>
    )
}

export default Page1