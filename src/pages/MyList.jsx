import React, { Fragment } from 'react';
import Home_header from '../components/pageItems/Home_header';
import Home_carousels from '../components/pageItems/Home_carousels'
import Home_footer from '../components/pageItems/Home_footer';
import '../assets/styles/pages/MyList.css'

const MyList = (props) => {

  return (
     <Fragment>
         <Home_header {...props} page="my-list"/>
         <div id="my-list-page">
         <Home_carousels {...props} getMyList={true} top={false}/>
         <Home_footer/>
         </div>
     </Fragment>
  )
}

export default MyList;