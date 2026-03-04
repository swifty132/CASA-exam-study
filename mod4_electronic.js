// --- MODULE 4: ELECTRONIC FUNDAMENTALS I ---

const electronicGenerators = [

    // 1. Semiconductor Theory (Static)
    () => {
        return {
            topic: "Semiconductors",
            question: "To create an N-type semiconductor, pure silicon is doped with pentavalent impurity atoms (such as Arsenic or Phosphorus). What is the resulting majority charge carrier in this material?",
            options: [
                "Holes", 
                "Protons", 
                "Positive Ions"
            ],
            correct: "Electrons"
        };
    },

    // 2. Diode Voltage Drop Calculation (Dynamic)
    () => {
        const vs = Math.floor(Math.random() * 15) + 10; // 10 to 24 V
        const v_drop = 0.7; // Standard Silicon drop
        const vr = (vs - v_drop).toFixed(1);
        
        return {
            topic: "Diodes",
            question: `A standard silicon diode is forward-biased in series with a load resistor. If the applied DC source voltage is ${vs} V, what is the approximate voltage dropped across the series resistor?`,
            options: [
                `${vs.toFixed(1)} V`, 
                `${(vs + v_drop).toFixed(1)} V`, 
                `${(vs / 2).toFixed(1)} V`
            ],
            correct: `${vr} V`
        };
    },

    // 3. Full-Wave Rectifier Ripple Frequency (Dynamic)
    () => {
        const freqs = [50, 60, 400];
        const fin = freqs[Math.floor(Math.random() * freqs.length)];
        const ans = fin * 2; // Full wave ripple is 2x input
        
        return {
            topic: "Power Supplies",
            question: `A full-wave bridge rectifier is supplied with an AC input frequency of ${fin} Hz. What is the fundamental ripple frequency of the unfiltered DC output?`,
            options: [
                `${fin} Hz`, 
                `${fin / 2} Hz`, 
                `${fin * 4} Hz`
            ],
            correct: `${ans} Hz`
        };
    },

    // 4. Bridge Rectifier Output Voltage (Dynamic)
    () => {
        const vp_sec = Math.floor(Math.random() * 30) + 20; // 20 to 49 V
        const ans = (vp_sec - 1.4).toFixed(1); // Two diode drops for a bridge
        
        return {
            topic: "Power Supplies",
            question: `A bridge full-wave rectifier has a peak secondary voltage (Vp(sec)) of ${vp_sec} V applied to it. Assuming standard silicon diodes, what is the peak output voltage (Vp(out)) across the load?`,
            options: [
                `${(vp_sec - 0.7).toFixed(1)} V`, 
                `${vp_sec.toFixed(1)} V`, 
                `${(vp_sec / 2 - 0.7).toFixed(1)} V`
            ],
            correct: `${ans} V`
        };
    },

    // 5. Varactor Diodes (Static)
    () => {
        return {
            topic: "Special Diodes",
            question: "A varactor diode is utilized in circuits as a voltage-controlled variable capacitor. What happens to its internal capacitance when the reverse-bias voltage across it is increased?",
            options: [
                "The capacitance increases proportionally", 
                "The capacitance remains constant", 
                "The depletion region narrows, increasing capacitance"
            ],
            correct: "The depletion region widens, decreasing the capacitance"
        };
    },

    // 6. Transistor Control Fundamentals (Static)
    () => {
        return {
            topic: "Transistors",
            question: "Which of the following statements correctly describes the fundamental control difference between a Bipolar Junction Transistor (BJT) and a Field-Effect Transistor (FET)?",
            options: [
                "A BJT is voltage-controlled and a FET is current-controlled", 
                "Both are entirely voltage-controlled devices", 
                "A BJT relies on electrostatic fields, while a FET relies on chemical doping"
            ],
            correct: "A BJT is a current-controlled device, while a FET is a voltage-controlled device"
        };
    },

    // 7. BJT Current Gain (Beta) Calculation (Dynamic)
    () => {
        const beta = Math.floor(Math.random() * 100) + 50; // Beta: 50 to 149
        const ib = Math.floor(Math.random() * 5) + 2; // Ib: 2 to 6 mA
        const ic = beta * ib; // Ic = Beta * Ib
        
        return {
            topic: "Transistors",
            question: `A Bipolar Junction Transistor (BJT) operating in its active region has a DC current gain (Beta / hFE) of ${beta} and a base current of ${ib} mA. What is the collector current?`,
            options: [
                `${ic / 1000} mA`, 
                `${(beta / ib).toFixed(2)} mA`, 
                `${(beta * ib) / 2} mA`
            ],
            correct: `${ic} mA`
        };
    },

    // 8. BJT Alpha Calculation (Dynamic)
    () => {
        const ie = Math.floor(Math.random() * 50) + 100; // Ie: 100 to 149 mA
        const ib = Math.floor(Math.random() * 3) + 1; // Ib: 1 to 3 mA
        const ic = ie - ib;
        const alpha = (ic / ie).toFixed(3); // Alpha = Ic / Ie
        
        return {
            topic: "Transistors",
            question: `An NPN transistor has an emitter current (Ie) of ${ie} mA and a base current (Ib) of ${ib} mA. What is the DC Alpha (the current gain from emitter to collector) of this transistor?`,
            options: [
                `${(ie / ic).toFixed(3)}`, 
                `${(ib / ie).toFixed(3)}`, 
                `1.000`
            ],
            correct: `${alpha}`
        };
    },

    // 9. Thyristors / SCR Operation (Static)
    () => {
        return {
            topic: "Thyristors",
            question: "Once a Silicon-Controlled Rectifier (SCR) has been triggered into the conducting (ON) state by a gate pulse, how is it normally returned to the OFF state?",
            options: [
                "By applying a negative pulse to the gate terminal", 
                "By increasing the forward voltage beyond the breakdown limit", 
                "By continuously supplying gate current"
            ],
            correct: "By reducing the anode-to-cathode current below the holding current threshold (e.g., shorting anode to cathode)"
        };
    },

    // 10. Triac Characteristics (Static)
    () => {
        return {
            topic: "Thyristors",
            question: "What is the primary operational advantage of a Triac over a Silicon-Controlled Rectifier (SCR)?",
            options: [
                "A Triac requires absolutely no gate trigger to conduct", 
                "An SCR can conduct in both directions, while a Triac is strictly unidirectional", 
                "A Triac operates exclusively as a voltage-controlled device"
            ],
            correct: "A Triac can conduct AC current in either direction when triggered, whereas an SCR only conducts in one direction"
        };
    },

    // 11. Zener Diode Limiting Resistor (Dynamic)
    () => {
        const vs = Math.floor(Math.random() * 10) + 20; // 20 to 29 V
        const vz = Math.floor(Math.random() * 4) + 9; // 9 to 12 V
        const i_load = Math.floor(Math.random() * 30) + 20; // 20 to 49 mA
        const i_z = Math.floor(Math.random() * 10) + 10; // 10 to 19 mA
        const i_t = (i_load + i_z) / 1000; // Convert to Amps
        
        const r = Math.round((vs - vz) / i_t);
        
        return {
            topic: "Diodes",
            question: `A Zener diode voltage regulator is connected to a ${vs} V DC supply. The Zener maintains ${vz} V across a parallel load. If the load draws ${i_load} mA and the Zener requires ${i_z} mA to maintain regulation, what is the required value of the series current-limiting resistor?`,
            options: [
                `${Math.round(vs / i_t)} Ω`, 
                `${Math.round((vs - vz) / (i_load / 1000))} Ω`, 
                `${Math.round((vs + vz) / i_t)} Ω`
            ],
            correct: `${r} Ω`
        };
    },

    // 12. Amplifier Operating Classes (Static)
    () => {
        return {
            topic: "Amplifiers",
            question: "In transistor amplifier circuits, which class of operation is biased such that collector current flows continuously for the entire 360 degrees of the input AC cycle?",
            options: [
                "Class B", 
                "Class C", 
                "Class AB"
            ],
            correct: "Class A"
        };
    },

    // 13. Light Emitting Diodes (Static)
    () => {
        return {
            topic: "Diodes",
            question: "What type of radiation is emitted by a Light-Emitting Diode (LED) manufactured exclusively from Gallium Arsenide (GaAs)?",
            options: [
                "Visible red light", 
                "Visible green light", 
                "Ultraviolet (UV) radiation"
            ],
            correct: "Invisible infrared (IR) radiation"
        };
    },

    // 14. Transistor Troubleshooting (Static)
    () => {
        return {
            topic: "Transistors",
            question: "When troubleshooting an NPN transistor amplifier circuit, you measure 0.7 V at the base lead and full supply voltage (Vcc) at the collector. Which of the following faults is the most likely cause?",
            options: [
                "The Base resistor is open", 
                "The Emitter is internally shorted to ground", 
                "The Base-Emitter junction is reversed biased"
            ],
            correct: "The Collector is internally open circuit (preventing collector current flow)"
        };
    },

    // 15. Series Diode Circuit Protection (Static)
    () => {
        return {
            topic: "Diodes",
            question: "When rectifying high voltages, multiple diodes are sometimes connected in series to increase the total Peak Inverse Voltage (PIV) rating. Why are high-value resistors often connected in parallel across each individual diode?",
            options: [
                "To increase the forward current capacity of the entire circuit", 
                "To prevent avalanche breakdown by suppressing the AC input frequency", 
                "To automatically bypass the diodes during the forward-biased half-cycle"
            ],
            correct: "To ensure the reverse voltage is shared equally across the diodes, compensating for variations in leakage current"
        };
    },
    // --- BATCH 2: ELECTRONIC FUNDAMENTALS (DEEP DIVE) ---

    // 16. Semiconductor Barrier Potentials (Static)
    () => {
        return {
            topic: "Semiconductors",
            question: "What is the approximate forward-bias barrier potential for Silicon (Si) and Germanium (Ge) PN junction diodes, respectively?",
            options: [
                "Si = 0.3V, Ge = 0.7V", 
                "Si = 1.2V, Ge = 0.3V", 
                "Si = 0.7V, Ge = 1.2V"
            ],
            correct: "Si = 0.7V, Ge = 0.3V"
        };
    },

    // 17. Diode Power Dissipation (Dynamic)
    () => {
        const vf = 0.7;
        const i_mA = Math.floor(Math.random() * 50) + 50; // 50 to 99 mA
        const p_mW = Math.round(vf * i_mA); // Power = V * I
        
        return {
            topic: "Diodes",
            question: `A forward-biased silicon diode (Vf = 0.7V) has a steady current of ${i_mA} mA flowing through it. What is the approximate power being dissipated by the diode as heat?`,
            options: [
                `${Math.round(i_mA / vf)} mW`, 
                `${Math.round((i_mA * vf) / 1000)} W`, 
                `${Math.round(vf / i_mA)} mW`
            ],
            correct: `${p_mW} mW`
        };
    },

    // 18. Avalanche vs Zener Breakdown (Static)
    () => {
        return {
            topic: "Diodes",
            question: "In heavily doped PN junctions with narrow depletion layers, reverse breakdown occurs at low voltages due to strong electric fields tearing electrons from their bonds. This specific phenomenon is known as:",
            options: [
                "Avalanche Breakdown", 
                "Thermal Runaway", 
                "Secondary Emission"
            ],
            correct: "Zener Breakdown"
        };
    },

    // 19. Schottky Diode Application (Static)
    () => {
        return {
            topic: "Special Diodes",
            question: "A Schottky diode is constructed using a metal-to-semiconductor junction rather than a standard P-N junction. What is its primary operational advantage?",
            options: [
                "It can withstand extremely high reverse-bias voltages (High PIV)", 
                "It emits light when reverse-biased", 
                "It acts as a variable capacitor in RF circuits"
            ],
            correct: "It has a very low forward voltage drop and extremely fast switching speeds"
        };
    },

    // 20. LED Material Colors (Static)
    () => {
        return {
            topic: "Special Diodes",
            question: "The color of the light emitted by a Light-Emitting Diode (LED) is determined by:",
            options: [
                "The amount of forward current passing through it", 
                "The tint of the plastic encapsulation lens", 
                "The frequency of the AC supply voltage"
            ],
            correct: "The specific semiconductor compound/material used in the PN junction"
        };
    },

    // 21. BJT Operating Regions (Static)
    () => {
        return {
            topic: "Transistors",
            question: "When a Bipolar Junction Transistor (BJT) is used strictly as an electronic switch in digital logic circuits, it operates between which two regions?",
            options: [
                "Active and Saturation", 
                "Active and Cutoff", 
                "Linear and Breakdown"
            ],
            correct: "Cutoff and Saturation"
        };
    },

    // 22. JFET Fundamentals (Static)
    () => {
        return {
            topic: "Transistors",
            question: "In an N-Channel Junction Field-Effect Transistor (JFET), the 'Pinch-Off Voltage' (Vp) refers to:",
            options: [
                "The forward gate voltage that causes maximum drain current to flow", 
                "The voltage at which the gate-to-source junction suffers avalanche breakdown", 
                "The drain-to-source voltage where the device burns out"
            ],
            correct: "The reverse gate-to-source voltage that completely depletes the channel, dropping drain current to zero"
        };
    },

    // 23. BJT Emitter Current Calculation (Dynamic)
    () => {
        const ic_mA = Math.floor(Math.random() * 40) + 10; // 10 to 49 mA
        const ib_uA = Math.floor(Math.random() * 500) + 100; // 100 to 599 uA
        const ib_mA = ib_uA / 1000;
        
        // Ie = Ic + Ib
        const ie_mA = (ic_mA + ib_mA).toFixed(2);
        
        return {
            topic: "Transistors",
            question: `An NPN transistor is operating with a Collector current (Ic) of ${ic_mA} mA and a Base current (Ib) of ${ib_uA} µA. What is the total Emitter current (Ie)?`,
            options: [
                `${ic_mA} mA`, 
                `${(ic_mA - ib_mA).toFixed(2)} mA`, 
                `${(ic_mA * ib_mA).toFixed(2)} mA`
            ],
            correct: `${ie_mA} mA`
        };
    },

    // 24. Transistor Voltage Gain (Dynamic)
    () => {
        const vin_mV = Math.floor(Math.random() * 40) + 10; // 10 to 49 mV
        const vout_V = Math.floor(Math.random() * 5) + 2; // 2 to 6 V
        
        // Gain = Vout / Vin
        const gain = Math.round((vout_V * 1000) / vin_mV);
        
        return {
            topic: "Amplifiers",
            question: `A Common-Emitter amplifier receives an input signal of ${vin_mV} mV AC and produces an output signal of ${vout_V} V AC. What is the Voltage Gain (Av) of this amplifier stage?`,
            options: [
                `${Math.round(vin_mV / vout_V)}`, 
                `${Math.round((vout_V) / vin_mV)}`, 
                `${gain * 10}`
            ],
            correct: `${gain}`
        };
    },

    // 25. BJT Phase Shift (Static)
    () => {
        return {
            topic: "Amplifiers",
            question: "In a single-stage Common-Emitter (CE) transistor amplifier, what is the phase relationship between the input signal at the base and the output signal at the collector?",
            options: [
                "They are exactly in phase (0 degrees)", 
                "The output leads the input by 90 degrees", 
                "The output lags the input by 90 degrees"
            ],
            correct: "They are 180 degrees out of phase (inverted)"
        };
    },

    // 26. MOSFET Construction (Static)
    () => {
        return {
            topic: "Transistors",
            question: "Why does a Metal-Oxide Semiconductor FET (MOSFET) have an extremely high input impedance compared to a JFET or BJT?",
            options: [
                "Because the gate is internally grounded", 
                "Because it relies on minority carriers for conduction", 
                "Because the source and drain are physically fused together"
            ],
            correct: "Because the gate terminal is electrically insulated from the channel by a thin layer of silicon dioxide"
        };
    },

    // 27. Op-Amp Inverting Amplifier Calculation (Dynamic)
    () => {
        const rin = Math.floor(Math.random() * 5) + 2; // 2 to 6 kOhm
        const multiplier = Math.floor(Math.random() * 10) + 5; // 5 to 14
        const rf = rin * multiplier; 
        const vin = Math.floor(Math.random() * 4) + 1; // 1 to 4 V
        
        // Vout = Vin * (-Rf / Rin)
        const vout = vin * -(rf / rin);
        
        return {
            topic: "Operational Amplifiers",
            question: `An inverting Op-Amp circuit has an input resistor (Rin) of ${rin} kΩ and a feedback resistor (Rf) of ${rf} kΩ. If a +${vin}V DC signal is applied to the input, what will the output voltage be?`,
            options: [
                `+${Math.abs(vout)} V`, 
                `${vin * (1 + (rf/rin))} V`, 
                `-${Math.round(rf/rin)} V`
            ],
            correct: `${vout} V`
        };
    },

    // 28. Op-Amp Non-Inverting Gain Calculation (Dynamic)
    () => {
        const rin = Math.floor(Math.random() * 4) + 1; // 1 to 4 kOhm
        const multiplier = Math.floor(Math.random() * 5) + 2;
        const rf = rin * multiplier; 
        
        // Av = 1 + (Rf / Rin)
        const gain = 1 + (rf / rin);
        
        return {
            topic: "Operational Amplifiers",
            question: `Calculate the closed-loop voltage gain (Av) of a Non-Inverting Op-Amp circuit where Rin = ${rin} kΩ and Rf = ${rf} kΩ.`,
            options: [
                `${rf / rin}`, 
                `-${rf / rin}`, 
                `${(rin / rf) + 1}`
            ],
            correct: `${gain}`
        };
    },

    // 29. Op-Amp Voltage Follower (Static)
    () => {
        return {
            topic: "Operational Amplifiers",
            question: "An Op-Amp is configured with its output tied directly back to its inverting (-) input, and the signal applied to the non-inverting (+) input. This configuration is known as a Voltage Follower (Buffer). What is its voltage gain?",
            options: [
                "Zero", 
                "Infinite", 
                "Gain depends on the internal resistance"
            ],
            correct: "Exactly 1 (Unity Gain)"
        };
    },

    // 30. Op-Amp Integrator (Static)
    () => {
        return {
            topic: "Operational Amplifiers",
            question: "In an Op-Amp Integrator circuit, which specific component is placed in the feedback loop (connecting the output back to the inverting input)?",
            options: [
                "A variable resistor", 
                "An inductor", 
                "A Zener diode"
            ],
            correct: "A capacitor"
        };
    },

    // 31. Logic Gates: XOR Function (Static)
    () => {
        return {
            topic: "Digital Logic",
            question: "An Exclusive-OR (XOR) gate has two inputs. Under what conditions will the output be HIGH (1)?",
            options: [
                "When both inputs are LOW (0)", 
                "When both inputs are HIGH (1)", 
                "When all inputs are the same logic state"
            ],
            correct: "When the inputs are at different logic states (one HIGH, one LOW)"
        };
    },

    // 32. Logic Gates: Equivalent Logic (Static)
    () => {
        return {
            topic: "Digital Logic",
            question: "According to De Morgan's theorems, an AND gate with inverted inputs (bubbled inputs) is logically equivalent to which standard gate?",
            options: [
                "NAND Gate", 
                "OR Gate", 
                "XOR Gate"
            ],
            correct: "NOR Gate"
        };
    },

    // 33. Binary to Hexadecimal (Dynamic)
    () => {
        const dec = Math.floor(Math.random() * 240) + 15; // 15 to 255
        const bin = dec.toString(2).padStart(8, '0'); // 8 bit binary
        const hex = dec.toString(16).toUpperCase();
        
        return {
            topic: "Numbering Systems",
            question: `Convert the following 8-bit binary number to Hexadecimal: ${bin}`,
            options: [
                `${(dec + 10).toString(16).toUpperCase()}`, 
                `${dec.toString(8)} (Octal)`, 
                `${(dec - 5).toString(16).toUpperCase()}`
            ],
            correct: `${hex}`
        };
    },

    // 34. Octal to Decimal (Dynamic)
    () => {
        const dec = Math.floor(Math.random() * 50) + 15; 
        const octal = dec.toString(8);
        
        return {
            topic: "Numbering Systems",
            question: `Convert the Octal (Base-8) number ${octal} to its Decimal (Base-10) equivalent.`,
            options: [
                `${dec + 8}`, 
                `${dec - 10}`, 
                `${parseInt(octal, 16)}` // Distractor: treated octal digits as hex
            ],
            correct: `${dec}`
        };
    },

    // 35. Flip-Flops (Static)
    () => {
        return {
            topic: "Digital Logic",
            question: "In digital electronics, what is the primary function of a basic Flip-Flop (Bistable Multivibrator) circuit?",
            options: [
                "To continuously oscillate between HIGH and LOW states", 
                "To amplify digital signals over long cables", 
                "To convert analog voltages into digital pulses"
            ],
            correct: "To store one bit of binary data (act as memory)"
        };
    },

    // 36. Half-Wave Rectifier Average Output (Dynamic)
    () => {
        const vrms = [115, 200, 240][Math.floor(Math.random()*3)];
        const vpeak = vrms * 1.414;
        // Vavg for half wave = Vpeak / Pi (approx Vpeak * 0.318)
        const vavg = Math.round(vpeak * 0.318);
        
        return {
            topic: "Power Supplies",
            question: `A half-wave rectifier circuit is connected to a ${vrms}V RMS AC supply. Ignoring diode forward voltage drops, what is the approximate Average DC output voltage?`,
            options: [
                `${Math.round(vpeak * 0.637)} V`, // Full wave average
                `${vrms} V`, 
                `${Math.round(vpeak)} V`
            ],
            correct: `${vavg} V`
        };
    },

    // 37. Filter Components (Static)
    () => {
        return {
            topic: "Filters",
            question: "In a basic LC power supply filter (choke-input filter), how are the components arranged to smooth the rippled DC output?",
            options: [
                "The capacitor is in series with the load; the inductor is in parallel", 
                "Both the inductor and capacitor are in series with the load", 
                "Both the inductor and capacitor are in parallel with the load"
            ],
            correct: "The inductor is in series with the load; the capacitor is in parallel"
        };
    },

    // 38. Voltage Regulators (Static)
    () => {
        return {
            topic: "Power Supplies",
            question: "In an integrated circuit (IC) linear voltage regulator (e.g., 7805), what is meant by the 'dropout voltage'?",
            options: [
                "The maximum output voltage the regulator can withstand before failing", 
                "The minimum load resistance required to prevent the regulator from turning off", 
                "The point at which thermal overload shuts down the chip"
            ],
            correct: "The minimum voltage difference required between the input and output to maintain regulation"
        };
    },

    // 39. Servo Tachogenerators (Static)
    () => {
        return {
            topic: "Servomechanisms",
            question: "What is the primary function of a Tachogenerator when utilized in a closed-loop servomechanism?",
            options: [
                "To provide the main driving power to the servomotor", 
                "To monitor the positional error between the transmitter and receiver", 
                "To generate the 400Hz excitation voltage for the synchros"
            ],
            correct: "To provide a rate-of-movement feedback signal that induces damping, preventing the system from 'hunting' or overshooting"
        };
    },

    // 40. Servo Deadband (Static)
    () => {
        return {
            topic: "Servomechanisms",
            question: "In servo control theory, the term 'Deadband' (or Dead Zone) refers to:",
            options: [
                "The physical mechanical stop that prevents the servo from rotating 360 degrees", 
                "The time delay between a command being sent and the motor beginning to move", 
                "A catastrophic failure mode where the feedback loop is severed"
            ],
            correct: "A specific range of input error signal values that are too small to cause the system to produce a corrective output"
        };
    },

    // 41. Synchro Control Transformer (Static)
    () => {
        return {
            topic: "Servomechanisms",
            question: "In a Synchro Control Transformer (CT) used for error detection, an 'Electrical Null' (zero output voltage on the rotor) occurs when the rotor winding is:",
            options: [
                "Aligned perfectly parallel to the resultant magnetic field of the stator", 
                "Spinning at exactly the same speed as the transmitter rotor", 
                "Physically locked in place by a mechanical detent"
            ],
            correct: "Positioned exactly 90 degrees (perpendicular) to the resultant magnetic field of the stator"
        };
    },

    // 42. Resolvers vs Synchros (Static)
    () => {
        return {
            topic: "Servomechanisms",
            question: "A Resolver is electrically similar to a Synchro, but differs primarily in its stator construction. How are the stator windings of a Resolver arranged?",
            options: [
                "Three stator windings spaced 120 degrees apart", 
                "A single continuous stator winding surrounding the rotor", 
                "Four stator windings spaced 45 degrees apart"
            ],
            correct: "Two stator windings spaced 90 degrees apart (producing Sine and Cosine outputs)"
        };
    },

    // 43. E-I Transformer Operation (Static)
    () => {
        return {
            topic: "Servomechanisms",
            question: "An E-I Bar transducer acts as a position sensor. When the 'I' bar is perfectly centered over the 'E' core, what is the resulting output?",
            options: [
                "Maximum AC voltage is induced in the secondary windings", 
                "A DC voltage is generated through piezoelectric action", 
                "The primary winding shorts out, blowing a fuse"
            ],
            correct: "The magnetic flux is balanced, and the net output voltage from the secondary windings is zero"
        };
    },

    // 44. Oscillator Fundamentals (Static)
    () => {
        return {
            topic: "Oscillators",
            question: "For an electronic oscillator circuit to sustain continuous oscillations, it must satisfy the Barkhausen criterion. This means the feedback signal must be:",
            options: [
                "Negative feedback, with a loop gain of less than 1", 
                "Rectified into DC, with a loop gain of exactly 0", 
                "Inverted by an Op-Amp before returning to the input"
            ],
            correct: "Positive (in-phase) feedback, with a loop gain of exactly 1"
        };
    },

    // 45. Crystal Oscillators (Static)
    () => {
        return {
            topic: "Oscillators",
            question: "Quartz crystals are heavily utilized in oscillator circuits (such as digital clocks and radio transmitters) primarily because they:",
            options: [
                "Can generate extremely high output power without overheating", 
                "Allow the frequency to be easily adjusted over a very wide band", 
                "Act as a perfect insulator blocking all DC current"
            ],
            correct: "Provide an extremely stable and precise resonant frequency due to the piezoelectric effect"
        };
    },
    // --- BATCH 7: ELECTRONIC FUNDAMENTALS (ADVANCED & OPTOELECTRONICS) ---

    // 46. Optoelectronics: Phototransistors (Static - From Source Text)
    () => {
        return {
            topic: "Optoelectronics",
            question: "A phototransistor can be manufactured as a two-lead or three-lead device. In a typical two-lead configuration, which terminal is electrically unavailable because it is controlled entirely by light intensity?",
            options: [
                "The Collector", 
                "The Emitter", 
                "The Gate"
            ],
            correct: "The Base"
        };
    },

    // 47. Optoelectronics: Dark Current (Static - From Source Text)
    () => {
        return {
            topic: "Optoelectronics",
            question: "Looking at the characteristic curves of a phototransistor, there is a very small amount of collector current that flows even when the ambient light intensity is 0 mW/cm². What is this leakage current called?",
            options: [
                "Quiescent current", 
                "Reverse breakdown current", 
                "Avalanche current"
            ],
            correct: "Dark current"
        };
    },

    // 48. Amplifiers: Cascaded Voltage Gain (Dynamic)
    () => {
        const gain1 = Math.floor(Math.random() * 10) + 5; // 5 to 14
        const gain2 = Math.floor(Math.random() * 10) + 15; // 15 to 24
        
        // Total Gain in a cascaded amplifier is the product of individual gains
        const totalGain = gain1 * gain2;
        
        const d1 = gain1 + gain2; // Added instead of multiplied
        const d2 = Math.round(gain2 / gain1); // Divided
        const d3 = (totalGain * 10); 
        
        return {
            topic: "Amplifiers",
            question: `Two transistor amplifier stages are connected in cascade. Stage 1 has a voltage gain of ${gain1}, and Stage 2 has a voltage gain of ${gain2}. What is the total overall voltage gain of the system?`,
            options: [
                `${d1}`, 
                `${d2}`, 
                `${d3}`
            ],
            correct: `${totalGain}`
        };
    },

    // 49. Power Supplies: 3-Phase Rectifier Ripple (Dynamic)
    () => {
        const freqs = [50, 60, 400];
        const fin = freqs[Math.floor(Math.random() * freqs.length)];
        
        // 3-Phase Full-Wave Bridge Rectifier ripple frequency is 6x the input frequency
        const ripple = fin * 6;
        
        const d1 = fin * 2; // Mistook for single-phase full-wave
        const d2 = fin * 3; // Mistook for 3-phase half-wave
        const d3 = fin;
        
        return {
            topic: "Power Supplies",
            question: `A 3-phase full-wave bridge rectifier (utilizing 6 diodes) is powered by a ${fin} Hz aircraft AC generator. What is the fundamental ripple frequency of the DC output?`,
            options: [
                `${d1} Hz`, 
                `${d2} Hz`, 
                `${d3} Hz`
            ],
            correct: `${ripple} Hz`
        };
    },

    // 50. Semiconductors: Temperature Coefficient (Static)
    () => {
        return {
            topic: "Semiconductors",
            question: "Unlike standard conductive metals like copper, pure semiconductor materials (like Silicon and Germanium) possess a Negative Temperature Coefficient (NTC). This means that as their temperature increases:",
            options: [
                "Their electrical resistance increases", 
                "Their electrical resistance remains perfectly constant", 
                "Their internal capacitance decreases"
            ],
            correct: "Their electrical resistance decreases due to the generation of more electron-hole pairs"
        };
    },

    // 51. Transistors: BJT Power Dissipation (Dynamic)
    () => {
        const vce = Math.floor(Math.random() * 10) + 5; // 5V to 14V
        const ic_mA = Math.floor(Math.random() * 50) + 20; // 20 to 69 mA
        
        // P = Vce * Ic (in mW)
        const power_mW = vce * ic_mA;
        
        const d1 = (vce * ic_mA) / 1000; // Calculated in W but labelled mW
        const d2 = vce + ic_mA; // Added instead of multiplied
        const d3 = Math.round(ic_mA / vce); 
        
        return {
            topic: "Transistors",
            question: `A Bipolar Junction Transistor (BJT) is operating with a Collector-to-Emitter voltage (Vce) of ${vce}V and a Collector current (Ic) of ${ic_mA} mA. What is the approximate power being dissipated by the transistor as heat?`,
            options: [
                `${d1} mW`, 
                `${d2} mW`, 
                `${d3} mW`
            ],
            correct: `${power_mW} mW`
        };
    },

    // 52. Diodes: Center-Tapped PIV (Dynamic)
    () => {
        const v_half_sec = Math.floor(Math.random() * 50) + 50; // 50 to 99V
        
        // PIV for a center tapped full wave rectifier is roughly 2 * V_peak_half
        const piv = v_half_sec * 2;
        
        return {
            topic: "Power Supplies",
            question: `In a Center-Tapped Full-Wave Rectifier circuit, the peak voltage measured across exactly HALF of the secondary winding is ${v_half_sec}V. Ignoring the small forward voltage drop of the diode, what is the minimum Peak Inverse Voltage (PIV) rating required for the diodes?`,
            options: [
                `${v_half_sec} V`, 
                `${v_half_sec / 2} V`, 
                `${Math.round(v_half_sec * 1.414)} V`
            ],
            correct: `${piv} V`
        };
    },

    // 53. Transistors: BJT Saturation Voltage (Static)
    () => {
        return {
            topic: "Transistors",
            question: "When a standard Silicon NPN Bipolar Junction Transistor is driven into 'hard saturation' (fully turned ON as a switch), the voltage drop measured between the Collector and Emitter (Vce_sat) is typically:",
            options: [
                "0.7 V", 
                "0.0 V (A perfect short circuit)", 
                "Equal to the supply voltage (Vcc)"
            ],
            correct: "Approximately 0.2 V to 0.3 V"
        };
    },

    // 54. Amplifiers: Class C Operation (Static)
    () => {
        return {
            topic: "Amplifiers",
            question: "In a Class C amplifier, the transistor is biased well below cutoff. As a result, collector current flows for what portion of the input AC cycle?",
            options: [
                "Exactly 180 degrees (one half-cycle)", 
                "Between 180 and 360 degrees", 
                "Exactly 360 degrees (continuously)"
            ],
            correct: "Significantly less than 180 degrees (often 90 to 120 degrees)"
        };
    },

    // 55. Transistors: Beta from Alpha (Dynamic)
    () => {
        // Alpha is always slightly less than 1 (e.g., 0.95 to 0.99)
        const alphas = [0.95, 0.96, 0.97, 0.98, 0.99];
        const alpha = alphas[Math.floor(Math.random() * alphas.length)];
        
        // Beta = Alpha / (1 - Alpha)
        const beta = Math.round(alpha / (1 - alpha));
        
        const d1 = (1 - alpha).toFixed(2);
        const d2 = ((1 - alpha) / alpha).toFixed(3); // Flipped formula
        const d3 = (alpha * 100).toFixed(0); 
        
        return {
            topic: "Transistors",
            question: `A transistor has a Common-Base current gain (Alpha) of ${alpha}. Calculate its approximate Common-Emitter current gain (Beta).`,
            options: [
                `${d1}`, 
                `${d2}`, 
                `${d3}`
            ],
            correct: `${beta}`
        };
    },

    // 56. Servomechanisms: Differential Synchro (Static)
    () => {
        return {
            topic: "Servomechanisms",
            question: "What is the primary function of a Synchro Differential Transmitter (TDX) in a servo loop?",
            options: [
                "To convert a high-voltage AC input into a low-voltage DC output", 
                "To damp out mechanical oscillations and prevent 'hunting'", 
                "To isolate the control transmitter from the control transformer electrically"
            ],
            correct: "To accept two inputs (one electrical, one mechanical) and output an electrical signal representing their sum or difference"
        };
    },

    // 57. Special Diodes: Diac (Static)
    () => {
        return {
            topic: "Special Diodes",
            question: "Which semiconductor device consists of two parallel, inverse-connected semiconductor layers and is commonly used to provide a sharp, bidirectional trigger pulse to the gate of a Triac?",
            options: [
                "Silicon-Controlled Rectifier (SCR)", 
                "Unijunction Transistor (UJT)", 
                "Schottky Diode"
            ],
            correct: "Diac"
        };
    },

    // 58. Zener Diode Power Calculation (Dynamic)
    () => {
        const vz = Math.floor(Math.random() * 5) + 5; // 5 to 9V
        const iz = Math.floor(Math.random() * 30) + 10; // 10 to 39mA
        
        // P = V * I
        const power = vz * iz; 
        
        const d1 = (iz / vz).toFixed(1);
        const d2 = (vz / iz).toFixed(2);
        const d3 = (power / 1000).toFixed(4); // W instead of mW, but labelled mW
        
        return {
            topic: "Diodes",
            question: `A Zener diode with a breakdown voltage (Vz) of ${vz}V is regulating a circuit. If the current flowing backwards through the Zener (Iz) is ${iz}mA, how much power is the Zener dissipating?`,
            options: [
                `${d1} mW`, 
                `${d2} mW`, 
                `${d3} mW`
            ],
            correct: `${power} mW`
        };
    },

    // 59. Semiconductors: Covalent Bonds (Static)
    () => {
        return {
            topic: "Semiconductors",
            question: "In a pure (intrinsic) silicon crystal, atoms share valence electrons with adjacent atoms to form a stable lattice structure. What is the name of this type of atomic bond?",
            options: [
                "Ionic bond", 
                "Metallic bond", 
                "Electrostatic bond"
            ],
            correct: "Covalent bond"
        };
    },

    // 60. Printed Circuit Boards: Multilayer (Static)
    () => {
        return {
            topic: "Printed Circuit Boards",
            question: "Which statement best describes a 'multilayer' Printed Circuit Board (PCB)?",
            options: [
                "A standard PCB that has been coated with multiple layers of waterproof resin", 
                "A PCB that contains components mounted on both the top and bottom surfaces", 
                "A board comprising multiple smaller PCBs stacked with physical spacer standoffs"
            ],
            correct: "A single board consisting of multiple alternating layers of conductive copper tracks and insulating dielectric bonded together"
        };
    },
    // --- BATCH 8: ELECTRONIC FUNDAMENTALS (NICHE & DEEP DIVE) ---

    // 61. Transistors: Darlington Pair Calculation (Dynamic)
    () => {
        const beta1 = Math.floor(Math.random() * 50) + 50; // 50 to 99
        const beta2 = Math.floor(Math.random() * 50) + 50; // 50 to 99
        
        // Total Beta in a Darlington Pair is roughly Beta1 * Beta2
        const totalBeta = beta1 * beta2;
        
        const d1 = beta1 + beta2; // Added instead of multiplied
        const d2 = Math.round((beta1 + beta2) / 2); // Averaged
        const d3 = totalBeta * 10; 
        
        return {
            topic: "Transistors",
            question: `Two Bipolar Junction Transistors are connected in a Darlington Pair configuration to switch a heavy load. If transistor Q1 has a Beta (hFE) of ${beta1} and transistor Q2 has a Beta of ${beta2}, what is the approximate overall current gain of the pair? 

[Image of Darlington pair circuit]
`,
            options: [
                `${d1}`, 
                `${d2}`, 
                `${d3}`
            ],
            correct: `${totalBeta}`
        };
    },

    // 62. Special Transistors: UJT (Static)
    () => {
        return {
            topic: "Transistors",
            question: "The Unijunction Transistor (UJT) is a three-terminal device that exhibits a negative resistance characteristic. What is its most common application in aviation electronics?",
            options: [
                "High-fidelity audio signal amplification", 
                "Regulating voltage in high-current power supplies", 
                "Demodulating frequency-modulated (FM) radio signals"
            ],
            correct: "Acting as a relaxation oscillator to provide trigger pulses for SCRs and Triacs"
        };
    },

    // 63. Operational Amplifiers: Slew Rate (Static)
    () => {
        return {
            topic: "Operational Amplifiers",
            question: "In the context of Operational Amplifiers, what does the term 'Slew Rate' define? ",
            options: [
                "The maximum input voltage difference allowed before the internal transistors burn out", 
                "The minimum frequency required to achieve unity gain", 
                "The ratio of the differential gain to the common-mode gain"
            ],
            correct: "The maximum rate at which the output voltage can change, usually measured in Volts per microsecond (V/µs)"
        };
    },

    // 64. Diode Applications: Clampers vs Clippers (Static)
    () => {
        return {
            topic: "Diodes",
            question: "A diode 'Clamper' circuit (also known as a DC restorer) is used to:",
            options: [
                "Cut off the positive or negative peaks of an AC waveform to protect sensitive components", 
                "Convert a smooth DC voltage into a pulsed AC waveform", 
                "Regulate a varying DC voltage to a perfectly flat, constant level"
            ],
            correct: "Add a specific DC voltage level to an AC signal, shifting the entire waveform up or down without changing its shape"
        };
    },

    // 65. Sensors: Hall Effect (Static)
    () => {
        return {
            topic: "Sensors & Transducers",
            question: "A Hall Effect sensor is commonly used in aircraft systems to measure RPM or detect proximity. How does it operate?",
            options: [
                "It uses a piezoelectric crystal that generates a voltage when physically compressed", 
                "It measures the change in light intensity as a slotted wheel passes an LED", 
                "It utilizes a bimetallic strip that bends and closes a contact when heated by electrical current"
            ],
            correct: "It produces a small transverse voltage across a semiconductor when it is exposed to a perpendicular magnetic field"
        };
    },

    // 66. Operational Amplifiers: Differentiator (Static)
    () => {
        return {
            topic: "Operational Amplifiers",
            question: "An Op-Amp Differentiator circuit produces an output voltage that is proportional to the rate of change of the input voltage. How is this circuit configured?",
            options: [
                "A capacitor is placed in the feedback loop, and a resistor is placed at the input", 
                "Two identical resistors are placed at both the inverting and non-inverting inputs", 
                "A Zener diode is placed in the feedback loop to limit the output"
            ],
            correct: "A capacitor is placed at the input, and a resistor is placed in the feedback loop"
        };
    },

    // 67. Digital Logic: Full Adder (Static)
    () => {
        return {
            topic: "Digital Logic",
            question: "In digital arithmetic circuits, what is the functional difference between a 'Half-Adder' and a 'Full-Adder'?",
            options: [
                "A Half-Adder can only add 4 bits, while a Full-Adder can add 8 bits", 
                "A Half-Adder produces a 'Sum' but no 'Carry' output", 
                "A Full-Adder uses analog Op-Amps, while a Half-Adder uses digital gates"
            ],
            correct: "A Full-Adder has a 'Carry-In' input from a previous stage, while a Half-Adder does not"
        };
    },

    // 68. Digital Logic: Shift Registers (Static)
    () => {
        return {
            topic: "Digital Logic",
            question: "A 'Shift Register' made from a cascade of Flip-Flops is primarily used in digital systems to:",
            options: [
                "Amplify weak digital pulses before transmitting them over long cables", 
                "Convert analog sensor voltages into a binary data stream", 
                "Perform high-speed multiplication of binary numbers"
            ],
            correct: "Temporarily store binary data and convert it between serial and parallel formats"
        };
    },

    // 69. Op-Amps: CMRR Calculation (Dynamic)
    () => {
        const diffGain = Math.floor(Math.random() * 5 + 5) * 10000; // 50,000 to 100,000
        const cmGain = Math.floor(Math.random() * 4) + 1; // 1 to 4
        
        // CMRR (ratio) = Differential Gain / Common Mode Gain
        const cmrr = Math.round(diffGain / cmGain);
        
        const d1 = diffGain * cmGain; // Multiplied instead of divided
        const d2 = Math.round(cmGain / diffGain); // Flipped division
        const d3 = diffGain + cmGain; 
        
        return {
            topic: "Operational Amplifiers",
            question: `An Operational Amplifier has an open-loop Differential Gain of ${diffGain} and a Common-Mode Gain of ${cmGain}. What is the Common-Mode Rejection Ratio (CMRR) of this Op-Amp expressed as a simple ratio?`,
            options: [
                `${d1}`, 
                `${d2}`, 
                `${d3}`
            ],
            correct: `${cmrr}`
        };
    },

    // 70. Amplifiers: Common-Base Characteristics (Static)
    () => {
        return {
            topic: "Amplifiers",
            question: "Which of the following describes the operational characteristics of a Common-Base (CB) transistor amplifier?",
            options: [
                "High current gain, high voltage gain, and a 180-degree phase shift", 
                "High current gain, voltage gain of less than 1, and no phase shift", 
                "Low voltage gain, infinite input impedance, and a 180-degree phase shift"
            ],
            correct: "Current gain of less than 1 (Alpha), high voltage gain, no phase shift, and excellent high-frequency response"
        };
    },

    // 71. Special Diodes: Tunnel Diode (Static)
    () => {
        return {
            topic: "Special Diodes",
            question: "A Tunnel Diode is heavily doped, causing the depletion region to be extremely thin. What unique characteristic does this give the component?",
            options: [
                "It emits extremely bright laser light when forward-biased", 
                "It acts as a perfect insulator until a specific reverse voltage is hit", 
                "It absorbs surrounding heat and converts it directly into electricity"
            ],
            correct: "It exhibits a 'negative resistance' region where an increase in forward voltage actually causes a decrease in forward current"
        };
    },

    // 72. Printed Circuit Boards: Through-Hole vs SMT (Static)
    () => {
        return {
            topic: "Printed Circuit Boards",
            question: "Compared to traditional 'Through-Hole' components, what is the primary advantage of Surface Mount Technology (SMT) in modern aircraft avionics?",
            options: [
                "SMT components can dissipate significantly more heat than Through-Hole components", 
                "SMT boards are flexible and can be bent to fit inside curved aircraft panels", 
                "SMT components require much less soldering, making them easier to replace by hand"
            ],
            correct: "SMT allows for much higher component density, reducing the overall size and weight of the PCB assembly"
        };
    },

    // 73. Transistors: JFET Biasing (Static)
    () => {
        return {
            topic: "Transistors",
            question: "For an N-Channel Junction Field Effect Transistor (JFET) to operate correctly in its active region, how must the Gate-to-Source junction be biased?",
            options: [
                "It must be heavily forward-biased to allow maximum gate current", 
                "It requires a high-frequency alternating current (AC) bias", 
                "The Gate and Source must be shorted directly together"
            ],
            correct: "It must always be reverse-biased to control the width of the depletion region"
        };
    },

    // 74. Servomechanisms: Velocity Feedback (Static)
    () => {
        return {
            topic: "Servomechanisms",
            question: "In a closed-loop servomechanism, if the system gain is set too high, the load will 'overshoot' its target and begin to oscillate (hunt). How is this typically corrected electronically?",
            options: [
                "By installing heavy physical flywheels on the motor shaft to increase friction", 
                "By using a step-down transformer to reduce the voltage sent to the control transmitter", 
                "By placing a large capacitor in series with the motor armatures"
            ],
            correct: "By introducing a velocity feedback signal from a tachogenerator that opposes the main error signal as the motor speeds up"
        };
    },

    // 75. Numbering Systems: Two's Complement (Static)
    () => {
        return {
            topic: "Numbering Systems",
            question: "In microprocessor systems, the 'Two's Complement' method is commonly used to:",
            options: [
                "Convert analog signals into 8-bit digital words", 
                "Double the clock speed of the CPU", 
                "Check for parity errors during serial data transmission"
            ],
            correct: "Represent negative binary numbers so the ALU can perform subtraction using addition logic"
        };
    },
    // --- BATCH 9: ELECTRONIC FUNDAMENTALS (VISUAL & SCHEMATICS) ---

    // 76. Visual: Non-Inverting Op-Amp Calculation (Dynamic)
    () => {
        const rin = Math.floor(Math.random() * 5) + 2; // 2 to 6 kOhm
        const multiplier = Math.floor(Math.random() * 6) + 2; // 2 to 7
        const rf = rin * multiplier; 
        const vin = Math.floor(Math.random() * 3) + 2; // 2 to 4 V
        
        // Vout = Vin * (1 + (Rf / Rin))
        const gain = 1 + (rf / rin);
        const vout = vin * gain;
        
        const d1 = vin * (rf / rin); // Used Inverting Gain formula
        const d2 = vout * -1; // Added a negative sign incorrectly
        const d3 = (vin * (1 + (rin / rf))).toFixed(1); // Flipped the resistors
        
        return {
            topic: "Operational Amplifiers",
            question: `Refer to the provided schematic. If R_in is ${rin} kΩ, R_f is ${rf} kΩ, and V_in is +${vin}V DC, what will the output voltage (V_out) be?`,
            img: "mod4/opamp_circuit.png",
            options: [
                `${d1} V`, 
                `${d2} V`, 
                `${d3} V`
            ],
            correct: `${vout} V`
        };
    },

    // 77. Visual: Non-Inverting Amplifier Identification (Static)
    () => {
        return {
            topic: "Operational Amplifiers",
            question: "Refer to the provided schematic. Based on the signal input location and the feedback loop, what specific type of amplifier configuration is shown?",
            img: "mod4/opamp_circuit.png",
            options: [
                "Inverting Amplifier", 
                "Differential Amplifier", 
                "Integrator"
            ],
            correct: "Non-Inverting Amplifier"
        };
    },

    // 78. Visual: Bridge Rectifier Identification (Static)
    () => {
        return {
            topic: "Power Supplies",
            question: "Refer to the provided schematic. What is the correct name for this standard diode configuration used to convert AC to DC?",
            img: "mod4/bridge_rectifier.png",
            options: [
                "Center-Tapped Half-Wave Rectifier", 
                "Voltage Doubler Cascade", 
                "Push-Pull Clamper Circuit"
            ],
            correct: "Full-Wave Bridge Rectifier"
        };
    },

    // 79. Visual: Bridge Rectifier Diode Count (Dynamic)
    () => {
        const freq = [50, 60, 400][Math.floor(Math.random() * 3)];
        
        return {
            topic: "Power Supplies",
            question: `Refer to the provided schematic. If an aircraft AC frequency of ${freq} Hz is applied to the input terminals, how many of the diodes are forward-biased (conducting) at any given instant during a single AC half-cycle?`,
            img: "mod4/bridge_rectifier.png",
            options: [
                "One diode", 
                "All four diodes simultaneously", 
                "None, unless a capacitor is added"
            ],
            correct: "Two diodes"
        };
    },

    // 80. Visual: Combinational Logic Boolean Expression (Static)
    () => {
        return {
            topic: "Digital Logic",
            question: "Refer to the provided logic circuit diagram. Which of the following Boolean algebraic expressions correctly represents the output (Y)?",
            img: "mod4/logic_circuit.png",
            options: [
                "Y = (A + B) • C", 
                "Y = (A ⊕ B) + C", 
                "Y = (A • B) • C"
            ],
            correct: "Y = (A • B) + C"
        };
    },
    // --- BATCH 10: ELECTRONIC FUNDAMENTALS (VISUAL & SCHEMATICS 2) ---

    // 81. Visual: Inverting Op-Amp Calculation (Dynamic)
    () => {
        const rin = Math.floor(Math.random() * 4) + 2; // 2 to 5 kOhm
        const multiplier = Math.floor(Math.random() * 5) + 3; // 3 to 7
        const rf = rin * multiplier; 
        const vin = Math.floor(Math.random() * 3) + 1; // 1 to 3 V
        
        // Vout = Vin * -(Rf / Rin)
        const vout = vin * -(rf / rin);
        
        const d1 = Math.abs(vout); // Forgot the negative inversion
        const d2 = vin * (1 + (rf / rin)); // Used Non-Inverting formula
        const d3 = (vin * -(rin / rf)).toFixed(2); // Flipped the resistors
        
        return {
            topic: "Operational Amplifiers",
            question: `Refer to the provided schematic. If R_in is ${rin} kΩ, R_f is ${rf} kΩ, and V_in is a +${vin}V DC signal, what will the output voltage (V_out) be?`,
            img: "mod4/inverting_opamp.png",
            options: [
                `${d1} V`, 
                `${d2} V`, 
                `${d3} V`
            ],
            correct: `${vout} V`
        };
    },

    // 82. Visual: Zener Regulator Purpose (Static)
    () => {
        return {
            topic: "Diodes",
            question: "Refer to the provided schematic. What is the primary purpose of the resistor labeled 'R_s' in this specific circuit configuration?",
            img: "mod4/zener_regulator.png",
            options: [
                "To set the output frequency of the oscillator", 
                "To increase the overall output voltage (V_out) above V_in", 
                "To act as a load to completely drain the circuit when power is removed"
            ],
            correct: "To drop excess voltage and limit the current flowing through the Zener diode (D_z) to a safe level"
        };
    },

    // 83. Visual: Zener Current Calculation (Dynamic)
    () => {
        const vin = Math.floor(Math.random() * 5) + 20; // 20 to 24 V
        const vz = 12; // Standard 12V Zener
        const rs = Math.floor(Math.random() * 3 + 2) * 100; // 200, 300, 400 ohms
        const iload = Math.floor(Math.random() * 15) + 10; // 10 to 24 mA load current
        
        // Is = (Vin - Vz) / Rs
        const is_amps = (vin - vz) / rs;
        const is_ma = Math.round(is_amps * 1000);
        
        // Iz = Is - Iload
        const iz = is_ma - iload;
        
        const d1 = is_ma; // Forgot to subtract the load current
        const d2 = is_ma + iload; // Added instead of subtracted
        const d3 = Math.round((vin / rs) * 1000); // Ignored the Zener voltage entirely
        
        return {
            topic: "Diodes",
            question: `Refer to the provided schematic. V_in is ${vin}V, D_z is a ${vz}V Zener, and R_s is ${rs} Ω. If the load resistor (R_L) is currently drawing ${iload} mA of current, approximately how much current is flowing through the Zener diode (D_z)?`,
            img: "mod4/zener_regulator.png",
            options: [
                `${d1} mA`, 
                `${d2} mA`, 
                `${d3} mA`
            ],
            correct: `${iz} mA`
        };
    },

    // 84. Visual: RC Filter Identification (Static)
    () => {
        return {
            topic: "Filters",
            question: "Refer to the provided schematic. Based on the arrangement of the resistor and capacitor relative to the output, what type of circuit is this?",
            img: "mod4/rc_lowpass.png",
            options: [
                "High-Pass Filter", 
                "Band-Pass Filter", 
                "Band-Stop (Notch) Filter"
            ],
            correct: "Low-Pass Filter"
        };
    },

    // 85. Visual: RC Filter Cutoff Frequency (Dynamic)
    () => {
        const r_k = Math.floor(Math.random() * 5) + 1; // 1 to 5 kOhm
        const c_uF = [0.1, 0.22, 0.47, 1.0][Math.floor(Math.random() * 4)];
        
        const r_ohms = r_k * 1000;
        const c_farads = c_uF / 1000000;
        
        // f_c = 1 / (2 * Pi * R * C)
        const fc = Math.round(1 / (2 * Math.PI * r_ohms * c_farads));
        
        const d1 = Math.round(1 / (r_ohms * c_farads)); // Forgot 2*Pi
        const d2 = Math.round(2 * Math.PI * r_ohms * c_farads * 1000000); // Multiplied instead of divided
        const d3 = Math.round(1 / (2 * Math.PI * r_k * c_uF)); // Didn't convert kOhm/uF to base units
        
        return {
            topic: "Filters",
            question: `Refer to the provided schematic. If R is ${r_k} kΩ and C is ${c_uF} µF, what is the approximate cutoff frequency (-3dB point) of this filter?`,
            img: "mod4/rc_lowpass.png",
            options: [
                `${d1} Hz`, 
                `${d2} Hz`, 
                `${d3} Hz`
            ],
            correct: `${fc} Hz`
        };
    },
        // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Semiconductors",
            question: "In intrinsic silicon at room temperature, how do the number of free electrons compare to the number of holes?",
            options: ["More electrons than holes", "More holes than electrons", "No electrons or holes exist"],
            correct: "Equal number of free electrons and holes"
            };
        },
            () => {
        return {
            topic: "Semiconductors",
            question: "What type of impurity is added to pure silicon to create a P-type semiconductor?",
            options: ["Pentavalent", "Hexavalent", "Monovalent"],
            correct: "Trivalent"
            };
        },
            () => {
        return {
            topic: "Semiconductors",
            question: "The region near a PN junction that is completely empty of free charge carriers is called the:",
            options: ["Saturation region", "Active region", "Ohmic region"],
            correct: "Depletion region"
            };
        },
            () => {
        return {
            topic: "Semiconductors",
            question: "What is the typical forward voltage drop of a Germanium diode?",
            options: ["0.7V", "1.2V", "0.1V"],
            correct: "0.3V"
            };
        },
            () => {
        return {
            topic: "Diodes",
            question: "When a PN junction diode is reverse-biased, what happens to the width of its depletion layer?",
            options: ["It decreases", "It completely disappears", "It remains unchanged"],
            correct: "It increases"
            };
        },
            () => {
        return {
            topic: "Diodes",
            question: "Which type of diode is specifically designed to operate normally in its reverse breakdown region?",
            options: ["Light Emitting Diode", "Varactor Diode", "Schottky Diode"],
            correct: "Zener Diode"
            };
        },
            () => {
        return {
            topic: "Diodes",
            question: "What is the main advantage of a Schottky diode over a standard silicon PN junction diode?",
            options: ["Higher reverse breakdown voltage", "Higher power dissipation", "Ability to emit visible light"],
            correct: "Lower forward voltage drop and faster switching speed"
            };
        },
            () => {
        return {
            topic: "Diodes",
            question: "A Varactor diode is used primarily in electronic circuits as a voltage-variable:",
            options: ["Resistor", "Inductor", "Transistor"],
            correct: "Capacitor"
            };
        },
            () => {
        return {
            topic: "Power Supplies",
            question: "A standard half-wave rectifier circuit uses how many diodes?",
            options: ["Two", "Four", "Six"],
            correct: "One"
            };
        },
            () => {
        return {
            topic: "Power Supplies",
            question: "In a bridge rectifier circuit, how many diodes are forward-biased (conducting) during any single half-cycle of the AC input?",
            options: ["One", "Three", "Four"],
            correct: "Two"
            };
        },
            () => {
        return {
            topic: "Power Supplies",
            question: "What component is typically added in parallel with the load to filter the pulsating DC output of a basic rectifier?",
            options: ["Inductor", "Resistor", "Zener Diode"],
            correct: "Capacitor"
            };
        },
            () => {
        return {
            topic: "Diodes",
            question: "What semiconductor material compound is commonly used to produce a red Light Emitting Diode (LED)?",
            options: ["Pure Silicon", "Pure Germanium", "Carbon Film"],
            correct: "Gallium Arsenide Phosphide"
            };
        },
            () => {
        return {
            topic: "Diodes",
            question: "For a Light Emitting Diode (LED) to emit light, its PN junction must be:",
            options: ["Reverse-biased", "Operated in the avalanche breakdown region", "Connected to an AC source only"],
            correct: "Forward-biased"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "What are the three terminals of a Bipolar Junction Transistor (BJT)?",
            options: ["Gate, Source, Drain", "Anode, Cathode, Gate", "Input, Output, Ground"],
            correct: "Base, Emitter, Collector"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "In an NPN transistor, what are the majority charge carriers in the emitter region?",
            options: ["Holes", "Positive ions", "Protons"],
            correct: "Electrons"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Which equation correctly defines the relationship between the currents in a BJT?",
            options: ["Ic = Ie + Ib", "Ib = Ic + Ie", "Ie = Ic - Ib"],
            correct: "Ie = Ic + Ib"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Which BJT amplifier configuration provides voltage gain, but has a current gain of less than 1?",
            options: ["Common-Emitter", "Common-Collector", "Differential Amplifier"],
            correct: "Common-Base"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Which BJT amplifier configuration is widely used for impedance matching and is also known as an Emitter Follower?",
            options: ["Common-Base", "Common-Emitter", "Darlington Pair"],
            correct: "Common-Collector"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "The ratio of DC collector current (Ic) to DC base current (Ib) is referred to as the transistor's:",
            options: ["Alpha", "Theta", "Gamma"],
            correct: "Beta (hFE)"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "Unlike a BJT, a Field Effect Transistor (FET) is fundamentally a:",
            options: ["Current-controlled device", "Power-controlled device", "Temperature-controlled device"],
            correct: "Voltage-controlled device"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "What are the three terminals of a Junction Field Effect Transistor (JFET)?",
            options: ["Base, Emitter, Collector", "Anode, Cathode, Gate", "Input, Output, Control"],
            correct: "Gate, Source, Drain"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "For an N-channel JFET to operate properly in its linear region, the gate-to-source junction must normally be:",
            options: ["Forward-biased", "Shorted together", "Left open-circuit"],
            correct: "Reverse-biased"
            };
        },
            () => {
        return {
            topic: "Transistors",
            question: "What is the primary operational advantage of a MOSFET over a standard BJT?",
            options: ["It can handle much higher currents", "It is cheaper to manufacture", "It operates at much higher temperatures"],
            correct: "It has an extremely high input impedance"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "In a Class A amplifier, the transistor is biased so that it conducts for what portion of the input signal cycle?",
            options: ["180 degrees", "90 degrees", "Less than 180 degrees"],
            correct: "The full 360 degrees"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "Which amplifier class is the most efficient, but causes the most severe signal distortion because it conducts for less than 180 degrees?",
            options: ["Class A", "Class AB", "Class B"],
            correct: "Class C"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "To prevent crossover distortion in a push-pull amplifier, the transistors are biased slightly into conduction. This mode is known as:",
            options: ["Class A operation", "Class B operation", "Class C operation"],
            correct: "Class AB operation"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "An ideal operational amplifier is considered to have an input impedance of:",
            options: ["Zero ohms", "50 ohms", "100 kOhms"],
            correct: "Infinity"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "In an inverting op-amp configuration, the input signal is applied to the:",
            options: ["Non-inverting input (+)", "Output terminal", "Power supply terminal"],
            correct: "Inverting input (-)"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "What is the primary purpose of adding negative feedback to an op-amp amplifier circuit?",
            options: ["To increase the open-loop gain to infinity", "To cause the amplifier to oscillate continuously", "To increase distortion levels"],
            correct: "To stabilize the gain and increase the overall bandwidth"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "The Common-Mode Rejection Ratio (CMRR) defines an op-amp's ability to:",
            options: ["Amplify low-frequency signals", "Reject high-frequency signals", "Amplify differences between its inputs"],
            correct: "Reject noise signals that appear simultaneously on both inputs"
            };
        },
            () => {
        return {
            topic: "Numbering Systems",
            question: "What is the base (radix) of the Hexadecimal numbering system?",
            options: ["2", "8", "10"],
            correct: "16"
            };
        },
            () => {
        return {
            topic: "Numbering Systems",
            question: "Convert the binary number 1010 to its decimal equivalent.",
            options: ["8", "12", "16"],
            correct: "10"
            };
        },
            () => {
        return {
            topic: "Numbering Systems",
            question: "What is the binary representation of the decimal number 7?",
            options: ["0101", "1000", "0110"],
            correct: "0111"
            };
        },
            () => {
        return {
            topic: "Digital Logic",
            question: "Which logic gate's output is HIGH (1) only when all of its inputs are HIGH (1)?",
            options: ["OR", "NAND", "XOR"],
            correct: "AND"
            };
        },
            () => {
        return {
            topic: "Digital Logic",
            question: "An inverter in digital logic is also known as a:",
            options: ["NAND gate", "NOR gate", "Buffer"],
            correct: "NOT gate"
            };
        },
            () => {
        return {
            topic: "Digital Logic",
            question: "Which standard logic gate mathematically represents Boolean addition?",
            options: ["AND", "NOT", "XOR"],
            correct: "OR"
            };
        },
            () => {
        return {
            topic: "Digital Logic",
            question: "A flip-flop is a bistable multivibrator circuit that is primarily used to store:",
            options: ["One byte of data", "One analog voltage level", "A continuous range of values"],
            correct: "One bit of binary data"
            };
        },
            () => {
        return {
            topic: "Digital Logic",
            question: "Which type of flip-flop is designed to toggle its output state upon every clock pulse when its inputs are tied HIGH?",
            options: ["D Flip-Flop", "RS Flip-Flop", "Latch"],
            correct: "JK Flip-Flop"
            };
        },
            () => {
        return {
            topic: "Digital Logic",
            question: "Which electronic device is used to convert an analog sensor voltage into a digital binary code for a microprocessor?",
            options: ["DAC", "Multiplexer", "Shift Register"],
            correct: "ADC"
            };
        },
            () => {
        return {
            topic: "Digital Logic",
            question: "A digital shift register is primarily constructed using a cascaded chain of:",
            options: ["Op-Amps", "Diodes", "Resistors"],
            correct: "Flip-Flops"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "What kind of signal is transmitted between the stators of a synchro transmitter and a synchro receiver?",
            options: ["Variable frequency AC", "Constant amplitude DC", "Pulse-width modulated digital signal"],
            correct: "Variable amplitude AC whose ratios depend on rotor angle"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "In a closed-loop servomechanism, what is the purpose of a tachogenerator?",
            options: ["To power the synchro transmitter", "To step down the main supply voltage", "To cool the servomotor"],
            correct: "To provide rate-of-movement feedback to prevent hunting"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "A Linear Variable Differential Transformer (LVDT) is an aviation sensor used to measure:",
            options: ["High voltages", "Rotational speed (RPM)", "Temperature variations"],
            correct: "Small physical linear displacements"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "A Synchro Control Transformer (CT) outputs an electrical signal from its rotor that represents:",
            options: ["The absolute position of the transmitter rotor", "The speed of the servomotor", "The supply voltage level"],
            correct: "The difference (error) between the transmitter and CT rotor positions"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "The 'deadband' of an aircraft servo system refers to:",
            options: ["The physical mechanical stop on the motor", "The time it takes for the motor to start moving", "The region where the motor oscillates uncontrollably"],
            correct: "A range of error signals too small to cause corrective motor movement"
            };
        },
            () => {
        return {
            topic: "Printed Circuit Boards",
            question: "What is the primary purpose of applying a conformal coating to an avionics PCB?",
            options: ["To improve the electrical conductivity of the copper tracks", "To act as a heat sink for the ICs", "To shield the board against EMI"],
            correct: "To protect the board against moisture, dust, and chemical contamination"
            };
        },
            () => {
        return {
            topic: "Sensors & Transducers",
            question: "A Hall Effect sensor requires a semiconductor material, an electric current, and what else to produce an output voltage?",
            options: ["A concentrated light source", "Heat", "Physical mechanical pressure"],
            correct: "A perpendicular magnetic field"
            };
        },
            () => {
        return {
            topic: "Thyristors",
            question: "Which device is a four-layer semiconductor that conducts in only one direction once it is triggered by a gate pulse?",
            options: ["Triac", "Diac", "UJT"],
            correct: "SCR (Silicon Controlled Rectifier)"
            };
        },
            () => {
        return {
            topic: "Optoelectronics",
            question: "Which component uses an internal LED and a phototransistor to transmit electrical signals between two completely isolated circuits?",
            options: ["Transformer", "Capacitor", "Inductor"],
            correct: "Optoisolator (Optocoupler)"
            };
        },
            () => {
        return {
            topic: "Printed Circuit Boards",
            question: "In Surface Mount Technology (SMT), the components are soldered directly to:",
            options: ["The pins of other components", "Through-holes drilled completely through the board", "Wire-wrap posts"],
            correct: "Conductive pads on the surface of the PCB"
            };
        },
            // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Integrated Circuits",
            question: "What was the primary motivation for developing integrated circuits (ICs) over modular printed circuit boards with discrete components?",
            options: ["To increase the power dissipation capabilities of the circuit", "To allow for easier manual repair of individual circuit stages", "To increase the operating voltage limits of the components"],
            correct: "To improve reliability and further increase packaging density by eliminating numerous bulky connections"
            };
        },
            () => {
        return {
            topic: "Digital Logic",
            question: "In digital logic, an AND gate functions similarly to:",
            options: ["Several switches connected in parallel", "A single normally-closed switch", "A variable resistor in series with a load"],
            correct: "Several switches connected in series where all must be closed to provide an output"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "Which of the following describes the characteristics of an IDEAL operational amplifier?",
            options: ["Zero input impedance and infinite output impedance", "Infinite input impedance and infinite output impedance", "Zero input impedance and zero output impedance"],
            correct: "Infinite input impedance and zero output impedance"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "What is the primary purpose of common-mode rejection in an operational amplifier?",
            options: ["To amplify differences between the two inputs to infinity", "To ensure the amplifier operates in the saturation region", "To allow the amplifier to oscillate continuously"],
            correct: "To cancel out unwanted noise signals that appear simultaneously and in-phase on both inputs"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "In an operational amplifier circuit, what is the primary effect of applying negative feedback?",
            options: ["It drives the amplifier into saturation more quickly", "It increases the overall open-loop voltage gain", "It causes the amplifier to act as an oscillator"],
            correct: "It reduces and stabilises the closed-loop voltage gain"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "An op-amp integrator circuit is constructed by placing which component in the feedback loop?",
            options: ["An inductor", "A variable resistor", "A Zener diode"],
            correct: "A capacitor"
            };
        },
            () => {
        return {
            topic: "Operational Amplifiers",
            question: "If an operational amplifier has a steady, constant-value DC voltage applied to its input, what will be the output of a differentiator circuit?",
            options: ["A steadily increasing positive voltage", "A steadily increasing negative voltage", "A continuous square wave"],
            correct: "Zero volts"
            };
        },
            () => {
        return {
            topic: "Amplifier Coupling",
            question: "In an RC-coupled amplifier, what causes the voltage gain to decrease considerably at low frequencies?",
            options: ["The high resistance of the load resistor", "The low inductive reactance of the bypass capacitor", "The high DC voltage blocking the transistor base"],
            correct: "The high capacitive reactance of the coupling capacitor"
            };
        },
            () => {
        return {
            topic: "Amplifier Coupling",
            question: "Which amplifier coupling method provides excellent impedance matching between stages but suffers from poor frequency response?",
            options: ["RC coupling", "Direct coupling", "LC coupling"],
            correct: "Transformer coupling"
            };
        },
            () => {
        return {
            topic: "Amplifier Coupling",
            question: "What is the primary disadvantage of using direct coupling in a multi-stage amplifier?",
            options: ["It completely blocks all DC voltages", "It cannot amplify low frequencies", "It requires expensive and bulky transformers"],
            correct: "Any DC instability or temperature drift in one stage is amplified by all subsequent stages"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "An amplifier biased such that it operates in the linear region for the entire 360 degrees of the input cycle is operating in:",
            options: ["Class B", "Class C", "Class AB"],
            correct: "Class A"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "Which class of amplifier only conducts for 180 degrees (exactly one half) of the input signal cycle?",
            options: ["Class A", "Class C", "Class AB"],
            correct: "Class B"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "What is the primary cause of crossover distortion in a Class B push-pull amplifier?",
            options: ["The transistors are biased too heavily into saturation", "The input frequency is too high for the transistors to switch", "The coupling capacitor is too large"],
            correct: "The time interval where the input signal is too low to overcome the base-emitter voltage of either transistor"
            };
        },
            () => {
        return {
            topic: "Amplifiers",
            question: "How is a Class C amplifier biased to achieve its very high efficiency?",
            options: ["It is biased slightly above cut-off", "It is biased exactly in the middle of the active region", "It is biased into hard saturation"],
            correct: "It is biased below cut-off, conducting for much less than 180 degrees of the cycle"
            };
        },
            () => {
        return {
            topic: "Printed Circuit Boards",
            question: "On a printed circuit board, what is the purpose of the solder mask?",
            options: ["To improve the electrical conductivity of the copper tracks", "To label the locations for different components", "To act as a heat sink for surface-mounted components"],
            correct: "To protect the tracks from corrosion and prevent solder from attaching outside connection points"
            };
        },
            () => {
        return {
            topic: "Printed Circuit Boards",
            question: "What is the electrical/physical difference between a via and a through-hole on a PCB?",
            options: ["A through-hole connects internal layers, while a via is only on the surface", "A via is unplated, while a through-hole is electroplated with copper", "Vias are exclusively used for mounting THT components"],
            correct: "A through-hole is sized for component pins to pass through, while a via merely connects different layers"
            };
        },
            () => {
        return {
            topic: "Printed Circuit Boards",
            question: "In multi-layer PCB design, what is a blind via?",
            options: ["A hole that completely passes through the board but is filled with solder", "A connection that only bridges two inner layers and cannot be seen from the outside", "A via that does not contain any electroplated copper"],
            correct: "A hole that connects the outside surface to an inner layer without protruding through the other side"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "What is the defining characteristic of a closed-loop control system compared to an open-loop system?",
            options: ["It requires continuous manual input from an operator", "It uses a timer to control the operation sequence", "It operates exclusively on digital signals"],
            correct: "It uses feedback to measure the difference between actual and desired results to correct errors"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "In an automatic flight control system, what is the purpose of a follow-up signal?",
            options: ["To boost the voltage of the primary command signal", "To alert the pilot that a turn has been completed", "To completely shut down the servomotor once null is reached"],
            correct: "To drive the control surface back to neutral to prevent the aircraft from overshooting the desired heading"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "In a servomechanism, what is hunting?",
            options: ["The failure of the motor to start when a command signal is sent", "The region around the null point where no correction occurs", "The manual adjustment of the control surfaces by the pilot"],
            correct: "The periodic oscillation of the system overshooting and undershooting the target position"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "The deadband of a servo system is defined as:",
            options: ["The physical limit of travel for a mechanical actuator", "The time delay between sending a signal and the motor moving", "The complete loss of electrical power to the servomotor"],
            correct: "An interval around the null point where the error signal is too small to cause a corrective movement"
            };
        },
            () => {
        return {
            topic: "Servomechanisms",
            question: "In a critically damped servo system, how does the system respond to a command?",
            options: ["It moves slowly and sluggishly towards the null point", "It moves quickly and oscillates several times before settling", "It continuously hunts around the null point"],
            correct: "It moves as quickly as possible toward the null point without overshooting at all"
            };
        },
            () => {
        return {
            topic: "Sensors & Transducers",
            question: "A Linear Variable Differential Transformer (LVDT) consists of:",
            options: ["Two primary windings and one secondary winding", "A primary winding and a solid copper core", "A rotating coil inside a permanent magnet stator"],
            correct: "One primary winding and two secondary windings connected in opposition"
            };
        },
            () => {
        return {
            topic: "Sensors & Transducers",
            question: "How does a Hall Effect sensor operate?",
            options: ["It measures changes in light intensity using a photodiode", "It generates a voltage when a piezoelectric crystal is physically compressed", "It uses a bimetallic strip that bends when heated by an electric current"],
            correct: "It produces a voltage across a semiconductor when exposed to a perpendicular magnetic field"
            };
        },
            () => {
        return {
            topic: "Synchros",
            question: "In a basic torque synchro system, what happens when the transmitter and receiver rotors are in identical positions (the null point)?",
            options: ["Maximum current flows through the stator coils", "The receiver rotor spins continuously", "The transmitter rotor locks in place"],
            correct: "The induced stator voltages are equal and opposite, resulting in zero stator current"
            };
        },
            () => {
        return {
            topic: "Synchros",
            question: "How does a Torque Differential Transmitter (TDX) differ electrically from a standard Torque Transmitter (TX)?",
            options: ["The TDX stator has two windings instead of three", "The TDX uses permanent magnets instead of coils", "The TDX requires a DC power supply"],
            correct: "The TDX rotor has three separate windings placed 120 degrees apart instead of a single winding"
            };
        },
            () => {
        return {
            topic: "Synchros",
            question: "When troubleshooting a synchro system, what symptom will occur if the R1 and R2 rotor leads are reversed?",
            options: ["The receiver will turn in the opposite direction to the transmitter", "The receiver will continuously oscillate (hunt)", "The receiver will not move at all"],
            correct: "The receiver will track in the correct direction but will have a constant 180-degree error"
            };
        },
            () => {
        return {
            topic: "Synchros",
            question: "What will happen in a synchro system if any two of the three stator leads (e.g., S1 and S2) are reversed?",
            options: ["The receiver will have a constant 120-degree error", "The receiver will lock at the 0-degree position", "The receiver will blow the system fuse"],
            correct: "The receiver will turn in the opposite direction to the transmitter"
            };
        },
            () => {
        return {
            topic: "Sensors & Transducers",
            question: "How does the internal construction of a resolver differ from a standard synchro?",
            options: ["It uses DC voltage instead of AC voltage", "It has three rotor windings and two stator windings", "It completely lacks a rotor"],
            correct: "It has two rotor windings and two stator windings, typically at 90 degrees to each other"
            };
        },
            () => {
        return {
            topic: "Sensors & Transducers",
            question: "In a capacitance transmitter used for position sensing, what changes to vary the capacitance?",
            options: ["The frequency of the AC supply", "The thickness of the wire used in the coils", "The amount of DC voltage applied"],
            correct: "The relative overlapping area (intermeshing) of the rotor and stator plates"
            };
        },
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
        }
];

// REGISTER MODULE 4
if (typeof registerModule !== 'undefined') {
    registerModule(
        "Module 4: Electronic Fundamentals",
        50, // Standard exam length
        function(count) {
            // Shuffle the pool
            const pool = [...electronicGenerators];
            for (let i = pool.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [pool[i], pool[j]] = [pool[j], pool[i]];
            }
            
            // Generate Questions
            return pool.slice(0, count).map(gen => {
                const data = gen();
                
                // Compatibility for standard format
                let finalOptions = [...data.options, data.correct];
                
                // Shuffle Options safely
                for (let i = finalOptions.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [finalOptions[i], finalOptions[j]] = [finalOptions[j], finalOptions[i]];
                }
                
                return {
                    topic: data.topic || "Electronic Fundamentals",
                    question: data.question,
                    img: data.img || null,
                    options: finalOptions,
                    correct: data.correct
                };
            });
        },
        `${electronicGenerators.length} Scenarios (CASA B2-04a)`
    );
}