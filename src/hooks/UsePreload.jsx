import { useContext } from "react";
import { UploadContext } from "../contexts/PreloadProvider";

export const UsePreload = () => {
  return useContext(UploadContext);
}