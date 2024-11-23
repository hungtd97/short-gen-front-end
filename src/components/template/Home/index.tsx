interface IProps {}

import { useVideos } from "@/hooks/useVideo";
import { Upload, MoreHorizontal, Zap, Youtube } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect } from "react";

const HomeComponent = (props: IProps) => {
  const { fetchVideosList, loading, videos } = useVideos();
  console.log(`🚀 ~ HomeComponent ~ videos:`, videos);

  useEffect(() => {
    fetchVideosList();
  }, []);

  const renderVideosList = useCallback(() => {
    if (loading) return <p className="text-black">...Loading</p>;
    return videos?.map((video) => (
      <div key={video.id} className="rounded-lg overflow-hidden">
        <div className="relative">
          <div className="bg-gray-800 aspect-video relative">
            {!!video.thumbnail && (
              <Image src={video.thumbnail} fill alt={video.name} className="object-cover"/>
            )}
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-black">{video.name}</p>
            <button className="p-1">
              <MoreHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    ));
  }, [loading, videos]);

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
      <div className="w-full grid grid-cols-4 gap-6">{renderVideosList()}</div>
    </div>
  );
};

export default HomeComponent;
