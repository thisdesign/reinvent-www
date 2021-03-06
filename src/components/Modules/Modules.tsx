import { ModuleCompanies, ModuleTeamMembers, ModuleBullets } from "components";
import React from "react";
import { Module } from "types";
import ModuleAbout from "./ModuleAbout/ModuleAbout";
import ModuleIntro from "./ModuleIntro/ModuleIntro";
import ModuleHomepageHero from "./ModuleHomepageHero/ModuleHomepageHero";
import ModuleTextPage from "./ModuleTextPage/ModuleTextPage";

const Modules: React.FC<{ data: Module[] }> = ({ data: modules }) => {
  return (
    <>
      {modules.map((module) => {
        switch (module._type) {
          case "companies":
            return <ModuleCompanies data={module} key={module._key} />;
          case "team":
            return <ModuleTeamMembers data={module} key={module._key} />;
          case "moduleAbout":
            return <ModuleAbout data={module} key={module._key} />;
          case "intro":
            return <ModuleIntro data={module} key={module._key} />;
          case "bullets":
            return <ModuleBullets data={module} key={module._key} />;
          case "homepageHero":
            return <ModuleHomepageHero data={module} key={module._key} />;
          case "textPage":
            return <ModuleTextPage data={module} key={module._key} />;
          default:
            return null;
        }
      })}
    </>
  );
};

export default Modules;
