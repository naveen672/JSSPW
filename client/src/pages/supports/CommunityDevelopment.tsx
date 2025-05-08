import { ArrowLeft } from "lucide-react";

const CommunityDevelopment = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="mb-4">
            <a 
              href="/#supports" 
              className="inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back
            </a>
          </div>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Community Development Through Polytechnic</h1>
        </div>
        
        {/* Content Placeholder */}
        <div className="space-y-6">
          <div className="rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 p-12 text-center">
            <h2 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">Community Development Program Information</h2>
            <p className="text-gray-600 dark:text-gray-400">Detailed information about Community Development Through Polytechnic initiatives will be added here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDevelopment;