import React from 'react'
import ComplexTable from '../default/components/ComplexTable'
import tableDataComplex from '../default/variables/tableDataComplex'

export default function index() {
  return (
    <div className="mt-5 grid h-full">
        <ComplexTable tableData={tableDataComplex} />
      </div>
  )
}
