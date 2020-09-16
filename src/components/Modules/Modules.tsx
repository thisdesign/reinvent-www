import { ModuleCompanies, ModuleTeamMembers } from "components";
import React from "react";
import { Module } from "types";

const Modules: React.FC<{ data: Module[] }> = ({ data: modules }) => {
  return (
    <>
      {modules.map((module) => {
        switch (module._type) {
          case "companies":
            return <ModuleCompanies data={module} key={module._key} />;
          case "team":
            return <ModuleTeamMembers data={module} key={module._key} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Modules;
