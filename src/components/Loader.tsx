import BarLoader from "react-spinners/BarLoader";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center"><BarLoader 
    height={3}
    width={500}
    color="#ec2de5"
    /></div>
  )
}
