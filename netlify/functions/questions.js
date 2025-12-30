// Quiz questions and answers
const questions = [
  {
    id: 1,
    question: "Which device allows you to enter data and instructions into a computer?",
    options: ["ALU", "Output device", "CPU", "Input device"],
    correctAnswer: 3
  },
  {
    id: 2,
    question: "____________ are attached to a computer to expand its capabilities.",
    options: ["Audio Devices", "Communication Devices", "Peripheral Devices", "Video Devices"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "The most common input devices include _______.",
    options: ["Monitor and keyboard", "Printer and mouse", "Mouse and keyboard", "Monitor and mouse"],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "CMOS stands for____",
    options: ["Complementary Metal Oxide System", "Converted Metal Oxide System", "Complementary Metal Oxide Semiconductor", "Converted Metal Oxide Semiconductor"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "__________ is a device that lets you move the cursor (pointer) round the screen and 'click' to start a program or begin writing in a particular place or open a menu to see what choices you have.",
    options: ["CPU", "Mouse", "Monitor", "Operating system"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "CMOS memory stores the data of",
    options: ["Hard Disk", "RAM", "BIOS", "All of the choices"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Memory Physical slots SODIMM stands for_____.",
    options: ["Small Over DIMM", "Sign Over DIMM", "Solid Outline DIMM", "Small Outline DIMM"],
    correctAnswer: 3
  },
  {
    id: 8,
    question: "DIMM stands for_____.",
    options: ["Design Inline Memory Money", "Dynamin Inline Memory Money", "Dual Inline Memory Module", "Drive Inline Memory Module"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "Which of the following is not a benefit of laptop design?",
    options: ["Portability", "Built-in touchpad", "Processor Performance", "Desktop replacement"],
    correctAnswer: 2
  },
  {
    id: 10,
    question: "Impact printers create pictures and figures by: _____.",
    options: ["Heat and pressure", "Without any connections", "Laser", "Hitting a device"],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "A device that allows users to feed data into a computer for analysis and storage and to give commands to the computer is called _____.",
    options: ["Output device", "Both Input and Output", "Memory", "Input device"],
    correctAnswer: 3
  },
  {
    id: 12,
    question: "Which part of the computer fetches, decodes, and executes the programming instructions? _____.",
    options: ["PC", "Printer", "Central Processing Unit", "Case"],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "SSD stands for _____.",
    options: ["State State Drive", "Solid Solide Drive", "Solid State Drive", "State Solide Drive"],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "A _____ is now primarily called a personal computer (PC), or a device based on a single-chip microprocessor",
    options: ["Server", "Microcomputer", "Supercomputer", "Workstation computer"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "The main ATX motherboard power connector typically consists of ______ pins.",
    options: ["23", "20", "24", "22"],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "How is the size of RAM normally measured nowadays",
    options: ["InKB", "With a tape measure", "InGB", "InMB"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "What kind of peripheral devices is a hard disk drive?",
    options: ["Output device", "Input device", "Storage device", "Printer"],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "RAM stands for_____.",
    options: ["Random Access Memory", "Random Origin Memory", "Random Analogue Memory", "Read Only Memory"],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "______are output devices.",
    options: ["Barcode Reader and Scanner", "Monitor and Microphone", "Touchpad and Printer", "Printer and Speaker"],
    correctAnswer: 3
  },
  {
    id: 20,
    question: "Which laptop input device is a flat surface that you can slide across with your finger to control the cursor?",
    options: ["Trackball", "Touchpad", "Mouse", "Point stick"],
    correctAnswer: 1
  },
  {
    id: 21,
    question: "ROM stands for _____.",
    options: ["Random Access Memory", "Read Origin Memory", "Read Only Memory", "Random Origin Memory"],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "____ is used to provide power for internal disk drives.",
    options: ["USB drive", "SATA connector", "Molex connector", "HDMI cable"],
    correctAnswer: 2
  },
  {
    id: 23,
    question: "POST stands for",
    options: ["Power On Switch Turnoff", "Power On Switch Turn-on", "Problem On Self Test", "Power On Self Test"],
    correctAnswer: 3
  },
  {
    id: 24,
    question: "_____are magnetic storage medium",
    options: ["Floppy and CD", "Floppy and Hard Disk", "CD and backup Tape", "SSD and Floppy"],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "Which of the following interfaces allows audio to be sent out over the same cabling infrastructure as video?",
    options: ["VGA", "Composite", "HDMI", "DVI"],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "Computer systems commonly use two primary types of internal cables. These are _________",
    options: ["Data cable and a Power cable", "VGA cable and a DVI cable", "DC cable and a AC cable", "Ethernet cable and a SATA cable"],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "Bays and connections for drives, circuit boards, and I/O devices",
    options: ["Operating System", "Central Processing Unit", "Printer", "Computer Case"],
    correctAnswer: 3
  },
  {
    id: 28,
    question: "Which one of the following is a connection interface between computer and networking devices?",
    options: ["VGA", "BIOS", "Network Interface Card (NIC)", "CPU"],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "All data-handling components or optional data devices are connected to the external data bus.",
    options: ["True", "False"],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "Which of the following will you require to hear music on your computer?",
    options: ["Mouse", "Sound Card", "Video Card", "Joy Stick"],
    correctAnswer: 1
  },
  {
    id: 31,
    question: "Which of these is the speed of the CPU?",
    options: ["FSB", "External clock speed", "Internal clock speed", "System bus speed"],
    correctAnswer: 2
  },
  {
    id: 32,
    question: "COM ports are used for Connecting ________________",
    options: ["Serial devices", "Virtual memory", "Cache memory", "Parallel devices"],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "How are SODIMMs installed to a laptop?",
    options: ["By pressing straight down", "On a 45-degree angle", "Into a ZIF socket", "On a 90-degree angle"],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "How can we reset a forgotten BIOS supervisory password?",
    options: ["Access the BIOS by pressing F2.", "Extract the .EXE contents to a floppy.", "Remove the P1 connector.", "Remove the battery."],
    correctAnswer: 3
  },
  {
    id: 35,
    question: "A hardware device that executes program instructions, and performs arithmetic/logic operations is known as the:",
    options: ["CPU (central processing unit).", "Main storage", "Memory", "Integrated circuits."],
    correctAnswer: 0
  },
  {
    id: 36,
    question: "It is a block of metal made to sit right on top of the CPU with metal fins and uses conduction to direct heat away from the CPU.",
    options: ["Thermal Compound", "Cooling Liquid", "Fans", "Heat Sink"],
    correctAnswer: 3
  },
  {
    id: 37,
    question: "It is the electrical interface between the CPU and the motherboard and is attached directly to the motherboard and houses the CPU.",
    options: ["Buses", "Socket", "Interface", "Fans"],
    correctAnswer: 1
  },
  {
    id: 38,
    question: "Most of the functions of CPU is done by?",
    options: ["Chipset.", "Motherboard", "Serial Buses", "Data bus"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "Name any two storage device?",
    options: ["Hard disk drive, Network drive", "Hard disk drive, virtual drive", "Hard Disk Drive, Floppy Drive", "Floppy drive, expansion drive"],
    correctAnswer: 2
  },
  {
    id: 40,
    question: "Separate Video uses a mini-DIN 4-pin or 7-pin connector.",
    options: ["True", "False"],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "System boards are classified into how many types?",
    options: ["2", "5", "3", "4"],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "The most common interfaces which are used in PCs today?",
    options: ["Parallel, Serial,USB,,IEEE1394 only", "USB, Infrared only", "USB, HDMI, Bluetooth.", "Serial, Parallel only"],
    correctAnswer: 2
  },
  {
    id: 43,
    question: "Active heat sinks incorporate which of the following into their design?",
    options: ["Fans", "Water", "Grease", "Gas"],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "A sector can store maximum of _______________ bytes of data.",
    options: ["256", "1024", "512", "128"],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "The spine of the computer is ______________",
    options: ["Processor.", "Hard disk", "Memory", "Motherboard"],
    correctAnswer: 3
  },
  {
    id: 46,
    question: "The _______________ houses most of the system components and provides an environment that minimizes electrical interference to other electronic devices in the area.",
    options: ["Power Supply", "Bus", "Case", "CPU"],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "To implement a secure boot process, which device should be listed first in the Boot Device Priority screen?",
    options: ["USB", "Hard drive", "Floppy drive", "CD-ROM"],
    correctAnswer: 1
  },
  {
    id: 48,
    question: "What do storage units provide?",
    options: ["A place to store information and instructions when they are not being used in memory.", "A place to print information.", "A place to type data"],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "What is a possible reason for having black lines show up on printouts?",
    options: ["Scratch on the laser printer drum", "Damaged transfer corona wire", "Scratch on the fusing assembly", "Damaged roller"],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "VGA stands for:",
    options: ["Versatile Graphic Audio", "Video Graphic Audio", "Video Graphic Array"],
    correctAnswer: 2
  },
  {
    id: 51,
    question: "What is a possible symptom of a failing CPU?",
    options: ["Spyware is installed into the browser.", "BIOS reports low temperatures within the case.", "Computer will not boot.", "CPU is beyond the recommended voltage range."],
    correctAnswer: 3
  },
  {
    id: 52,
    question: "What are the two main types of Laptop memories?",
    options: ["DDR and DDR2", "SIMM and DIMM", "DIMM and DD3", "SODIMM and Micro DIMM."],
    correctAnswer: 3
  },
  {
    id: 53,
    question: "A user has purchased a laptop that has no means to charge the battery. Which of the following would the user MOST likely purchase?",
    options: ["PCMCIA card", "Replacement battery", "USB cable", "AC adapter"],
    correctAnswer: 3
  },
  {
    id: 54,
    question: "RDRAM stands for?",
    options: ["Read-only Data RAM", "Rambus Dynamic RAM", "Random Dynamic RAM", "Rambus Data RAM"],
    correctAnswer: 1
  },
  {
    id: 55,
    question: "Which of the following printer technologies provides the LOWEST cost per page?",
    options: ["Inkjet", "Dye-sublimation", "Dot matrix", "Laser"],
    correctAnswer: 2
  },
  {
    id: 56,
    question: "Which of the following connectors is commonly used on a shielded twisted pair cable?",
    options: ["BNC", "FC", "HDMI", "RJ-45"],
    correctAnswer: 3
  },
  {
    id: 57,
    question: "Which of the following is not one of the stages of computing?",
    options: ["Processing", "Output", "Heating", "Input"],
    correctAnswer: 2
  },
  {
    id: 58,
    question: "Which printer contains a wheel that looks like a flower with raised letters and symbols on each petal?",
    options: ["Daisy wheel printers", "Dot matrix printers", "LASER printers", "Bubble jet printers"],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "It can even provide power during a power failure or interruption.",
    options: ["Power Supply", "Mother Board", "UPS", "CASE"],
    correctAnswer: 2
  },
  {
    id: 60,
    question: "Which are the display devices?",
    options: ["LED, DC", "LCD, CRT", "DEL, CDL", "VCD, CTR"],
    correctAnswer: 1
  },
  {
    id: 61,
    question: ".......... controls and directs all activities in a computer system",
    options: ["Motherboard", "Power Supply", "CPU", "Memory"],
    correctAnswer: 2
  },
  {
    id: 62,
    question: "POST is a series of system checks performed by the __________________",
    options: ["CPU", "Motherboard", "OS", "BIOS"],
    correctAnswer: 3
  },
  {
    id: 63,
    question: "DIMM and RIMM are the form of ______________",
    options: ["BIOS", "Motherboard", "CPU", "Memory Package"],
    correctAnswer: 3
  },
  {
    id: 64,
    question: "CPU stands for",
    options: ["Central processing unit", "Common processing unit", "Central procedures unit", "Central programming unit"],
    correctAnswer: 0
  },
  {
    id: 65,
    question: "We can connect Mouse by using ________",
    options: ["Parallel Port", "RJ45", "PS/2 and USB", "IEEE1394"],
    correctAnswer: 2
  },
  {
    id: 66,
    question: "Motherboard form factor where the expansion slots are placed sideways on a special riser card to use the reduced vertical space optimally.",
    options: ["MicroATX", "ATX", "BLX", "NLX"],
    correctAnswer: 3
  },
  {
    id: 67,
    question: "A computer case, also knows as computer chassis.",
    options: ["True", "False"],
    correctAnswer: 0
  },
  {
    id: 68,
    question: "Troubleshooting unexpected shutdowns is to only check CPU heat sinks",
    options: ["True", "False"],
    correctAnswer: 1
  },
  {
    id: 69,
    question: "Troubleshooting unexpected shutdowns is to check only computer fans",
    options: ["True", "False"],
    correctAnswer: 1
  },
  {
    id: 70,
    question: "When Lookups-System completely stops might be caused due to low RAM and Hard Drive storage",
    options: ["True", "False"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "Continuous reboots is caused because of bad driver or configuration _____.",
    options: ["True", "False"],
    correctAnswer: 0
  }
];

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS'
    },
    body: JSON.stringify(questions)
  };
};

