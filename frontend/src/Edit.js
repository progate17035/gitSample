import React from 'react';
import Header from './Header';
import EditHeader from './EditHeader';
import EditArea from './EditArea';
import BackTop from './BackTop';

const Edit = (props) => {
  const item = props.location.state.item;
  return (
      <>
        <Header />
        <div className="container">
            <EditHeader />
            <div className="item-form-wrapper">
                <EditArea item={item}/>
            </div>
            <BackTop />
        </div>
      </>
  );
};
export default Edit;