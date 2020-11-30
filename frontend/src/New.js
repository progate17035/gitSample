import React from 'react';
import Header from './Header'
import NewHeader from './NewHeader'
import BackTop from './BackTop'
import NewData from './NewData'

const New = (props) => {
  return (
    <>
      <Header />
      <div className="container">
          <NewHeader />
          <NewData />
          <BackTop />
      </div>
    </>
  );
};
export default New;