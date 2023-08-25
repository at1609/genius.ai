"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d5e40ad3-cd04-4bc2-89c4-0a7ac10e56e2");
  }, []);

  return null;
};
