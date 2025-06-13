
const EducationBox = ({key, item}) => {
  return (
    <div key = {key} className = "min-w-[60vw] justify-between text-center md:text-start flex flex-col md:flex-row items-center px-4 md:px-8 py-2 md:py-4 my-2 md:my-3 rounded-2xl border-2 border-gray-300">
        <img src = {item.photo} className = "rounded-full h-10 md:h-20"/>
        <div className = "md:pr-20 lg:pr-32 md:pl-4">
            <div className = "md:text-xl font-semibold">{item.name}</div>
            <div className = "text-gray-300">{item.program}</div>
            <div className = "">{item.grade}</div>
        </div>
        <div className="">{item.duration}</div>
    </div>
  )
}

export default EducationBox