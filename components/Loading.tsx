import React from 'react'

const Loading = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-center items-center h-2/3">
        <div className="w-16 h-16 border-8 border-customThin border-t-customMain rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default Loading