import React, { createContext, useContext, useState } from 'react';

const PageVisitsContext = createContext();

export const usePageVisits = () => useContext(PageVisitsContext);

export const PageVisitsProvider = ({ children }) => {
  const [pageVisits, setPageVisits] = useState({
    services: 0,
    aboutUs: 0,
    nutritionStrategy: 0,
    ayurveda: 0,
    protien: 0,
    diet: 0,
  });

  const incrementPageVisit = (pageName) => {
    setPageVisits((prevVisits) => ({
      ...prevVisits,
      [pageName]: prevVisits[pageName] + 1,
    }));
    console.log(`Incrementing page visit for ${pageName}:`, pageVisits);
  };

  return (
    <PageVisitsContext.Provider value={{ pageVisits, incrementPageVisit }}>
      {children}
    </PageVisitsContext.Provider>
  );
};
