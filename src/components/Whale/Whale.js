import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Beluga from "./Beluga";
import Blue from "./Blue";

export default function Whale() {
    const { type } = useParams()
    
    return (
      <div>
        <h2>whale</h2>
            {type === "beluga" && <Beluga></Beluga>}
            {type==="blue" && <Blue></Blue>}
      </div>
    );
}
