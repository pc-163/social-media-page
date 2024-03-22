//import Image from "next/image";

import Posts from "../component/allposts";
import CreatePost from "../component/createPost";
import Header from "../component/header";
import FbPages from "../component/pages";
import SinglePost from '../component/post'

export default function Dashboard() {
  return (
    <>
      <div className="sm:ml-64">
        <div className="mt-14">
          <div className="lg:grid grid-cols-12">
            <div className="col-span-7 p-5 bg-gray-50">
              <Header />
             {
             // <CreatePost />
             } 
              <Posts />
            </div>
            <div className="col-span-5 p-5">
            <SinglePost />
            <FbPages />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
