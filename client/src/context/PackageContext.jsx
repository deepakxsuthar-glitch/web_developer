import React, { createContext, useContext, useState } from 'react';

const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState('Business Website (₹9,000)');

  const selectPackageAndGo = (packageName, navigate) => {
    setSelectedPackage(packageName);
    if (navigate) {
      navigate('/contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PackageContext.Provider value={{ selectedPackage, setSelectedPackage, selectPackageAndGo }}>
      {children}
    </PackageContext.Provider>
  );
};

export const usePackage = () => useContext(PackageContext);
