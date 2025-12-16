// Quiz questions and answers
const questions = [
  {
    id: 1,
    question: "Twenty cells, each of EMF, 10 volts and the currents is 7 A, are connected in series across an external resistance of 6.5 Ω. Find the internal resistance of the cells",
    options: ["1.1 Ω", "2.2 Ω", "3.3 Ω", "4.4 Ω"],
    correctAnswer: 0
  },
  {
    id: 2,
    question: "Equivalent of Farad is:",
    options: ["Coulomb / Volts", "Volts / Coulomb", "Ohm / Ampere", "Ampere / Ohm"],
    correctAnswer: 0
  },
  {
    id: 3,
    question: "The current 3μA can be expressed in powers of 10 as:",
    options: ["3 × 10⁻⁶ A", "3 × 10⁻³ A", "3 × 10³ A", "3 × 10⁶ A"],
    correctAnswer: 0
  },
  {
    id: 4,
    question: "What electrical characteristic of intrinsic semiconductor material is controlled by the addition of impurities?",
    options: ["Conductivity", "Resistance", "Voltage", "Current"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Central Part of the atom is",
    options: ["Nucleus", "Electron", "Proton", "Neutron"],
    correctAnswer: 0
  },
  {
    id: 6,
    question: "Which of the following is the application of transistors?",
    options: ["Amplify weak signals", "Store data", "Generate power", "Measure voltage"],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "A resistor of 50Ω has a potential difference of 100 volts DC, Calculate the power;",
    options: ["200 W", "100 W", "50 W", "150 W"],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Electrons in which is in the last orbit or shell of an atom are called?",
    options: ["Valence Electrons", "Core Electrons", "Free Electrons", "Bound Electrons"],
    correctAnswer: 0
  },
  {
    id: 9,
    question: "Central Part of the atom is",
    options: ["Nucleus", "Electron", "Proton", "Neutron"],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Ripple factor of half wave rectifier ___________",
    options: ["1.21", "0.48", "0.812", "0.406"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "Which of the following is a conductor",
    options: ["Copper", "Glass", "Rubber", "Plastic"],
    correctAnswer: 0
  },
  {
    id: 12,
    question: "Unit of conductance is",
    options: ["Mho", "Ohm", "Farad", "Henry"],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "For normal operation of the transistor, the collector diode has to be",
    options: ["Reverse-biased", "Forward-biased", "Unbiased", "Open circuit"],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "The majority carriers in the emitter of a pnp transistor are ___________",
    options: ["Holes", "Electrons", "Ions", "Protons"],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "At absolute zero temperature an intrinsic silicon crystal acts like ___________",
    options: ["An insulator", "A conductor", "A semiconductor", "A superconductor"],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "The output voltage of a bridge rectifier is a ___________",
    options: ["Full-wave signal", "Half-wave signal", "DC signal", "AC signal"],
    correctAnswer: 0
  },
  {
    id: 17,
    question: "For a forward-biased diode, the barrier potential ______ as temperature increases.",
    options: ["Decreases", "Increases", "Remains constant", "Becomes zero"],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "In a filter circuit, the inductor is used to ___________",
    options: ["Block AC and pass DC", "Block DC and pass AC", "Block both AC and DC", "Pass both AC and DC"],
    correctAnswer: 0
  },
  {
    id: 19,
    question: "The majority carriers in the emitter of a npn transistor are ___________",
    options: ["Free electrons", "Holes", "Ions", "Protons"],
    correctAnswer: 0
  },
  {
    id: 20,
    question: "In Charging of a capacitor time consent λ is",
    options: ["RC", "R/C", "C/R", "1/RC"],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "Which is the most widely used semiconductor?",
    options: ["Silicon", "Germanium", "Gallium", "Carbon"],
    correctAnswer: 0
  },
  {
    id: 22,
    question: "Which is the most widely used semiconductor?",
    options: ["Silicon", "Germanium", "Gallium", "Carbon"],
    correctAnswer: 0
  },
  {
    id: 23,
    question: "Each valence electron in an intrinsic semiconductor establishes a ___________",
    options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
    correctAnswer: 0
  },
  {
    id: 24,
    question: "In the common collector transistor connection circuit ___________",
    options: ["Input is applied between the base and collector and output is taken from the emitter and collector", "Input is applied between the base and emitter and output is taken from the collector and emitter", "Input is applied between the emitter and collector and output is taken from the base and collector", "Input is applied between the base and emitter and output is taken from the base and collector"],
    correctAnswer: 0
  },
  {
    id: 25,
    question: "Diffusion of free electrons across the junction of an unbiased diode produces ___________",
    options: ["The depletion layer", "The barrier potential", "Forward current", "Reverse current"],
    correctAnswer: 0
  },
  {
    id: 26,
    question: "Which of the following statement is TRUE for a parallel circuit?",
    options: ["Voltages are same", "Currents are same", "Resistances are same", "Power is same"],
    correctAnswer: 0
  },
  {
    id: 27,
    question: "Which of the following is required to produce p-type semiconductor?",
    options: ["Acceptor atoms", "Donor atoms", "Neutral atoms", "Ionized atoms"],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "Equivalent of Farad is:",
    options: ["Coulomb / Volts", "Volts / Coulomb", "Ohm / Ampere", "Ampere / Ohm"],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "The boundary between p-type material and n-type material is called ___________",
    options: ["A pn junction", "A depletion region", "A barrier", "A contact"],
    correctAnswer: 0
  },
  {
    id: 30,
    question: "The current 3μA can be expressed in powers of 10 as:",
    options: ["3 × 10⁻⁶ A", "3 × 10⁻³ A", "3 × 10³ A", "3 × 10⁶ A"],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "Which of the following statements is incorrect?",
    options: ["At room temperature, pure semiconductors make excellent conductors.", "Semiconductors have conductivity between conductors and insulators", "Doping increases conductivity of semiconductors", "Intrinsic semiconductors have equal numbers of electrons and holes"],
    correctAnswer: 0
  },
  {
    id: 32,
    question: "The numbers of valence electrons for conductors are",
    options: ["Less than four", "Exactly four", "More than four", "Zero"],
    correctAnswer: 0
  },
  {
    id: 33,
    question: "What is the barrier potential of a Germanium diode at room temperature?",
    options: ["0.3 V", "0.7 V", "1.0 V", "1.5 V"],
    correctAnswer: 0
  },
  {
    id: 34,
    question: "Which of the following is the application of transistors?",
    options: ["Amplify weak signals", "Store data", "Generate power", "Measure voltage"],
    correctAnswer: 0
  },
  {
    id: 35,
    question: "Efficiency of a half wave rectifier is",
    options: ["0.406", "0.812", "1.21", "0.5"],
    correctAnswer: 0
  },
  {
    id: 36,
    question: "Unit of Inductance",
    options: ["Henry", "Farad", "Ohm", "Mho"],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "What is the relationship between time period and frequency?",
    options: ["Inversely proportional", "Directly proportional", "Exponentially related", "No relationship"],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "What is the reference voltage of earthing system?",
    options: ["Zero voltage", "Positive voltage", "Negative voltage", "Variable voltage"],
    correctAnswer: 0
  },
  {
    id: 39,
    question: "The device which removes the a.c part of the rectifier output and allows the d.c part to reach the load is",
    options: ["Filter", "Rectifier", "Amplifier", "Oscillator"],
    correctAnswer: 0
  },
  {
    id: 40,
    question: "Which component can be added to a half-wave rectifier circuit to help smooth the output?",
    options: ["Capacitor", "Resistor", "Inductor", "Diode"],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "In a semiconductor, the concept of an energy gap is used to show the difference between the energies of the",
    options: ["Conduction band electrons and valence electrons", "Valence band and conduction band", "Electrons and holes", "Donors and acceptors"],
    correctAnswer: 0
  },
  {
    id: 42,
    question: "When a pn junction is formed, electrons move across the junction and fill holes in the p-region. The filled hole is a",
    options: ["Negative ion", "Positive ion", "Neutral atom", "Free electron"],
    correctAnswer: 0
  },
  {
    id: 43,
    question: "The process of adding impurities to a semiconductor is",
    options: ["Doping", "Diffusion", "Ionization", "Excitation"],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "The impurities which produce n-type semiconductors is ___________",
    options: ["Donor", "Acceptor", "Neutral", "Ionized"],
    correctAnswer: 0
  },
  {
    id: 45,
    question: "which of following is an application of PN Junction?",
    options: ["Transistor", "Resistor", "Capacitor", "Inductor"],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "___________ is the process of changing alternating current (AC) to direct current (DC).",
    options: ["Rectification", "Amplification", "Modulation", "Oscillation"],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "A potential difference of 22V is applied across the plates of a capacitor. Find the capacitance if the charge across the capacitor is 50μC.",
    options: ["2.27μF", "2.5μF", "1.8μF", "3.0μF"],
    correctAnswer: 0
  },
  {
    id: 48,
    question: "An alternating voltage is represented by v = 80 sin 100 t. Calculate the maximum voltage.",
    options: ["80 V", "100 V", "160 V", "40 V"],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "The efficiency of a full wave rectifier is ___________",
    options: ["0.812", "0.406", "1.21", "0.5"],
    correctAnswer: 0
  },
  {
    id: 50,
    question: "A reverse-biased diode has the ________ connected to the positive side of the source, and the ________ connected to the negative side of the source.",
    options: ["Cathode, anode", "Anode, cathode", "Base, emitter", "Emitter, collector"],
    correctAnswer: 0
  },
  {
    id: 51,
    question: "An alternating voltage is represented by v = 80 sin 100 t. Calculate the frequency value.",
    options: ["15.9 Hz", "50 Hz", "100 Hz", "31.8 Hz"],
    correctAnswer: 0
  },
  {
    id: 52,
    question: "An alternating voltage is represented by v = 80 sin 100 t. Calculate the peak to peak voltage.",
    options: ["160 V", "80 V", "40 V", "200 V"],
    correctAnswer: 0
  },
  {
    id: 53,
    question: "Which transistor mode gives the inverted output",
    options: ["Common Emitter", "Common Base", "Common Collector", "Emitter Follower"],
    correctAnswer: 0
  },
  {
    id: 54,
    question: "When a diode is forward biased, the voltage across it",
    options: ["Remains approximately the same", "Increases linearly", "Decreases exponentially", "Becomes zero"],
    correctAnswer: 0
  },
  {
    id: 55,
    question: "The term bias means",
    options: ["A dc voltage is applied to control the operation of a device", "An ac voltage is applied to control the operation of a device", "No voltage is applied", "A variable voltage is applied"],
    correctAnswer: 0
  },
  {
    id: 56,
    question: "The emitter current is always",
    options: ["Greater than the base current and Greater than the collector current", "Less than the base current", "Equal to the collector current", "Equal to the base current"],
    correctAnswer: 0
  },
  {
    id: 57,
    question: "How much time is required for 10 coulombs of charge to flow past a point if the rate of flow of charge is 2 amperes?",
    options: ["5 Sec", "10 Sec", "20 Sec", "2 Sec"],
    correctAnswer: 0
  },
  {
    id: 58,
    question: "How many valence electrons does a Silicon atom have?",
    options: ["4", "2", "6", "8"],
    correctAnswer: 0
  },
  {
    id: 59,
    question: "Find the Vm of an alternating voltage represented by v = 141.4 sin 377 t.",
    options: ["141.4 V", "377 V", "200 V", "100 V"],
    correctAnswer: 0
  },
  {
    id: 60,
    question: "AN ATOM IS MADE UP OF ___________.",
    options: ["PROTONS, NEUTRONS, ELECTRON", "PROTONS AND ELECTRONS ONLY", "NEUTRONS AND ELECTRONS ONLY", "PROTONS AND NEUTRONS ONLY"],
    correctAnswer: 0
  },
  {
    id: 61,
    question: "IN THE COMMON COLLECTOR TRANSISTOR CONNECTION CIRCUIT ___________.",
    options: ["INPUT IS APPLIED BETWEEN THE BASE AND COLLECTOR AND OUTPUT IS TAKEN FROM THE EMITTER AND COLLECTOR", "INPUT IS APPLIED BETWEEN THE BASE AND EMITTER AND OUTPUT IS TAKEN FROM THE COLLECTOR AND EMITTER", "INPUT IS APPLIED BETWEEN THE EMITTER AND COLLECTOR AND OUTPUT IS TAKEN FROM THE BASE AND COLLECTOR", "INPUT IS APPLIED BETWEEN THE BASE AND EMITTER AND OUTPUT IS TAKEN FROM THE BASE AND COLLECTOR"],
    correctAnswer: 0
  },
  {
    id: 62,
    question: "A 500 H COIL AND A 1 H COIL ARE CONNECTED IN SERIES. CALCULATE LT.",
    options: ["501 H", "499 H", "500 H", "1 H"],
    correctAnswer: 0
  },
  {
    id: 63,
    question: "HOLES ARE THE MINORITY CARRIERS IN WHICH TYPE OF SEMICONDUCTOR?",
    options: ["N-TYPE", "P-TYPE", "INTRINSIC", "EXTRINSIC"],
    correctAnswer: 0
  },
  {
    id: 64,
    question: "WHAT IS THE CURRENT FOR 10 V LAMPS HAS A RESISTANCE OF 25Ω",
    options: ["0.4 A", "0.25 A", "2.5 A", "4 A"],
    correctAnswer: 0
  },
  {
    id: 65,
    question: "EQUIVALENT OF JOULE IS:",
    options: ["WATT*SECOND", "WATT/SECOND", "VOLT*AMPERE", "OHM*AMPERE"],
    correctAnswer: 0
  },
  {
    id: 66,
    question: "POTENTIAL DIFFERENCE BETWEEN TWO POINTS IS:",
    options: ["VOLTAGE", "CURRENT", "RESISTANCE", "POWER"],
    correctAnswer: 0
  },
  {
    id: 67,
    question: "SIXTEEN CELLS, EACH HAVING AN INTERNAL RESISTANCE OF 4Ω, WHEN JOINED IN PARALLEL SEND A CURRENT OF 2.72 A THROUGH AN EXTERNAL RESISTANCE OF 0.3Ω. FIND THE EMF OF EACH CELL.",
    options: ["1.496 V", "1.2 V", "1.8 V", "2.0 V"],
    correctAnswer: 0
  },
  {
    id: 68,
    question: "A 0.3A CURRENT IS FLOWING THROUGH A RESISTANCE OF 100 Ω. FIND THE POWER RATING IN WATTS.",
    options: ["9 W", "30 W", "3 W", "90 W"],
    correctAnswer: 0
  },
  {
    id: 69,
    question: "WHAT WOULD BE TYPICAL VALUE FOR THE REVERSE CURRENT IN A SILICON DIODE?",
    options: ["A FEW NANOAMPERES", "A FEW MILLIAMPERES", "A FEW MICROAMPERES", "A FEW AMPERES"],
    correctAnswer: 0
  },
  {
    id: 70,
    question: "DOPING OF A SEMICONDUCTOR MATERIAL MEANS",
    options: ["THAT IMPURITY ARE ADDED TO DECREASE THE RESISTANCE OF THE MATERIAL", "THAT IMPURITY ARE ADDED TO INCREASE THE RESISTANCE OF THE MATERIAL", "THAT IMPURITY ARE REMOVED FROM THE MATERIAL", "THAT THE MATERIAL IS PURIFIED"],
    correctAnswer: 0
  },
  {
    id: 71,
    question: "AN INDUCTANCE OF 60H INDUCES A CURRENT OF 50 A IN 40 SECOND. HOW MUCH IS THE DI/DT RATE OF CURRENT CHANGE IN AMPERES PER SECOND?",
    options: ["1.25 A/S", "0.8 A/S", "2.0 A/S", "1.5 A/S"],
    correctAnswer: 0
  },
  {
    id: 72,
    question: "IT REQUIRES 400 JOULES OF ENERGY TO TRANSFER A QUANTITY OF CHARGE BETWEEN THE POINTS A AND B AT A POTENTIAL DIFFERENCE OF 20 VOLTS. HOW MUCH CHARGE IS TRANSFERRED?",
    options: ["20 C", "400 C", "8000 C", "0.05 C"],
    correctAnswer: 0
  },
  {
    id: 73,
    question: "INTRINSIC SEMICONDUCTORS ARE THOSE WHICH _______________",
    options: ["ARE MADE OF THE SEMICONDUCTOR MATERIAL IN ITS PUREST FROM", "ARE DOPED WITH IMPURITIES", "HAVE HIGH CONDUCTIVITY", "ARE USED IN TRANSISTORS"],
    correctAnswer: 0
  },
  {
    id: 74,
    question: "THE MAJORITY CARRIERS IN THE EMITTER OF A PNP TRANSISTOR ARE",
    options: ["HOLES", "ELECTRONS", "IONS", "PROTONS"],
    correctAnswer: 0
  },
  {
    id: 75,
    question: "BJT IS A _______________",
    options: ["CURRENT CONTROLLED DEVICE", "VOLTAGE CONTROLLED DEVICE", "POWER CONTROLLED DEVICE", "RESISTANCE CONTROLLED DEVICE"],
    correctAnswer: 0
  },
  {
    id: 76,
    question: "HOW MANY DIODES IN THE CENTER-TAP FULL WAVE RECTIFIER.",
    options: ["2", "1", "4", "8"],
    correctAnswer: 0
  },
  {
    id: 77,
    question: "WHAT IS AN ENERGY GAP?",
    options: ["THE SPACE BETWEEN TWO ORBITAL SHELLS", "THE DIFFERENCE BETWEEN VALENCE AND CONDUCTION BANDS", "THE DISTANCE BETWEEN ATOMS", "THE GAP BETWEEN PROTONS AND ELECTRONS"],
    correctAnswer: 0
  }
];

exports.handler = async (event, context) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { answers, studentName } = data;
    let score = 0;
    const results = questions.map((q, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === q.correctAnswer;
      if (isCorrect) score++;
      return {
        questionId: q.id,
        question: q.question,
        userAnswer: userAnswer !== null && userAnswer !== undefined ? q.options[userAnswer] : "Not answered",
        correctAnswer: q.options[q.correctAnswer],
        isCorrect,
        options: q.options
      };
    });
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        score,
        total: questions.length,
        percentage: ((score / questions.length) * 100).toFixed(2),
        studentName,
        results
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

