import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaTimes } from "react-icons/fa";
import { useParams } from "react-router";
import CourseButtons from "../Buttons";
import { MdEdit } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
  }
  
interface ModuleState {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons: Lesson[];
}

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

//   const addModule = (module: any) => {
//     const newModule = { ...module,
//       _id: new Date().getTime().toString() };
//     const newModuleList = [newModule, ...moduleList];
//     setModuleList(newModuleList);
//   };

//   const deleteModule = (moduleId: string) => {
//     const newModuleList = moduleList.filter(
//       (module) => module._id !== moduleId );
//     setModuleList(newModuleList);
//   };

//   const updateModule = () => {
//     const newModuleList = moduleList.map((m) => {
//       if (m._id === module._id) {
//         return module;
//       } else {
//         return m;
//       }
//     });
//     setModuleList(newModuleList);
//   };

  return (
    <div>
      <CourseButtons /> <hr />
      <div>
        <div className="">
            <input value={module.name} className="module-input"
            onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))}    
            />
            <button className="bg-success add-module-button"
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                    style={{ marginRight: "6px" }}>
                Add
            </button>
            <button className="bg-primary add-module-button"
                    onClick={() => dispatch(updateModule(module))}>
                Update
            </button>
             <br/>
            <textarea value={module.description} className="module-input"
            onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))}
            />
        </div>

        {moduleList
        .filter((module) => module.course === courseId).map((module, index) => (
          <div className="wd-modules">
            <div className="wd-modules-item light-gray-bg" key={index}>
                <button className="modules-delete-button bg-primary d-inline-flex align-items-center"
                    onClick={() => dispatch(setModule(module))}
                    style={{ marginRight: "5px" }}>
                    <MdEdit />
                </button>
                <button className="modules-delete-button d-inline-flex align-items-center"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    <FaTimes />
                </button>
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {/* {selectedModule._id === module._id && ( */}
              <div className="wd-modules-lesson">
                {module.lessons?.map((lesson: Lesson) => (
                  <div className="wd-modules-lesson-item">
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ModuleList;