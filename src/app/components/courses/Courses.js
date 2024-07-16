import React from "react";
import Digitialmarketing from "../../../../public/images/digitial-marketing.jpg";
import businessManagement from "../../../../public/images/business-management.jpg";
import Contentcreation from "../../../../public/images/content-creation.jpg";
import Coursescard from "./Coursescard";

function Courses() {
  const courses = [
    {
      id: 1,
      image: Digitialmarketing,
      name: "Social media Digitial Marketing",
    },
    {
      id: 2,
      image: businessManagement,
      name: "Sales & Human Resources Management",
    },
    {
      id: 3,
      image: Contentcreation,
      name: "Social Media Content creation",
    },
  ];

  return (
    <div className="container mx-auto">
      <div>
        <div className="flex items-center justify-center mt-6">
          <div>
            <p className="font-bold text-text text-2xl border-b-2 border-primary pb-1">
              Pick Up The
              <span className="text-primary"> Best Courses </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 justify-items-center">
          {courses.map((courses) => (
            <div key={courses.id}>
              <Coursescard name={courses.name} image={courses.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
