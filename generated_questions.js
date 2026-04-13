    // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Multiplexing",
            question: "What is the primary operational advantage of implementing time division multiplexing (TDM) within an aircraft's digital data transfer network?",
            options: ["It eliminates the requirement for analog-to-digital converters in the system architecture.", "It increases the physical gauge of the wiring to handle higher signal current levels.", "It allows multiple signals to be transmitted simultaneously over different carrier frequencies."],
            correct: "It significantly reduces the total weight of wire bundles and improves overall circuit reliability."
            };
        },
            () => {
        return {
            topic: "Multiplexing",
            question: "In a basic logic gate multiplexer circuit, what is the specific role of the clock pulse signals relative to the sequencing control?",
            options: ["They provide the power source necessary to drive the output signal through the highway.", "They determine the voltage amplitude representing binary 1 and 0 on the transmission line.", "They act as a filter to remove distorted AC sine wave characteristics from the data bus."],
            correct: "They trigger the logic gates in a precise sequence to sample and pass input signals to the line."
            };
        },
            () => {
        return {
            topic: "Multiplexing",
            question: "What characterizes the 'transparent' state of a D latch within a digital data distribution system?",
            options: ["The output is held at its current level regardless of any changes occurring at the D input.", "The enable input is held LOW, preventing any data from reaching the internal NAND latch.", "The output is switched to a high-impedance (Hi-Z) state to isolate it from the data bus."],
            correct: "The enable input is HIGH, causing the Q output to follow the changes of the D input exactly."
            };
        },
            () => {
        return {
            topic: "Multiplexing",
            question: "In Time Division Multiplexing, if four channels operate at 300 bits/s each, what is the resulting bit rate on the common data highway?",
            options: ["300 bits/s", "600 bits/s", "900 bits/s"],
            correct: "1200 bits/s"
            };
        },
            () => {
        return {
            topic: "Multiplexing",
            question: "What is the primary difference between a passive and an active fibre optic coupler in an aircraft network?",
            options: ["Active couplers use mechanical splices while passive couplers use fusion splicing techniques.", "Passive couplers increase signal strength while active couplers introduce higher attenuation.", "Active couplers only use Y-type splitters whereas passive couplers use star and tree layouts."],
            correct: "Active couplers convert signals to electrical form while passive couplers redistribute light."
            };
        },
            () => {
        return {
            topic: "Multiplexing",
            question: "Which type of multiplexing uses several carrier waves of different frequencies, each separately modulated with an input signal?",
            options: ["Time Division Multiplexing (TDM)", "Gray Encoding Multiplexing", "Binary Coded Decimal Multiplexing"],
            correct: "Frequency Division Multiplexing (FDM)"
            };
        },
            () => {
        return {
            topic: "Multiplexing",
            question: "Why are address inputs in a multiplexer often referred to as SELECT inputs?",
            options: ["Because they determine the specific memory address where the output data is stored.", "Because they provide the timing pulse needed to synchronize the transmitter and receiver.", "Because they set the priority for the encoder when multiple inputs are activated."],
            correct: "Because they control the digital code that switches a specific data input to the output."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which statement best describes the electrical characteristics of a typical digital data bus line in a practical aircraft installation?",
            options: ["It carries high-current signals to drive servo motors regulating fuel flow to the engine.", "It requires exact voltage levels as any minor deviation will cause significant data errors.", "It utilizes thick, heavily constructed power lines to conduct pulses over long distances."],
            correct: "It uses small gauge wiring with voltages between 2 and 5 V representing a binary 1 logic level."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "When using a 1-line to 8-line demultiplexer, what determines which output channel will carry the data present at the single input line?",
            options: ["The frequency of the carrier wave modulated by the input signal.", "The voltage amplitude of the clock pulse arriving at the data buffer.", "The number of bits stored in the parallel shift register at that moment."],
            correct: "The digital code applied to the SELECT inputs of the internal AND gate array."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Why is tri-state logic utilized when multiple devices are connected to a single microcomputer data bus?",
            options: ["To increase the bit rate of the serial transmission from 12.5 kb/s to 100 kb/s.", "To convert the 8-bit parallel bus signals into a 20-bit serial data word format.", "To ensure that all connected devices can transmit data simultaneously without delay."],
            correct: "To prevent short circuits by allowing only one device to be active while others are in Hi-Z."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the result when the enable (E) input of a 74LS125 tri-state buffer is set to logic level 1?",
            options: ["The digital value on the input is passed directly to the output channel.", "The device enters a low-impedance state and functions as a standard inverter.", "The output is forced to logic 0 regardless of the signal present at the input."],
            correct: "The device enters a high-impedance (Hi-Z) state, effectively isolating the output."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "How does a two-input multiplexer behave when the SELECT (S) input is at logic level 0?",
            options: ["The output Z is identical to data input I1 because the top AND gate is enabled.", "The output Z is forced to a high-impedance state to prevent data bus collisions.", "The output Z becomes the sum of both I0 and I1 through the internal OR gate."],
            correct: "The output Z is identical to data input I0 because the bottom AND gate is enabled."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "When multiplexing analog signals in a modern aircraft system, which sequence of operations is mandatory for successful data distribution?",
            options: ["Signals are modulated onto separate carrier waves and then passed through an X-coupler.", "Signals are amplified by a summing op-amp before being passed directly to the demultiplexer.", "Signals are fed through a tri-state buffer to convert them into a 32-bit parallel data word."],
            correct: "Signals are converted to digital, transmitted via the multiplexer, and then converted back to analog."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "In an aircraft multiplex system, which component is responsible for receiving multiple inputs and distributing processed data to specific indicators?",
            options: ["The Remote Terminal (RT)", "The Tri-State Buffer", "The Logic AND Gate"],
            correct: "The Bus Controller (BC)"
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "Which method is used in a demultiplexer to return the high-speed 'highway' data rate back to the individual channel operating speeds?",
            options: ["Applying a master clock multiplier to the CPU internal data bus.", "Using a voltage divider to reduce the amplitude of the incoming square waves.", "Utilizing an X-coupler to split the signal into redundant single-mode fibres."],
            correct: "Using synchronized gates at the receiving end to sample the sequential time intervals."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which type of digital integrated circuit is characterized by containing between 12 and 99 equivalent logic gates on a single substrate?",
            options: ["Small-scale integration (SSI)", "Large-scale integration (LSI)", "Very large-scale integration (VLSI)"],
            correct: "Medium-scale integration (MSI)"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the primary operational characteristic of a standard digital decoder circuit?",
            options: ["It converts a single active input into a specific multi-bit binary code.", "It combines multiple data streams into a single common transmission medium.", "It translates alphanumeric keyboard inputs into representing binary numbers."],
            correct: "It activates only the specific output that corresponds to a set of binary inputs."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In a BCD to seven-segment decoder/driver circuit, which segments must be activated to display the decimal digit 5?",
            options: ["Segments a, b, c, d, and g", "Segments a, c, d, e, and f", "Segments b, c, f, g, and d"],
            correct: "Segments a, f, g, c, and d"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What specific logic function does an encoder perform in a digital system?",
            options: ["It accepts a binary number and activates a single corresponding output line.", "It distributes a single input source selectively to one of several output channels.", "It uses a set of select inputs to route a specific data input to a single output."],
            correct: "It produces an N-bit output code based on which of its multiple input lines is active."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "How does a priority encoder resolve a situation where multiple input lines are activated simultaneously?",
            options: ["It produces an invalid state output until only one input remains active.", "It alternates the output code between all active inputs based on the clock frequency.", "It generates an output code that represents the sum of all currently active inputs."],
            correct: "It ensures the output code corresponds only to the highest-numbered active input."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In the logic circuit of an 8-to-3 line encoder, why is the  $A\_0$  input often not connected to any internal logic gates?",
            options: ["The  $A\_0$  input is reserved for parity bit generation in serial transfers.", "The  $A\_0$  input is an asynchronous override that ignores the select inputs.", "The  $A\_0$  input acts as an enable signal for the entire encoder integrated circuit."],
            correct: "The outputs normally default to 000 when no other input lines ( $A\_1$  to  $A\_7$ ) are low."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the result of applying a BCD input of 1111 (decimal 15) to a standard 7446/47 decoder/driver?",
            options: ["The display shows a hexadecimal 'F'.", "The display shows a lower-case 't'.", "The display shows an 'E' to indicate an error."],
            correct: "The display blanks out all segments."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "When using a 74147 Decimal-to-BCD priority encoder, what are the output states when all nine active-LOW inputs are in their inactive HIGH state?",
            options: ["0000", "1001", "0110"],
            correct: "1111"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In a digital calculator application, what happens if an operator depresses multiple keys simultaneously on a 74LS147 switch encoder?",
            options: ["The calculator enters a 'Wait' state until only one key is depressed.", "The calculator produces the BCD code for the lower-numbered key.", "The calculator produces an error code (1111) to the storage registers."],
            correct: "The calculator produces the BCD code for the higher-numbered key."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which encoding scheme represents a decimal digit by adding 0011 to its standard Binary Coded Decimal value?",
            options: ["Gray encoding", "ASCII encoding", "Two's complement"],
            correct: "Excess-3 encoding"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the defining characteristic of the Gray encoding system used in components like non-servo altimeters?",
            options: ["Each successive value adds a constant bias of three to the binary count.", "It uses 8 bits to represent alphanumeric characters for computer keyboards.", "It doubles the number of bits for every increase in decimal magnitude."],
            correct: "Two successive numerical values differ by only a single binary digit."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Why was Gray encoding historically utilized for the glass disc pick-offs in non-servo aircraft altimeters?",
            options: ["It allowed the bellows to generate higher torque for electromechanical displays.", "It simplified the conversion of light signals into 32-bit ARINC 429 data words.", "It provided a self-complementary system that prevented thermal expansion errors."],
            correct: "It prevented spurious or incorrect outputs from electromechanical switches."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In the context of integrated circuit scaling, which category represents a chip containing one million or more equivalent logic gates?",
            options: ["Very large-scale integration (VLSI)", "Ultra large-scale integration (ULSI)", "Large-scale integration (LSI)"],
            correct: "Giga-scale integration (GSI)"
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "How are the inverted BCD outputs of a 74147 priority encoder typically converted back to normal BCD for storage in a register?",
            options: ["By routing the signals through a 3-line to 8-line decoder.", "By adding a bias value of 0011 to the inverted output.", "By passing the signals through a set of AND-OR gate combinations."],
            correct: "By passing each output through an individual inverter."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which scale of integration was typically used for computer CPU and RAM chips during the 1980s?",
            options: ["Medium-scale integration (MSI)", "Ultra large-scale integration (ULSI)", "Small-scale integration (SSI)"],
            correct: "Very large-scale integration (VLSI)"
            };
        },
            () => {
        return {
            topic: "Fiber Optic Principles",
            question: "How does the structure of a graded-index multimode fiber reduce the effects of modal dispersion?",
            options: ["By using a small core diameter to allow only one mode of light propagation.", "By increasing the core density to slow down high-order modes at the edges.", "By using high-purity glass to eliminate scattering losses in the core center."],
            correct: "By increasing the propagation velocity of light waves away from the center axis."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Principles",
            question: "What defines the light-gathering ability of an optical fiber?",
            options: ["The thickness of the protective buffer coating.", "The length of the fiber pigtail attached to the LED.", "The attenuation coefficient measured in  $dB/km$ ."],
            correct: "The numerical aperture (NA) of the fiber."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Principles",
            question: "What is the primary operational consequence of a high Numerical Aperture (NA) in an optical fiber core?",
            options: ["It increases the bandwidth by limiting the number of propagation modes.", "It reduces the attenuation of the light signal over long distances.", "It prevents the refraction of light waves entering at shallow angles."],
            correct: "It gathers more light into the fiber but increases modal dispersion."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Principles",
            question: "Why is it necessary to convert a signal from analogue to digital before transmission via an aircraft's fiber optic multiplexer?",
            options: ["Because light waves cannot be modulated using analogue current variations.", "Because analogue signals are immune to the effects of modal dispersion.", "Because digital signals prevent any light from leaking into the cladding."],
            correct: "Because the system requires binary pulses to switch lasers at high speeds."
            };
        },
            () => {
        return {
            topic: "Signal Losses and Attenuation",
            question: "What is 'absorption' in the context of fiber optic signal loss?",
            options: ["Light rays reflecting off density fluctuations within the fiber core.", "High-order modes radiating out of the fiber during a sharp turn.", "The reduction of numerical aperture due to core diameter mismatch."],
            correct: "The conversion of optical power into another form, such as heat."
            };
        },
            () => {
        return {
            topic: "Signal Losses and Attenuation",
            question: "What is the primary cause of 'upset' failures in fiber optic data links?",
            options: ["Total internal reflection causing light to bounce at too steep an angle.", "A complete break in the glass fiber substrate due to excessive vibration.", "The conversion of optical power into heat through the aquadag coating."],
            correct: "The inability of the receiver to distinguish pulses due to dispersion spreading."
            };
        },
            () => {
        return {
            topic: "Signal Losses and Attenuation",
            question: "What specific phenomenon occurs when an optical fiber is routed with a bend radius smaller than several centimeters?",
            options: ["Microbend loss occurs due to microscopic dents in the cladding layer.", "Absorption loss increases as light energy converts into ultraviolet radiation.", "Frequency dispersion occurs as the light wavelength shifts toward the blue spectrum."],
            correct: "Macrobend loss occurs as high-order modes are converted and radiated out."
            };
        },
            () => {
        return {
            topic: "Signal Losses and Attenuation",
            question: "Why is 'scattering' considered a source of attenuation in optical fibers?",
            options: ["It causes the light beam to expand beyond the lens of the receiver.", "It results from the core and cladding diameters being misaligned.", "It occurs when a fiber is subjected to microscopic axis bends."],
            correct: "Light interacts with density fluctuations and is directed in all directions."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Components",
            question: "In an expanded-beam connector, which alignment factor is more critical compared to a standard butt-jointed connector?",
            options: ["Lateral misalignment of the fiber core.", "Longitudinal separation between the fiber ends.", "Mismatch in the core and cladding diameters."],
            correct: "Angular misalignment of the optical fiber axes."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Components",
            question: "What happens in a fusion splice during the fiber termination process?",
            options: ["Epoxy resin is used to bond the fiber inside a metal ferrule.", "A V-groove substrate holds two fibers in temporary alignment.", "Lenses are positioned to refocus the light from the core."],
            correct: "Localised heat melts the ends of two fibers together."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Components",
            question: "What is a 'fiber pigtail' as supplied by component manufacturers?",
            options: ["A precision hole drilled into a ceramic ferrule for fiber alignment.", "A protective metal cap used to shield unplugged connectors from dirt.", "A spring-loaded mechanism used to ensure physical contact in connectors."],
            correct: "A short length of fiber permanently fixed to a source or detector."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Components",
            question: "What is the functional difference between an active fiber optic coupler and a passive Y-coupler?",
            options: ["Passive couplers increase signal bandwidth while active ones reduce it.", "Passive couplers use lasers while active couplers rely solely on LEDs.", "Active couplers are unidirectional while passive Y-couplers are bidirectional."],
            correct: "Active couplers perform optical-to-electrical conversion during redistribution."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Components",
            question: "What is the purpose of the 'cladding' in the basic structure of an optical fiber?",
            options: ["To provide mechanical strength and prevent surface contaminants.", "To act as the primary medium through which the light signal travels.", "To increase the numerical aperture by having a higher refractive index."],
            correct: "To reduce scattering loss and provide total internal reflection."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Components",
            question: "Which active component in a fiber optic receiver generates an electrical current proportional to incident optical radiation?",
            options: ["A LED transmitter pigtail.", "A high-impedance preamplifier.", "A vertical-cavity surface-emitting laser."],
            correct: "A semiconductor photodiode."
            };
        },
            () => {
        return {
            topic: "Fiber Optic Components",
            question: "Which component is specifically used to split optical power from one input fiber to more than two output fibers uniformly?",
            options: ["A bidirectional T-coupler.", "An optical tap.", "A fusion-spliced pigtail."],
            correct: "A tree coupler."
            };
        },
            () => {
        return {
            topic: "Aircraft Applications",
            question: "How does a Fiber Optic Gyroscope (FOG) detect aircraft rotation or motion?",
            options: ["By using a glass disc etched with transparent sectors to count light pulses.", "By measuring the current generated when a bellows drives an optical sensor.", "By calculating the radiance change in a single-mode fiber pigtail."],
            correct: "By monitoring the phase difference between two beams in opposite directions."
            };
        },
            () => {
        return {
            topic: "Aircraft Applications",
            question: "In the 'Fly by Light' demonstration on an F/A-18, what was the role of the passive optical sensors?",
            options: ["To generate binary codes for the landing gear steering computer.", "To provide high-voltage power to the Ram Air Turbine controls.", "To directly drive the servo motors that regulate fuel flow."],
            correct: "To provide feedback signals for closing flight control loops."
            };
        },
            () => {
        return {
            topic: "Aircraft Applications",
            question: "What is a major advantage of the Boeing 787's fiber optic backbone compared to traditional coaxial cable installations?",
            options: ["It uses ARINC 429 protocol to increase the number of bus controllers.", "It eliminates the need for data concentrators and common computing resources.", "It reduces the power required for the primary flight control servo actuators."],
            correct: "It provides immunity to electromagnetic interference and reduces cable weight."
            };
        },
            () => {
        return {
            topic: "Aircraft Applications",
            question: "What is the primary function of an 'AIMS' on the Boeing 777 in relation to fiber optics?",
            options: ["It acts as the primary power source for the RAM air turbine.", "It converts all digital signals back into analogue for HUD processing.", "It manages the manual extension of the emergency generator."],
            correct: "It routes data from aircraft systems through an optical fiber data bus."
            };
        },
            () => {
        return {
            topic: "Aircraft Applications",
            question: "Why was fiber optics incorporated into newer fuel measuring systems on modern aircraft?",
            options: ["To reduce the bandwidth requirement for the cockpit display unit.", "To increase the accuracy of the AC generator essential bus supply.", "To allow for manual defueling operations during ground tests."],
            correct: "To eliminate the risk of sparks within the fuel tanks."
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "A technician walking across a carpet can generate a triboelectric charge of up to:",
            options: ["3,000 V", "16,000 V", "50,000 V"],
            correct: "35,000 V"
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "A technician is about to replace a circuit card on an aircraft. Which action should be performed first after removing aircraft power and grounding the airframe?",
            options: ["Immediately place the removed card into a pink poly anti-static bag.", "Apply a shorting strap across the edge connector of the new circuit card.", "Clean the connector pins with an approved solvent to ensure a low resistance path."],
            correct: "Touch the metal case of the equipment to equalise any electrostatic potentials."
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "What is the primary pedagogical reason for maintaining a 1 Mohm resistance in an ESD grounding wrist strap?",
            options: ["To increase the rate of static decay from the technician's body.", "To prevent the generation of electromagnetic interference (EMI).", "To ensure the strap remains compliant with Class 3 device standards."],
            correct: "To prevent the worker from conducting a dangerous electric shock."
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "At an ESD-safe workstation, what role do air ionisers play in protecting sensitive electronic components?",
            options: ["They remove dust particles that carry triboelectric charges.", "They increase the humidity of the air to improve surface moisture.", "They create a magnetic shield around the work surface."],
            correct: "They add charge carriers to the air to increase its electrical conductivity."
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "When installing a line-replaceable unit (LRU) on an aircraft, how should a technician ensure potential equalization before mating the connectors?",
            options: ["By wearing two heel straps and an ESD smock during the mating process.", "By verifying the aircraft's static wicks are intact.", "By cleaning the pins with an anti-static solution."],
            correct: "By touching the outer shell of the plug to the outer shell of the mating connector."
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "What is the recommended range for relative humidity in an ESD-safe workstation to help dissipate electrostatic charges?",
            options: ["20% to 40%", "60% to 80%", "90% to 100%"],
            correct: "40% to 60%"
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "Why should a technician avoid wearing synthetic clothing under an ESD-safe smock?",
            options: ["Synthetic materials increase the weight of the smock.", "Synthetic fibers interfere with the 1 Mohm resistor in the wrist strap.", "Synthetics prevent the smock from absorbing conductive sweat."],
            correct: "Synthetics are notorious static generators that the smock may not fully shield."
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "Which material is identified as a notorious static generator that must be purged from ESD-protected work areas?",
            options: ["Cotton lab coats", "Ferrite rings", "Conductive foam"],
            correct: "Styrofoam cups"
            };
        },
            () => {
        return {
            topic: "ESD Handling",
            question: "What is the maximum voltage at which a component is considered \"extremely sensitive\" under Class 1 classification?",
            options: ["500 V", "1000 V", "4000 V"],
            correct: "2000 V"
            };
        },
            () => {
        return {
            topic: "Device Classification",
            question: "During a routine inspection, a component with a Human Body Model (HBM) withstand voltage of 1500 V is identified. How is this device classified in terms of ESD sensitivity?",
            options: ["Class 1: Extremely sensitive", "Class 3: Less sensitive", "Unclassified: Robust"],
            correct: "Class 2: Sensitive"
            };
        },
            () => {
        return {
            topic: "Device Classification",
            question: "Which specific device architecture is noted as being highly susceptible to ESD due to a thin film of silicon dioxide insulating the gate from the channel?",
            options: ["Bipolar Junction Transistors (BJT)", "Schottky TTL components", "Piezoelectric crystals"],
            correct: "Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs)"
            };
        },
            () => {
        return {
            topic: "Device Classification",
            question: "A device is damaged by a static discharge of 3000 V. According to the Human Body Model standard, this device belongs to which sensitivity class?",
            options: ["Class 1", "Class 2", "Class 4"],
            correct: "Class 3"
            };
        },
            () => {
        return {
            topic: "ESD Damage Mechanisms",
            question: "An avionics component passes all functional bench tests but fails shortly after being reinstalled in the aircraft. What type of ESD failure does this scenario most likely describe?",
            options: ["Direct catastrophic failure", "Upset failure resulting in gate leakage", "Triboelectric discharge interference"],
            correct: "Latent failure"
            };
        },
            () => {
        return {
            topic: "ESD Damage Mechanisms",
            question: "Which type of failure is characterized by gate leakage that causes intermittent software glitches and repetitive snags difficult to replicate?",
            options: ["Latent catastrophic failure", "Direct catastrophic failure", "Dielectric breakdown failure"],
            correct: "Upset failure"
            };
        },
            () => {
        return {
            topic: "Packaging Materials",
            question: "Why are metallic anti-static bags preferred over \"pink poly\" bags for Class 1 extremely sensitive devices?",
            options: ["Pink poly bags have a shorter shelf life of only one year.", "Metallic bags provide higher moisture resistance for sensitive oxides.", "Pink poly bags generate triboelectric charges when moved."],
            correct: "Metallic bags provide an electrostatic shield or Faraday cage effect."
            };
        },
            () => {
        return {
            topic: "Packaging Materials",
            question: "When dust caps are unavailable for a multi-pin connector on an ESD-sensitive \"black box\", which material is an approved substitute?",
            options: ["Standard acetate-based cello tape", "Polyethylene pink poly wrap", "Non-conductive plastic plugs"],
            correct: "Conductive grid tape"
            };
        },
            () => {
        return {
            topic: "Packaging Materials",
            question: "What is the primary function of the \"shunts\" used during the transportation of printed circuit boards (PCBs)?",
            options: ["To provide mechanical strength to the edge connectors.", "To act as a moisture barrier for the copper traces.", "To filter electromagnetic interference during flight."],
            correct: "To keep all pins at the same potential across edge connectors."
            };
        },
            () => {
        return {
            topic: "Packaging Materials",
            question: "How does an AC-type corona ioniser minimize the recombination of ions to ensure effective neutralization?",
            options: ["By using ultra-high humidity levels.", "By increasing the voltage to 50 kV.", "By grounding the emitter point every half cycle."],
            correct: "By utilizing fast airflow velocity."
            };
        },
            () => {
        return {
            topic: "Induced Static Charges",
            question: "A circuit card is placed on a Styrofoam cushion, inducing a charge. If a technician touches the board, a failure occurs even if the technician is grounded. This is an example of:",
            options: ["Triboelectric generation", "Simple induction", "Direct catastrophic discharge"],
            correct: "Compound induction"
            };
        },
            () => {
        return {
            topic: "Induced Static Charges",
            question: "What occurs when a conductor is introduced to an electrostatic field, causing free electrons to move toward a positively charged source without direct contact?",
            options: ["Compound induction", "Triboelectric charging", "Capacitive coupling"],
            correct: "Simple induction"
            };
        },
            () => {
        return {
            topic: "Light-Emitting Diodes",
            question: "In an aircraft indicator panel, an LED is connected to a  $28\text{V}$  DC power source. What component is fundamentally required to ensure the diode achieves its 100,000-hour life expectancy?",
            options: ["A parallel shunt capacitor to smooth voltage spikes.", "A Zener diode connected in series to regulate forward bias.", "A step-down transformer to reduce the source to  $1.6\text{V}$  AC."],
            correct: "A series resistor to limit the current through the junction."
            };
        },
            () => {
        return {
            topic: "Light-Emitting Diodes",
            question: "A technician identifies a flat spot on the plastic base of an LED package. To what side of the power supply should the lead exiting adjacent to this spot be connected for proper operation?",
            options: ["The positive terminal, as it denotes the anode.", "The ground terminal, only if the LED is common-anode type.", "The positive terminal, provided the current is under  $10\text{ mA}$ ."],
            correct: "The negative terminal, as it denotes the cathode."
            };
        },
            () => {
        return {
            topic: "Light-Emitting Diodes",
            question: "What factor fundamentally determines the peak wavelength, and thus the specific perceived color, of a monochromatic LED in a cockpit display?",
            options: ["The amount of forward bias voltage applied to the leads.", "The color of the epoxy package surrounding the substrate.", "The frequency of the pulse-width modulation driving the circuit."],
            correct: "The chemical make-up of the semiconductor substrate material."
            };
        },
            () => {
        return {
            topic: "Light-Emitting Diodes",
            question: "A bi-colored LED containing red and green chips is driven by an AC voltage source. Why does the aircraft technician perceive a constant yellow light instead of alternating flashes?",
            options: ["The chips are wired in parallel-series to sum their wavelengths.", "The AC frequency matches the peak wavelength of yellow ( $585\text{ nm}$ ).", "The yellow light is emitted by a third dedicated semiconductor chip."],
            correct: "The eye's persistence of vision blends the rapid red and green flickering."
            };
        },
            () => {
        return {
            topic: "Light-Emitting Diodes",
            question: "In a common-anode seven-segment LED display, which electrical condition must be met to illuminate a specific segment to form a numerical character?",
            options: ["The specific segment's cathode must be connected to  $+5\text{V}$  DC.", "The common anode must be grounded while the segment is powered.", "Both the common anode and the specific cathode must be grounded."],
            correct: "The specific segment's cathode must be connected to ground."
            };
        },
            () => {
        return {
            topic: "Light-Emitting Diodes",
            question: "When comparing a dot matrix LED display to other electronic display technologies, what is cited as its primary disadvantage in sophisticated cockpit applications?",
            options: ["The requirement for complex high-voltage AC inverter power supplies.", "An extremely short life expectancy compared to incandescent bulbs.", "High power consumption levels exceeding those of cathode ray tubes."],
            correct: "The possibility of a broken electrical connection causing a dead pixel."
            };
        },
            () => {
        return {
            topic: "Liquid Crystal Displays",
            question: "What is the primary physical reason an OLED display can be manufactured significantly thinner than a standard Backlit LCD display for use in modern avionics?",
            options: ["OLEDs use a single layer of glass instead of a dual-plate seal.", "The conductive layer in an OLED does not require a cathode.", "OLEDs utilize liquid crystals that do not require polarizers."],
            correct: "OLEDs emit their own light and do not require a separate backlight."
            };
        },
            () => {
        return {
            topic: "Liquid Crystal Displays",
            question: "During the construction of an LCD, what is the purpose of the thin polymer layer etched with channels that is applied on top of the electrodes?",
            options: ["To act as a reflective mirror for ambient light in reflective-type units.", "To serve as a color filter for red, green, and blue sub-pixel matrices.", "To provide a high-voltage insulation barrier against the backplane."],
            correct: "To align the twist orientation of the liquid crystal helix molecules."
            };
        },
            () => {
        return {
            topic: "Liquid Crystal Displays",
            question: "Why do LCD segments appear silvery and clear when no voltage is applied to the transparent electrodes?",
            options: ["The liquid crystals block all light from reaching the rear polarizer.", "The front and rear polarizers are aligned in the same parallel plane.", "The crystals align vertically to allow unpolarized light to pass through."],
            correct: "The crystals rotate polarized light by  $90^{\circ}$  to pass the second filter."
            };
        },
            () => {
        return {
            topic: "Liquid Crystal Displays",
            question: "What would be the likely result of using a standard TTL  $0.4\text{V}$  LOW-state signal to drive an LCD segment over a long period of time?",
            options: ["The segment would remain permanently clear due to lack of alignment.", "The display would exhibit visible flicker below  $25\text{ Hz}$ .", "The liquid crystals would permanently align in the 'transmitting' state."],
            correct: "The life of the LCD would be considerably shortened by the DC component."
            };
        },
            () => {
        return {
            topic: "Liquid Crystal Displays",
            question: "In an aircraft LCD driving circuit, an XOR gate receives a  $40\text{ Hz}$  square wave on one input and a HIGH control signal on the other. What effect does this have on the segment?",
            options: ["It turns the segment OFF by creating a  $0\text{V}$  potential with the backplane.", "It turns the segment OFF by providing an in-phase signal to the segment.", "It turns the segment ON by providing a DC voltage of exactly  $+5\text{V}$ ."],
            correct: "It turns the segment ON by providing an out-of-phase AC voltage."
            };
        },
            () => {
        return {
            topic: "Liquid Crystal Displays",
            question: "How does an LCD display achieve a greyscale effect with 256 levels of brightness per pixel?",
            options: ["By varying the frequency of the square wave between  $25\text{ and }60\text{ Hz}$ .", "By alternating the polarity of the backplane at microsecond intervals.", "By using 256 individual sub-pixels for every single display character."],
            correct: "By controlling the voltage to only partially untwist the liquid crystals."
            };
        },
            () => {
        return {
            topic: "Cathode Ray Tubes",
            question: "What is the primary function of the control grid in a Cathode Ray Tube as used in older radar or EFIS displays?",
            options: ["To accelerate the electron beam toward the phosphor-coated screen.", "To deflect the beam horizontally across the scanning raster.", "To attract secondary emission electrons and remove them from the tube."],
            correct: "To regulate the number of electrons emitted, controlling brightness."
            };
        },
            () => {
        return {
            topic: "Cathode Ray Tubes",
            question: "During CRT operation, why is it necessary to apply a high positive potential to the internal Aquadag coating?",
            options: ["To focus the diverging electron beam into a tight point at the screen.", "To prevent the heater from overheating the cylindrical nickel cap.", "To provide the magnetic field required for electromagnetic deflection."],
            correct: "To remove secondary emission electrons that would distort the image."
            };
        },
            () => {
        return {
            topic: "Cathode Ray Tubes",
            question: "A technician is troubleshooting a CRT display where the spot moves to the left side of the screen. What does this indicate regarding the electrostatic deflection plates?",
            options: ["The vertical deflection plates have developed a negative potential.", "The horizontal plate H1 is positive while H2 is negative.", "Both horizontal deflection plates have been grounded simultaneously."],
            correct: "The horizontal plate H2 is positive while H1 is negative."
            };
        },
            () => {
        return {
            topic: "Cathode Ray Tubes",
            question: "When comparing electrostatic and magnetic deflection in CRTs, which statement best describes the physical mechanism of magnetic deflection?",
            options: ["It uses an electric field to attract the beam toward the neck of the tube.", "It uses two parallel metal plates inside the vacuum to bend the beam.", "It relies on the phosphor coating to pull electrons toward the triad."],
            correct: "It uses coils around the neck to interact with the beam's magnetic field."
            };
        },
            () => {
        return {
            topic: "Cathode Ray Tubes",
            question: "In a color CRT, what is the specific role of the shadow mask positioned behind the phosphor screen?",
            options: ["It filters white light into the three primary additive colors.", "It collects secondary electrons and routes them to the aquadag.", "It prevents the electron gun from overheating the focusing anode."],
            correct: "It ensures each gun's beam only strikes the correct color phosphor dot."
            };
        },
            () => {
        return {
            topic: "Cathode Ray Tubes",
            question: "What is the primary pedagogical advantage of utilizing 'Interlace Scanning' in aircraft CRT displays?",
            options: ["It increases the resolution of the screen by a factor of two.", "It eliminates the need for horizontal and vertical timebase circuits.", "It prevents the phosphorus from glowing for longer than  $50\text{ ms}$ ."],
            correct: "It reduces the required transmission bandwidth while preventing flicker."
            };
        },
            () => {
        return {
            topic: "Cathode Ray Tubes",
            question: "An avionics technician is disposing of a decommissioned CRT. What is the standard safety procedure to eliminate the high vacuum before the tube is discarded?",
            options: ["The phosphor screen must be submerged in water to neutralize toxins.", "The anode connector hole must be drilled out with a non-sparking bit.", "The entire glass envelope must be struck with a hammer inside a box."],
            correct: "The glass vacuum seal located inside the locating pin must be crushed."
            };
        },
            () => {
        return {
            topic: "Cathode Ray Tubes",
            question: "While analyzing the scanning raster of a CRT, what occurs to the electron beam during the 'flyback' period?",
            options: ["The beam intensity is doubled to reset the phosphor molecules.", "The beam is redirected to the aquadag to be discharged to ground.", "The beam maintains its focus to stabilize the vertical timebase."],
            correct: "The electron beam is suppressed altogether and produces no trace."
            };
        },
        