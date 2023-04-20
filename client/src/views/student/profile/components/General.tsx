import Card from "components/card";
import { useState } from "react";
import { MdModeEditOutline, MdClose } from "react-icons/md";
const General = () => {
  const [skils, setSkile] = useState(['Node js', 'Express', 'Postgres', 'Mongoose'])
  const [edit, setEdit] = useState(false);
  const [desc, setDesc] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sapiente, aperiam nisi rerum molestias, esse maiores laborum repellat pariatur veniam iusto amet! Eveniet mollitia quia ex dolore suscipit ad quis?")

  
  return (
    <>
      {
        edit ? (
          <div className="">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              Edit Your Profile
            </h3>
            <div className="space-y-3">
              
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn bg-green-500" onClick={()=>setEdit(false)}>
                Edit
              </label>
            </div>
          </div>
        </div>
        ):(
          <Card extra={"w-full h-full p-3"}>
            <MdModeEditOutline
            className="w-20 cursor-pointer items-start rounded-full bg-green-500 text-2xl text-white"
            onClick={() => setEdit(true)}
          />
        {/* Header */}
        <div className="mt-2 mb-8 w-full">
          <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            About Me
          </h4>
          <p className="mt-2 px-2 text-base text-gray-600">
            {desc}
          </p>
        </div>
        {/* Cards */}
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
            Skils
          </h4>
        <div className="flex items-center space-x-4 flex-wrap">
          {
            skils.map((skill)=>(

              <div className="badge">{skill}</div>
            ))
          }
        </div>
      </Card>
        )
      }
    </>
    
  );
};

export default General;
