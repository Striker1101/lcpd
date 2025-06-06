import React, { useEffect, useState } from "react";
import DashboardLayout from "../../component/DashboardLayout";
import ShortCourseForm from "../../component/forms/ShortCourseForm";
import { useParams } from "react-router-dom";
import axios from "axios";
import general from "../../Utils/general.json";

export default function ShortEdit() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const url = general.backend_url;
  useEffect(() => {
    async function getCourse() {
      try {
        await axios.get(`${url}/short_course/${id}`).then((res) => {
          setCourse(res.data);
        });
      } catch (err) {
        console.error("Delete failed", err);
      }
    }

    getCourse();
  }, []);
  return (
    <DashboardLayout>
      <ShortCourseForm isUpdate={true} course={course} />
    </DashboardLayout>
  );
}
