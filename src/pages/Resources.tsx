import Layout from '../components/Layout';
import { IoSearch } from "react-icons/io5";

const Resources = () => {
  return (
    <Layout>
      <div className="flex-1 h-screen bg-bgColor p-8 flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Resources</h1>
          <div className="flex gap-6 items-center">
            <p className="text-secondary text-sm font-semibold">20 Sep 2019, Friday</p>
            <div className="bg-accentBlue/15 p-2 rounded-md">
              <IoSearch className="text-accentBlue text-lg" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resources
