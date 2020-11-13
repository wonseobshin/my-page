import React, { useState, useEffect } from "react";

export default function PageModule(props) {
  const label = props.name.charAt(0).toUpperCase() + props.name.slice(1);

  useEffect(()=>{
  },[])
  
  return (
    <>
    <scan>{label}</scan>
    </>
  );
}
