    // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Amplifier Coupling",
            question: "Refer to the provided schematic. What type of amplifier interstage coupling is shown between transistor Q1 and Q2?",
            img: "mod4/direct_coupling.png",
            options: ["RC Coupling", "Transformer Coupling", "Optical Coupling"],
            correct: "Direct Coupling"
            };
        },
            () => {
        return {
            topic: "Amplifier Coupling",
            question: "Refer to the provided schematic. What is the primary disadvantage of this specific type of interstage coupling?",
            img: "mod4/direct_coupling.png",
            options: ["It severely attenuates low-frequency AC signals", "It requires expensive and bulky transformers", "It creates a 180-degree phase shift that cancels out the signal"],
            correct: "Any DC drift or temperature instability in Q1 is directly amplified by Q2"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Refer to the provided schematic. Identify this specific two-transistor configuration, which acts as a single transistor with a very high current gain.",
            img: "mod4/darlington_pair.png",
            options: ["Push-Pull Pair", "Differential Pair", "Current Mirror"],
            correct: "Darlington Pair"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "In the provided Darlington Pair schematic, how is the overall current gain (Total Beta) of the package calculated?",
            img: "mod4/darlington_pair.png",
            options: ["By adding the Beta of Q1 to the Beta of Q2", "By dividing the Beta of Q2 by the Beta of Q1", "By taking the average of the two Beta values"],
            correct: "By multiplying the Beta of Q1 by the Beta of Q2"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Refer to the provided schematic. What is the primary function of resistors R1 and R2 in this standard amplifier circuit?",
            img: "mod4/voltage_divider_bias.png",
            options: ["To provide negative feedback to prevent oscillation", "To set the AC voltage gain of the amplifier", "To protect the transistor from high-voltage transients"],
            correct: "To form a voltage divider that sets a stable DC bias for the base"
            };
        },
            () => {
        return {
            topic: "Filters",
            question: "Refer to the provided schematic. Based on the RC network (Capacitor in series, Resistor to ground) attached to the non-inverting input, what type of circuit is this?",
            img: "mod4/active_highpass.png",
            options: ["Active Low-Pass Filter", "Active Band-Stop Filter", "Passive Integrator"],
            correct: "Active High-Pass Filter"
            };
        },
        