import React from "react";
export function Submenu({category}){
  return <div>
    <div>{category.title}</div>
    <div>{category.id}</div>
  </div>
}
