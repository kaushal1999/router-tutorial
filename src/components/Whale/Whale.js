import React from "react";
import { Route, useLocation, useParams } from "react-router-dom";
import Beluga from "./Beluga";
import Blue from "./Blue";
import { useResolvedPath } from "react-router-dom";
import { Routes } from "react-router-dom";

export default function Whale() {
    const { type } = useParams();
    return (
      <div>
        <h2>whale</h2>
        {type === "blue" && <Blue></Blue>}
        {type === "beluga" && <Beluga></Beluga>}
      </div>
    );
}
