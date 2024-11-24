import Database from "../Database/index.js";

export function createModule(module) {
    const newModule = { ...module, _id: Date.now().toString() };
    Database.modules = [...Database.modules, newModule];
    return newModule;
  }
  
export function findModulesForCourse(courseId) {
  const { modules } = Database;
  return modules.filter((module) => module.course === courseId);
}

