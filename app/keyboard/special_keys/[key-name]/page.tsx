import React from 'react';
import CommaContent from '../comma_content';
// Import other content as needed


const SpecialKey: React.FC<SpecialKeyProps> = () => {

  switch (type) {
    case 'comma':
      return <CommaContent />;
    // Add other cases as needed
    default:
      return <div>Unknown key type</div>;
  }
};

export default SpecialKey;
