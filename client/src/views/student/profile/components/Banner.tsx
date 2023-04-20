import avatar from "assets/img/avatars/avatar11.png";
import banner from "assets/img/profile/banner.png";
import Card from "components/card";
import { MdModeEditOutline, MdClose } from "react-icons/md";
import { useState } from "react";

const Banner = () => {
  const [name, setName] = useState("Adela Parkson");
  const [email, setEmail] = useState("adelaparkson20@gmail.com");
  const [postion, setPosition] = useState("Backend Engneer");
  const [img, setImg] = useState(avatar);
  const [edit, setEdit] = useState(false);
  return (
    <>
      {edit ? (
        <div className="">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              Edit Your Profile
            </h3>
            <div className="space-y-3">
              {/* Name */}
              <div className="form-control">
                <label className="input-group">
                  <span>Name</span>
                  <input type="text" value={name} className="input input-bordered" onChange={(e)=>{setName(e.target.value)}} />
                </label>
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="input-group">
                  <span>Email</span>
                  <input type="text" value={email} className="input input-bordered" onChange={(e)=>{setEmail(e.target.value)}} />
                </label>
              </div>

              {/* Postions */}
              <div className="form-control">
                <label className="input-group">
                  <span>Postion</span>
                  <input type="text" value={postion} className="input input-bordered" onChange={(e)=>{setPosition(e.target.value)}} />
                </label>
              </div>

              {/* Profile */}
              <div className="form-control">
                <label className="input-group">
                  <span>Profile pic</span>
                  <input type="text" value={img} className="input input-bordered" onChange={(e)=>{setImg(e.target.value)}} />
                </label>
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn bg-green-500" onClick={()=>setEdit(false)}>
                Edit
              </label>
            </div>
          </div>
        </div>
      ) : (
        <Card extra={"items-center w-full h-full p-[16px] bg-cover"}>
          <MdModeEditOutline
            className="w-20 cursor-pointer items-start rounded-full bg-green-500 text-2xl text-white"
            onClick={() => setEdit(true)}
          />
          {/* Background and profile */}
          <div
            className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
            style={{ backgroundImage: `url(${banner})` }}
          >
            <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
              <img className="h-full w-full rounded-full" src={img} alt="" />
            </div>
          </div>

          {/* Name and position */}
          <div className="mt-16 flex flex-col items-center">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              {name}
            </h4>
            <p className="text-base font-normal text-gray-600">{postion}</p>
            <p className="text-base font-normal text-gray-600">{email}</p>
          </div>

          {/* Post followers */}
          <div className="mb-3 mt-6 flex gap-4 md:!gap-14">
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-navy-700 dark:text-white">
                17
              </p>
              <p className="text-sm font-normal text-gray-600">Solved</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-navy-700 dark:text-white">
                9
              </p>
              <p className="text-sm font-normal text-gray-600">Jobs</p>
            </div>
            {/* <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold text-navy-700 dark:text-white">
              434
            </p>
            <p className="text-sm font-normal text-gray-600">Following</p>
          </div> */}
          </div>
        </Card>
      )}
    </>
  );
};

export default Banner;
