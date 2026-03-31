    // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Microprocessors",
            question: "What is the primary function of the instruction decoder within the microprocessor's control unit?",
            options: ["It generates master clock signals to synchronize the ALU.", "It stores the next memory address to be fetched by the CPU.", "It handles mathematical calculations like addition and subtraction."],
            correct: "It examines the binary code to determine the operation to be performed."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What differentiates a microprocessor (MPU) from a standard Central Processing Unit (CPU) based on the material?",
            options: ["A microprocessor cannot perform logic operations like AND or OR.", "A microprocessor uses a separate chip for its internal registers.", "A microprocessor does not require an internal clock for timing."],
            correct: "A microprocessor is a single-chip implementation of a CPU."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "Why is the microprocessor address bus described as being unidirectional rather than bidirectional?",
            options: ["Because it handles both read and write data transfers simultaneously.", "Because it only allows data to flow from memory elements to the CPU.", "Because it provides timing pulses to synchronize the internal ALU logic."],
            correct: "Because information flows only from the CPU to the memory or I/O elements."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "On the Intel 8051 microprocessor, how many clock cycles typically make up a single machine cycle at a frequency of 12 MHz?",
            options: ["1 clock cycle", "4 clock cycles", "8 clock cycles"],
            correct: "12 clock cycles"
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "In 8051 microprocessor applications, what is the role of the ALE (Address Latch Enable) signal?",
            options: ["It triggers the CPU to stop execution and save all registers to the stack.", "It signals the program memory to put an instruction on the data bus.", "It notifies the CPU that an external device is requesting an interrupt."],
            correct: "It enables the address latch to grab the low address byte from the bus."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "In a typical microprocessor, what is the effect of applying a low-level signal to the Halt input?",
            options: ["The CPU resets and clears all data stored in the user-accessible registers.", "The CPU ignores the current instruction and jumps to a new memory address.", "The CPU increases the clock frequency to finish the program faster."],
            correct: "The machine stops activity at the end of the current instruction being executed."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "Which external output control line indicates to peripheral devices whether the CPU is in a read or write state?",
            options: ["VMA (Valid Memory Address)", "BA (Bus Available)", "ALE (Address Latch Enable)"],
            correct: "R/W (Read/Write)"
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What is the difference between an IRQ (Interrupt Request) and an NMI (Non-maskable Interrupt)?",
            options: ["IRQ is higher priority and cannot be ignored by the condition code register.", "NMI only occurs when the CPU is in a power-down or reset condition.", "IRQ resets the entire program counter, while NMI only pauses the ALU."],
            correct: "NMI is a high priority interrupt serviced regardless of the interrupt mask."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "During the Fetch Phase of a microprocessor program, which action occurs immediately after the Program Counter contents are transferred to the Address Register?",
            options: ["The ALU performs an addition operation.", "The instruction is decoded by the decoder.", "Data is moved from the data register to the accumulator."],
            correct: "The Program Counter is incremented by one."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "When executing the WAI (Wait for Interrupt) instruction in a Motorola 6808, what is the final step before the CPU suspends program execution?",
            options: ["The accumulator is cleared to zero.", "The program counter is reset to the starting address.", "The ALU performs a comparison on the condition code register."],
            correct: "Relevant registers are pushed into the memory stack."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "Which phase of microprocessor operation involves interpreting the op-code and remains consistent in duration across different instructions?",
            options: ["Execute Phase", "Arithmetic Phase", "Store Phase"],
            correct: "Fetch Phase"
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "Which user-accessible register is used to store the results of ALU operations and typically serves as one operand for math instructions?",
            options: ["Index Register", "Program Counter", "Stack Pointer"],
            correct: "Accumulator"
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What is the specific purpose of the Condition Code Register in a microprocessor architecture?",
            options: ["To point to the address of the next instruction code in memory.", "To interface the CPU to the bidirectional data bus lines.", "To store the 8-bit opcode while the control unit is decoding it."],
            correct: "To hold bits representing operation results like Negative, Zero, and Carry."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What is the function of the Address Buffer in a non-user-accessible register section?",
            options: ["It holds the binary data currently being operated on by the ALU.", "It temporarily stores the result of an addition or logic shift.", "It converts parallel data from the internal bus to serial for external ports."],
            correct: "It interfaces the CPU to the address bus for accessing memory locations."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "In the context of microprocessor registers, what does a Stack Pointer (SP) specifically manage?",
            options: ["It stores bits indicating if a mathematical overflow occurred.", "It holds a 16-bit address for the indexed mode of addressing data.", "It sequences the control pulses for the internal instruction decoder."],
            correct: "It stores the next available location in an external LIFO memory area."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "How many comparators are typically required for an 8-bit Flash ADC circuit?",
            options: ["8", "64", "128"],
            correct: "255"
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "In a digital-ramp ADC, what signal is used to indicate that the conversion process is complete?",
            options: ["START pulse.", "CLOCK transition.", "MSB pulse."],
            correct: "Active-LO End of Conversion (EOC) signal."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "What component in a Flash ADC allows it to produce a custom, nonlinear response to an analogue input signal?",
            options: ["Priority Encoder.", "Exclusive-OR gates.", "Zener diode output."],
            correct: "Unequal-value resistors in the reference voltage divider network."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "Which type of ADC is considered the most efficient in terms of speed but is the most component-intensive?",
            options: ["Digital-ramp ADC.", "Counter-type ADC.", "Successive-approximation ADC."],
            correct: "Flash ADC."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "Which statement accurately describes the difference between analogue and digital data in terms of measurement?",
            options: ["Analogue data uses sampling to identify every nuance while digital data is continuous.", "Digital data aims to identify every nuance while analogue data is filtered.", "Analogue data is discrete numerical values while digital is continuously changing."],
            correct: "Analogue data is continuous and nuance-focused, whereas digital data uses sampling."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "Why is the design of accurate analogue circuitry generally more difficult than digital circuitry?",
            options: ["Analogue signals travel slower than the speed of light.", "Analogue circuits require more binary registers.", "Digital systems require exact voltage values to be maintained."],
            correct: "Analogue voltage values carry significant information and are affected by noise and temperature."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "How does an R/2R ladder DAC overcome the accuracy issues associated with temperature variations?",
            options: ["By using higher precision capacitors.", "By incorporating a cooling fan on the PCB.", "By using only high-wattage power resistors."],
            correct: "By using only two resistance values that maintain consistent ratios."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "In a 4-bit R/2R Ladder DAC with a 5V input, what is the output voltage for a binary input of 1000?",
            options: ["1.25 V", "2.5 V", "3.75 V"],
            correct: "5 V"
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "In a binary weighted resistor DAC, what is the relative weight assigned to the Most Significant Bit (MSB) in a 4-bit BCD format?",
            options: ["1", "2", "4"],
            correct: "8"
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "What is the primary practical limitation of a 12-bit binary weighted resistor DAC?",
            options: ["It requires dual polarity power supplies.", "The output signal is naturally non-inverted.", "The sampling rate is limited by the Op-Amp slew rate."],
            correct: "Large differences in resistor values cannot maintain correct ratios with temperature variations."
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "How is the closed-loop gain determined in a non-inverting amplifier configuration?",
            options: ["By the rail voltage levels.", "By the internal slew rate of the chip.", "By the input bias current."],
            correct: "By the ratio of the feedback resistors Rf and Ri."
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "In an open-loop configuration, what is the primary function of an operational amplifier (Op-Amp)?",
            options: ["To provide constant voltage regulation.", "To act as a digital-to-analogue converter.", "To filter high-frequency noise signals."],
            correct: "To compare the amplitude of one voltage with another."
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "What characteristic of an Op-Amp causes it to reach saturation with only a very small difference between its two inputs?",
            options: ["Low input impedance.", "High output impedance.", "The use of a split supply voltage."],
            correct: "High open-loop voltage gain."
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "What is the specific application of a zero-level detector circuit?",
            options: ["To generate an analogue sine wave.", "To act as a high-gain buffer for data buses.", "To measure the input impedance of a transducer."],
            correct: "To produce a square wave from a sine wave by detecting the zero crossing."
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "What is the typical voltage gain of a modern Integrated Circuit version of an Op-Amp like the 741?",
            options: ["Exactly 10,000.", "Approximately 500.", "Between 10 and 100."],
            correct: "On the order of a million."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Under which condition will the 747 Scavenge Pump run for 2 hours or until low pressure is sensed for 5 minutes?",
            options: ["During all takeoff phases", "Only during ground testing", "When the landing gear is retracted"],
            correct: "Respective O/J pump not developing pressure in air"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What unique operation occurs in a J-K Flip-Flop when both J and K inputs are held high (1,1) during a clock pulse?",
            options: ["Invalid state", "No change", "The output resets to 0"],
            correct: "The output toggles to its opposite state"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In a NAND gate S-R Flip-Flop, what is the 'No change' state for the S and R inputs?",
            options: ["S=0, R=0", "S=0, R=1", "S=1, R=0"],
            correct: "S=1, R=1"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is defined as the time interval immediately preceding the active clock transition during which the control input must be stable?",
            options: ["Hold time", "Propagation delay", "Fall time"],
            correct: "Setup time"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What occurs if the clock signal transition times (rise and fall) are too long for a flip-flop?",
            options: ["Propagation delay decreases", "The voltage level drops", "Current consumption increases"],
            correct: "Erratic triggering or failure to trigger"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the primary characteristic of a master/slave flip-flop during a clock cycle?",
            options: ["Master and slave trigger together", "Master clears the slave", "Slave controls the master"],
            correct: "Slave stores the bit while master accepts a new one"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which flip-flop inputs are considered 'override' inputs that act independently of the clock signal?",
            options: ["J and K", "S and R", "Data (D)"],
            correct: "Preset and Clear"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "How is a negative-edge-triggered (NGT) clock input identified on a logic symbol?",
            options: ["A plain triangle", "A small square", "A horizontal bar"],
            correct: "A bubble and a triangle"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which two gates are considered universal gates because they can be used to construct any other logic function?",
            options: ["AND and OR", "XOR and XNOR", "OR and NOT"],
            correct: "NAND and NOR"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In an Exclusive-OR (XOR) gate, what is the output if both inputs are logic 1?",
            options: ["Logic 1", "High impedance", "Undefined"],
            correct: "Logic 0"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the Boolean expression for an OR gate followed by an Inverter (NOR operation)?",
            options: ["X = A + B", "X = A * B", "X = NOT A + B"],
            correct: "X = NOT (A + B)"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the relationship between the number of input combinations and the total entries in a truth table for N inputs?",
            options: ["N + 2", "N^2", "2 * N"],
            correct: "2^N"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which logic gate's output is logic 1 only when all inputs are at the logic 1 level?",
            options: ["OR gate", "NOR gate", "NAND gate"],
            correct: "AND gate"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the primary function of a basic flip-flop or latch circuit in digital electronics?",
            options: ["To perform addition", "To invert a signal", "To count pulses"],
            correct: "To store a single bit of binary data"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "What is the standard bit rate for a high-speed ARINC 429 data bus?",
            options: ["1 Mbps", "2 Mbps", "12.5 kbps"],
            correct: "100 kbps"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "In an ARINC 429 32-bit word, which bit range is typically reserved for the 'Label' field?",
            options: ["Bits 29 through 11", "Bits 32 through 31", "Bits 10 through 9"],
            correct: "Bits 1 through 8"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "What does the 'SDI' field (bits 10 and 9) represent in an ARINC 429 data word?",
            options: ["Sign/Status Matrix", "Sequence Data Information", "Standard Digital Identifier"],
            correct: "Source/Destination Identifier"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "Which field in an ARINC 429 word provides information on hardware condition or data validity?",
            options: ["Label", "SDI", "Parity"],
            correct: "SSM (Sign/Status Matrix)"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "Which ARINC 629 timer begins immediately when an individual terminal starts its transmission?",
            options: ["Synchronization Gap (SG) timer", "Terminal Gap (TG) timer", "Post-Sync Timer (PST)"],
            correct: "Transmit Interval (TI) timer"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "What is the maximum number of data words that can follow a single label word in an ARINC 629 word string?",
            options: ["20 data words", "32 data words", "128 data words"],
            correct: "256 data words"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "In ARINC 629 timing, which gap must occur immediately after the SG is complete and the bus is quiet?",
            options: ["Synchronization Gap (SG)", "Transmit Interval (TI)", "Inter-word Gap"],
            correct: "Terminal Gap (TG)"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "How are Line Replaceable Units (LRUs) connected to the main ARINC 629 data bus cable?",
            options: ["Via direct voltage connection", "Via transformer coupling only", "Via optical fiber splices"],
            correct: "Via current-mode couplers"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "What is the maximum number of users supported on a single ARINC 629 data bus?",
            options: ["20 users", "31 users", "64 users"],
            correct: "120 users"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "In a MIL-STD-1553 data word structure, how many bits are allocated to the sync field and where are they located?",
            options: ["The last 3 bits of the word.", "The first 5 bits of the word.", "The center 3 bits of the word."],
            correct: "The first 3 bits of the word."
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "What type of parity is utilized for all word types in the MIL-STD-1553 protocol?",
            options: ["Even parity", "Check-sum parity", "No parity is used"],
            correct: "Odd parity"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "How many distinct word types are defined under the MIL-STD-1553 standard?",
            options: ["Two: Command and Data", "Four: Sync, Command, Data, and Parity", "Five: Mode, Address, Word, Data, and Check"],
            correct: "Three: Command, Data, and Status"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "What is the total length of a MIL-STD-1553 word including the sync and parity bits?",
            options: ["32 bits", "16 bits", "24 bits"],
            correct: "20 bits"
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "In a Remote Terminal to Remote Terminal (RT-RT) transfer, what happens after the Bus Controller issues the two command words?",
            options: ["The BC transmits the data words.", "The receiving RT issues a status word.", "The transmitting RT waits for a sync pulse."],
            correct: "The transmitting RT issues its status word."
            };
        },
            () => {
        return {
            topic: "Data Buses",
            question: "Which of the following data bus systems is defined as a unidirectional (simplex) protocol?",
            options: ["MIL-STD-1553", "ARINC 629", "AFDX Ethernet"],
            correct: "ARINC 429"
            };
        },
        