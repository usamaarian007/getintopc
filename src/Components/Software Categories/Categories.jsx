import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header";
import Navbar from "../Navbar";
import BBar from "../bottomBar";

export default function Categories() {
  const categ = [
    "All Software Categories",
    "3D Analysis",
    "3D Design",
    "3D CAD",
    "3D Designing",
    "3D Material Rendering",
    "3D Modelling",
    "3D Printing",
    "3D Visualization",
    "Accounting",
    "AdBlocker",
    "Analysis",
    "Analytics",
    "Anti Spyware",
    "Antivirus",
    "Architecture",
    "Audio Processing",
    "Authoring",
    "Automation",
    "Backup Recovery",
    "Backup Tool",
    "Benchmarking",
    "Biomedical",
    "Bluetooth",
    "BPM Software",
    "browsers",
    "Bug Tracking",
    "Business",
    "Business Analysis",
    "Camera Tools",
    "CD DVD Tools",
    "Burning",
    "CFD Tool",
    "Chat",
    "Chemistry",
    "Circuit Designing",
    "Civil Engineering",
    "CNC",
    "CNC Machines",
    "Code Obfuscation",
    "Communication",
    "Compilers",
    "Complex Processing",
    "Compression",
    "Computational Fluid Dynamics",
    "Construction",
    "Control Engineering",
    "Converters",
    "Cost Estimation",
    "Data Mining",
    "Data Modeling",
    "Data Recovery",
    "Database",
    "Database Conversion",
    "Debugger",
    "Design",
    "Designing Tool",
    "Desktop",
    "Development",
    "Disassembler",
    "Disk Management",
    "DIsk Partition",
    "Documentation",
    "Download Managers",
    "Drawing",
    "Drivers",
    "Education",
    "Electrical Engineering",
    "Electromagnetic Design",
    "Electromechanical",
    "Electronics",
    "Email",
    "Embroidery",
    "Employee Management",
    "Emulators",
    "Engineering",
    "ERP Systems",
    "File Sharing",
    "Fonts",
    "Game Maker",
    "Game Recording",
    "Geographical",
    "Geological",
    "Geological Data Processing",
    "Geotechnical Modeling",
    "Geothermal Analysis",
    "gipv2",
    "Graphic Design",
    "Help Files",
    "Home Design",
    "HTML5",
    "Hydraulic Systems",
    "Icons Design",
    "Image Editors",
    "Image Managers",
    "Image Viewer",
    "Industrial Processes",
    "Installer Creation",
    "Interior Designing",
    "Internet",
    "JAVA",
    "Laser Texture",
    "Learning",
    "Live Streaming",
    "Localization",
    "Machine Learning",
    "Machine Tools",
    "Management",
    "Manufacturing",
    "Maps Creation",
    "Maths",
    "Medical",
    "Mining",
    "Moldflow",
    "MultiLingual",
    "Multimedia",
    "Music",
    "Navigation",
    "Network",
    "Numerical Computing",
    "OCR",
    "Office Tools",
    "Operating Systems",
    "Optimization",
    "Package Designing",
    "Panoramic Images",
    "Parallel Processing",
    "PCB Design",
    "PDF Editors",
    "Petrophysical Assessment",
    "Photo Editing",
    "Photo Retouching",
    "Photography",
    "Photoshop Plugins",
    "Pipe Designing",
    "PLC Programming",
    "Portable Apps Creator",
    "Process Control System",
    "Productivity",
    "Programming",
    "Python",
    "Religious",
    "SCADA",
    "Scanning",
    "Screen Recording",
    "Sculpting",
    "Search",
    "Security",
    "Setup Creation",
    "Shop",
    "Simulation",
    "Simulators",
    "Speech to Text",
    "SSH",
    "Statistical",
    "Streaming",
    "Surface Mapping",
    "Surveillance",
    "Synthesizer",
    "System Tuning",
    "Benchmarking",
    "Text Editors",
    "Translation",
    "Typing",
    "UML Modelling",
    "Uninstaller",
    "Utilities",
    "Vector Animation",
    "Video Converter",
    "Video Downloader",
    "Video Editing",
    "Virtual Tours",
    "Virtualization",
    "Visual Effects",
    "Voice Control",
    "Webcam",
    "Website Design",
  ];
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div
        className="ml-20 mr-24 mt-4 flex flex-wrap"
        style={{ width: "90vw", backgroundColor: "#FFFFFF" }}
      >
        {" "}
        <div
          className="p-4 item-center mt-8 space-y-2 flex-col justify-center"
          style={{ width: "64vw" }}
        >
          {categ?.map((item, index) => {
            return (
              <div>
                <div className="text-center flex justify-center p-2 text-white text-lg font-bold ">
                  <div className=" bg-green-400 p-2 w-60 -mt-4">{item}</div>
                </div>
              </div>
            );
          })}

          {/* <div
            className="text-center px-2 text-white text-lg font-bold bg-green-400 "
            style={{ width: "235px" }}
          >
            3D Analysis
          </div>

          <div
            className="text-center  p-2 text-white text-lg font-bold bg-green-400 "
            style={{ width: "235px" }}
          >
            3D Designing
          </div> */}
        </div>
        <div>
          <Sidebar></Sidebar>
        </div>
        <div style={{ width: "100vw" }}>
          <BBar></BBar>
        </div>
      </div>
    </>
  );
}
