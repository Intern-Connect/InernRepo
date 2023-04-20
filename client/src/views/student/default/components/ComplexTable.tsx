import React, { useEffect, useState } from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Progress from "components/progress";
import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";
import PopoverHorizon from "components/popover";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

type RowObj = {
  id:number;
  name: string;
  status: string;
  date: string;
  progress: number;
  companyName: string;
  desc: string;
};

const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export default function ComplexTable(props: { tableData: any }) {
  const { tableData } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [desc, setDesc] = useState("");
  const [pop, setPop] = useState(false);
  const [questions, setQuestions] = useState<RowObj>()

  // useEffect(()=>{
  //   tableData.map((question:string) => {
  //     setQuestions([...questions, question])
  //   })
  // },[])

  let defaultData = tableData;
  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          STATUS
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === "Approved" ? (
            <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
          ) : info.getValue() === "Pendding" ? (
            <MdCancel className="text-amber-500 me-1 dark:text-red-300" />
          ) : info.getValue() === "Error" ? (
            <MdOutlineError className="text-red-500 me-1 dark:text-amber-300" />
          ) : null}
          <p className="text-sm font-bold text-navy-700 dark:text-white">
            {info.getValue()}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor("date", {
      id: "date",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor("companyName", {
      id: "company",
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          COMPANY
        </p>
      ),
      cell: (info) => (
        <div className="flex items-center">{info.getValue()}</div>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  const setPendding = (id:number)=>{
    data.filter((question)=>{
      if (question.id === id){
        question.status = "Pendding"
        question.date = new Date().toLocaleTimeString()
        return setData([...data, question])
      }else{
        return question
      }
    })
  }
  console.log(data)
  return (
    <>
      {pop ? (
        <div className="" id="modal-id">
          <div className="relative mx-auto my-auto min-h-full w-full rounded-xl bg-white p-5  shadow-lg ">
            <div className="">
              <div className="flex-auto justify-center p-5 text-center">
                <h2 className="py-4 text-2xl font-bold ">Question Details </h2>
                <p className="px-8 text-xl">{desc}</p>
              </div>

              <div className="mt-2  space-x-4 p-3 text-center md:block">
                <input type="text" className="bg-gray-200 p-2 w-60"  placeholder="Solution Repo Link"/>
                <div className="space-x-4 my-10">
                  <button className="mb-2 rounded-full border bg-white px-5 py-2 text-sm font-medium tracking-wider text-gray-600 shadow-sm hover:bg-gray-100 hover:shadow-lg md:mb-0" onClick={()=>setPop(false)}>
                    Cancel
                  </button>
                  <button className="mb-2 rounded-full border border-green-500 bg-green-500 px-5 py-2 text-sm font-medium tracking-wider text-white shadow-sm hover:bg-green-600 hover:shadow-lg md:mb-0" onClick={()=>{
                    setPendding(questions.id)
                    setPop(false)}}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Card extra={"w-full h-full px-6 pb-6 sm:overflow-x-auto"}>
          <div className="relative flex items-center justify-between pt-4">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              Qustion List
            </div>
            <CardMenu />
          </div>

          <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
            <table className="w-full">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="!border-px !border-gray-400"
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          key={header.id}
                          colSpan={header.colSpan}
                          onClick={header.column.getToggleSortingHandler()}
                          className="cursor-pointer border-b-[1px] border-gray-200 pb-2 pr-4 pt-4 text-start"
                        >
                          <div className="items-center justify-between text-xs text-gray-200">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: "",
                              desc: "",
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table
                  .getRowModel()
                  .rows.slice(0, 5)
                  .map((row) => {
                    return (
                      <tr
                        key={row.id}
                        onClick={() => {
                          setPop(true);
                          setQuestions(row.original)
                          setDesc(row.original.desc);
                        }}
                        className="cursor-pointer"
                      >
                        {row.getVisibleCells().map((cell) => {
                          return (
                            <td
                              key={cell.id}
                              className="min-w-[150px] border-white/0 py-6  pr-4"
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </>
  );
}
