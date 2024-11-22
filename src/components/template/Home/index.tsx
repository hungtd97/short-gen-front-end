interface IProps {}

import { Upload, MoreHorizontal, Zap, Youtube } from "lucide-react";

const HomeComponent = (props: IProps) => {
  return (
    <div className="w-full px-4 py-8">
      {/* Upload Section */}
      <div className="w-full flex justify-center my-16">
        <div className="w-full max-w-4xl flex space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Enter a Youtube link"
              className="h-[60px] w-full px-4 py-2 border-[2px] border-gray-300 rounded-lg text-lg pl-12 text-black font-medium"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <div className="w-8 h-8 text-primary rounded flex items-center justify-center">
                <Youtube size={30} />
              </div>
            </div>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-lg flex items-center space-x-2">
            <span>Download from Youtube</span>
          </button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="w-full grid grid-cols-2 gap-6">
        {/* Video Card 1 */}
        <div className="rounded-lg overflow-hidden">
          <div className="relative">
            <div className="bg-gray-800 aspect-video relative">
              <div className="absolute top-2 left-2 text-white text-sm">
                13:23
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-500 text-white p-4 rounded">
                  Task took too long to complete!
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                Nvidia CEO Jensen Huang and the $2 trillion company powering
                today's...
              </p>
              <button className="p-1">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Video Card 2 */}
        <div className="rounded-lg overflow-hidden">
          <div className="relative">
            <div className="bg-gray-800 aspect-video relative">
              <div className="absolute top-2 left-2 text-white text-sm">
                38:36
              </div>
              <img
                src="/api/placeholder/400/225"
                alt="Arizona Trip Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">
                Du lịch Mỹ tự túc #5: Dừng đến Arizona một mình! USA trip
              </p>
              <button className="p-1">
                <MoreHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            <p className="text-sm text-gray-500">Unable to edit</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
