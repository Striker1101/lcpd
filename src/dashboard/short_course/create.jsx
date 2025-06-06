import React from "react";
import DashboardLayout from "../../component/DashboardLayout";
import ShortCourseForm from "../../component/forms/ShortCourseForm";

export default function ShortCreate() {
  return (
    <DashboardLayout>
      <ShortCourseForm isUpdate={false} course={null} />
    </DashboardLayout>
  );
}
