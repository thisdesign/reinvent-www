import { ModuleCompanies } from "components";
import React from "react";
import { Module } from "types";

const Modules: React.FC<{ data: Module[] }> = ({ data: modules }) => {
  return (
    <>
      {modules.map((module) => {
        switch (module._type) {
          case "companies":
            return <ModuleCompanies data={module} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Modules;
