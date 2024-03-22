import Image from "next/image";
import picture from "@/public/social.jpg" 
const FbPages = () => {
    return (
        <div>
            <div className="w-full mt-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Pages</h5>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </a>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image className="w-8 h-8 rounded-full" src={picture} width={100} height={100} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Tech Studies
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                       teaching@fbpage.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                Click
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center ">
                                <div className="flex-shrink-0">
                                    <Image className="w-8 h-8 rounded-full" src={picture} width={100} height={100} alt="Bonnie image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Social Posts
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                       spdaily@fbpage.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                Click
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image className="w-8 h-8 rounded-full" src={picture} width={100} height={100} alt="Michael image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                        Music Album
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                       music@fbpage.com
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    Click
                                </div>
                            </div>
                        </li>
                      
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default FbPages