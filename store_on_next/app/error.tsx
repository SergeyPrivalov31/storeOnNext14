"use client";

import { useEffect } from "react";

export default function Error({ error }: Record<string, any>) {
  useEffect(() => {
    // console.log(error);
  }, [error]);
  return (
    <div className="w-full min-h-56 text-lg text-red-500 flex items-center justify-center flex-col">
      <h2>Somthing wrong. {error.message}</h2>
    </div>
  );
}
