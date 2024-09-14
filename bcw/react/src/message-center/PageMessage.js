import React from 'react';
import PageMessageManagement from './messageManagement/PageMessageManagement';
import PageMessageList from './message-List/messageList';
 
const PageMessage = (props) => {
  const [pageType, setPageType] = React.useState('messageList')
  const changType=(type)=>{
    setPageType(type)
  }
  console.log(pageType);
  
return (
  <div className='page-message-center'>
   {
          pageType === 'messageManagement' ?
            <PageMessageManagement {...props} onChangeType={changType} />
            : <PageMessageList {...props}  onChangeType={changType} />
        }
  </div>
);
};

export default PageMessage;