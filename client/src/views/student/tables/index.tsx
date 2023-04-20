import tableDataDevelopment from "./variables/tableDataDevelopment";
import tableDataCheck from "./variables/tableDataCheck";
import CheckTable from "./components/CheckTable";
import tableDataColumns from "./variables/tableDataColumns";
import tableDataComplex from "./variables/tableDataComplex";
import DevelopmentTable from "./components/DevelopmentTable";
import ColumnsTable from "./components/ColumnsTable";
import ComplexTable from "./components/ComplexTable";
import joblist from "./variables/jobs";
import Job from "../../../components/job"

const Tables = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {
        joblist.map((job)=>(
          <Job des={job.des} image={job.image} skills={job.skills} status={job.status} title={job.title} company={job.company}/>
        ))
      }
    </div>
  );
};

export default Tables;
