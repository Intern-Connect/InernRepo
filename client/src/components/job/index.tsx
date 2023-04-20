import React, { useState } from 'react'

export default function Index(props:{
  image:string;
  title:string;
  des: string;
  skills: Array<string>;
  status: boolean;
  company: string
}) {
  const {image, title, des, skills, status, company} = props;
  const [pop, setPop] = useState(false)
  const [st, setSt] = useState(status) 
  return (
    <div className='relative'>
    {
      pop ? (
        <div className="absolute h-full w-full z-30 bg-white/80 flex items-center justify-center">
          <div className="modal-box relative">
            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={()=>{
              setSt(true)
              setPop(false)
            }}>✕</label>
            <h3 className="text-lg font-bold">Congratulations!</h3>
            <p className="py-4">Your application sent to internship program of {company}</p>
          </div>
        </div>
      ):(
        <div className="mt-5 grid h-full cursor-pointer">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={image}
                alt="Job"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {title}
                <div className="badge-secondary badge">NEW</div>
              </h2>
              <p>
                {des}
              </p>
              <div>
                {company}
              </div>
              <div className="card-actions justify-end">
                {
                  skills.map((skill)=>(
                    <div className="badge-outline badge">{skill}</div>
                  ))
                }
              </div>
            </div>
            {
              st?(
                <div className="text-3xl m-3 bg-gray-400 text-center text-white  rounded-lg py-1 hover:shadow-md active:scale-95 transition-transform ease-in-out delay-70">
                  Applied
                </div>    
              ):(
              <div className="text-3xl m-3 bg-green-400 text-center text-white  rounded-lg py-1 hover:shadow-md active:scale-95 transition-transform ease-in-out delay-70" onClick={()=> (setPop(true))}>
                Apply
              </div>
              )
            }
          </div>
        </div>
      )
    }
      
    </div>
  )
}
