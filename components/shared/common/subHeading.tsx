import React from 'react'

interface Props {
    text: string;
    styles?: string; // If you want to pass additional styles
}

const SubHeading: React.FC<Props> = ({ text, styles }) => {
  return (
    <div>
      <h1 className={`md:border-l-[8px] border-l-[6px] border-black md:pl-10 pl-5 text-grey1 font-[400] md:text-lg text-md ${styles}`}>{text}</h1>
    </div>
  )
}

export default SubHeading