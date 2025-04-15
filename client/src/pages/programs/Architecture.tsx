import { ArrowLeft, Download, FileText, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Architecture = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-20 [&_p]:!text-[#000000] [&_li]:!text-[#000000] [&_span]:!text-[#000000] [&_ul]:!text-[#000000] [&_div]:!text-[#000000] [&_a]:!text-[#3E92CC]">
      <div className="container mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8 flex items-center">
          <a 
            href="/#programs" 
            className="mr-4 inline-flex items-center text-[#0A2463] dark:text-blue-400 hover:text-[#D8315B] transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </a>
          <h1 className="text-3xl font-bold !text-[#0A2463] dark:!text-white md:text-4xl">Architecture</h1>
        </div>
        
        {/* Program Overview */}
        <div className="mb-12 rounded-lg bg-white dark:bg-gray-800 p-8 shadow-md !border-[1px] !border-slate-400">
          <h2 className="mb-6 text-2xl font-bold !text-[#0A2463] dark:!text-white">Program Overview</h2>
          <p className="mb-4 !text-[#000000] dark:!text-gray-300 font-medium">
            The Architecture program was started at JSS Polytechnic for women, Mysore in the academic year 1983-1984 to facilitate 
            architectural education at diploma level. We started the diploma program in architecture with the intake of 20 and 
            later the intake was enhanced to 30 to meet the growing demand.
          </p>
          
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="!border-[1px] !border-slate-300">
              <CardHeader className="bg-[#0A2463]/10 dark:bg-[#0A2463]/20">
                <CardTitle className="!text-[#0A2463] dark:!text-white">Vision</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="!text-[#000000] dark:!text-gray-300 font-medium">
                  To create globally and intellectually competent, professionally skilled, ethically strong, morally upright, 
                  socially responsive, culturally tolerant professionals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="!border-[1px] !border-slate-300">
              <CardHeader className="bg-[#0A2463]/10 dark:bg-[#0A2463]/20">
                <CardTitle className="!text-[#0A2463] dark:!text-white">Mission</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc pl-6 space-y-2 !text-[#000000] dark:!text-gray-300">
                  <li className="font-medium">Imparting Knowledge with Academic Excellence by incorporating competitive curriculum and to make students excellent Designers and Professionals.</li>
                  <li className="font-medium">Develop professionally skilled and innovative planners, designers, constructors and operators of society's economic and social engine.</li>
                  <li className="font-medium">Creating learning environment with technological orientation to maximize individual potential.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Tabs for Different Sections */}
        <Tabs defaultValue="faculty" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="faculty">Faculty</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>
          
          {/* Faculty Tab */}
          <TabsContent value="faculty" className="mt-6">
            <h3 className="mb-6 text-xl font-semibold !text-[#0A2463] dark:!text-white">Department Faculty</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              
              {/* Faculty Member 1 */}
              <Card className="!border-[1px] !border-slate-400">
                <CardHeader className="bg-[#D8315B]/10 dark:bg-[#D8315B]/20">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 border-2 border-white">
                      <AvatarImage src="/faculty-profile-1.svg" alt="DEVIKA S J" />
                      <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="!text-[#0A2463] dark:!text-white">DEVIKA S J</CardTitle>
                      <CardDescription className="!text-[#000000] dark:!text-gray-400">HOD</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <p className="!text-[#000000] dark:!text-gray-300 font-medium"><span className="font-bold">Qualification:</span> B.Arch</p>
                    <p className="!text-[#000000] dark:!text-gray-300 font-medium"><span className="font-bold">Specialization:</span> Architecture & Interiors</p>
                    <p className="flex items-center !text-[#000000] dark:!text-gray-300">
                      <Mail className="mr-2 h-4 w-4" />
                      <a href="mailto:devikajram@gmail.com" className="!text-[#3E92CC] hover:!text-[#0A2463] transition-colors">
                        devikajram@gmail.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Faculty Member 2 */}
              <Card className="!border-[1px] !border-slate-400">
                <CardHeader className="bg-[#D8315B]/10 dark:bg-[#D8315B]/20">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 border-2 border-white">
                      <AvatarImage src="/faculty-profile-2.svg" alt="ANUSHA G" />
                      <AvatarFallback>AG</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="!text-[#0A2463] dark:!text-white">ANUSHA G</CardTitle>
                      <CardDescription className="!text-[#000000] dark:!text-gray-400">Lecturer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <p className="!text-[#000000] dark:!text-gray-300 font-medium"><span className="font-bold">Qualification:</span> B.Arch</p>
                    <p className="!text-[#000000] dark:!text-gray-300 font-medium"><span className="font-bold">Specialization:</span> ARCHITECTURE</p>
                    <p className="flex items-center !text-[#000000] dark:!text-gray-300">
                      <Mail className="mr-2 h-4 w-4" />
                      <a href="mailto:anuguru29@jsspwmys.org" className="!text-[#3E92CC] hover:!text-[#0A2463] transition-colors">
                        anuguru29@jsspwmys.org
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Faculty Member 3 */}
              <Card className="!border-[1px] !border-slate-400">
                <CardHeader className="bg-[#D8315B]/10 dark:bg-[#D8315B]/20">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 border-2 border-white">
                      <AvatarImage src="/faculty-profile-3.svg" alt="William Kadam" />
                      <AvatarFallback>WK</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="!text-[#0A2463] dark:!text-white">William Kadam</CardTitle>
                      <CardDescription className="!text-[#000000] dark:!text-gray-400">Lecturer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <p className="!text-[#000000] dark:!text-gray-300 font-medium"><span className="font-bold">Qualification:</span> B.Arch</p>
                    <p className="!text-[#000000] dark:!text-gray-300 font-medium"><span className="font-bold">Specialization:</span> Architecture</p>
                    <p className="flex items-center !text-[#000000] dark:!text-gray-300">
                      <Mail className="mr-2 h-4 w-4" />
                      <a href="mailto:williamkdm@gmail.com" className="!text-[#3E92CC] hover:!text-[#0A2463] transition-colors">
                        williamkdm@gmail.com
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Faculty Member 4 */}
              <Card className="!border-[1px] !border-slate-400">
                <CardHeader className="bg-[#D8315B]/10 dark:bg-[#D8315B]/20">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 border-2 border-white">
                      <AvatarImage src="/faculty-profile-4.svg" alt="PALLAVI H S" />
                      <AvatarFallback>PH</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="!text-[#0A2463] dark:!text-white">PALLAVI H S</CardTitle>
                      <CardDescription className="!text-[#000000] dark:!text-gray-400">Lecturer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-2">
                    <p className="!text-[#000000] dark:!text-gray-300 font-medium"><span className="font-bold">Qualification:</span> B.Arch</p>
                    <p className="!text-[#000000] dark:!text-gray-300 font-medium"><span className="font-bold">Specialization:</span> Architecture</p>
                    <p className="flex items-center !text-[#000000] dark:!text-gray-300">
                      <Mail className="mr-2 h-4 w-4" />
                      <a href="mailto:pallavihs@jsspwmys.org" className="!text-[#3E92CC] hover:!text-[#0A2463] transition-colors">
                        pallavihs@jsspwmys.org
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Facilities Tab */}
          <TabsContent value="facilities" className="mt-6">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md !border-[1px] !border-slate-400">
              <h3 className="mb-6 text-xl font-semibold !text-[#0A2463] dark:!text-white">Department Facilities</h3>
              <p className="mb-6 !text-[#000000] dark:!text-gray-300 font-medium">
                The total building area is 600 square metres.
              </p>
              
              <h4 className="mb-4 text-lg font-semibold !text-[#0A2463] dark:!text-white">Major Equipment</h4>
              <div className="overflow-x-auto">
                <Table className="[&_td]:!text-[#000000] dark:[&_td]:!text-gray-300">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px] !text-[#000000] dark:!text-white">Sl No</TableHead>
                      <TableHead className="!text-[#000000] dark:!text-white">Name</TableHead>
                      <TableHead className="!text-[#000000] dark:!text-white">Quantity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>LCD Projector</TableCell>
                      <TableCell>01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>Computers</TableCell>
                      <TableCell>35</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>3</TableCell>
                      <TableCell>10KV UPS</TableCell>
                      <TableCell>01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>4</TableCell>
                      <TableCell>Nikon D60 Digital Camera</TableCell>
                      <TableCell>01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>5</TableCell>
                      <TableCell>Nikon D750 Camera</TableCell>
                      <TableCell>01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>6</TableCell>
                      <TableCell>Nikon-AC-2S Auto level</TableCell>
                      <TableCell>03</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell>Trimble M3DR 5" Total Station</TableCell>
                      <TableCell>01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>8</TableCell>
                      <TableCell>Theodolite</TableCell>
                      <TableCell>06</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>9</TableCell>
                      <TableCell>HP Design jet 110+ Plotter</TableCell>
                      <TableCell>01</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>10</TableCell>
                      <TableCell>Epson L220 Printer</TableCell>
                      <TableCell>01</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
          
          {/* Academics Tab */}
          <TabsContent value="academics" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="!border-[1px] !border-slate-400">
                <CardHeader className="bg-[#0A2463]/10 dark:bg-[#0A2463]/20">
                  <CardTitle className="!text-[#0A2463] dark:!text-white">Program Educational Objectives</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 !text-[#000000] dark:!text-gray-300">
                    <li className="font-medium">
                      <span className="font-bold">PEO - 1:</span> To educate students in the fundamental principles of architecture.
                    </li>
                    <li className="font-medium">
                      <span className="font-bold">PEO - 2:</span> To challenge students to develop the ability to use architectural principles in
                      analyzing and solving problems of practical importance in the built environment and society at large.
                    </li>
                    <li className="font-medium">
                      <span className="font-bold">PEO - 3:</span> To educate students about the need for lifelong learning and professional development
                      after diploma programme.
                    </li>
                    <li className="font-medium">
                      <span className="font-bold">PEO - 4:</span> Educating students in skills and knowledge required to improve the quality
                      of the built environment on both national and international level.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="!border-[1px] !border-slate-400">
                <CardHeader className="bg-[#0A2463]/10 dark:bg-[#0A2463]/20">
                  <CardTitle className="!text-[#0A2463] dark:!text-white">Program Outcomes</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 !text-[#000000] dark:!text-gray-300">
                    <li className="font-medium">
                      <span className="font-bold">PO - 1:</span> Apply knowledge of basic mathematics, science and engineering fundamentals and
                      engineering specialization to solve the engineering problems.
                    </li>
                    <li className="font-medium">
                      <span className="font-bold">PO - 2:</span> Identify and analyse well-defined engineering problems using codified standard methods.
                    </li>
                    <li className="font-medium">
                      <span className="font-bold">PO - 3:</span> Design solutions for well-defined technical problems and assist with the design of
                      systems components or processes to meet specified needs.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <div className="md:col-span-2">
                <Card className="!border-[1px] !border-slate-400">
                  <CardHeader className="bg-[#0A2463]/10 dark:bg-[#0A2463]/20">
                    <CardTitle className="!text-[#0A2463] dark:!text-white">Resources & Downloads</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between rounded-md border p-4">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-5 w-5 !text-[#3E92CC]" />
                          <span className="!text-[#000000] dark:!text-white font-medium">Architecture Syllabus</span>
                        </div>
                        <a href="/architecture-syllabus.pdf" download className="inline-flex items-center">
                          <Button variant="outline" size="sm">
                            <Download className="mr-2 h-4 w-4" />
                            <span className="!text-[#000000] dark:!text-white">Download</span>
                          </Button>
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Activities Tab */}
          <TabsContent value="activities" className="mt-6">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md !border-[1px] !border-slate-400">
              <h3 className="mb-6 text-xl font-semibold !text-[#0A2463] dark:!text-white">Department Activities</h3>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="!border-[1px] !border-slate-400">
                  <CardHeader className="bg-[#D8315B]/10 dark:bg-[#D8315B]/20">
                    <CardTitle className="!text-[#0A2463] dark:!text-white">Recent Workshops</CardTitle>
                    <CardDescription className="!text-[#000000] dark:!text-gray-400">Hands-on learning experiences for students</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 !text-[#000000] dark:!text-gray-300">
                      <li className="flex items-start font-medium">
                        <span className="mr-2 inline-block h-6 w-6 shrink-0 rounded-full bg-[#0A2463]/20 text-center !text-[#0A2463] dark:bg-blue-900/30 dark:!text-blue-400">•</span>
                        <span className="!text-[#000000] dark:!text-gray-300">Urban Planning and Sustainable Design Workshop</span>
                      </li>
                      <li className="flex items-start font-medium">
                        <span className="mr-2 inline-block h-6 w-6 shrink-0 rounded-full bg-[#0A2463]/20 text-center !text-[#0A2463] dark:bg-blue-900/30 dark:!text-blue-400">•</span>
                        <span className="!text-[#000000] dark:!text-gray-300">Digital Architectural Modeling Techniques</span>
                      </li>
                      <li className="flex items-start font-medium">
                        <span className="mr-2 inline-block h-6 w-6 shrink-0 rounded-full bg-[#0A2463]/20 text-center !text-[#0A2463] dark:bg-blue-900/30 dark:!text-blue-400">•</span>
                        <span className="!text-[#000000] dark:!text-gray-300">Traditional Construction Methods and Materials</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a href="/architecture-workshops.pdf" download className="inline-flex items-center !text-[#3E92CC] hover:!text-[#0A2463] transition-colors">
                        <Download className="mr-2 h-4 w-4" />
                        Download Workshops Calendar
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="!border-[1px] !border-slate-400">
                  <CardHeader className="bg-[#D8315B]/10 dark:bg-[#D8315B]/20">
                    <CardTitle className="!text-[#0A2463] dark:!text-white">Competitions & Events</CardTitle>
                    <CardDescription className="!text-[#000000] dark:!text-gray-400">Opportunities for students to showcase their talents</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 !text-[#000000] dark:!text-gray-300">
                      <li className="flex items-start font-medium">
                        <span className="mr-2 inline-block h-6 w-6 shrink-0 rounded-full bg-[#0A2463]/20 text-center !text-[#0A2463] dark:bg-blue-900/30 dark:!text-blue-400">•</span>
                        <span className="!text-[#000000] dark:!text-gray-300">Annual Architecture Design Competition</span>
                      </li>
                      <li className="flex items-start font-medium">
                        <span className="mr-2 inline-block h-6 w-6 shrink-0 rounded-full bg-[#0A2463]/20 text-center !text-[#0A2463] dark:bg-blue-900/30 dark:!text-blue-400">•</span>
                        <span className="!text-[#000000] dark:!text-gray-300">Model Making Exhibition</span>
                      </li>
                      <li className="flex items-start font-medium">
                        <span className="mr-2 inline-block h-6 w-6 shrink-0 rounded-full bg-[#0A2463]/20 text-center !text-[#0A2463] dark:bg-blue-900/30 dark:!text-blue-400">•</span>
                        <span className="!text-[#000000] dark:!text-gray-300">Heritage Conservation Projects</span>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <a href="/architecture-competitions.pdf" download className="inline-flex items-center !text-[#3E92CC] hover:!text-[#0A2463] transition-colors">
                        <Download className="mr-2 h-4 w-4" />
                        Download Competition Guidelines
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2 !border-[1px] !border-slate-400">
                  <CardHeader className="bg-[#0A2463]/10 dark:bg-[#0A2463]/20">
                    <CardTitle className="!text-[#0A2463] dark:!text-white">Industrial Visits & Field Trips</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="mb-4 !text-[#000000] dark:!text-gray-300 font-medium">
                      The department regularly organizes industrial visits and field trips to expose students to real-world architectural practices, construction sites, and historical buildings. These visits provide valuable hands-on learning experiences and help students understand the practical applications of their studies.
                    </p>
                    <div className="mt-6">
                      <a href="/architecture-activities.pdf" download className="inline-flex items-center !text-[#3E92CC] hover:!text-[#0A2463] transition-colors">
                        <Download className="mr-2 h-4 w-4" />
                        Download Activities Report
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Contacts Tab */}
          <TabsContent value="contacts" className="mt-6">
            <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md !border-[1px] !border-slate-400">
              <h3 className="mb-6 text-xl font-semibold !text-[#0A2463] dark:!text-white">Department Contact Information</h3>
              
              <div className="space-y-4">
                <div className="rounded-lg bg-[#0A2463]/5 dark:bg-[#0A2463]/20 p-5 !border-[1px] !border-slate-300">
                  <h4 className="text-lg font-semibold !text-[#0A2463] dark:!text-white">DEVIKA S J</h4>
                  <p className="!text-[#000000] dark:!text-gray-400 font-medium">HOD, Architecture Department</p>
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center !text-[#000000] dark:!text-gray-300">
                      <Phone className="mr-2 h-4 w-4 !text-[#3E92CC]" />
                      <a href="tel:8217621733" className="!text-[#3E92CC] hover:!text-[#0A2463] transition-colors">8217621733</a>
                    </p>
                    <p className="flex items-center !text-[#000000] dark:!text-gray-300">
                      <Mail className="mr-2 h-4 w-4 !text-[#3E92CC]" />
                      <a href="mailto:devikajram@gmail.com" className="!text-[#3E92CC] hover:!text-[#0A2463] transition-colors">devikajram@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Architecture;