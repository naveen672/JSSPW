import { ArrowLeft, Download, Calendar, CalendarCheck, CalendarDays, FileText } from "lucide-react";

const AcademicCalendar = () => {
  // Current academic year
  const currentYear = 2025;
  const nextYear = 2026;
  const academicYear = `${currentYear}-${nextYear}`;
  
  // Sample important dates - these would typically come from your database
  const importantDates = [
    { date: "June 15, 2025", event: "Odd Semester Classes Begin" },
    { date: "August 15, 2025", event: "Independence Day (Holiday)" },
    { date: "September 10-15, 2025", event: "First Internal Assessment" },
    { date: "October 2, 2025", event: "Gandhi Jayanti (Holiday)" },
    { date: "October 20-25, 2025", event: "Second Internal Assessment" },
    { date: "November 10-25, 2025", event: "End Semester Examinations" },
    { date: "November 26 - December 31, 2025", event: "Winter Vacation" },
    { date: "January 2, 2026", event: "Even Semester Classes Begin" },
    { date: "January 26, 2026", event: "Republic Day (Holiday)" },
    { date: "February 15-20, 2026", event: "First Internal Assessment" },
    { date: "March 25-30, 2026", event: "Second Internal Assessment" },
    { date: "April 20 - May 5, 2026", event: "End Semester Examinations" },
    { date: "May 6 - June 14, 2026", event: "Summer Vacation" }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8 flex items-center">
          <a 
            href="/#circulars" 
            className="mr-4 inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B]"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </a>
          <h1 className="text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Academic Calendar</h1>
        </div>
        
        {/* Introduction */}
        <div className="mb-12">
          <div className="rounded-lg bg-white dark:bg-gray-800 p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <Calendar className="h-10 w-10 text-[#3E92CC] mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-[#0A2463] dark:text-white">Academic Year {academicYear}</h2>
                <p className="text-gray-600 dark:text-gray-400">JSS Polytechnic for Women, Mysore</p>
              </div>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Academic Calendar serves as an official schedule of all academic activities at JSS Polytechnic for Women. It includes important dates such as the beginning and end of semesters, examination periods, holidays, and other significant events for the academic year.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300">
              All students and faculty members are advised to refer to this calendar for planning their academic activities. Please note that this calendar is subject to change. Any modifications will be communicated through official channels.
            </p>
          </div>
        </div>
        
        {/* Calendar Download Options */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Download Calendar</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center">
              <FileText className="h-12 w-12 text-[#3E92CC] mb-4" />
              <h3 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Full Academic Calendar</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">Complete calendar with all academic events and holidays</p>
              <button className="inline-flex items-center bg-[#3E92CC] text-white py-2 px-4 rounded-md hover:bg-[#0A2463] transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center">
              <CalendarDays className="h-12 w-12 text-[#3E92CC] mb-4" />
              <h3 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Odd Semester Calendar</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">June 2025 to December 2025 schedule</p>
              <button className="inline-flex items-center bg-[#3E92CC] text-white py-2 px-4 rounded-md hover:bg-[#0A2463] transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
            
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700 flex flex-col items-center">
              <CalendarCheck className="h-12 w-12 text-[#3E92CC] mb-4" />
              <h3 className="text-lg font-semibold text-[#0A2463] dark:text-white mb-2 text-center">Even Semester Calendar</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">January 2026 to May 2026 schedule</p>
              <button className="inline-flex items-center bg-[#3E92CC] text-white py-2 px-4 rounded-md hover:bg-[#0A2463] transition-colors">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </div>
        
        {/* Important Dates */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Key Academic Dates</h2>
          
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Event</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                {importantDates.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">{item.event}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Semester Structure */}
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Odd Semester</h2>
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                  <h3 className="text-lg font-medium text-[#0A2463] dark:text-white mb-1">Duration</h3>
                  <p className="text-gray-700 dark:text-gray-300">June 15, 2025 to November 25, 2025</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                  <h3 className="text-lg font-medium text-[#0A2463] dark:text-white mb-1">Working Days</h3>
                  <p className="text-gray-700 dark:text-gray-300">90 days</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                  <h3 className="text-lg font-medium text-[#0A2463] dark:text-white mb-1">Internal Assessments</h3>
                  <p className="text-gray-700 dark:text-gray-300">2 cycles (September & October)</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#0A2463] dark:text-white mb-1">End Semester Exams</h3>
                  <p className="text-gray-700 dark:text-gray-300">November 10-25, 2025</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Even Semester</h2>
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                  <h3 className="text-lg font-medium text-[#0A2463] dark:text-white mb-1">Duration</h3>
                  <p className="text-gray-700 dark:text-gray-300">January 2, 2026 to May 5, 2026</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                  <h3 className="text-lg font-medium text-[#0A2463] dark:text-white mb-1">Working Days</h3>
                  <p className="text-gray-700 dark:text-gray-300">85 days</p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                  <h3 className="text-lg font-medium text-[#0A2463] dark:text-white mb-1">Internal Assessments</h3>
                  <p className="text-gray-700 dark:text-gray-300">2 cycles (February & March)</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-[#0A2463] dark:text-white mb-1">End Semester Exams</h3>
                  <p className="text-gray-700 dark:text-gray-300">April 20 - May 5, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Information */}
        <div className="mt-12 rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md border border-gray-100 dark:border-gray-700">
          <h2 className="mb-4 text-xl font-semibold text-[#0A2463] dark:text-white">For Further Information</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            If you have any questions regarding the Academic Calendar, please contact the Academic Section:
          </p>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1">
            <li><span className="font-semibold">Email:</span> academic@jsspwmys.org</li>
            <li><span className="font-semibold">Phone:</span> +91-821-2548240</li>
            <li><span className="font-semibold">Location:</span> Academic Block, Ground Floor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AcademicCalendar;