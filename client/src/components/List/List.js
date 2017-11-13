import React from "react";

export const List = ({ articles }) => {
         return <div className="list-overflow-container">
             <ul className="list-group">{articles}</ul>
           </div>;
       };
