    // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Transistors",
            question: "When a Bipolar Junction Transistor (BJT) is used as a fully 'ON' electronic switch, it is driven into the saturation region. What is the state of the internal PN junctions?",
            options: ["Base-Emitter is reverse-biased, Base-Collector is reverse-biased", "Base-Emitter is forward-biased, Base-Collector is reverse-biased", "Base-Emitter is reverse-biased, Base-Collector is forward-biased"],
            correct: "Both the Base-Emitter and Base-Collector junctions are forward-biased"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "What is 'Thermal Runaway' in a Bipolar Junction Transistor circuit?",
            options: ["A condition where the transistor acts as a heater to warm the circuit board", "A sudden spike in base voltage causing the emitter to burn out", "The physical melting of the glass casing around a MOSFET"],
            correct: "An uncontrolled increase in collector current caused by rising temperature, leading to destruction"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "To prevent thermal runaway and stabilize a transistor's operating point, what component is most commonly added to the circuit?",
            options: ["A large coupling capacitor", "A Zener diode in parallel with the collector", "An inductor in the base lead"],
            correct: "A swamping (stabilization) resistor in the emitter lead"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Of all the standard BJT biasing methods, which one provides the most stable DC operating point regardless of temperature changes and variations in the transistor's Beta (hFE)?",
            options: ["Base Bias", "Collector-Feedback Bias", "Emitter Bias"],
            correct: "Voltage-Divider Bias"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "In a Common-Emitter amplifier, what is the purpose of placing a bypass capacitor in parallel with the emitter resistor?",
            options: ["To block DC voltage from the output", "To cause a 180-degree phase shift", "To decrease the overall bandwidth of the amplifier"],
            correct: "To prevent AC degeneration (negative feedback) and maximize AC voltage gain"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "Which transistor amplifier configuration is characterized by a high input impedance, a very low output impedance, and a voltage gain of slightly less than 1?",
            options: ["Common-Emitter", "Common-Base", "Differential Amplifier"],
            correct: "Common-Collector (Emitter Follower)"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "Because of its specific input and output impedance characteristics, the Common-Collector (Emitter Follower) amplifier is primarily used for:",
            options: ["Maximizing voltage swing", "Inverting an AC signal", "Filtering high frequencies"],
            correct: "Impedance matching between a high-Z source and a low-Z load"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "In a Common-Base amplifier circuit, the voltage gain can be quite high, but the current gain is referred to as 'Alpha'. What is the typical value of Alpha?",
            options: ["Always greater than 100", "Exactly equal to Beta", "Negative 1"],
            correct: "Slightly less than 1 (e.g., 0.98)"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "A Darlington Pair consists of two cascaded NPN transistors. If a standard silicon transistor has a Base-Emitter voltage drop of 0.7V, what is the approximate voltage required to turn on the Darlington Pair?",
            options: ["0.3V", "0.7V", "2.1V"],
            correct: "1.4V"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "In an N-Channel JFET, what is meant by the term 'Pinch-off Voltage' (Vp)?",
            options: ["The voltage where the JFET breaks down and is destroyed", "The gate voltage required to fully open the channel for maximum current", "The drain-to-source voltage where the device begins to heat up"],
            correct: "The reverse-bias gate voltage at which the channel is completely closed and drain current stops"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Why must extreme care and static grounding precautions be used when handling MOSFET components?",
            options: ["They contain hazardous radioactive materials", "They operate at dangerously high voltages", "They will rapidly oxidize if exposed to air"],
            correct: "The extremely thin silicon dioxide layer insulating the gate is easily punctured by static electricity"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Unlike a depletion-mode MOSFET which is 'normally on', an enhancement-mode MOSFET is 'normally off'. What must happen to allow current to flow from drain to source?",
            options: ["A reverse-bias voltage must be applied to the gate", "The gate must be directly shorted to the source", "The ambient temperature must reach a specific threshold"],
            correct: "A sufficient forward-bias voltage must be applied to the gate to physically 'create' the conductive channel"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "A Class A amplifier is biased so its operating point (Q-point) sits exactly in the middle of the active region on the load line. What does this achieve?",
            options: ["Maximum possible power efficiency (near 100%)", "Zero quiescent current drain", "Conduction for only 180 degrees of the input cycle"],
            correct: "Excellent signal fidelity with 360-degree conduction, but very poor power efficiency"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "In a Class B push-pull amplifier, two transistors split the work, each amplifying one half of the AC cycle. What distortion occurs as the signal transitions from one transistor to the other?",
            options: ["Phase distortion", "Harmonic distortion", "Amplitude clipping"],
            correct: "Crossover distortion"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "How is crossover distortion virtually eliminated in modern push-pull amplifier circuits?",
            options: ["By using only PNP transistors", "By increasing the value of the coupling capacitors", "By removing the emitter resistors"],
            correct: "By biasing the circuit into Class AB, providing a small forward voltage to keep both transistors slightly conducting at the crossover point"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "Which class of amplifier conducts for significantly less than 180 degrees of the input AC cycle, making it highly distorted but extremely efficient for use in tuned RF circuits?",
            options: ["Class A", "Class B", "Class AB"],
            correct: "Class C"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "When driving a push-pull amplifier, you must provide two input signals that are perfectly 180 degrees out of phase. What type of circuit is used to create these signals?",
            options: ["An Op-Amp Integrator", "A Common-Base amplifier", "A Bridge Rectifier"],
            correct: "A Phase Splitter (or Phase Inverter)"
            };
        },
            () => {
        return {
            topic: "Amplifier Coupling",
            question: "When amplifying very low frequencies (down to DC/0Hz), direct coupling must be used. What is the major operational disadvantage of a direct-coupled multi-stage amplifier?",
            options: ["It completely blocks all AC signals", "It requires massive and heavy iron-core transformers", "It suffers from severe crossover distortion"],
            correct: "Any slight DC drift or temperature instability in the first stage is heavily amplified by all subsequent stages"
            };
        },
            () => {
        return {
            topic: "Amplifier Coupling",
            question: "In an RC-coupled amplifier, the voltage gain drops off significantly at very low frequencies. What component causes this low-frequency attenuation?",
            options: ["The load resistor", "The bypass capacitor", "The emitter resistor"],
            correct: "The series coupling capacitor, whose capacitive reactance becomes very high at low frequencies"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "Introducing negative feedback into a transistor amplifier circuit intentionally reduces its overall voltage gain. What is the primary benefit of doing this?",
            options: ["It pushes the amplifier into saturation faster", "It makes the circuit act as an oscillator", "It narrows the frequency bandwidth"],
            correct: "It significantly improves stability, widens the bandwidth, and reduces signal distortion"
            };
        },
        