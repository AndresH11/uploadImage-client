import { useState, createContext } from "react";

export const UploadContext = createContext();

export const PreloadProvider = ({ children }) => {
  const [preload, setPreload] = useState({
    vista1: true,
    vista2: true,
    urlpreview: undefined,
    urlOrigin: undefined,
  });

  return (
    <UploadContext.Provider value={{ preload, setPreload }}>
      {children}
    </UploadContext.Provider>
  );
};