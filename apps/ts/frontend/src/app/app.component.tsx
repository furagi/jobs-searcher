import { FC, useEffect } from "react";

export const App: FC = () => {
  useEffect(() => {
    console.log("Hello, world!");
  }, []);

  return "Hello, world!";
};
