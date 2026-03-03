/* MODULE 3: ELECTRICAL FUNDAMENTALS (CASA B-03) */
/* Covers: Electron Theory, DC, AC, Magnetism, Batteries, Generators, Motors */

const electricalGenerators = [

    // ======================================================
    // TOPIC 1: ELECTRON THEORY & STATIC
    // ======================================================
    () => { // Structure of Atom
        return {
            topic: "Electron Theory",
            q: `In an atom, the shell that determines the chemical properties and conductivity is the:`,
            a: `Valence Shell`,
            d: [`Inner Shell`, `Nucleus`, `Proton Shell`]
        };
    },
    () => { // Static Charge
        return {
            topic: "Electron Theory",
            q: `Coulomb's Law states that the force between two charges is inversely proportional to:`,
            a: `The square of the distance between them`,
            d: [`The distance between them`, `The sum of the charges`, `The surrounding medium`]
        };
    },
    () => { // Conventional Current
        return {
            topic: "Electron Theory",
            q: `Conventional Current flow theory states current flows from:`,
            a: `Positive to Negative`,
            d: [`Negative to Positive`, `North to South`, `High resistance to Low`]
        };
    },

    // ======================================================
    // TOPIC 2: DC CIRCUITS & OHM'S LAW
    // ======================================================
    () => { // Ohm's Law Voltage
        const I = rInt(2, 15);
        const R = rInt(5, 50);
        return {
            topic: "DC Circuits",
            q: `Current is ${I}A and Resistance is ${R}Ω. Calculate Voltage drop. (V=IR)`,
            a: `${I*R} V`,
            d: [`${(I/R).toFixed(2)} V`, `${I+R} V`, `${(R/I).toFixed(2)} V`]
        };
    },
    () => { // Power Calculation
        const V = 28;
        const I = rInt(5, 20);
        const P = V * I;
        return {
            topic: "DC Circuits",
            q: `Aircraft bus voltage 28V. Load draws ${I}A. Power consumed? (P=VI)`,
            a: `${P} W`,
            d: [`${(V/I).toFixed(1)} W`, `${V+I} W`, `${P/2} W`]
        };
    },
    () => { // Power Loss (I^2R)
        const I = rInt(2, 10);
        const R = pick([0.1, 0.5, 1, 2]); // Cable resistance
        const P = (I * I * R).toFixed(1);
        return {
            topic: "DC Circuits",
            q: `Current ${I}A flows through a cable with resistance ${R}Ω. Power loss (Heat)? (P=I²R)`,
            a: `${P} W`,
            d: [`${I*R} W`, `${I*R*2} W`, `${(I/R).toFixed(1)} W`]
        };
    },
    () => { // Series Resistance
        const r1 = rInt(10, 50);
        const r2 = rInt(10, 50);
        const r3 = rInt(10, 50);
        return {
            topic: "DC Circuits",
            q: `Three resistors (${r1}Ω, ${r2}Ω, ${r3}Ω) are in SERIES. Total Resistance?`,
            a: `${r1+r2+r3} Ω`,
            d: [`${(r1+r2+r3)/3} Ω`, `${r1} Ω`, `Zero`]
        };
    },
    () => { // Parallel Resistance (Equal)
        const r = pick([10, 20, 50, 100]);
        const n = pick([2, 4, 5]);
        const rt = r / n;
        return {
            topic: "DC Circuits",
            q: `${n} equal resistors of ${r}Ω each are connected in PARALLEL. Total Resistance?`,
            a: `${rt} Ω`,
            d: [`${r*n} Ω`, `${r} Ω`, `${rt*2} Ω`]
        };
    },
    () => { // Kirchhoff's Voltage Law
        return {
            topic: "DC Circuits",
            q: `Kirchhoff's Voltage Law (KVL) states that the algebraic sum of voltage drops in a closed loop equals:`,
            a: `The source voltage applied`,
            d: [`Zero current`, `Total Resistance`, `Infinite`]
        };
    },
    () => { // Wheatstone Bridge
        return {
            topic: "DC Circuits",
            q: `A Wheatstone Bridge is considered "balanced" when the galvanometer reads:`,
            a: `Zero Current (Null)`,
            d: [`Maximum Current`, `Source Voltage`, `Half Voltage`]
        };
    },

    // ======================================================
    // TOPIC 3: BATTERIES (Lead Acid & NiCd)
    // ======================================================
    () => { // Specific Gravity
        return {
            topic: "Batteries",
            q: `A fully charged Lead-Acid battery has a Specific Gravity of approx:`,
            a: `1.275 - 1.300`,
            d: [`1.100 - 1.150`, `1.500 - 1.600`, `1.000`]
        };
    },
    () => { // Thermal Runaway
        return {
            topic: "Batteries",
            q: `Thermal Runaway is a condition primarily associated with which battery type?`,
            a: `Nickel-Cadmium (NiCd)`,
            d: [`Lead-Acid`, `Lithium-Ion (Non-rechargeable)`, `Alkaline`]
        };
    },
    () => { // Internal Resistance NiCd
        return {
            topic: "Batteries",
            q: `Compared to Lead-Acid, NiCd batteries have:`,
            a: `Lower Internal Resistance`,
            d: [`Higher Internal Resistance`, `Zero Internal Resistance`, `Variable Voltage`]
        };
    },
    () => { // Battery Capacity
        const ah = rInt(20, 50);
        const amps = rInt(2, 10);
        const hrs = ah / amps;
        return {
            topic: "Batteries",
            q: `A ${ah} Ah battery delivering ${amps} Amps will last theoretically for:`,
            a: `${hrs} Hours`,
            d: [`${ah*amps} Hours`, `${amps} Hours`, `${hrs*0.5} Hours`]
        };
    },
    () => { // Series Connection
        return {
            topic: "Batteries",
            q: `Connecting batteries in SERIES increases:`,
            a: `Voltage`,
            d: [`Current Capacity (Ah)`, `Internal Resistance only`, `Weight only`]
        };
    },

    // ======================================================
    // TOPIC 4: MAGNETISM & INDUCTANCE
    // ======================================================
    () => { // Permeability
        return {
            topic: "Magnetism",
            q: `The ease with which magnetic flux lines can be established in a material is called:`,
            a: `Permeability`,
            d: [`Retentivity`, `Reluctance`, `Conductivity`]
        };
    },
    () => { // Retentivity
        return {
            topic: "Magnetism",
            q: `The ability of a material to retain magnetism after the magnetizing force is removed is:`,
            a: `Retentivity`,
            d: [`Permeability`, `Reluctance`, `Saturation`]
        };
    },
    () => { // Motor Rule
        return {
            topic: "Magnetism",
            q: `Which rule is used for MOTORS to determine direction of motion?`,
            a: `Fleming's Left Hand Rule`,
            d: [`Fleming's Right Hand Rule`, `Corkscrew Rule`, `Lenz's Law`]
        };
    },
    () => { // Generator Rule
        return {
            topic: "Magnetism",
            q: `Which rule is used for GENERATORS to determine induced current direction?`,
            a: `Fleming's Right Hand Rule`,
            d: [`Fleming's Left Hand Rule`, `Right Hand Grip Rule`, `Ohm's Law`]
        };
    },
    () => { // Lenz's Law
        return {
            topic: "Magnetism",
            q: `Lenz's Law states that an induced EMF always:`,
            a: `Opposes the change that caused it`,
            d: [`Aids the change that caused it`, `Is zero`, `Increases resistance`]
        };
    },

    // ======================================================
    // TOPIC 5: AC THEORY
    // ======================================================
    () => { // Frequency Calc
        const t = pick([0.01, 0.02, 0.004, 0.001]); // seconds
        const f = 1 / t;
        return {
            topic: "AC Theory",
            q: `Calculate Frequency if Period (T) is ${t} seconds. (f=1/T)`,
            a: `${f} Hz`,
            d: [`${t*100} Hz`, `${f/2} Hz`, `${f*10} Hz`]
        };
    },
    () => { // RMS Calculation
        const peak = rInt(100, 340);
        const rms = (peak * 0.707).toFixed(1);
        return {
            topic: "AC Theory",
            q: `AC Peak Voltage is ${peak}V. Calculate the RMS value.`,
            a: `${rms} V`,
            d: [`${peak} V`, `${(peak*1.414).toFixed(1)} V`, `${peak/2} V`]
        };
    },
    () => { // Capacitive Circuit
        return {
            topic: "AC Theory",
            q: `In a purely CAPACITIVE circuit (ICE), current:`,
            a: `Leads Voltage by 90°`,
            d: [`Lags Voltage by 90°`, `Is in phase with Voltage`, `Leads Voltage by 45°`]
        };
    },
    () => { // Inductive Circuit
        return {
            topic: "AC Theory",
            q: `In a purely INDUCTIVE circuit (CIVIL), current:`,
            a: `Lags Voltage by 90°`,
            d: [`Leads Voltage by 90°`, `Is in phase with Voltage`, `Lags Voltage by 45°`]
        };
    },
    () => { // Power Factor
        return {
            topic: "AC Theory",
            q: `The ratio of True Power (kW) to Apparent Power (kVA) is called:`,
            a: `Power Factor`,
            d: [`Form Factor`, `Peak Factor`, `Resonance`]
        };
    },
    () => { // Three Phase
        return {
            topic: "AC Theory",
            q: `In a 3-phase system, the phases are separated by:`,
            a: `120°`,
            d: [`90°`, `180°`, `360°`]
        };
    },

    // ======================================================
    // TOPIC 6: TRANSFORMERS
    // ======================================================
    () => { // Turns Ratio
        const Np = 500, Ns = 100;
        const Vp = rInt(100, 240);
        const Vs = (Vp * Ns) / Np;
        return {
            topic: "Transformers",
            q: `Transformer: Primary ${Np} turns, Secondary ${Ns} turns. Input ${Vp}V. Output Voltage?`,
            a: `${Vs} V`,
            d: [`${Vp} V`, `${Vp*5} V`, `${Vs/2} V`]
        };
    },
    () => { // Power in Transformer
        return {
            topic: "Transformers",
            q: `If a transformer steps UP voltage, it must step DOWN: (assuming P=VI const)`,
            a: `Current`,
            d: [`Power`, `Frequency`, `Resistance`]
        };
    },
    () => { // Eddy Currents
        return {
            topic: "Transformers",
            q: `Transformer cores are laminated to reduce losses caused by:`,
            a: `Eddy Currents`,
            d: [`Hysteresis`, `Copper losses`, `Flux leakage`]
        };
    },

    // ======================================================
    // TOPIC 7: GENERATORS & MOTORS
    // ======================================================
    () => { // Commutator
        return {
            topic: "Electrical Machines",
            q: `The function of the Commutator in a DC Generator is to:`,
            a: `Rectify AC induced in armature to DC output`,
            d: [`Convert DC to AC`, `Connect the field windings`, `Reduce sparking`]
        };
    },
    () => { // Back EMF
        return {
            topic: "Electrical Machines",
            q: `In a DC Motor, Back EMF:`,
            a: `Opposes the applied voltage`,
            d: [`Aids the applied voltage`, `Increases with load`, `Is zero at full speed`]
        };
    },
    () => { // Series Wound Motor
        return {
            topic: "Electrical Machines",
            q: `Which DC Motor has the highest starting torque (used for starters)?`,
            a: `Series Wound`,
            d: [`Shunt Wound`, `Compound Wound`, `Induction Motor`]
        };
    },
    () => { // Shunt Wound Motor
        return {
            topic: "Electrical Machines",
            q: `Which DC Motor is known for constant speed characteristics?`,
            a: `Shunt Wound`,
            d: [`Series Wound`, `Split Phase`, `Universal Motor`]
        };
    },
    () => { // Alternator Frequency
        // f = (P * N) / 120
        const P = pick([2, 4, 6]);
        const N = pick([3000, 6000]); // RPM
        const f = (P * N) / 120;
        return {
            topic: "Electrical Machines",
            q: `AC Generator: ${P} Poles rotating at ${N} RPM. Calculate Frequency. (f=PN/120)`,
            a: `${f} Hz`,
            d: [`${f/2} Hz`, `60 Hz`, `400 Hz`]
        };
    },
    () => { // Induction Motor
        return {
            topic: "Electrical Machines",
            q: `The difference between Synchronous Speed and Rotor Speed in an induction motor is:`,
            a: `Slip`,
            d: [`Lag`, `Phase Shift`, `Hysteresis`]
        };
    },
    () => { // Starter Generator
        return {
            topic: "Electrical Machines",
            q: `A Starter-Generator usually has:`,
            a: `Series windings for starting, Shunt for generating`,
            d: [`Shunt for starting, Series for generating`, `Permanent magnets only`, `Two armatures`]
        };
    },

    // ======================================================
    // TOPIC 8: CAPACITANCE & INDUCTANCE
    // ======================================================
    () => { // Time Constant (RC)
        const R = 1000; // Ohms
        const C = pick([0.001, 0.002]); // Farads
        const t = R * C;
        return {
            topic: "DC Circuits",
            q: `Time Constant (τ) for R=${R}Ω and C=${C}F? (τ=RC)`,
            a: `${t} s`,
            d: [`${t*5} s`, `${t/10} s`, `1 s`]
        };
    },
    () => { // Capacitors in Parallel
        const c1 = 10, c2 = 20;
        return {
            topic: "DC Circuits",
            q: `Capacitors ${c1}µF and ${c2}µF in PARALLEL. Total Capacitance?`,
            a: `${c1+c2} µF`,
            d: [`${(c1*c2)/(c1+c2)} µF`, `5 µF`, `15 µF`]
        };
    },
    () => { // Capacitors in Series
        const c = 10;
        return {
            topic: "DC Circuits",
            q: `Two ${c}µF capacitors in SERIES. Total Capacitance?`,
            a: `5 µF`,
            d: [`20 µF`, `10 µF`, `0 µF`]
        };
    },
    // ======================================================
    // BATCH 2: RESISTORS & COLOR CODES
    // ======================================================
    () => { // Resistor Color Code (3-Band)
        const colors = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Grey", "White"];
        const d1 = rInt(1, 9); // First digit can't be black
        const d2 = rInt(0, 9);
        const mult = rInt(1, 4); // Multiplier 10^1 to 10^4
        
        const val = (d1 * 10 + d2) * Math.pow(10, mult);
        const kVal = val / 1000;
        
        return {
            topic: "DC Circuits",
            q: `Resistor bands: ${colors[d1]}, ${colors[d2]}, ${colors[mult]}. Value?`,
            a: `${kVal} kΩ`,
            d: [`${kVal/10} kΩ`, `${kVal*10} kΩ`, `${val} kΩ`]
        };
    },
    () => { // Resistor Tolerance
        return {
            topic: "DC Circuits",
            q: `A resistor with a GOLD tolerance band has a tolerance of:`,
            a: `±5%`,
            d: [`±10%`, `±1%`, `±20%`]
        };
    },
    () => { // Resistor Tolerance (Silver)
        return {
            topic: "DC Circuits",
            q: `A resistor with a SILVER tolerance band has a tolerance of:`,
            a: `±10%`,
            d: [`±5%`, `±1%`, `±2%`]
        };
    },
    () => { // Rheostat vs Potentiometer
        return {
            topic: "DC Circuits",
            q: `A variable resistor connected with only TWO terminals is functioning as a:`,
            a: `Rheostat (Current Controller)`,
            d: [`Potentiometer (Voltage Divider)`, `Thermistor`, `Varistor`]
        };
    },
    () => { // Potentiometer
        return {
            topic: "DC Circuits",
            q: `A variable resistor connected with THREE terminals is functioning as a:`,
            a: `Potentiometer (Voltage Divider)`,
            d: [`Rheostat (Current Controller)`, `Fuse`, `Circuit Breaker`]
        };
    },

    // ======================================================
    // BATCH 3: ADVANCED DC MATH
    // ======================================================
    () => { // Internal Resistance Voltage Drop
        const E = 24; // EMF
        const I = rInt(10, 50);
        const R_int = 0.05;
        const V_drop = I * R_int;
        const V_term = E - V_drop;
        return {
            topic: "Batteries",
            q: `Battery EMF 24V. Internal Resistance 0.05Ω. Load draws ${I}A. Terminal Voltage?`,
            a: `${V_term} V`,
            d: [`24 V`, `${24 + V_drop} V`, `${V_drop} V`]
        };
    },
    () => { // Battery Efficiency
        return {
            topic: "Batteries",
            q: `The internal resistance of a battery causes the terminal voltage to _____ as load current increases.`,
            a: `Decrease`,
            d: [`Increase`, `Remain Constant`, `Fluctuate`]
        };
    },
    () => { // Wheatstone Bridge Unknown
        // R1/R2 = R3/Rx -> Rx = (R2*R3)/R1
        const R1 = 100;
        const R2 = 200;
        const R3 = rInt(10, 50);
        const Rx = (R2 * R3) / R1;
        return {
            topic: "DC Circuits",
            q: `Balanced Wheatstone Bridge: R1=100Ω, R2=200Ω, R3=${R3}Ω. Calculate unknown resistor Rx.`,
            a: `${Rx} Ω`,
            d: [`${Rx/2} Ω`, `${Rx*2} Ω`, `100 Ω`]
        };
    },
    () => { // Conductor Resistance Factors
        return {
            topic: "Electron Theory",
            q: `Which factor does NOT affect the resistance of a conductor?`,
            a: `Insulation Color`,
            d: [`Length`, `Cross-sectional Area`, `Temperature`]
        };
    },
    () => { // Resistance vs Area
        return {
            topic: "Electron Theory",
            q: `If the cross-sectional area of a cable is DOUBLED, its resistance:`,
            a: `Halves`,
            d: [`Doubles`, `Quadruples`, `Stays the same`]
        };
    },
    () => { // Resistance vs Length
        return {
            topic: "Electron Theory",
            q: `If the length of a cable is DOUBLED, its resistance:`,
            a: `Doubles`,
            d: [`Halves`, `Quadruples`, `Stays the same`]
        };
    },

    // ======================================================
    // BATCH 4: AC REACTANCE & IMPEDANCE
    // ======================================================
    () => { // Inductive Reactance (XL)
        const f = 400; // Hz
        const L = pick([0.1, 0.2, 0.5]); // Henries
        // XL = 2 * pi * f * L
        const XL = (2 * 3.14159 * f * L).toFixed(0);
        return {
            topic: "AC Theory",
            q: `Calculate Inductive Reactance (XL): Freq=400Hz, Inductance=${L}H.`,
            a: `${XL} Ω`,
            d: [`${(XL/2).toFixed(0)} Ω`, `${(XL*2).toFixed(0)} Ω`, `400 Ω`]
        };
    },
    () => { // Capacitive Reactance (XC)
        const f = 400; // Hz
        const C_micro = pick([10, 20, 50]); // uF
        const C = C_micro / 1000000;
        // XC = 1 / (2 * pi * f * C)
        const XC = (1 / (2 * 3.14159 * f * C)).toFixed(1);
        return {
            topic: "AC Theory",
            q: `Calculate Capacitive Reactance (XC): Freq=400Hz, Capacitance=${C_micro}µF.`,
            a: `${XC} Ω`,
            d: [`${(XC*2).toFixed(1)} Ω`, `${(XC/10).toFixed(1)} Ω`, `100 Ω`]
        };
    },
    () => { // Resonance
        return {
            topic: "AC Theory",
            q: `In a series AC circuit, Resonance occurs when:`,
            a: `XL = XC`,
            d: [`XL > XC`, `XC > XL`, `R = 0`]
        };
    },
    () => { // Impedance Formula
        return {
            topic: "AC Theory",
            q: `The formula for Impedance (Z) in a Series R-L-C circuit is:`,
            a: `Z = √(R² + X²)`,
            d: [`Z = R + X`, `Z = R² + X²`, `Z = R - X`]
        };
    },
    () => { // Peak to Peak
        const Vrms = 115;
        const Vpeak = Vrms * 1.414;
        const Vpp = (Vpeak * 2).toFixed(0);
        return {
            topic: "AC Theory",
            q: `Aircraft supply is 115V RMS. What is the Peak-to-Peak voltage?`,
            a: `${Vpp} V`,
            d: [`163 V`, `230 V`, `115 V`]
        };
    },
    () => { // Form Factor
        return {
            topic: "AC Theory",
            q: `The Form Factor for a pure Sine Wave is:`,
            a: `1.11`,
            d: [`1.414`, `0.707`, `0.637`]
        };
    },

    // ======================================================
    // BATCH 5: MAGNETISM & TRANSFORMERS
    // ======================================================
    () => { // Magnetic Shielding
        return {
            topic: "Magnetism",
            q: `What material is commonly used for magnetic shielding?`,
            a: `Soft Iron (High Permeability)`,
            d: [`Copper (High Conductivity)`, `Aluminium (Non-magnetic)`, `Hard Steel`]
        };
    },
    () => { // Saturation
        return {
            topic: "Magnetism",
            q: `When an increase in magnetizing force produces no further increase in flux, the material is:`,
            a: `Saturated`,
            d: [`Permeated`, `Inducted`, `Resonant`]
        };
    },
    () => { // Hysteresis Loss
        return {
            topic: "Transformers",
            q: `Hysteresis loss in a transformer is caused by:`,
            a: `Molecular friction during magnetic reversal`,
            d: [`Circulating currents in the core`, `Resistance of windings`, `Flux leakage`]
        };
    },
    () => { // Reducing Hysteresis
        return {
            topic: "Transformers",
            q: `Hysteresis losses are minimized by using:`,
            a: `Soft Silicon Steel`,
            d: [`Laminated Cores`, `Thick Copper Wire`, `Air Cores`]
        };
    },
    () => { // Reducing Eddy Currents
        return {
            topic: "Transformers",
            q: `Eddy Current losses are minimized by using:`,
            a: `Laminated Cores`,
            d: [`Silicon Steel`, `Copper Windings`, `Iron Cores`]
        };
    },
    () => { // Copper Loss
        return {
            topic: "Transformers",
            q: `Copper loss in a transformer is due to:`,
            a: `Resistance of the windings (I²R)`,
            d: [`Magnetic field reversals`, `Core heating`, `Insulation breakdown`]
        };
    },
    () => { // Transformer Power
        const kva = pick([5, 10, 20]);
        return {
            topic: "Transformers",
            q: `Transformer rating is usually expressed in:`,
            a: `kVA (Apparent Power)`,
            d: [`kW (True Power)`, `kVAR (Reactive Power)`, `Ohms`]
        };
    },

    // ======================================================
    // BATCH 6: MEASURING INSTRUMENTS
    // ======================================================
    () => { // Ammeter Connection
        return {
            topic: "Measuring Instruments",
            q: `An Ammeter must always be connected in:`,
            a: `Series with the load`,
            d: [`Parallel with the load`, `Across the supply`, `Series with the voltmeter`]
        };
    },
    () => { // Voltmeter Connection
        return {
            topic: "Measuring Instruments",
            q: `A Voltmeter must always be connected in:`,
            a: `Parallel with the component`,
            d: [`Series with the component`, `Series with the supply`, `Instead of the fuse`]
        };
    },
    () => { // Ammeter Shunt
        return {
            topic: "Measuring Instruments",
            q: `To extend the range of a moving coil Ammeter, you connect a:`,
            a: `Low resistance Shunt in Parallel`,
            d: [`High resistance Shunt in Parallel`, `Low resistance Multiplier in Series`, `High resistance Multiplier in Series`]
        };
    },
    () => { // Voltmeter Multiplier
        return {
            topic: "Measuring Instruments",
            q: `To extend the range of a Voltmeter, you connect a:`,
            a: `High resistance Multiplier in Series`,
            d: [`Low resistance Shunt in Parallel`, `High resistance Shunt in Parallel`, `Low resistance Multiplier in Series`]
        };
    },
    () => { // Ohmmeter Safety
        return {
            topic: "Measuring Instruments",
            q: `Before using an Ohmmeter to measure resistance, you must ensure:`,
            a: `The circuit is de-energized (Power OFF)`,
            d: [`The circuit is ON`, `The current is maximum`, `The capacitor is charged`]
        };
    },
    () => { // Multimeter Zeroing
        return {
            topic: "Measuring Instruments",
            q: `When changing resistance ranges on an analogue multimeter, you must:`,
            a: `Re-zero the meter (Zero Ohms adjust)`,
            d: [`Change the battery`, `Check the fuse`, `Turn it off and on`]
        };
    },

    // ======================================================
    // BATCH 7: CAPACITORS & INDUCTORS (Physics)
    // ======================================================
    () => { // Capacitance Factors
        return {
            topic: "DC Circuits",
            q: `Capacitance is directly proportional to Plate Area and inversely proportional to:`,
            a: `Distance between plates`,
            d: [`Dielectric constant`, `Voltage applied`, `Current flow`]
        };
    },
    () => { // Dielectric Constant
        return {
            topic: "DC Circuits",
            q: `Using a material with a HIGHER dielectric constant will _____ the capacitance.`,
            a: `Increase`,
            d: [`Decrease`, `Not affect`, `Zero`]
        };
    },
    () => { // Inductance Definition
        return {
            topic: "DC Circuits",
            q: `The property of a coil to oppose any CHANGE in current flow is called:`,
            a: `Inductance`,
            d: [`Capacitance`, `Resistance`, `Conductance`]
        };
    },
    () => { // Mutual Inductance
        return {
            topic: "Transformers",
            q: `Transformers operate on the principle of:`,
            a: `Mutual Inductance`,
            d: [`Self Inductance`, `Static Electricity`, `Capacitive Coupling`]
        };
    },
    () => { // Total Inductance Series
        const L1 = rInt(1, 5);
        const L2 = rInt(1, 5);
        return {
            topic: "DC Circuits",
            q: `Two inductors ${L1}H and ${L2}H are in SERIES (no mutual coupling). Total Inductance?`,
            a: `${L1+L2} H`,
            d: [`${(L1*L2)/(L1+L2)} H`, `0 H`, `${L1*L2} H`]
        };
    },

    // ======================================================
    // BATCH 8: ELECTRICAL MACHINES (Specifics)
    // ======================================================
    () => { // DC Motor Speed Control
        return {
            topic: "Electrical Machines",
            q: `To increase the speed of a DC Shunt Motor, you should:`,
            a: `Decrease the Field Current (Weaken Field)`,
            d: [`Increase the Field Current`, `Decrease Armature Voltage`, `Increase Load`]
        };
    },
    () => { // Armature Reaction
        return {
            topic: "Electrical Machines",
            q: `Armature Reaction shifts the:`,
            a: `Magnetic Neutral Plane (MNP)`,
            d: [`Physical Neutral Plane`, `Commutator segments`, `Brush spring tension`]
        };
    },
    () => { // MNP Shift Direction
        return {
            topic: "Electrical Machines",
            q: `In a DC Generator, the MNP shifts in the direction of:`,
            a: `Rotation`,
            d: [`Opposite to rotation`, `90 degrees`, `It does not shift`]
        };
    },
    () => { // Interpoles
        return {
            topic: "Electrical Machines",
            q: `Interpoles are used in DC machines to:`,
            a: `Correct Armature Reaction and reduce sparking`,
            d: [`Increase Voltage`, `Decrease Speed`, `Cool the armature`]
        };
    },
    () => { // Slip Rings
        return {
            topic: "Electrical Machines",
            q: `AC Generators (Alternators) use _____ to extract current.`,
            a: `Slip Rings`,
            d: [`Split Rings (Commutator)`, `Brushes only`, `Diodes`]
        };
    },
    () => { // Brush Composition
        return {
            topic: "Electrical Machines",
            q: `High altitude aircraft brushes are made of carbon treated with:`,
            a: `Silver, Molybdenum or Lead Iodide (to prevent dusting)`,
            d: [`Pure Copper`, `Zinc`, `Standard Carbon`]
        };
    },

    // ======================================================
    // BATCH 9: BATTERY MAINTENANCE
    // ======================================================
    () => { // Electrolyte Level
        return {
            topic: "Batteries",
            q: `When should you add water to a NiCd battery?`,
            a: `Only when fully charged (unless dry)`,
            d: [`Only when fully discharged`, `Any time`, `Never`]
        };
    },
    () => { // Mixing Electrolytes
        return {
            topic: "Batteries",
            q: `What happens if Lead-Acid and NiCd electrolytes mix?`,
            a: `Violent chemical reaction and permanent damage`,
            d: [`They neutralize safely`, `Battery capacity increases`, `Nothing`]
        };
    },
    () => { // Lead Acid Electrolyte
        return {
            topic: "Batteries",
            q: `The electrolyte in a Lead-Acid battery is:`,
            a: `Sulphuric Acid and Distilled Water`,
            d: [`Potassium Hydroxide`, `Hydrochloric Acid`, `Salt Water`]
        };
    },
    () => { // NiCd Electrolyte
        return {
            topic: "Batteries",
            q: `The electrolyte in a NiCd battery is:`,
            a: `Potassium Hydroxide (Alkaline)`,
            d: [`Sulphuric Acid`, `Nitric Acid`, `Lead Sulphate`]
        };
    },
    () => { // Constant Voltage Charge
        return {
            topic: "Batteries",
            q: `In a Constant Voltage charging system (Aircraft), as the battery charges, the current:`,
            a: `Tapers off (Decreases)`,
            d: [`Remains constant`, `Increases`, `Fluctuates`]
        };
    },
    () => { // Capacity Check
        return {
            topic: "Batteries",
            q: `A battery capacity test checks:`,
            a: `The actual Amp-Hours available compared to rated`,
            d: [`The voltage only`, `The specific gravity only`, `The physical condition`]
        };
    },
    // ======================================================
    // BATCH 10: DEEP DIVE - MAGNETISM & ELECTROMAGNETISM
    // Source: Electrical Fundamentals I (Chapter: Magnetism)
    // ======================================================
    () => { // Flux Density Formula
        return {
            topic: "Magnetism",
            q: `Magnetic Flux Density (B) is defined as:`,
            a: `Flux per unit Area (Φ/A)`,
            d: [`Total Flux (Φ)`, `Magnetomotive Force (MMF)`, `Reluctance (S)`]
        };
    },
    () => { // Unit of Flux Density
        return {
            topic: "Magnetism",
            q: `The SI Unit for Magnetic Flux Density is the:`,
            a: `Tesla (T)`,
            d: [`Weber (Wb)`, `Henry (H)`, `Ampere-Turn`]
        };
    },
    () => { // Reluctance Definition
        return {
            topic: "Magnetism",
            q: `Reluctance in a magnetic circuit is analogous to what in an electric circuit?`,
            a: `Resistance`,
            d: [`Voltage`, `Current`, `Conductance`]
        };
    },
    () => { // Hysteresis Loop
        return {
            topic: "Magnetism",
            q: `The area inside a B-H Hysteresis loop represents:`,
            a: `Energy lost as heat per cycle`,
            d: [`Total Magnetic Flux`, `Permeability of the core`, `Saturation point`]
        };
    },
    () => { // Coercive Force
        return {
            topic: "Magnetism",
            q: `The force required to reduce residual magnetism to zero is called:`,
            a: `Coercive Force`,
            d: [`Retentivity`, `Saturation Force`, `Remanence`]
        };
    },
    () => { // Solenoid Field Strength
        return {
            topic: "Magnetism",
            q: `The strength of the magnetic field in a solenoid is proportional to Current and:`,
            a: `Number of Turns`,
            d: [`Wire Diameter`, `Insulation thickness`, `Voltage applied`]
        };
    },
    () => { // Curie Point
        return {
            topic: "Magnetism",
            q: `The temperature at which a magnetic material loses its ferromagnetic properties is the:`,
            a: `Curie Point`,
            d: [`Saturation Point`, `Melting Point`, `Flash Point`]
        };
    },

    // ======================================================
    // BATCH 11: DC GENERATOR & MOTOR CONSTRUCTION
    // Source: Electrical Fundamentals I (Chapter: DC Machines)
    // ======================================================
    () => { // Lap Winding
        return {
            topic: "Electrical Machines",
            q: `Lap Winding in a DC armature is designed for:`,
            a: `High Current, Low Voltage`,
            d: [`High Voltage, Low Current`, `AC Output`, `High Speed`]
        };
    },
    () => { // Wave Winding
        return {
            topic: "Electrical Machines",
            q: `Wave Winding in a DC armature is designed for:`,
            a: `High Voltage, Low Current`,
            d: [`High Current, Low Voltage`, `Low Resistance applications`, `Starter Motors`]
        };
    },
    () => { // Pole Shoes
        return {
            topic: "Electrical Machines",
            q: `The purpose of curved Pole Shoes in a DC Generator is to:`,
            a: `Reduce the air gap and spread flux uniformly`,
            d: [`Hold the field coils in place only`, `Increase air gap reluctance`, `Generate AC`]
        };
    },
    () => { // Laminations
        return {
            topic: "Electrical Machines",
            q: `Armature cores are laminated to reduce:`,
            a: `Eddy Currents`,
            d: [`Hysteresis`, `Copper Loss`, `Weight`]
        };
    },
    () => { // MNP Shift - Generator
        return {
            topic: "Electrical Machines",
            q: `In a DC Generator, Armature Reaction causes the Magnetic Neutral Plane (MNP) to shift:`,
            a: `In the direction of rotation`,
            d: [`Against the direction of rotation`, `90 degrees perpendicular`, `It does not shift`]
        };
    },
    () => { // MNP Shift - Motor
        return {
            topic: "Electrical Machines",
            q: `In a DC Motor, Armature Reaction causes the MNP to shift:`,
            a: `Against the direction of rotation`,
            d: [`In the direction of rotation`, `Towards the North Pole`, `Towards the South Pole`]
        };
    },
    () => { // Interpoles Polarity - Generator
        return {
            topic: "Electrical Machines",
            q: `In a DC Generator, the polarity of an Interpole is the SAME as the:`,
            a: `Next Main Pole ahead in rotation`,
            d: [`Main Pole behind in rotation`, `North Pole always`, `South Pole always`]
        };
    },
    () => { // Interpoles Polarity - Motor
        return {
            topic: "Electrical Machines",
            q: `In a DC Motor, the polarity of an Interpole is the SAME as the:`,
            a: `Main Pole behind in rotation`,
            d: [`Next Main Pole ahead in rotation`, `Opposite Main Pole`, `North Pole always`]
        };
    },

    // ======================================================
    // BATCH 12: CAPACITANCE & INDUCTANCE PHYSICS
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Energy in Capacitor
        const C_uF = 100;
        const V = 20;
        // E = 0.5 * C * V^2
        const E = 0.5 * (C_uF/1000000) * V * V;
        return {
            topic: "DC Circuits",
            q: `Energy stored in a ${C_uF}µF capacitor charged to ${V}V? (E=½CV²)`,
            a: `${E} Joules`,
            d: [`${E*1000} Joules`, `${E*2} Joules`, `${C_uF*V} Joules`]
        };
    },
    () => { // Energy in Inductor
        const L = 2; // Henry
        const I = 5; // Amps
        // E = 0.5 * L * I^2
        const E = 0.5 * L * I * I;
        return {
            topic: "DC Circuits",
            q: `Energy stored in a ${L}H inductor carrying ${I}A? (E=½LI²)`,
            a: `${E} Joules`,
            d: [`${L*I} Joules`, `${E*2} Joules`, `${L*I*I} Joules`]
        };
    },
    () => { // Time Constant Define
        return {
            topic: "DC Circuits",
            q: `One Time Constant (1τ) is the time required for current/voltage to reach:`,
            a: `63.2% of max value`,
            d: [`50% of max value`, `99% of max value`, `36.8% of max value`]
        };
    },
    () => { // 5 Time Constants
        return {
            topic: "DC Circuits",
            q: `A capacitor is considered fully charged after approximately:`,
            a: `5 Time Constants`,
            d: [`1 Time Constant`, `10 Time Constants`, `3 Time Constants`]
        };
    },
    () => { // RL Time Constant
        const R = 10;
        const L = 2;
        const t = L / R;
        return {
            topic: "DC Circuits",
            q: `RL Circuit: R=${R}Ω, L=${L}H. Calculate Time Constant. (τ=L/R)`,
            a: `${t} s`,
            d: [`${R/L} s`, `${R*L} s`, `10 s`]
        };
    },

    // ======================================================
    // BATCH 13: AC THEORY - THREE PHASE & POWER
    // Source: Electrical Fundamentals II (Chapter: AC)
    // ======================================================
    () => { // Star Connection Voltage
        return {
            topic: "AC Theory",
            q: `In a 3-Phase STAR connection, Line Voltage (VL) is:`,
            a: `√3 × Phase Voltage (VP)`,
            d: [`Equal to Phase Voltage`, `3 × Phase Voltage`, `Phase Voltage / √3`]
        };
    },
    () => { // Star Connection Current
        return {
            topic: "AC Theory",
            q: `In a 3-Phase STAR connection, Line Current (IL) is:`,
            a: `Equal to Phase Current (IP)`,
            d: [`√3 × Phase Current`, `3 × Phase Current`, `Phase Current / √3`]
        };
    },
    () => { // Delta Connection Voltage
        return {
            topic: "AC Theory",
            q: `In a 3-Phase DELTA connection, Line Voltage (VL) is:`,
            a: `Equal to Phase Voltage (VP)`,
            d: [`√3 × Phase Voltage`, `3 × Phase Voltage`, `Phase Voltage / 2`]
        };
    },
    () => { // Delta Connection Current
        return {
            topic: "AC Theory",
            q: `In a 3-Phase DELTA connection, Line Current (IL) is:`,
            a: `√3 × Phase Current (IP)`,
            d: [`Equal to Phase Current`, `Phase Current / √3`, `3 × Phase Current`]
        };
    },
    () => { // 3-Phase Power Formula
        return {
            topic: "AC Theory",
            q: `Formula for Total Power in a balanced 3-Phase system?`,
            a: `P = √3 × VL × IL × PowerFactor`,
            d: [`P = VL × IL`, `P = 3 × VL × IL`, `P = VL × IL × PF`]
        };
    },
    () => { // True Power Unit
        return {
            topic: "AC Theory",
            q: `True Power in an AC circuit is measured in:`,
            a: `Watts (W) or Kilowatts (kW)`,
            d: [`Volt-Amperes (VA)`, `Volt-Amperes Reactive (VAR)`, `Joules`]
        };
    },
    () => { // Apparent Power Unit
        return {
            topic: "AC Theory",
            q: `Apparent Power (Voltage × Current) is measured in:`,
            a: `Volt-Amperes (VA) or kVA`,
            d: [`Watts (W)`, `VARs`, `Coulombs`]
        };
    },
    () => { // Reactive Power Unit
        return {
            topic: "AC Theory",
            q: `Reactive Power (Power stored/returned by L or C) is measured in:`,
            a: `Volt-Amperes Reactive (VAR)`,
            d: [`Watts (W)`, `kVA`, `Joules`]
        };
    },

    // ======================================================
    // BATCH 14: TRANSFORMERS & SPECIAL MACHINES
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Auto-Transformer
        return {
            topic: "Transformers",
            q: `A transformer with a single winding serving as both primary and secondary is an:`,
            a: `Auto-Transformer`,
            d: [`Isolation Transformer`, `Step-Up Transformer`, `Current Transformer`]
        };
    },
    () => { // CT Safety
        return {
            topic: "Transformers",
            q: `What is the critical safety rule for Current Transformers (CT)?`,
            a: `Never open-circuit the secondary while on load`,
            d: [`Never short-circuit the secondary`, `Always ground the primary`, `Keep cool`]
        };
    },
    () => { // Transformer Rating
        return {
            topic: "Transformers",
            q: `Why are transformers rated in kVA and not kW?`,
            a: `Losses depend on V and I (Apparent Power), independent of Power Factor`,
            d: [`Because they generate reactive power`, `It sounds better`, `kW is for DC only`]
        };
    },
    () => { // Induction Motor Slip
        const Ns = 3000; // Sync speed
        const Nr = 2850; // Rotor speed
        const slip = ((Ns - Nr) / Ns) * 100;
        return {
            topic: "Electrical Machines",
            q: `Sync Speed 3000 RPM. Rotor Speed 2850 RPM. Calculate % Slip.`,
            a: `${slip}%`,
            d: [`${slip/10}%`, `10%`, `15%`]
        };
    },
    () => { // Synchronous Motor
        return {
            topic: "Electrical Machines",
            q: `A Synchronous Motor runs at:`,
            a: `Constant Synchronous Speed (regardless of load)`,
            d: [`Variable speed depending on load`, `Higher than synchronous speed`, `Slip speed`]
        };
    },
    () => { // Split Phase Motor
        return {
            topic: "Electrical Machines",
            q: `In a Split-Phase Induction motor, the starting winding has:`,
            a: `High Resistance and Low Inductance`,
            d: [`Low Resistance and High Inductance`, `Same as running winding`, `Capacitor in series`]
        };
    },
    () => { // Shaded Pole Motor
        return {
            topic: "Electrical Machines",
            q: `The Shaded Pole motor is generally used for:`,
            a: `Low starting torque loads (Fans, small pumps)`,
            d: [`High torque loads (Starters)`, `Precision positioning`, `Heavy industrial use`]
        };
    },
    
    () => { // Universal Motor
        return {
            topic: "Electrical Machines",
            q: `A Universal Motor can operate on:`,
            a: `Both AC and DC`,
            d: [`AC only`, `DC only`, `3-Phase only`]
        };
    },

    // ======================================================
    // BATCH 15: BATTERIES DEEP DIVE
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Constant Current Charge
        return {
            topic: "Batteries",
            q: `Constant Current charging is typically used for:`,
            a: `Initial charging or restoring sulphated batteries`,
            d: [`Normal aircraft operation`, `Preventing thermal runaway`, `Fast charging`]
        };
    },
    () => { // Lead Acid Freezing
        return {
            topic: "Batteries",
            q: `A discharged Lead-Acid battery will freeze at a _____ temperature than a charged one.`,
            a: `Higher (Freezes easier)`,
            d: [`Lower`, `Same`, `Does not freeze`]
        };
    },
    () => { // Nickel-Cadmium Cell Voltage
        return {
            topic: "Batteries",
            q: `The nominal voltage of a single NiCd cell is:`,
            a: `1.2 V`,
            d: [`2.0 V`, `1.5 V`, `2.2 V`]
        };
    },
    () => { // Lead-Acid Cell Voltage
        return {
            topic: "Batteries",
            q: `The nominal voltage of a single Lead-Acid cell is:`,
            a: `2.0 V`,
            d: [`1.2 V`, `1.5 V`, `2.2 V`]
        };
    },
    () => { // NiCd Electrolyte Level Check
        return {
            topic: "Batteries",
            q: `Why must NiCd electrolyte level be checked only after charging/sitting?`,
            a: `Electrolyte is absorbed into plates during discharge (Level drops)`,
            d: [`Electrolyte expands during discharge`, `It evaporates quickly`, `Safety reasons`]
        };
    },
    // ======================================================
    // BATCH 16: AC FILTERS & RESONANCE
    // Source: Electrical Fundamentals II (Chapter: AC Circuits)
    // ======================================================
    () => { // Low Pass Filter
        return {
            topic: "AC Theory",
            q: `A Low Pass Filter typically consists of a:`,
            a: `Capacitor in parallel with the load (shunting high freq)`,
            d: [`Capacitor in series with the load`, `Inductor in parallel`, `Resistor only`]
        };
    },
    () => { // High Pass Filter
        return {
            topic: "AC Theory",
            q: `A High Pass Filter allows high frequencies to pass but blocks low ones. It often uses:`,
            a: `Capacitor in series with the signal path`,
            d: [`Inductor in series`, `Capacitor in parallel`, `Resistor in parallel`]
        };
    },
    () => { // Q Factor
        return {
            topic: "AC Theory",
            q: `The 'Q' (Quality) Factor of a resonant circuit is the ratio of:`,
            a: `Energy Stored to Energy Dissipated (Reactance/Resistance)`,
            d: [`Voltage to Current`, `Power to Voltage`, `Resistance to Impedance`]
        };
    },
    () => { // Bandwidth
        return {
            topic: "AC Theory",
            q: `A circuit with a HIGH Q-factor has a:`,
            a: `Narrow Bandwidth (High Selectivity)`,
            d: [`Wide Bandwidth`, `Low Selectivity`, `Flat response`]
        };
    },
    () => { // Resonant Frequency Formula
        // f = 1 / (2pi * sqrt(LC))
        return {
            topic: "AC Theory",
            q: `If you quadruple (x4) the capacitance in an LC circuit, the Resonant Frequency will:`,
            a: `Halve (1/2)`,
            d: [`Quarter (1/4)`, `Double (x2)`, `Stay the same`]
        };
    },

    // ======================================================
    // BATCH 17: DC GENERATOR CHARACTERISTICS
    // Source: Electrical Fundamentals II (Chapter: DC Generators)
    // ======================================================
    () => { // Shunt Generator Characteristic
        return {
            topic: "Electrical Machines",
            q: `As load increases on a DC Shunt Generator (without regulation), the terminal voltage:`,
            a: `Droops (Decreases slightly)`,
            d: [`Rises significantly`, `Stays perfectly constant`, `Collapses to zero`]
        };
    },
    () => { // Series Generator Characteristic
        return {
            topic: "Electrical Machines",
            q: `As load increases on a DC Series Generator, the terminal voltage:`,
            a: `Rises (until saturation)`,
            d: [`Falls immediately`, `Remains constant`, `Oscillates`]
        };
    },
    () => { // Compound Generator
        return {
            topic: "Electrical Machines",
            q: `A Flat-Compound generator is designed to have:`,
            a: `Constant Voltage from No-Load to Full-Load`,
            d: [`Rising Voltage characteristic`, `Drooping Voltage characteristic`, `Constant Current`]
        };
    },
    () => { // Separately Excited
        return {
            topic: "Electrical Machines",
            q: `Which generator has the most stable voltage output over a wide speed range?`,
            a: `Separately Excited`,
            d: [`Self Excited Shunt`, `Self Excited Series`, `Permanent Magnet`]
        };
    },
    () => { // Paralleling DC Generators
        return {
            topic: "Electrical Machines",
            q: `To parallel DC generators, you must equalize their:`,
            a: `Voltage`,
            d: [`Current`, `Speed`, `Resistance`]
        };
    },
    () => { // Equalizing Circuit
        return {
            topic: "Electrical Machines",
            q: `When paralleling Compound DC Generators, an 'Equalizer' loop is used to:`,
            a: `Prevent the Series fields from unbalancing the load`,
            d: [`Equalize the Shunt fields`, `Regulate speed`, `Cool the armatures`]
        };
    },

    // ======================================================
    // BATCH 18: AC ALTERNATOR OPERATION
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Frequency Control
        return {
            topic: "Electrical Machines",
            q: `To increase the output FREQUENCY of an aircraft alternator, you must:`,
            a: `Increase the Speed of rotation (CSD/IDG)`,
            d: [`Increase the Field Current`, `Decrease the Load`, `Add more poles`]
        };
    },
    () => { // Voltage Control
        return {
            topic: "Electrical Machines",
            q: `To increase the output VOLTAGE of an aircraft alternator, you must:`,
            a: `Increase the DC Field Excitation Current`,
            d: [`Increase Speed`, `Decrease Load`, `Change the power factor`]
        };
    },
    () => { // Paralleling Conditions
        return {
            topic: "Electrical Machines",
            q: `Which is NOT a requirement for paralleling AC Alternators?`,
            a: `Same kVA Rating`,
            d: [`Same Voltage`, `Same Frequency`, `Same Phase Sequence`]
        };
    },
    () => { // Real Load Sharing (kW)
        return {
            topic: "Electrical Machines",
            q: `Real Power (kW) load sharing between parallel alternators is controlled by:`,
            a: `Input Torque (Drive Speed/Governor)`,
            d: [`Voltage Regulators`, `Field Excitation`, `Current Limiters`]
        };
    },
    () => { // Reactive Load Sharing (kVAR)
        return {
            topic: "Electrical Machines",
            q: `Reactive Power (kVAR) load sharing between parallel alternators is controlled by:`,
            a: `Voltage Regulators (Field Excitation)`,
            d: [`CSD Governors`, `Torque input`, `Phase angle`]
        };
    },
    () => { // IDG Meaning
        return {
            topic: "Electrical Machines",
            q: `In modern aircraft, IDG stands for:`,
            a: `Integrated Drive Generator`,
            d: [`Independent Direct Generator`, `Induction Drive Gear`, `Internal DC Generator`]
        };
    },

    // ======================================================
    // BATCH 19: MEASURING INSTRUMENTS & SAFETY
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Moving Iron vs Coil
        return {
            topic: "Measuring Instruments",
            q: `Moving Iron meters can measure:`,
            a: `Both AC and DC`,
            d: [`DC only`, `AC only`, `High frequency only`]
        };
    },
    () => { // Moving Coil (D'Arsonval)
        return {
            topic: "Measuring Instruments",
            q: `Permanent Magnet Moving Coil (PMMC) meters measure:`,
            a: `DC only (Average value)`,
            d: [`AC only`, `Both AC and DC`, `Peak value`]
        };
    },
    () => { // Damping
        return {
            topic: "Measuring Instruments",
            q: `The force that prevents the pointer from oscillating excessively is:`,
            a: `Damping Torque`,
            d: [`Deflecting Torque`, `Controlling Torque`, `Restoring Torque`]
        };
    },
    () => { // Parallax Error
        return {
            topic: "Measuring Instruments",
            q: `A mirror is often placed behind the scale of a precision meter to reduce:`,
            a: `Parallax Error`,
            d: [`Hysteresis Error`, `Temperature Error`, `Zero Error`]
        };
    },
    () => { // Megger Test
        return {
            topic: "Measuring Instruments",
            q: `A 'Megger' is used to measure:`,
            a: `Very High Insulation Resistance`,
            d: [`Very Low Contact Resistance`, `Battery Capacity`, `Capacitance`]
        };
    },
    () => { // Megger Safety
        return {
            topic: "Measuring Instruments",
            q: `High voltage insulation testing (Meggering) can damage:`,
            a: `Sensitive semiconductor components`,
            d: [`Heavy cables`, `Motors`, `Fuses`]
        };
    },

    // ======================================================
    // BATCH 20: THERMOCOUPLES & TRANSDUCERS
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Piezoelectric Effect
        return {
            topic: "Electron Theory",
            q: `The production of electricity by applying PRESSURE to a crystal is called:`,
            a: `Piezoelectricity`,
            d: [`Thermoelectricity`, `Photoelectricity`, `Triboelectricity`]
        };
    },
    () => { // Thermocouple Principle
        return {
            topic: "Electron Theory",
            q: `A Thermocouple works on the principle of the:`,
            a: `Seebeck Effect`,
            d: [`Peltier Effect`, `Piezo Effect`, `Hall Effect`]
        };
    },
    () => { // Thermocouple Junctions
        return {
            topic: "Electron Theory",
            q: `A Thermocouple produces voltage proportional to the difference in temp between:`,
            a: `Hot Junction and Cold Junction`,
            d: [`Hot Junction and Ground`, `Two different metals`, `The probe and the air`]
        };
    },
    () => { // Photo-Voltaic
        return {
            topic: "Electron Theory",
            q: `A Solar Cell operates on the:`,
            a: `Photovoltaic Effect`,
            d: [`Photo-conductive Effect`, `Photo-emissive Effect`, `Thermal Effect`]
        };
    },
    () => { // Static Wick
        return {
            topic: "Electron Theory",
            q: `Static Wicks (Dischargers) on aircraft trailing edges are there to:`,
            a: `Dissipate static charge into the atmosphere to reduce radio interference`,
            d: [`Attract lightning away from fuel tanks`, `Ground the aircraft on landing`, `Measure atmospheric charge`]
        };
    },
    // ======================================================
    // BATCH 21: SINGLE PHASE AC MOTORS
    // Source: Electrical Fundamentals II (Chapter: AC Motors)
    // ======================================================
    () => { // Capacitor Start Motor
        return {
            topic: "Electrical Machines",
            q: `In a Capacitor Start Induction Motor, the capacitor provides:`,
            a: `A large phase shift for high starting torque`,
            d: [`Power factor correction`, `Speed regulation`, `Overload protection`]
        };
    },
    () => { // Centrifugal Switch
        return {
            topic: "Electrical Machines",
            q: `The purpose of the centrifugal switch in a Split-Phase motor is to:`,
            a: `Disconnect the starting winding once the motor reaches speed`,
            d: [`Disconnect the load on overspeed`, `Connect the running winding`, `Reverse direction`]
        };
    },
    () => { // Hysteresis Motor
        return {
            topic: "Electrical Machines",
            q: `A Hysteresis Synchronous motor is commonly used for:`,
            a: `Gyroscopes and Clocks (Constant speed, low noise)`,
            d: [`Engine Starters`, `Flap Actuators`, `Landing Gear`]
        };
    },
    () => { // Repulsion Motor
        return {
            topic: "Electrical Machines",
            q: `A Repulsion Motor operates on the principle of:`,
            a: `Magnetic repulsion between stator and short-circuited rotor brushes`,
            d: [`Attraction between unlike poles`, `DC currents only`, `Permanent magnets`]
        };
    },
    () => { // Shaded Pole Direction
        return {
            topic: "Electrical Machines",
            q: `The direction of rotation of a standard Shaded Pole motor:`,
            a: `Cannot be reversed (it is fixed by construction)`,
            d: [`Can be reversed by swapping leads`, `Depends on voltage polarity`, `Is random`]
        };
    },

    // ======================================================
    // BATCH 22: TRANSFORMERS & 3-PHASE DETAILS
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Transformer Cooling
        return {
            topic: "Transformers",
            q: `Large power transformers are often filled with oil to:`,
            a: `Provide cooling and insulation`,
            d: [`Lubricate moving parts`, `Prevent rust only`, `Increase weight`]
        };
    },
    () => { // Auto-Transformer Risk
        return {
            topic: "Transformers",
            q: `A danger associated with Step-Down Auto-Transformers is:`,
            a: `If the common winding opens, full High Voltage appears at the output`,
            d: [`They overheat easily`, `They cannot step down DC`, `Low efficiency`]
        };
    },
    () => { // Star Point
        return {
            topic: "AC Theory",
            q: `In a balanced 3-Phase Star system, the current in the Neutral line is:`,
            a: `Zero`,
            d: [`Maximum`, `Equal to Phase Current`, `Infinite`]
        };
    },
    () => { // Delta Advantage
        return {
            topic: "AC Theory",
            q: `A key advantage of the Delta connection for power transmission is:`,
            a: `It requires only 3 wires (No Neutral)`,
            d: [`It provides two different voltages`, `It is safer`, `It uses less current`]
        };
    },
    () => { // 3-Phase Rotation
        return {
            topic: "AC Theory",
            q: `To reverse the direction of a 3-Phase Induction Motor, you must:`,
            a: `Swap any two of the three supply lines`,
            d: [`Swap all three lines`, `Reverse the neutral`, `Change the frequency`]
        };
    },

    // ======================================================
    // BATCH 23: ADVANCED INSTRUMENTS (Ratiometers)
    // Source: Electrical Fundamentals I (Instruments)
    // ======================================================
    () => { // Ratiometer Principle
        return {
            topic: "Measuring Instruments",
            q: `A Ratiometer instrument uses two coils to measure resistance. Its main advantage is:`,
            a: `Accuracy is independent of supply voltage fluctuations`,
            d: [`It is cheaper`, `It uses less power`, `It measures AC only`]
        };
    },
    
    () => { // Ratiometer Uses
        return {
            topic: "Measuring Instruments",
            q: `Ratiometers are commonly used for aircraft:`,
            a: `Temperature and Pressure indicators`,
            d: [`Ammeters`, `Voltmeters`, `Frequency meters`]
        };
    },
    () => { // Thermocouple Meter
        return {
            topic: "Measuring Instruments",
            q: `A Thermocouple Ammeter is used to measure:`,
            a: `Radio Frequency (RF) Current`,
            d: [`DC Current only`, `Battery charging`, `Static charge`]
        };
    },
    () => { // Frequency Meter
        return {
            topic: "Measuring Instruments",
            q: `A Vibrating Reed instrument is used to measure:`,
            a: `Frequency`,
            d: [`Voltage`, `Current`, `Power Factor`]
        };
    },
    () => { // Current Transformer (Instrument)
        return {
            topic: "Measuring Instruments",
            q: `To measure very high AC currents, an Ammeter is used with a:`,
            a: `Current Transformer (CT)`,
            d: [`Shunt Resistor`, `Multiplier Resistor`, `Capacitor`]
        };
    },

    // ======================================================
    // BATCH 24: ADVANCED DC MACHINE THEORY
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Commutation Improvement
        return {
            topic: "Electrical Machines",
            q: `To improve commutation (reduce sparking), brushes are often made of:`,
            a: `High Resistance Carbon`,
            d: [`Low Resistance Copper`, `Soft Iron`, `Aluminium`]
        };
    },
    () => { // Armature Reaction - Cross Magnetizing
        return {
            topic: "Electrical Machines",
            q: `The effect of Armature Reaction that distorts the main field but does not weaken it is:`,
            a: `Cross-Magnetization`,
            d: [`Demagnetization`, `Saturation`, `Hysteresis`]
        };
    },
    () => { // Armature Reaction - Demagnetizing
        return {
            topic: "Electrical Machines",
            q: `If brushes are shifted to the new MNP, the armature field opposes the main field. This is:`,
            a: `Demagnetization`,
            d: [`Cross-Magnetization`, `Commutation`, `Regulation`]
        };
    },
    () => { // Critical Resistance
        return {
            topic: "Electrical Machines",
            q: `A DC Shunt Generator will fail to build up voltage if the field circuit resistance is:`,
            a: `Above the Critical Resistance`,
            d: [`Below the Critical Resistance`, `Zero`, `Equal to Armature Resistance`]
        };
    },
    () => { // Generator Voltage Control
        return {
            topic: "Electrical Machines",
            q: `The output voltage of a DC Shunt Generator is manually controlled by a:`,
            a: `Field Rheostat (Variable Resistor in series with field)`,
            d: [`Armature Diverter`, `Series Parallel switch`, `Commutator`]
        };
    },

    // ======================================================
    // BATCH 25: SKIN EFFECT & CABLES
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Skin Effect Definition
        return {
            topic: "AC Theory",
            q: `The tendency of high-frequency AC to flow only on the outer surface of a conductor is:`,
            a: `Skin Effect`,
            d: [`Proximity Effect`, `Eddy Current`, `Hysteresis`]
        };
    },
    () => { // Skin Effect Consequence
        return {
            topic: "AC Theory",
            q: `Due to Skin Effect, the effective resistance of a cable is _____ for AC than for DC.`,
            a: `Higher`,
            d: [`Lower`, `The same`, `Zero`]
        };
    },
    () => { // Coaxial Cable
        return {
            topic: "AC Theory",
            q: `To minimize radiation losses and interference at high frequencies, we use:`,
            a: `Coaxial Cable`,
            d: [`Standard Copper Wire`, `Aluminium Busbar`, `Ribbon Cable`]
        };
    },
    () => { // Shielding
        return {
            topic: "DC Circuits",
            q: `A braided metal sheath around a wire is used for:`,
            a: `Electromagnetic Shielding (reducing interference)`,
            d: [`Mechanical strength only`, `Thermal insulation`, `Color coding`]
        };
    },
    () => { // American Wire Gauge
        return {
            topic: "DC Circuits",
            q: `In the AWG system, a higher gauge number indicates:`,
            a: `Thinner wire`,
            d: [`Thicker wire`, `Higher voltage rating`, `Better insulation`]
        };
    },
    // ======================================================
    // BATCH 26: STARTER GENERATORS & DUTY CYCLES
    // Source: Electrical Fundamentals I (Chapter: DC Machines)
    // ======================================================
    () => { // Starter Gen Duty Cycle
        return {
            topic: "Electrical Machines",
            q: `The 'Duty Cycle' of a Starter-Generator refers to:`,
            a: `The limits on cranking time and mandatory cooling periods`,
            d: [`The RPM limit`, `The voltage regulation range`, `The brush wear limit`]
        };
    },
    () => { // Starter Gen Current
        return {
            topic: "Electrical Machines",
            q: `During the start cycle, a Starter-Generator may draw current in excess of:`,
            a: `1000 - 1500 Amps`,
            d: [`10 - 50 Amps`, `100 - 200 Amps`, `5000 Amps`]
        };
    },
    () => { // Starter Gen Winding - Start Mode
        return {
            topic: "Electrical Machines",
            q: `When acting as a STARTER, current flows through:`,
            a: `Both Series and Shunt windings (Compound)`,
            d: [`Series winding only`, `Shunt winding only`, `Interpoles only`]
        };
    },
    () => { // Starter Gen Winding - Gen Mode
        return {
            topic: "Electrical Machines",
            q: `When acting as a GENERATOR, the Series winding is:`,
            a: `Ideally bypassed or carries no load current`,
            d: [`Used to boost voltage`, `Used to regulate frequency`, `Connected in reverse`]
        };
    },
    () => { // Starter Gen Cooling
        return {
            topic: "Electrical Machines",
            q: `Due to high heat generation, Starter-Generators often require:`,
            a: `An attached cooling air duct (Blast air)`,
            d: [`Water cooling`, `Oil immersion`, `Liquid Nitrogen`]
        };
    },

    // ======================================================
    // BATCH 27: ELECTROSTATICS & CAPACITORS
    // Source: Electrical Fundamentals I (Chapter: Static)
    // ======================================================
    () => { // Dielectric Strength
        return {
            topic: "Electron Theory",
            q: `The maximum voltage a dielectric can withstand without breaking down is its:`,
            a: `Dielectric Strength`,
            d: [`Permittivity`, `Coulomb constant`, `Resistance`]
        };
    },
    () => { // Air Dielectric Strength
        return {
            topic: "Electron Theory",
            q: `The breakdown voltage of dry air is approximately:`,
            a: `3 kV per mm`,
            d: [`100 V per mm`, `10 kV per cm`, `1 V per m`]
        };
    },
    () => { // Variable Capacitor
        return {
            topic: "DC Circuits",
            q: `A standard tuning capacitor (variable) uses _____ as the dielectric.`,
            a: `Air`,
            d: [`Mica`, `Ceramic`, `Electrolytic`]
        };
    },
    () => { // Electrolytic Polarity
        return {
            topic: "DC Circuits",
            q: `Which capacitor type MUST be connected with correct polarity?`,
            a: `Electrolytic`,
            d: [`Ceramic`, `Mica`, `Paper`]
        };
    },
    () => { // Stored Charge Formula
        const V = rInt(10, 50);
        const C_uF = 100;
        // Q = C * V
        const Q = (C_uF/1000000) * V;
        return {
            topic: "DC Circuits",
            q: `Charge (Q) stored in a ${C_uF}µF capacitor at ${V}V? (Q=CV)`,
            a: `${Q.toFixed(3)} Coulombs`,
            d: [`${(Q*10).toFixed(3)} C`, `${(Q/10).toFixed(3)} C`, `1 C`]
        };
    },

    // ======================================================
    // BATCH 28: ADVANCED AC POWER & VECTORS
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Wattless Current
        return {
            topic: "AC Theory",
            q: `The component of current in an AC circuit that performs NO useful work is:`,
            a: `Wattless Current (Reactive Component)`,
            d: [`Wattful Current`, `Active Current`, `In-phase Current`]
        };
    },
    () => { // Power Factor Correction
        return {
            topic: "AC Theory",
            q: `To improve the Power Factor of a heavily inductive load (Motors), you connect:`,
            a: `Capacitors in Parallel`,
            d: [`Inductors in Series`, `Resistors in Series`, `Resistors in Parallel`]
        };
    },
    () => { // Series Resonance Impedance
        return {
            topic: "AC Theory",
            q: `At Resonance in a SERIES L-C-R circuit, Impedance is:`,
            a: `Minimum (Equal to Resistance)`,
            d: [`Maximum`, `Zero`, `Infinite`]
        };
    },
    
    () => { // Parallel Resonance Impedance
        return {
            topic: "AC Theory",
            q: `At Resonance in a PARALLEL L-C circuit (Tank Circuit), Impedance is:`,
            a: `Maximum`,
            d: [`Minimum`, `Zero`, `Equal to Resistance`]
        };
    },
    () => { // True Power Calc
        // P = VI cos(theta)
        const V = 100, I = 10;
        const PF = 0.8;
        return {
            topic: "AC Theory",
            q: `AC Circuit: 100V, 10A, Power Factor 0.8. Calculate True Power.`,
            a: `800 W`,
            d: [`1000 W`, `1000 VA`, `800 VA`]
        };
    },

    // ======================================================
    // BATCH 29: MAGNETIC CIRCUITS & DOMAINS
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Domain Theory
        return {
            topic: "Magnetism",
            q: `In an unmagnetized iron bar, the magnetic domains are:`,
            a: `Randomly oriented (canceling each other out)`,
            d: [`Aligned North-South`, `Aligned East-West`, `Compressed`]
        };
    },
    () => { // Saturation Definition
        return {
            topic: "Magnetism",
            q: `Magnetic Saturation occurs when:`,
            a: `All domains are aligned with the external field`,
            d: [`The material melts`, `The magnet loses its charge`, `Coercive force is zero`]
        };
    },
    () => { // Shielding Mechanism
        return {
            topic: "Magnetism",
            q: `Magnetic shielding works by providing:`,
            a: `A low reluctance path for flux lines around the object`,
            d: [`A high resistance barrier`, `An electric field repelling flux`, `Insulation`]
        };
    },
    () => { // Reluctance Formula
        return {
            topic: "Magnetism",
            q: `Reluctance (S) is inversely proportional to:`,
            a: `Permeability (µ) and Cross-sectional Area (A)`,
            d: [`Length (l)`, `Current (I)`, `Voltage (V)`]
        };
    },
    () => { // Keeper
        return {
            topic: "Magnetism",
            q: `A soft iron 'Keeper' is placed across the poles of a permanent magnet to:`,
            a: `Complete the magnetic circuit and prevent demagnetization`,
            d: [`Increase the magnetic strength`, `Discharge static`, `Insulate the poles`]
        };
    },

    // ======================================================
    // BATCH 30: MOTOR CONTROL & SWITCHES
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Relay vs Solenoid
        return {
            topic: "DC Circuits",
            q: `Technically, a Relay has a _____ armature, while a Solenoid has a _____ core.`,
            a: `Hinged (Clapper), Movable (Plunger)`,
            d: [`Movable, Hinged`, `Fixed, Rotating`, `Rotating, Fixed`]
        };
    },
    () => { // Microswitch
        return {
            topic: "DC Circuits",
            q: `A switch designed to operate with very small physical movement is a:`,
            a: `Microswitch`,
            d: [`Toggle Switch`, `Rheostat`, `Relay`]
        };
    },
    
    () => { // Solenoid Force
        return {
            topic: "Magnetism",
            q: `The pulling force of a solenoid depends on Ampere-Turns and:`,
            a: `Position of the core (Air gap)`,
            d: [`Direction of current`, `Insulation color`, `Wire gauge only`]
        };
    },
    () => { // Relay Hysteresis
        return {
            topic: "DC Circuits",
            q: `For a relay, the 'Pull-in' voltage is always _____ than the 'Drop-out' voltage.`,
            a: `Higher`,
            d: [`Lower`, `The same`, `Zero`]
        };
    },
    () => { // Thermal Breaker
        return {
            topic: "DC Circuits",
            q: `A Thermal Circuit Breaker operates based on:`,
            a: `Expansion of a bimetallic strip due to heating (I²R)`,
            d: [`Magnetic field strength`, `Voltage spikes`, `Frequency changes`]
        };
    },
    // ======================================================
    // BATCH 31: RECTIFICATION & DIODES IN ALTERNATORS
    // Source: Electrical Fundamentals II (Chapter: AC Generators)
    // ======================================================
    () => { // Rectifier Purpose
        return {
            topic: "Electrical Machines",
            q: `The purpose of the Rectifier Assembly in an AC Alternator is to:`,
            a: `Convert the AC output of the stator to DC`,
            d: [`Convert DC field current to AC`, `Regulate the voltage`, `Cool the stator`]
        };
    },
    () => { // 3-Phase Rectifier
        return {
            topic: "Electrical Machines",
            q: `A standard 3-Phase Full-Wave rectifier consists of how many diodes?`,
            a: `6 Diodes`,
            d: [`3 Diodes`, `9 Diodes`, `12 Diodes`]
        };
    },
    () => { // Zener Diode Application
        return {
            topic: "Electron Theory",
            q: `A Zener Diode is primarily used for:`,
            a: `Voltage Regulation (Reference Voltage)`,
            d: [`Rectification`, `Amplification`, `Switching`]
        };
    },
    () => { // Silicon vs Germanium
        return {
            topic: "Electron Theory",
            q: `The forward voltage drop across a conducting Silicon diode is approximately:`,
            a: `0.7 V`,
            d: [`0.3 V`, `1.2 V`, `2.0 V`]
        };
    },
    () => { // Rotating Rectifier
        return {
            topic: "Electrical Machines",
            q: `In a Brushless Alternator, the Rotating Rectifier Assembly converts:`,
            a: `Exciter Armature AC to Main Field DC`,
            d: [`Main Stator AC to Bus DC`, `PMG AC to Exciter Field DC`, `Bus DC to AC`]
        };
    },

    // ======================================================
    // BATCH 32: VOLTAGE REGULATION
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Carbon Pile Regulator
        return {
            topic: "Electrical Machines",
            q: `In a Carbon Pile Voltage Regulator, compressing the carbon discs causes resistance to:`,
            a: `Decrease`,
            d: [`Increase`, `Fluctuate`, `Remain constant`]
        };
    },
    () => { // Regulator Sensing
        return {
            topic: "Electrical Machines",
            q: `The Voltage Regulator senses which voltage?`,
            a: `Generator Output Voltage (Terminal Voltage)`,
            d: [`Battery Voltage`, `Field Voltage`, `Armature Current`]
        };
    },
    () => { // Vibrating Contact Regulator
        return {
            topic: "Electrical Machines",
            q: `A Vibrating Contact regulator controls voltage by:`,
            a: `Rapidly switching a resistor in and out of the field circuit`,
            d: [`Adjusting the speed of the generator`, `Disconnecting the load`, `Compressing carbon discs`]
        };
    },
    () => { // Over-Voltage Protection
        return {
            topic: "Electrical Machines",
            q: `If the Voltage Regulator fails and field current goes to maximum, the protection unit will:`,
            a: `Trip the Generator Control Relay (Disconnect the Generator)`,
            d: [`Increase the load to drop voltage`, `Open the battery relay`, `Do nothing`]
        };
    },
    () => { // Reverse Current Relay
        return {
            topic: "Electrical Machines",
            q: `The purpose of the Reverse Current Cut-Out (Relay) in a DC system is to:`,
            a: `Prevent the battery from discharging back into the generator`,
            d: [`Prevent the generator charging the battery`, `Regulate voltage`, `Limit maximum current`]
        };
    },

    // ======================================================
    // BATCH 33: BATTERY SAFETY & INSTALLATION
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Neutralizing Lead Acid
        return {
            topic: "Batteries",
            q: `Spilled Lead-Acid electrolyte (Sulphuric Acid) should be neutralized with:`,
            a: `Sodium Bicarbonate (Baking Soda) solution`,
            d: [`Vinegar (Acetic Acid)`, `Boric Acid`, `Water only`]
        };
    },
    () => { // Neutralizing NiCd
        return {
            topic: "Batteries",
            q: `Spilled NiCd electrolyte (Potassium Hydroxide) should be neutralized with:`,
            a: `Boric Acid or Vinegar`,
            d: [`Baking Soda`, `Ammonia`, `Caustic Soda`]
        };
    },
    () => { // Battery Ventilation
        return {
            topic: "Batteries",
            q: `Battery compartments must be ventilated primarily to remove:`,
            a: `Hydrogen Gas (Explosive)`,
            d: [`Oxygen`, `Chlorine Gas`, `Nitrogen`]
        };
    },
    () => { // Thermal Sensor
        return {
            topic: "Batteries",
            q: `NiCd batteries installed in aircraft usually require a:`,
            a: `Temperature Sensor (to detect Thermal Runaway)`,
            d: [`Pressure Sensor`, `Humidity Sensor`, `Vibration Sensor`]
        };
    },
    () => { // Sump Jar
        return {
            topic: "Batteries",
            q: `A Battery Sump Jar is used to:`,
            a: `Collect overflow electrolyte and neutralize it`,
            d: [`Store spare electrolyte`, `Measure specific gravity`, `Cool the battery`]
        };
    },

    // ======================================================
    // BATCH 34: THERMOCOUPLE LAWS & TEMPERATURE
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Law of Intermediate Metals
        return {
            topic: "Electron Theory",
            q: `The Law of Intermediate Metals allows us to:`,
            a: `Use solder or terminals at junctions without affecting the reading (if temps are same)`,
            d: [`Use different wires for hot and cold`, `Ignore the cold junction temp`, `Generate infinite power`]
        };
    },
    () => { // Cold Junction Compensation
        return {
            topic: "Electron Theory",
            q: `In aircraft temperature indicators, 'Cold Junction Compensation' is required because:`,
            a: `The instrument itself varies in temperature`,
            d: [`The engine is too hot`, `The wires are too long`, `The battery voltage fluctuates`]
        };
    },
    () => { // Thermocouple Materials
        return {
            topic: "Electron Theory",
            q: `Common materials for Exhaust Gas Temperature (EGT) thermocouples are:`,
            a: `Chromel and Alumel`,
            d: [`Copper and Iron`, `Gold and Silver`, `Iron and Constantan`]
        };
    },
    () => { // Resistance Temperature Detector (RTD)
        return {
            topic: "Electron Theory",
            q: `An RTD measures temperature by detecting the change in:`,
            a: `Resistance of a wire coil (Positive Temp Coeff)`,
            d: [`Voltage generated`, `Capacitance`, `Inductance`]
        };
    },
    () => { // Thermistor
        return {
            topic: "Electron Theory",
            q: `A Thermistor typically has a _____ Temperature Coefficient.`,
            a: `Negative (Resistance drops as Temp rises)`,
            d: [`Positive`, `Zero`, `Infinite`]
        };
    },

    // ======================================================
    // BATCH 35: ADVANCED AC CALCULATIONS
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Reactive Power Calc
        // Q = V I sin(theta)
        const V = 200, I = 5;
        const sinTheta = 0.6; // 3-4-5 triangle relation commonly used
        return {
            topic: "AC Theory",
            q: `AC Circuit: 200V, 5A. Sin(θ) = 0.6. Calculate Reactive Power (Q).`,
            a: `600 VAR`,
            d: [`1000 VAR`, `800 VAR`, `200 VAR`]
        };
    },
    () => { // Impedance Triangle
        return {
            topic: "AC Theory",
            q: `In an Impedance Triangle, the hypotenuse represents:`,
            a: `Impedance (Z)`,
            d: [`Resistance (R)`, `Reactance (X)`, `Power (P)`]
        };
    },
    () => { // Power Triangle
        return {
            topic: "AC Theory",
            q: `In a Power Triangle, the horizontal adjacent side represents:`,
            a: `True Power (Watts)`,
            d: [`Apparent Power (VA)`, `Reactive Power (VAR)`, `Phase Angle`]
        };
    },
    () => { // Resonant Current Parallel
        return {
            topic: "AC Theory",
            q: `In a Parallel LC Tank Circuit at resonance, the line current is:`,
            a: `Minimum`,
            d: [`Maximum`, `Zero`, `Infinite`]
        };
    },
    () => { // Resonant Current Series
        return {
            topic: "AC Theory",
            q: `In a Series LC Circuit at resonance, the line current is:`,
            a: `Maximum`,
            d: [`Minimum`, `Zero`, `Blocked`]
        };
    },
    // ======================================================
    // BATCH 36: VOLTAGE REGULATORS (CARBON PILE & VIBRATING)
    // Source: Electrical Fundamentals II (Chapter: Regulation)
    // ======================================================
    () => { // Carbon Pile Spring
        return {
            topic: "Electrical Machines",
            q: `In a Carbon Pile Regulator, the spring force acts to:`,
            a: `Compress the carbon discs (Decrease Resistance)`,
            d: [`Separate the discs (Increase Resistance)`, `Cool the discs`, `Lock the discs`]
        };
    },
    () => { // Carbon Pile Electromagnet
        return {
            topic: "Electrical Machines",
            q: `The electromagnet in a Carbon Pile Regulator acts to:`,
            a: `Oppose the spring and separate the discs (Increase Resistance)`,
            d: [`Aid the spring`, `Compress the discs`, `Switch off the circuit`]
        };
    },
    () => { // Vibrating Contact Frequency
        return {
            topic: "Electrical Machines",
            q: `A Vibrating Contact Regulator typically operates at a frequency of:`,
            a: `50 - 200 Hz`,
            d: [`1 - 2 Hz`, `1000 - 2000 Hz`, `50 - 60 kHz`]
        };
    },
    () => { // Equalizing Circuit Purpose
        return {
            topic: "Electrical Machines",
            q: `The purpose of the Equalizing Circuit in parallel generator systems is to:`,
            a: `Ensure both generators carry an equal share of the load`,
            d: [`Regulate the voltage of the battery`, `Prevent reverse current`, `Monitor frequency`]
        };
    },
    () => { // Generator Field Flashing
        return {
            topic: "Electrical Machines",
            q: `If a DC Generator loses its residual magnetism, it must be:`,
            a: `Flashed (Field Flashing)`,
            d: [`Rewound`, `Demagnetized`, `Replaced`]
        };
    },

    // ======================================================
    // BATCH 37: RECTIFIERS & DIODES (PHYSICS)
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // P-N Junction
        return {
            topic: "Electron Theory",
            q: `The region where P-type and N-type materials join is called the:`,
            a: `Depletion Region (Barrier Potential)`,
            d: [`Conductive Region`, `Saturation Zone`, `Hole Region`]
        };
    },
    () => { // Forward Bias
        return {
            topic: "Electron Theory",
            q: `To forward bias a diode (allow current), the Anode must be:`,
            a: `Positive relative to the Cathode`,
            d: [`Negative relative to the Cathode`, `Ground`, `Open circuit`]
        };
    },
    () => { // Reverse Bias Breakdown
        return {
            topic: "Electron Theory",
            q: `The voltage at which a reverse-biased diode suddenly conducts is the:`,
            a: `Breakdown Voltage (Zener Voltage)`,
            d: [`Threshold Voltage`, `Forward Voltage`, `Peak Voltage`]
        };
    },
    () => { // 3-Phase Rectifier Ripple
        return {
            topic: "Electrical Machines",
            q: `The output ripple frequency of a 3-Phase Full-Wave rectifier is:`,
            a: `6 times the input frequency`,
            d: [`2 times the input frequency`, `3 times the input frequency`, `Same as input`]
        };
    },
    () => { // Zener Regulator
        return {
            topic: "Electron Theory",
            q: `A Zener diode regulates voltage when connected in:`,
            a: `Reverse Bias (Parallel to load)`,
            d: [`Forward Bias (Series with load)`, `Series with battery`, `Bridge configuration`]
        };
    },

    // ======================================================
    // BATCH 38: BATTERY CHEMISTRY & TESTING
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Lead Acid Discharge Product
        return {
            topic: "Batteries",
            q: `When a Lead-Acid battery discharges, both plates turn into:`,
            a: `Lead Sulphate`,
            d: [`Lead Peroxide`, `Spongy Lead`, `Sulphuric Acid`]
        };
    },
    () => { // Lead Acid Charge Product
        return {
            topic: "Batteries",
            q: `During charging, the Positive plate of a Lead-Acid battery becomes:`,
            a: `Lead Peroxide`,
            d: [`Spongy Lead`, `Lead Sulphate`, `Carbon`]
        };
    },
    () => { // NiCd Voltage Depression
        return {
            topic: "Batteries",
            q: `The "Memory Effect" in NiCd batteries is technically called:`,
            a: `Voltage Depression`,
            d: [`Capacity Fade`, `Thermal Runaway`, `Cell Reversal`]
        };
    },
    () => { // Cell Reversal
        return {
            topic: "Batteries",
            q: `Deep discharging a multi-cell NiCd battery can cause:`,
            a: `Cell Reversal (Weakest cell charges backwards)`,
            d: [`Thermal Runaway`, `Overcharging`, `Plate buckling`]
        };
    },
    () => { // High Rate Discharge
        return {
            topic: "Batteries",
            q: `A high-rate discharge test is used to check:`,
            a: `Internal mechanical integrity (connections)`,
            d: [`Amp-hour capacity`, `Electrolyte level`, `Case leakage`]
        };
    },

    // ======================================================
    // BATCH 39: ADVANCED AC PHASE & POWER
    // Source: Electrical Fundamentals II
    // ======================================================
    () => { // Phase Difference
        return {
            topic: "AC Theory",
            q: `If Voltage peaks at 0° and Current peaks at 90°, the Phase Difference is:`,
            a: `90° (Quarter Cycle)`,
            d: [`180° (Half Cycle)`, `45°`, `0° (In Phase)`]
        };
    },
    () => { // Power Factor Unity
        return {
            topic: "AC Theory",
            q: `A Power Factor of 1.0 (Unity) implies the circuit is:`,
            a: `Purely Resistive (or Resonant)`,
            d: [`Purely Inductive`, `Purely Capacitive`, `Open Circuit`]
        };
    },
    () => { // Power Factor Zero
        return {
            topic: "AC Theory",
            q: `A Power Factor of 0 implies the circuit is:`,
            a: `Purely Reactive (Inductive or Capacitive)`,
            d: [`Purely Resistive`, `Short Circuit`, `DC`]
        };
    },
    () => { // Apparent Power Formula
        const V = 115, I = 2;
        return {
            topic: "AC Theory",
            q: `AC Circuit: 115V, 2A. Calculate Apparent Power (S).`,
            a: `230 VA`,
            d: [`230 W`, `115 VA`, `460 VA`]
        };
    },
    () => { // True Power with Angle
        // P = VI cos(60). cos(60) = 0.5
        const S = 1000; // VA
        return {
            topic: "AC Theory",
            q: `Apparent Power 1000VA. Phase angle 60° (cos 60 = 0.5). True Power?`,
            a: `500 W`,
            d: [`1000 W`, `866 W`, `250 W`]
        };
    },

    // ======================================================
    // BATCH 40: THERMOCOUPLES & MEASURING (FINAL)
    // Source: Electrical Fundamentals I
    // ======================================================
    () => { // Seebeck Effect
        return {
            topic: "Electron Theory",
            q: `The generation of voltage by heating the junction of two dissimilar metals is the:`,
            a: `Seebeck Effect`,
            d: [`Peltier Effect`, `Thomson Effect`, `Joule Effect`]
        };
    },
    () => { // Peltier Effect
        return {
            topic: "Electron Theory",
            q: `Passing current through a junction of dissimilar metals to create heating/cooling is the:`,
            a: `Peltier Effect`,
            d: [`Seebeck Effect`, `Piezo Effect`, `Hall Effect`]
        };
    },
    () => { // Strain Gauge
        return {
            topic: "Measuring Instruments",
            q: `A Strain Gauge works on the principle that:`,
            a: `Resistance changes when the wire is stretched or compressed`,
            d: [`Voltage is generated by pressure`, `Capacitance changes with heat`, `Inductance changes`]
        };
    },
    () => { // Wheatstone Accuracy
        return {
            topic: "Measuring Instruments",
            q: `Why is a Wheatstone Bridge more accurate than a simple Ohmmeter?`,
            a: `It is a Null-Deflection method (compares to a standard)`,
            d: [`It uses higher voltage`, `It uses digital logic`, `It measures current not resistance`]
        };
    },
    () => { // Frequency Meter (Ratio)
        return {
            topic: "Measuring Instruments",
            q: `A Ratiometer type Frequency Meter uses:`,
            a: `Two parallel circuits (L and C) with different resonant frequencies`,
            d: [`A vibrating reed`, `A digital counter`, `A strobe light`]
        };
    },
    // ======================================================
    // BATCH 41: SYNCHROS & SERVOMECHANISMS
    // Source: Electrical Fundamentals II (Chapter: Synchros)
    // ======================================================
    () => { // Synchro System Purpose
        return {
            topic: "Servomechanisms",
            q: `A Synchro system is primarily used for:`,
            a: `Remote transmission of angular position (Data Transmission)`,
            d: [`Voltage regulation`, `Power generation`, `Rectification`]
        };
    },
    () => { // Torque Synchro vs Control Synchro
        return {
            topic: "Servomechanisms",
            q: `A Torque Synchro system is used to:`,
            a: `Drive light loads directly (e.g., a dial pointer)`,
            d: [`Drive heavy control surfaces`, `Control a servo amplifier`, `Generate AC power`]
        };
    },
    () => { // Synchro Construction
        return {
            topic: "Servomechanisms",
            q: `A standard Synchro Transmitter (TX) has a:`,
            a: `Single-phase Rotor and Three-phase Stator`,
            d: [`Three-phase Rotor and Single-phase Stator`, `DC Rotor and AC Stator`, `Permanent Magnet Rotor`]
        };
    },
    () => { // Electrical Lock
        return {
            topic: "Servomechanisms",
            q: `When the rotors of a Transmitter (TX) and Receiver (TR) are in correspondence (aligned), the current in the stator lines is:`,
            a: `Minimum (approaching zero)`,
            d: [`Maximum`, `Equal to rotor current`, `Unbalanced`]
        };
    },
    () => { // Differential Synchro
        return {
            topic: "Servomechanisms",
            q: `A Differential Synchro Transmitter (TDX) has:`,
            a: `A Three-phase Rotor and Three-phase Stator`,
            d: [`Single-phase Rotor and Three-phase Stator`, `DC Rotor`, `Split phase windings`]
        };
    },
    () => { // Differential Purpose
        return {
            topic: "Servomechanisms",
            q: `The output of a Differential Synchro represents the:`,
            a: `Algebraic Sum or Difference of two input angles`,
            d: [`Product of two angles`, `Ratio of two angles`, `Average of two angles`]
        };
    },
    
    () => { // Control Transformer (CT)
        return {
            topic: "Servomechanisms",
            q: `A Control Transformer (CT) supplies an error signal to a:`,
            a: `Servo Amplifier`,
            d: [`Torque Receiver directly`, `DC Motor directly`, `Power supply`]
        };
    },

    // ======================================================
    // BATCH 42: BONDING, SCREENING & PROTECTION
    // Source: Electrical Fundamentals I & II
    // ======================================================
    () => { // Bonding Resistance
        return {
            topic: "DC Circuits",
            q: `The maximum allowable resistance for a Bonding connection (Primary Structure) is typically:`,
            a: `0.05 Ohms (or less)`,
            d: [`0.5 Ohms`, `1.0 Ohms`, `5 Ohms`]
        };
    },
    () => { // Bonding Purpose
        return {
            topic: "DC Circuits",
            q: `Which is NOT a primary purpose of Electrical Bonding?`,
            a: `To increase the resistance of the return path`,
            d: [`To provide a low resistance return path`, `To prevent static buildup`, `To reduce radio interference`]
        };
    },
    () => { // Trip-Free Breaker
        return {
            topic: "DC Circuits",
            q: `A 'Trip-Free' Circuit Breaker is one that:`,
            a: `Cannot be held closed against a fault`,
            d: [`Can be held closed in an emergency`, `Resets automatically`, `Does not trip thermally`]
        };
    },
    () => { // Fuse Rating
        return {
            topic: "DC Circuits",
            q: `A Current Limiter (High Capacity Fuse) is designed to:`,
            a: `Isolate a bus in the event of a massive short circuit`,
            d: [`Protect delicate instruments`, `Regulate voltage`, `Filter noise`]
        };
    },
    () => { // Slow Blow Fuse
        return {
            topic: "DC Circuits",
            q: `A 'Slow-Blow' or Time-Delay fuse is used for circuits with:`,
            a: `High inrush currents (e.g., Motors)`,
            d: [`Sensitive electronics`, `Resistive loads`, `Lighting`]
        };
    },
    () => { // Circuit Breaker Reset
        return {
            topic: "DC Circuits",
            q: `If a Circuit Breaker pops, you should generally allow it to:`,
            a: `Cool down before attempting ONE reset`,
            d: [`Be reset immediately and repeatedly`, `Stay open forever`, `Be replaced with a higher rating`]
        };
    },

    // ======================================================
    // BATCH 43: ADVANCED MOTOR SPEED & CONTROL
    // Source: Electrical Fundamentals I (DC Machines)
    // ======================================================
    () => { // Speed Formula
        return {
            topic: "Electrical Machines",
            q: `The speed (N) of a DC Motor is proportional to:`,
            a: `Back EMF divided by Flux (Eb / Φ)`,
            d: [`Flux divided by Back EMF`, `Armature Current`, `Torque`]
        };
    },
    () => { // Field Loss Danger
        return {
            topic: "Electrical Machines",
            q: `If the field circuit of a loaded DC Shunt Motor opens, the motor will:`,
            a: `Overspeed (Run away) and potentially self-destruct`,
            d: [`Stop immediately`, `Slow down`, `Reverse direction`]
        };
    },
    () => { // Ward Leonard System
        return {
            topic: "Electrical Machines",
            q: `The Ward-Leonard system is a method of controlling DC Motor speed by:`,
            a: `Varying the Armature Voltage using a separate generator`,
            d: [`Varying the Field Resistance`, `Using a centrifugal switch`, `Shifting brushes`]
        };
    },
    () => { // Universal Motor AC
        return {
            topic: "Electrical Machines",
            q: `When a Universal Motor runs on AC compared to DC, its efficiency is:`,
            a: `Lower (due to Hysteresis and Eddy Current losses)`,
            d: [`Higher`, `Exactly the same`, `Zero`]
        };
    },
    () => { // Split Field Motor
        return {
            topic: "Electrical Machines",
            q: `A Split-Field Series Motor is commonly used for:`,
            a: `Reversible Actuators (Landing Gear, Flaps)`,
            d: [`Constant speed fans`, `Gyros`, `Generators`]
        };
    },

    // ======================================================
    // BATCH 44: COMPLEX AC/DC MATH SCENARIOS
    // Source: Electrical Fundamentals I & II
    // ======================================================
    () => { // Internal Resistance Calc
        const V_noLoad = 24;
        const V_load = 22;
        const I = 10;
        // V_drop = 2V. R = V/I = 2/10 = 0.2
        return {
            topic: "Batteries",
            q: `Battery Open Circuit Voltage 24V. With 10A load, Voltage is 22V. Internal Resistance?`,
            a: `0.2 Ω`,
            d: [`2.0 Ω`, `0.02 Ω`, `1.0 Ω`]
        };
    },
    () => { // Max Power Transfer
        return {
            topic: "DC Circuits",
            q: `Maximum Power Transfer Theorem states max power is delivered to the load when:`,
            a: `Load Resistance equals Source Internal Resistance`,
            d: [`Load Resistance is zero`, `Load Resistance is infinite`, `Source Resistance is zero`]
        };
    },
    () => { // Parallel AC Resonance
        // In parallel tank, circulating current is Q times line current
        const I_line = 2;
        const Q = 10;
        return {
            topic: "AC Theory",
            q: `Parallel Tank Circuit: Q=10, Line Current=2A at resonance. Circulating Current?`,
            a: `20 A`,
            d: [`2 A`, `0.2 A`, `5 A`]
        };
    },
    () => { // 3-Phase Delta Power
        // P = root3 * VL * IL * PF
        // Let's do a VA calc. S = root3 * VL * IL
        const VL = 200;
        const IL = 10;
        const root3 = 1.732;
        const S = (root3 * VL * IL).toFixed(0);
        return {
            topic: "AC Theory",
            q: `3-Phase Delta: Line Voltage 200V, Line Current 10A. Apparent Power?`,
            a: `${S} VA`,
            d: [`2000 VA`, `6000 VA`, `1000 VA`]
        };
    },
    () => { // Efficiency Calc
        const Pin = 1000; // Watts
        const Pout = 850; // Watts
        const eff = (Pout/Pin) * 100;
        return {
            topic: "Electrical Machines",
            q: `Motor Input 1000W, Output 850W. Efficiency?`,
            a: `${eff}%`,
            d: [`117%`, `15%`, `850%`]
        };
    },

    // ======================================================
    // BATCH 45: SEMICONDUCTORS & LOGIC (BONUS)
    // Source: Electrical Fundamentals II (Electronics Section)
    // ======================================================
    () => { // Thyristor (SCR)
        return {
            topic: "Electron Theory",
            q: `A Silicon Controlled Rectifier (SCR) acts as a:`,
            a: `Controllable Switch (Conducts when Gate is triggered)`,
            d: [`Linear Amplifier`, `Voltage Regulator`, `Resistor`]
        };
    },
    () => { // Transistor Terminals
        return {
            topic: "Electron Theory",
            q: `The three terminals of a Bipolar Junction Transistor (BJT) are:`,
            a: `Emitter, Base, Collector`,
            d: [`Source, Gate, Drain`, `Anode, Cathode, Gate`, `Input, Output, Ground`]
        };
    },
    () => { // Logic Gate AND
        return {
            topic: "Electron Theory",
            q: `Which Logic Gate outputs a 1 only if ALL inputs are 1?`,
            a: `AND Gate`,
            d: [`OR Gate`, `NAND Gate`, `XOR Gate`]
        };
    },
    () => { // Logic Gate OR
        return {
            topic: "Electron Theory",
            q: `Which Logic Gate outputs a 1 if ANY input is 1?`,
            a: `OR Gate`,
            d: [`AND Gate`, `NOR Gate`, `NOT Gate`]
        };
    },
    () => { // Inverter
        return {
            topic: "Electrical Machines",
            q: `An electrical Inverter converts:`,
            a: `DC to AC`,
            d: [`AC to DC`, `DC to DC`, `AC to AC`]
        };
    },
    () => { // Transformer Rectifier Unit (TRU)
        return {
            topic: "Electrical Machines",
            q: `A TRU (Transformer Rectifier Unit) converts:`,
            a: `AC to Low Voltage DC`,
            d: [`DC to AC`, `Low Voltage DC to High Voltage DC`, `AC to AC`]
        };
    },
        // ======================================================
    // BATCH 46: DIGITAL LOGIC & NUMBERING SYSTEMS
    // Source: Electrical Fundamentals II (Electronics)
    // ======================================================
    () => { // Binary to Decimal
        // Simple 3-bit binary
        const val = rInt(1, 7);
        const bin = val.toString(2).padStart(3, '0');
        return {
            topic: "Digital Techniques",
            q: `Convert Binary number ${bin} to Decimal.`,
            a: `${val}`,
            d: [`${val+1}`, `${val*2}`, `8`]
        };
    },
    () => { // Hexadecimal
        return {
            topic: "Digital Techniques",
            q: `In Hexadecimal (Base 16), the character 'F' represents Decimal:`,
            a: `15`,
            d: [`16`, `14`, `10`]
        };
    },
    () => { // NAND Gate
        return {
            topic: "Digital Techniques",
            q: `Which Logic Gate outputs a 0 only when ALL inputs are 1?`,
            a: `NAND Gate`,
            d: [`AND Gate`, `NOR Gate`, `XOR Gate`]
        };
    },
    () => { // XOR Gate
        return {
            topic: "Digital Techniques",
            q: `Which Logic Gate outputs a 1 only when inputs are DIFFERENT?`,
            a: `XOR (Exclusive OR)`,
            d: [`OR Gate`, `AND Gate`, `NOR Gate`]
        };
    },
    () => { // Flip-Flop
        return {
            topic: "Digital Techniques",
            q: `A Flip-Flop (Bistable Multivibrator) is used primarily for:`,
            a: `Storage of 1 bit of memory`,
            d: [`Amplification`, `Rectification`, `Voltage regulation`]
        };
    },
    () => { // Octal System
        return {
            topic: "Digital Techniques",
            q: `The Octal numbering system uses Base:`,
            a: `8 (0-7)`,
            d: [`16 (0-F)`, `2 (0-1)`, `10 (0-9)`]
        };
    },

    // ======================================================
    // BATCH 47: TRANSISTORS & AMPLIFIERS
    // Source: Electrical Fundamentals II (Semiconductors)
    // ======================================================
    () => { // NPN Symbol
        return {
            topic: "Electron Theory",
            q: `In the symbol for an NPN transistor, the arrow on the Emitter points:`,
            a: `OUT (Not Pointing In)`,
            d: [`IN (Pointing In)`, `Towards the Base`, `Towards the Collector`]
        };
    },
    () => { // PNP Symbol
        return {
            topic: "Electron Theory",
            q: `In the symbol for a PNP transistor, the arrow on the Emitter points:`,
            a: `IN (Pointing In)`,
            d: [`OUT`, `Away from Base`, `Towards Collector`]
        };
    },
    () => { // Class A Amplifier
        return {
            topic: "Electron Theory",
            q: `A Class A Amplifier conducts for:`,
            a: `360° of the input cycle (Full Cycle)`,
            d: [`180° (Half Cycle)`, `Less than 180°`, `90° only`]
        };
    },
    () => { // Class B Amplifier
        return {
            topic: "Electron Theory",
            q: `Class B Amplifiers are typically used in a Push-Pull configuration to reduce:`,
            a: `Crossover Distortion`,
            d: [`Input Impedance`, `Voltage Gain`, `Heat`]
        };
    },
    () => { // Common Collector
        return {
            topic: "Electron Theory",
            q: `A Common Collector configuration (Emitter Follower) has:`,
            a: `High Input Impedance, Low Output Impedance (Buffer)`,
            d: [`Low Input Impedance, High Output Impedance`, `High Voltage Gain`, `Phase Inversion`]
        };
    },
    () => { // Transistor Saturation
        return {
            topic: "Electron Theory",
            q: `When a transistor is fully 'ON' (acting as a closed switch), it is in:`,
            a: `Saturation`,
            d: [`Cut-off`, `Active Region`, `Breakdown`]
        };
    },

    // ======================================================
    // BATCH 48: ADVANCED SENSORS (LVDT, MAGNESYN)
    // Source: Electrical Fundamentals I (Instruments)
    // ======================================================
    () => { // LVDT Definition
        return {
            topic: "Servomechanisms",
            q: `An LVDT (Linear Variable Differential Transformer) measures:`,
            a: `Linear Displacement`,
            d: [`Rotation`, `Temperature`, `Pressure`]
        };
    },
    () => { // LVDT Output
        return {
            topic: "Servomechanisms",
            q: `The output of an LVDT indicates direction of movement by:`,
            a: `Phase relationship to the input`,
            d: [`Frequency change`, `DC polarity`, `Current magnitude`]
        };
    },
    () => { // Magnesyn System
        return {
            topic: "Servomechanisms",
            q: `A Magnesyn remote indicating system uses:`,
            a: `A Toroidal coil and a Permanent Magnet rotor`,
            d: [`A DC potentiometer`, `Three-phase stator windings`, `A Bourdon tube`]
        };
    },
    () => { // Desynn System
        return {
            topic: "Servomechanisms",
            q: `A Desynn indicator is essentially a:`,
            a: `DC Selsyn (Potentiometer transmitter and moving coil receiver)`,
            d: [`AC Synchro`, `Stepper Motor`, `Digital Encoder`]
        };
    },
    () => { // RVDT
        return {
            topic: "Servomechanisms",
            q: `An RVDT is the rotary equivalent of an LVDT and is used for:`,
            a: `Angular position sensing (e.g. Throttle levers)`,
            d: [`Linear extension`, `Vibration sensing`, `Fluid flow`]
        };
    },

    // ======================================================
    // BATCH 49: MATERIALS & WAVEFORMS
    // Source: Electrical Fundamentals I & II
    // ======================================================
    () => { // Mu-Metal
        return {
            topic: "Magnetism",
            q: `Mu-Metal is a nickel-iron alloy known for its:`,
            a: `Extremely High Permeability (Magnetic Shielding)`,
            d: [`High Retentivity`, `High Resistance`, `Low Weight`]
        };
    },
    () => { // Zero Temp Coeff Materials
        return {
            topic: "DC Circuits",
            q: `Manganin and Constantan are used for precision resistors because they have:`,
            a: `Almost Zero Temperature Coefficient of Resistance`,
            d: [`Very low resistance`, `High conductivity`, `Magnetic properties`]
        };
    },
    () => { // Square Wave Harmonics
        return {
            topic: "AC Theory",
            q: `A Square Wave consists of a Fundamental frequency plus:`,
            a: `All Odd Harmonics`,
            d: [`All Even Harmonics`, `Both Odd and Even Harmonics`, `No Harmonics`]
        };
    },
    () => { // Sawtooth Wave
        return {
            topic: "AC Theory",
            q: `A Sawtooth waveform is commonly used for:`,
            a: `Time Base generators (CRT Sweep)`,
            d: [`Power transmission`, `Audio amplification`, `Motor control`]
        };
    },
    () => { // Harmonic Distortion
        return {
            topic: "AC Theory",
            q: `The presence of harmonics in an AC power supply causes:`,
            a: `Waveform distortion and potential overheating`,
            d: [`Increased efficiency`, `Better power factor`, `Voltage stability`]
        };
    },

    // ======================================================
    // BATCH 50: MACHINE LOSSES & STARTERS
    // Source: Electrical Fundamentals I & II
    // ======================================================
    () => { // Iron Losses
        return {
            topic: "Electrical Machines",
            q: `Iron Losses in a machine consist of:`,
            a: `Hysteresis and Eddy Current losses`,
            d: [`Copper and Friction losses`, `Windage and Friction`, `Heat and Light`]
        };
    },
    () => { // Constant vs Variable Losses
        return {
            topic: "Electrical Machines",
            q: `In a constant speed motor, Iron Losses and Mechanical Losses are considered:`,
            a: `Constant Losses`,
            d: [`Variable Losses (depend on load)`, `Negligible`, `Zero`]
        };
    },
    () => { // Star-Delta Starter
        return {
            topic: "Electrical Machines",
            q: `A Star-Delta starter reduces starting current by starting the motor in:`,
            a: `Star (Low Voltage) and switching to Delta (Full Voltage)`,
            d: [`Delta and switching to Star`, `Series and switching to Parallel`, `Reverse`]
        };
    },
    () => { // Discharge Chemical Equation
        return {
            topic: "Batteries",
            q: `The chemical equation for a Discharging Lead-Acid battery produces:`,
            a: `Lead Sulphate + Water`,
            d: [`Sulphuric Acid + Lead`, `Lead Peroxide + Hydrogen`, `Potassium Hydroxide`]
        };
    },
    () => { // Thermal Efficiency
        return {
            topic: "Electrical Machines",
            q: `Maximum efficiency of a machine occurs when:`,
            a: `Variable Losses (Copper) equal Constant Losses (Iron + Friction)`,
            d: [`Variable Losses are zero`, `Constant Losses are zero`, `Friction is maximum`]
        };
    },
    // ======================================================
    // BATCH 51: ADVANCED DC PHYSICS & BATTERIES
    // Difficulty: High (Application & Calculations)
    // ======================================================
    () => { // Temperature Coefficient Calculation
        const R20 = 100; // Ohms at 20C
        const alpha = 0.004; // Copper approx
        const dT = 50; // Temp rise
        // Rt = R0 (1 + alpha * dT)
        const Rt = R20 * (1 + (alpha * dT));
        return {
            topic: "Electron Theory",
            q: `Copper wire has resistance ${R20}Ω at 20°C. α = 0.004. Calculate Resistance at 70°C.`,
            a: `${Rt} Ω`,
            d: [`${R20 + dT} Ω`, `${R20 * alpha * dT} Ω`, `${Rt - 10} Ω`]
        };
    },
    () => { // Max Power Transfer Efficiency
        return {
            topic: "DC Circuits",
            q: `At Maximum Power Transfer (Load R = Source R), the electrical efficiency of the circuit is:`,
            a: `50%`,
            d: [`100%`, `75%`, `25%`]
        };
    },
    () => { // NiCd State of Charge
        return {
            topic: "Batteries",
            q: `Why can Specific Gravity NOT be used to measure the State of Charge of a NiCd battery?`,
            a: `The electrolyte density does not change appreciably during charge/discharge`,
            d: [`The electrolyte is a gel`, `The electrolyte is absorbed in the plates`, `It is dangerous to open the cells`]
        };
    },
    () => { // Battery Internal Drop
        const EMF = 28;
        const R_int = 0.1;
        const I = 50;
        const V_term = EMF - (I * R_int);
        return {
            topic: "Batteries",
            q: `Start cycle: Battery EMF 28V, Internal Res 0.1Ω. Current 50A. Terminal Voltage?`,
            a: `${V_term} V`,
            d: [`28 V`, `5 V`, `27.5 V`]
        };
    },
    () => { // Parallel Battery Imbalance
        return {
            topic: "Batteries",
            q: `If two 24V batteries are connected in parallel, but one is at 22V and the other at 26V, what happens?`,
            a: `High circulating current flows from the higher to the lower battery (Heat hazard)`,
            d: [`They instantly equalize to 24V with no current`, `The voltage sums to 48V`, `The breaker trips immediately`]
        };
    },

    // ======================================================
    // BATCH 52: ADVANCED AC & 3-PHASE FAULTS
    // Difficulty: High (Conceptual Analysis)
    // ======================================================
    () => { // Resonant Bandwidth
        const fr = 1000; // Hz
        const Q = 10;
        const BW = fr / Q;
        return {
            topic: "AC Theory",
            q: `Resonant Freq 1000Hz, Q-Factor 10. What is the Bandwidth? (BW = fr/Q)`,
            a: `${BW} Hz`,
            d: [`10 Hz`, `10000 Hz`, `500 Hz`]
        };
    },
    () => { // 3-Phase Open Neutral
        return {
            topic: "AC Theory",
            q: `In a 3-Phase Star system with UNBALANCED loads, if the Neutral line opens:`,
            a: `The phase voltages become unstable (Floating Neutral)`,
            d: [`The system stops working`, `Voltages remain 115V`, `Current drops to zero`]
        };
    },
    () => { // Delta Current Calculation
        const I_phase = 10;
        const I_line = (10 * 1.732).toFixed(1);
        return {
            topic: "AC Theory",
            q: `3-Phase Delta: Phase Current is 10A. Calculate Line Current.`,
            a: `${I_line} A`,
            d: [`10 A`, `30 A`, `20 A`]
        };
    },
    () => { // High Pass Filter Cut-off
        return {
            topic: "AC Theory",
            q: `In an RC High Pass filter, the Cut-off Frequency ($f_c$) is where:`,
            a: `Capacitive Reactance ($X_C$) equals Resistance ($R$)`,
            d: [`$X_C$ is zero`, `$X_C$ is infinite`, `$R$ is zero`]
        };
    },
    () => { // Universal Motor Impedance
        return {
            topic: "AC Theory",
            q: `When a coil is moved from DC to 400Hz AC supply, its Total Impedance will:`,
            a: `Increase significantly due to Inductive Reactance ($X_L$)`,
            d: [`Decrease due to skin effect`, `Remain the same`, `Become zero`]
        };
    },

    // ======================================================
    // BATCH 53: MACHINE REGULATION & FAILURE MODES
    // Difficulty: High (Systems Knowledge)
    // ======================================================
    () => { // Generator Runaway
        return {
            topic: "Electrical Machines",
            q: `In a DC Shunt Motor, if the Field winding breaks (Open Circuit) while running light, speed will:`,
            a: `Increase dangerously (Runaway) to generate required Back EMF`,
            d: [`Drop to zero immediately`, `Remain constant`, `Reverse`]
        };
    },
    () => { // Carbon Pile Failure
        return {
            topic: "Electrical Machines",
            q: `If the carbon discs in a Voltage Regulator fracture or stick compressed, the generator output will:`,
            a: `Rise to maximum voltage (Field resistance min)`,
            d: [`Fall to zero`, `Fluctuate wildly`, `Reverse polarity`]
        };
    },
    () => { // Differential Compound Motor
        return {
            topic: "Electrical Machines",
            q: `A Differential Compound DC Motor is rarely used because:`,
            a: `It is unstable at high loads (Speed increases as load increases)`,
            d: [`It has too much starting torque`, `It cannot be reversed`, `It overheats at no load`]
        };
    },
    () => { // Alternator Reactive Load
        return {
            topic: "Electrical Machines",
            q: `When two alternators are parallel, adjusting the Voltage Regulator on Alternator A changes its:`,
            a: `Reactive Load (kVAR) and Voltage`,
            d: [`Real Load (kW) only`, `Frequency only`, `Speed`]
        };
    },
    () => { // Brush Shift Effect
        return {
            topic: "Electrical Machines",
            q: `Shifting brushes against rotation in a DC Generator causes:`,
            a: `Increased sparking and voltage drop (Demagnetization)`,
            d: [`Improved commutation`, `Higher voltage`, `Increased speed`]
        };
    },

    // ======================================================
    // BATCH 54: SEMICONDUCTORS & TRANSISTOR MATH
    // Difficulty: High (Calculations & Logic)
    // ======================================================
    () => { // Transistor Beta Calculation
        const Ib = 0.002; // 2mA
        const Ic = 0.2; // 200mA
        const beta = Ic / Ib;
        return {
            topic: "Electron Theory",
            q: `Transistor: Base Current 2mA, Collector Current 200mA. Calculate Gain ($\beta$).`,
            a: `${beta}`,
            d: [`${beta/10}`, `0.01`, `400`]
        };
    },
    () => { // Zener Power Dissipation
        const Vz = 10;
        const Iz = 0.05; // 50mA
        const P = Vz * Iz;
        return {
            topic: "Electron Theory",
            q: `A 10V Zener passes 50mA. Power dissipated by the diode?`,
            a: `${P} W`,
            d: [`${P*10} W`, `5 W`, `500 mW`]
        };
    },
    () => { // SCR Latching
        return {
            topic: "Electron Theory",
            q: `Once an SCR (Thyristor) is triggered ON, it can only be turned OFF by:`,
            a: `Reducing Anode current below the Holding Current`,
            d: [`Removing the Gate voltage`, `Reversing the Gate polarity`, `Increasing the Load`]
        };
    },
    () => { // NAND Universal
        return {
            topic: "Digital Techniques",
            q: `Which logic gate is considered 'Universal' (can build all others)?`,
            a: `NAND`,
            d: [`AND`, `OR`, `XOR`]
        };
    },
    () => { // Bridge Rectifier PIV
        return {
            topic: "Electron Theory",
            q: `The Peak Inverse Voltage (PIV) rating for diodes in a Full-Wave Bridge is _____ compared to a Center-Tap rectifer.`,
            a: `Lower (1x Vpeak instead of 2x Vpeak)`,
            d: [`Higher`, `The same`, `Infinite`]
        };
    },

    // ======================================================
    // BATCH 55: INSTRUMENTS, SYNCHROS & MATERIALS
    // Difficulty: High (Specific Details)
    // ======================================================
    () => { // Synchro Null Voltage
        return {
            topic: "Servomechanisms",
            q: `The null voltage in a Control Transformer (CT) is never exactly zero due to:`,
            a: `Quadrature voltages and Harmonics`,
            d: [`Rotor resistance`, `Stator open circuits`, `DC offset`]
        };
    },
    () => { // Ratiometer Force Balance
        return {
            topic: "Measuring Instruments",
            q: `In a Ratiometer, the final pointer position is determined by the ratio of currents in the two coils, balanced against:`,
            a: `The magnetic field distribution (No control spring used)`,
            d: [`A hairspring`, `Gravity`, `Eddy current damping`]
        };
    },
    () => { // Thermocouple Extension Leads
        return {
            topic: "Measuring Instruments",
            q: `Thermocouple extension leads must be made of:`,
            a: `The same materials as the thermocouple (or compatible characteristics)`,
            d: [`Standard Copper`, `Low resistance Aluminum`, `Shielded Steel`]
        };
    },
    () => { // Strain Gauge Factor
        return {
            topic: "Measuring Instruments",
            q: `The sensitivity of a strain gauge is defined by its:`,
            a: `Gauge Factor (Ratio of Resistance change to Length change)`,
            d: [`Young's Modulus`, `Temperature Coefficient`, `Elastic Limit`]
        };
    },
    () => { // Desynn Voltage
        return {
            topic: "Servomechanisms",
            q: `The standard supply voltage for a Desynn system is:`,
            a: `24V or 28V DC`,
            d: [`115V AC 400Hz`, `26V AC`, `5V DC`]
        };
    },
    // ======================================================
    // BATCH 56: INVERSE UNITS & ADMITTANCE
    // Source: Electrical Fundamentals II (Advanced AC)
    // ======================================================
    () => { // Conductance
        return {
            topic: "DC Circuits",
            q: `Conductance (G) is the reciprocal of Resistance (R). Its unit is the:`,
            a: `Siemens (S)`,
            d: [`Ohm (Ω)`, `Farad (F)`, `Henry (H)`]
        };
    },
    () => { // Susceptance
        return {
            topic: "AC Theory",
            q: `The reciprocal of Reactance (X) is called:`,
            a: `Susceptance (B)`,
            d: [`Admittance (Y)`, `Impedance (Z)`, `Conductance (G)`]
        };
    },
    () => { // Admittance
        return {
            topic: "AC Theory",
            q: `The reciprocal of Impedance (Z) is called:`,
            a: `Admittance (Y)`,
            d: [`Susceptance (B)`, `Conductance (G)`, `Resistance (R)`]
        };
    },
    () => { // Admittance Triangle
        return {
            topic: "AC Theory",
            q: `In the Admittance Triangle, the hypotenuse represents:`,
            a: `Admittance (Y)`,
            d: [`Impedance (Z)`, `Conductance (G)`, `Susceptance (B)`]
        };
    },
    () => { // Parallel Resonance (Admittance)
        return {
            topic: "AC Theory",
            q: `At Parallel Resonance, the total Admittance (Y) of the circuit is:`,
            a: `Minimum (Because Impedance Z is Maximum)`,
            d: [`Maximum`, `Zero`, `Infinite`]
        };
    },

    // ======================================================
    // BATCH 57: OPERATIONAL AMPLIFIERS (Op-Amps)
    // Source: Electrical Fundamentals II (Semiconductors)
    // ======================================================
    () => { // Ideal Op-Amp Gain
        return {
            topic: "Electron Theory",
            q: `The Open-Loop Voltage Gain of an ideal Operational Amplifier (Op-Amp) is:`,
            a: `Infinite`,
            d: [`Zero`, `Unity (1)`, `100`]
        };
    },
    () => { // Op-Amp Input Impedance
        return {
            topic: "Electron Theory",
            q: `An ideal Op-Amp has an Input Impedance of:`,
            a: `Infinite (Draws no current)`,
            d: [`Zero`, `50 Ohms`, `600 Ohms`]
        };
    },
    () => { // Virtual Ground
        return {
            topic: "Electron Theory",
            q: `In an Inverting Amplifier configuration, the non-inverting input is grounded. The inverting input is said to be at:`,
            a: `Virtual Ground`,
            d: [`High Potential`, `Floating Potential`, `Supply Voltage`]
        };
    },
    () => { // Comparator
        return {
            topic: "Electron Theory",
            q: `An Op-Amp used without feedback to compare two voltages is called a:`,
            a: `Comparator`,
            d: [`Oscillator`, `Integrator`, `Differentiator`]
        };
    },
    () => { // Op-Amp Inputs
        return {
            topic: "Electron Theory",
            q: `An Op-Amp has two inputs:`,
            a: `Inverting (-) and Non-Inverting (+)`,
            d: [`Source and Drain`, `Emitter and Collector`, `Anode and Cathode`]
        };
    },

    // ======================================================
    // BATCH 58: BATTERY STORAGE & MAINTENANCE
    // Source: Electrical Fundamentals I (Batteries)
    // ======================================================
    () => { // Lead Acid Storage
        return {
            topic: "Batteries",
            q: `For long-term storage, a Lead-Acid battery should be:`,
            a: `Fully Charged (to prevent sulphation)`,
            d: [`Fully Discharged`, `Drained of electrolyte`, `Short circuited`]
        };
    },
    () => { // NiCd Storage
        return {
            topic: "Batteries",
            q: `For long-term storage, a NiCd battery is best stored:`,
            a: `Fully Discharged (and often short-circuited with a resistor)`,
            d: [`Fully Charged`, `Trickle charged`, `With electrolyte removed`]
        };
    },
    () => { // Bicarbonate of Soda
        return {
            topic: "Batteries",
            q: `Bicarbonate of Soda is used to neutralize:`,
            a: `Lead-Acid electrolyte spills`,
            d: [`NiCd electrolyte spills`, `Lithium fires`, `Electrical grease`]
        };
    },
    () => { // Boric Acid
        return {
            topic: "Batteries",
            q: `Boric Acid is used to neutralize:`,
            a: `NiCd electrolyte spills`,
            d: [`Lead-Acid electrolyte spills`, `Fuel spills`, `Hydraulic fluid`]
        };
    },
    () => { // Potassium Hydroxide Density
        return {
            topic: "Batteries",
            q: `The Specific Gravity of Potassium Hydroxide (NiCd electrolyte) is typically:`,
            a: `1.24 - 1.30 (Does not change with charge)`,
            d: [`1.10 - 1.20`, `1.80`, `1.00`]
        };
    },

    // ======================================================
    // BATCH 59: ACTUATORS & INVERTERS
    // Source: Electrical Fundamentals I & II
    // ======================================================
    () => { // Linear Actuator Brake
        return {
            topic: "Electrical Machines",
            q: `Linear Actuators usually incorporate an electromagnetic brake which is:`,
            a: `Spring-applied (Brake ON) when power is removed`,
            d: [`Electrically applied (Brake ON) when power is applied`, `Hydraulically applied`, `Manually applied`]
        };
    },
    () => { // Split Field Series Motor
        return {
            topic: "Electrical Machines",
            q: `A Split Field Series Motor (used in actuators) reverses direction by:`,
            a: `Energizing one of two oppositely wound series fields`,
            d: [`Reversing the armature connections mechanically`, `Reversing the supply polarity`, `Using a clutch`]
        };
    },
    () => { // Rotary Inverter
        return {
            topic: "Electrical Machines",
            q: `A Rotary Inverter consists of:`,
            a: `A DC Motor driving an AC Generator (often on a common shaft)`,
            d: [`An AC Motor driving a DC Generator`, `A Transformer and Rectifier`, `A Vibrator`]
        };
    },
    () => { // Static Inverter
        return {
            topic: "Electrical Machines",
            q: `A Static Inverter uses _____ to generate AC from DC.`,
            a: `Solid State circuitry (Oscillators and Transistors)`,
            d: [`A rotating armature`, `A vibrating reed`, `A carbon pile`]
        };
    },
    () => { // TRU Cooling
        return {
            topic: "Electrical Machines",
            q: `Transformer Rectifier Units (TRUs) are usually cooled by:`,
            a: `Fan or convection (Air cooled)`,
            d: [`Oil circulation`, `Water jackets`, `Fuel heat exchangers`]
        };
    },

    // ======================================================
    // BATCH 60: TERRESTRIAL MAGNETISM & MISC
    // Source: Electrical Fundamentals I (Magnetism)
    // ======================================================
    () => { // Angle of Dip
        return {
            topic: "Magnetism",
            q: `The angle between the Earth's magnetic field and the horizontal is called:`,
            a: `Angle of Dip (Inclination)`,
            d: [`Variation`, `Deviation`, `Declination`]
        };
    },
    () => { // Dip at Poles
        return {
            topic: "Magnetism",
            q: `The Angle of Dip at the Magnetic Poles is:`,
            a: `90 degrees (Vertical)`,
            d: [`0 degrees (Horizontal)`, `45 degrees`, `180 degrees`]
        };
    },
    () => { // Variation
        return {
            topic: "Magnetism",
            q: `The angle between True North and Magnetic North is called:`,
            a: `Variation (Magnetic Declination)`,
            d: [`Deviation`, `Dip`, `Inclination`]
        };
    },
    () => { // Agonic Line
        return {
            topic: "Magnetism",
            q: `A line on a chart connecting points of Zero Variation is an:`,
            a: `Agonic Line`,
            d: [`Isogonic Line`, `Isobar`, `Isocline`]
        };
    },
    () => { // Isogonic Line
        return {
            topic: "Magnetism",
            q: `A line connecting points of EQUAL Magnetic Variation is an:`,
            a: `Isogonic Line`,
            d: [`Agonic Line`, `Equator`, `Meridian`]
        };
    },
    // --- PASTE THESE INTO YOUR EXISTING 'electricalGenerators' ARRAY ---

    // 1. WHEATSTONE BRIDGE CALCULATION
    () => {
        // Context: Rx = (R2 * R3) / R1. 
        // Image values: R1=100, R2=200, R3=50 -> Rx=100.
        return {
            topic: "DC Circuits",
            q: "Refer to the Wheatstone Bridge diagram. If the galvanometer (G) indicates a null reading (balanced bridge), what is the value of the unknown resistor Rx?",
            img: "mod3/wheatstone.png", 
            a: "100 Ω",
            d: ["50 Ω", "200 Ω", "150 Ω"]
        };
    },

    // 2. AC WAVEFORM ANALYSIS
    () => {
        // Context: Point A is Peak (100V). Point B is RMS line.
        // RMS = Peak * 0.707 = 70.7V.
        return {
            topic: "AC Theory",
            q: "Refer to the AC Waveform diagram. If 'Point A' represents a Peak Voltage of 100V, which value corresponds to the RMS Voltage indicated by 'Point B'?",
            img: "mod3/sine_wave.png",
            a: "70.7 V",
            d: ["63.7 V (Average)", "141.4 V (Peak-to-Peak)", "50 V (Half Peak)"]
        };
    },

    // 3. SERIES-PARALLEL RESISTANCE
    () => {
        // Context: Two 10 ohm resistors in parallel.
        // Rt = (R1*R2)/(R1+R2) = 100/20 = 5 Ohms.
        return {
            topic: "Resistance",
            q: "Refer to the circuit diagram. Calculate the total equivalent resistance of the two 10Ω resistors connected in parallel.",
            img: "mod3/resistors.png",
            a: "5 Ω",
            d: ["20 Ω", "10 Ω", "0.5 Ω"]
        };
    },

    // 4. MOTOR RULE (FORCE DIRECTION)
    () => {
        // Context: Fleming's Left Hand Rule.
        // Index (Field N->S) = Right. Middle (Current In) = Into Page. Thumb (Force) = Down.
        return {
            topic: "Magnetism",
            q: "Refer to the Motor Rule diagram. A current-carrying conductor is placed in a magnetic field as shown. According to Fleming's Left Hand Rule, in which direction will the force act?",
            img: "mod3/motor_rule.png",
            a: "Downwards",
            d: ["Upwards", "Towards the North Pole", "Towards the South Pole"]
        };
    },

    // 5. CAPACITANCE FACTORS
    () => {
        // Context: C = (εA)/d. 
        // To increase C, you must Increase A or Decrease d.
        return {
            topic: "Capacitance",
            q: "Refer to the parallel plate capacitor diagram. Which modification to the physical parameters would result in an INCREASE in capacitance?",
            img: "mod3/capacitor.png",
            a: "Decreasing the distance (d) between the plates",
            d: ["Decreasing the overlapping Area (A)", "Increasing the distance (d)", "Removing the dielectric material"]
        };
    },

    // 6. DIELECTRIC STRENGTH
    () => {
        return {
            topic: "Capacitance",
            q: "Refer to the capacitor diagram. The insulating material between the plates (labeled 'Dielectric') serves to:",
            img: "mod3/capacitor.png",
            a: "Increase the capacitance and prevent DC current flow",
            d: ["Decrease the capacitance", "Allow DC current to flow freely", "Convert AC to DC"]
        };
    },

    // 7. AC FREQUENCY
    () => {
        return {
            topic: "AC Theory",
            q: "Refer to the AC Waveform. If the time taken to complete one full cycle (0 to 2π) is 0.02 seconds, what is the frequency of the supply?",
            img: "mod3/sine_wave.png",
            a: "50 Hz",
            d: ["60 Hz", "100 Hz", "25 Hz"]
        };
    },
    // 11. RL Vectors
    () => {
        return {
            topic: "AC Theory",
            q: "Refer to the vector diagram. In an Inductive (RL) circuit, what is the phase relationship between Voltage (Red) and Current (Black)?",
            img: "mod3/vector_rl.png",
            a: "Voltage leads Current by 90 degrees",
            d: ["Current leads Voltage by 90 degrees", "They are in phase", "Voltage lags Current by 45 degrees"]
        };
    },
    // 12. Transformer
    () => {
        // Step Up: 200/100 = 2:1 ratio.
        return {
            topic: "Transformers",
            q: "Refer to the transformer diagram. If the Primary winding has 100 turns and the Secondary has 200 turns, this is a:",
            img: "mod3/transformer.png",
            a: "Step-Up Transformer (Voltage Increases)",
            d: ["Step-Down Transformer (Voltage Decreases)", "Isolation Transformer (1:1)", "Current Transformer"]
        };
    },
    // 13. Rectifier
    () => {
        return {
            topic: "Solid State",
            q: "Identify the circuit configuration shown in the diagram.",
            img: "mod3/bridge_rectifier.png",
            a: "Full-Wave Bridge Rectifier",
            d: ["Half-Wave Rectifier", "Voltage Doubler", "Zener Regulator"]
        };
    },
    // 14. Logic Gate
    () => {
        return {
            topic: "Digital Logic",
            q: "Identify the logic gate symbol shown. High output (Q) requires both A AND B to be High.",
            img: "mod3/logic_gate.png",
            a: "AND Gate",
            d: ["OR Gate", "NAND Gate", "XOR Gate"]
        };
    },
    // 15. Internal Resistance
    () => {
        return {
            topic: "Batteries",
            q: "Refer to the battery diagram. As the load current increases, what happens to the terminal voltage due to 'r'?",
            img: "mod3/battery_internal.png",
            a: "Terminal Voltage Decreases",
            d: ["Terminal Voltage Increases", "Terminal Voltage remains constant", "Internal Resistance decreases"]
        };
    },
    // 16. KCL
    () => {
        // 5 In + 3 In = 8 In. Out must be 8.
        return {
            topic: "DC Circuits",
            q: "Refer to the node diagram. According to Kirchhoff's Current Law, what is the value of I_out?",
            img: "mod3/kcl_node.png",
            a: "8 Amps",
            d: ["2 Amps", "15 Amps", "5 Amps"]
        };
    },
    // 17. Relay
    () => {
        return {
            topic: "Electrical Components",
            q: "Identify the component shown in the schematic symbol.",
            img: "mod3/relay_schematic.png",
            a: "Relay / Solenoid Switch",
            d: ["Transformer", "Potentiometer", "Circuit Breaker"]
        };
    },
    // 18. Thermocouple
    () => {
        return {
            topic: "Instrumentation",
            q: "The diagram shows a Thermocouple. The operation of this sensor is based on the:",
            img: "mod3/thermocouple.png",
            a: "Seebeck Effect",
            d: ["Piezoelectric Effect", "Photoelectric Effect", "Hall Effect"]
        };
    },
    // 19. Potentiometer
    () => {
        return {
            topic: "Resistance",
            q: "Refer to the diagram. Moving the wiper towards point A will causes the resistance between the Wiper and B to:",
            img: "mod3/potentiometer.png",
            a: "Increase",
            d: ["Decrease", "Remain the same", "Become zero"]
        };
    },
    // 20. DC Motor
    () => {
        return {
            topic: "Motors",
            q: "Refer to the DC Motor diagram. The black components making contact with the rotating armature are called:",
            img: "mod3/dc_motor_parts.png",
            a: "Carbon Brushes",
            d: ["Slip Rings", "Commutator Bars", "Field Windings"]
        };
    },
    // --- BATCH 3: MIXED THEORY & DYNAMIC CALCULATIONS ---
    
    // 1. Generators: RPM Calculation (DYNAMIC)
    () => {
        const freqs = [50, 60, 400];
        const poles = [2, 4, 6, 8, 10, 12];
        const f = freqs[Math.floor(Math.random() * freqs.length)];
        const p = poles[Math.floor(Math.random() * poles.length)];
        
        // Formula: N = (120 * f) / P
        const ans = (120 * f) / p;
        
        // Distractors (common math errors)
        const d1 = (60 * f) / p; // Forgot it's 120
        const d2 = ans * 2; 
        const d3 = (120 * f) / (p/2); // Divided poles by pairs unnecessarily
        
        return {
            topic: "AC Generators",
            q: `An alternator with ${p} poles is required to produce an output frequency of ${f} Hz. At what RPM must it be driven?`,
            options: [`${d1} RPM`, `${d2} RPM`, `${d3} RPM`],
            correct: `${ans} RPM`
        };
    },

    // 2. Motors: Phase Reversal (STATIC CONCEPT)
    () => {
        return {
            topic: "AC Motors",
            q: "The direction of rotation of a 3-phase induction motor can be reversed by:",
            options: ["Reversing the polarity of the field excitation voltage", "Increasing the slip frequency", "Reversing the neutral and ground connections"],
            correct: "Swapping any two of the three input phase connections"
        };
    },

    // 3. Motors: Synchronous Motor Properties (STATIC CONCEPT)
    () => {
        return {
            topic: "AC Motors",
            q: "Which of the following is NOT a natural characteristic of a standard synchronous motor?",
            options: ["It operates at a constant speed between no-load and full-load", "It can be used to correct the low power factor of an inductive load", "Its rotor locks into step with the rotating magnetic field"],
            correct: "It produces high starting torque from the rotating stator field"
        };
    },

    // 4. Motors: Slip Calculation (DYNAMIC)
    () => {
        const syncs = [1500, 3000];
        const sync = syncs[Math.floor(Math.random() * syncs.length)];
        const slipRpm = Math.floor(Math.random() * 10 + 2) * 10; // Random slip between 20 and 110 RPM
        const rotor = sync - slipRpm;
        
        // Slip % = ((Sync - Rotor) / Sync) * 100
        const ans = ((sync - rotor) / sync) * 100;
        const formattedAns = ans.toFixed(1) + "%";
        
        const d1 = ((rotor / sync) * 100).toFixed(1) + "%"; // Calculated rotor efficiency instead of slip
        const d2 = (ans * 2).toFixed(1) + "%";
        const d3 = (ans / 2).toFixed(1) + "%";

        return {
            topic: "AC Motors",
            q: `An induction motor has a synchronous speed of ${sync} RPM and an actual rotor speed of ${rotor} RPM. What is the approximate slip percentage?`,
            options: [d1, d2, d3],
            correct: formattedAns
        };
    },

    // 5. Transformers: Turns Ratio Law (STATIC CONCEPT)
    () => {
        return {
            topic: "Transformers",
            q: "Which of the following equations expresses the correct relationship between turns ratio, voltage, and current in an ideal transformer?",
            options: ["Np / Ns = Es / Ep = Ip / Is", "Np / Ns = Ep / Es = Ip / Is", "Ns / Np = Ep / Es = Is / Ip"],
            correct: "Np / Ns = Ep / Es = Is / Ip"
        };
    },

    // 6. Transformers: Ratio Calculation (DYNAMIC)
    () => {
        const ratios = [2, 4, 5, 10, 20];
        const ratio = ratios[Math.floor(Math.random() * ratios.length)];
        const vps = [115, 200, 230, 240, 400];
        const vp = vps[Math.floor(Math.random() * vps.length)];
        const ip = Math.floor(Math.random() * 4) + 1; // 1 to 4 amps (just extra info to distract)
        
        const ans = vp / ratio; // Step down
        const d1 = vp * ratio;  // Calculated step up instead
        const d2 = (vp / ratio) * 2;
        const d3 = vp; 
        
        return {
            topic: "Transformers",
            q: `An ideal transformer has a step-down turns ratio of ${ratio}:1. If the primary voltage is ${vp}V and the primary current is ${ip} Amps, what is the available secondary output voltage?`,
            options: [`${d1} V`, `${d2} V`, `${d3} V`],
            correct: `${ans} V`
        };
    },

    // 7. Transformers: Copper Losses (STATIC CONCEPT)
    () => {
        return {
            topic: "Transformers",
            q: "In a transformer, 'Copper losses' refer to:",
            options: ["Heat generated by the reversing magnetism of the core", "Heat generated by eddy currents induced within the core", "Flux that is generated by the primary but does not link to the secondary"],
            correct: "Power lost as heat due to the resistance of the primary and secondary winding wire"
        };
    },

    // 8. AC Circuits: True Power (STATIC CONCEPT)
    () => {
        return {
            topic: "AC Circuits",
            q: "In an LCR (Inductor, Capacitor, Resistor) circuit, which component(s) dissipate True Power?",
            options: ["The Inductor only", "The Capacitor only", "Both the Inductor and Capacitor"],
            correct: "The Resistor only"
        };
    },

    // 9. Inductors: Time Constant (DYNAMIC)
    () => {
        const L = Math.floor(Math.random() * 8) + 2; // 2 to 9 mH
        const R = Math.floor(Math.random() * 8) + 2; // 2 to 9 kOhm
        
        // T = L / R. If L is mH (1e-3) and R is kOhm (1e3), T = (L/R) * 1e-6 seconds = (L/R) microseconds.
        const ansVal = L / R;
        const ans = ansVal.toFixed(2) + " µs";
        
        const d1 = (L * R).toFixed(2) + " ms"; // Used wrong formula (multiplied)
        const d2 = (R / L).toFixed(2) + " µs"; // Flipped L and R
        const d3 = ansVal.toFixed(2) + " ms";  // Got the unit magnitude wrong
        
        return {
            topic: "Inductors",
            q: `An RL circuit has an Inductance (L) of ${L} mH and a Resistance (R) of ${R} kΩ. What is the Time Constant of this circuit?`,
            options: [d1, d2, d3],
            correct: ans
        };
    },

    // 10. AC Theory: RMS Conversion (DYNAMIC)
    () => {
        const vPeaks = [100, 150, 170, 200, 300, 340];
        const vPeak = vPeaks[Math.floor(Math.random() * vPeaks.length)];
        const vpp = vPeak * 2; // Prompt gives Peak-to-Peak
        
        // RMS = Peak * 0.707
        const ans = Math.round(vPeak * 0.707);
        const d1 = Math.round(vpp * 0.707);   // Multiplied P-P by 0.707 instead of Peak
        const d2 = Math.round(vPeak * 0.637); // Used the Average factor instead of RMS
        const d3 = vPeak;                     // Used Peak
        
        return {
            topic: "AC Theory",
            q: `What is the approximate RMS voltage of a sinusoidal wave that has a Peak-to-Peak value of ${vpp} Volts?`,
            options: [`${d1} Volts`, `${d2} Volts`, `${d3} Volts`],
            correct: `${ans} Volts`
        };
    },

    // 11. AC Theory: Period Calculation (DYNAMIC)
    () => {
        const freqs = [50, 60, 400, 500, 800, 1000];
        const f = freqs[Math.floor(Math.random() * freqs.length)];
        
        // T = 1/f. Converted to milliseconds = (1/f)*1000
        const ansVal = (1 / f) * 1000;
        const ans = ansVal.toFixed(2) + " ms";
        
        const d1 = ((1 / (f/2)) * 1000).toFixed(2) + " ms";
        const d2 = ((1 / (f*2)) * 1000).toFixed(2) + " ms";
        const d3 = (f / 1000).toFixed(2) + " ms";
        
        return {
            topic: "AC Theory",
            q: `What is the period (T) of a sinusoidal wave that has a frequency of ${f} Hz?`,
            options: [d1, d2, d3],
            correct: ans
        };
    },

    // 12. Generators: Brushless Alternator (STATIC CONCEPT)
    () => {
        return {
            topic: "AC Generators",
            q: "In a brushless aircraft alternator, which of the following sets of components are mounted on the main shaft and rotate together as a unit?",
            options: ["Exciter Field, Main Armature, and GCU sensors", "Permanent magnet, Exciter Field, and Main Stator", "Main Armature, Exciter Field, and Voltage Regulator"],
            correct: "Permanent magnet, Exciter Armature, Exciter Rectifier, and Main Field"
        };
    },

    // 13. Inductors: Series Connection (DYNAMIC)
    () => {
        const L = Math.floor(Math.random() * 8) + 2; // Random 2 to 9 mH
        const ans = L * 3; // Series = L1 + L2 + L3
        
        const d1 = (L / 3).toFixed(2) + " mH"; // Used parallel formula
        const d2 = L + " mH";                  // Thought they don't add
        const d3 = (L * 2) + " mH";            // Only added two
        
        return {
            topic: "Inductors",
            q: `If three inductors, each with an inductance of ${L} mH, are connected in series (assuming no mutual inductance), what is the total equivalent inductance?`,
            options: [d1, d2, d3],
            correct: `${ans} mH`
        };
    },

    // 14. Transformers: Frequency Drop (STATIC CONCEPT)
    () => {
        return {
            topic: "Transformers",
            q: "If the supply frequency applied to the primary of a transformer is significantly decreased:",
            options: ["The inductive reactance increases, causing a greater voltage drop across the windings", "The current in the primary remains constant due to the self-regulation of Counter EMF", "The secondary voltage will increase proportionally to the frequency drop"],
            correct: "The inductive reactance of the primary decreases, causing primary current to increase, which may damage the transformer"
        };
    },

    // 15. Motors: Starting a Sync Motor (STATIC CONCEPT)
    () => {
        return {
            topic: "AC Motors",
            q: "Why is a squirrel cage winding often added to the rotor of a synchronous motor?",
            options: ["To correct the power factor of the motor", "To provide DC excitation to the rotor once it reaches operating speed", "To dissipate excess heat during heavy load operations"],
            correct: "To provide starting torque so the motor can accelerate close to synchronous speed"
        };
    },
    // --- BATCH 4: ADVANCED THEORY & DEEP DIVE CALCULATIONS ---

    // 16. AC Circuits: Series Resonance (STATIC)
    () => {
        return {
            topic: "AC Circuits",
            q: "In a series RLC circuit at the exact point of resonance, what happens to the total impedance and current?",
            options: [
                "Impedance is at its maximum, and current is at its minimum", 
                "Both impedance and current are at their maximum", 
                "Both impedance and current are at their minimum"
            ],
            correct: "Impedance is at its minimum, and current is at its maximum"
        };
    },

    // 17. 3-Phase Systems: Wye (Star) Voltage Calculation (DYNAMIC)
    () => {
        const vPhases = [115, 120, 230, 240];
        const vp = vPhases[Math.floor(Math.random() * vPhases.length)];
        
        // In a Wye/Star system: V_line = V_phase * sqrt(3)
        const vl = Math.round(vp * 1.732);
        
        const d1 = vp; // Thought line = phase
        const d2 = Math.round(vp / 1.732); // Divided instead of multiplied
        const d3 = vp * 3; // Multiplied by 3 instead of root 3

        return {
            topic: "3-Phase Systems",
            q: `A 3-phase alternator is connected in a Wye (Star) configuration. If the phase voltage (voltage across one winding) is ${vp}V, what is the approximate Line Voltage (voltage between two phases)?`,
            options: [`${d1} V`, `${d2} V`, `${d3} V`],
            correct: `${vl} V`
        };
    },

    // 18. Filters: Filter Identification (STATIC)
    () => {
        return {
            topic: "Filters",
            q: "An AC filter circuit is constructed with a capacitor in SERIES with the load, and an inductor in PARALLEL (shunt) with the load. What type of filter is this?",
            options: [
                "Low Pass Filter", 
                "Band Pass Filter", 
                "Band Stop Filter"
            ],
            correct: "High Pass Filter"
        };
    },

    // 19. AC Theory: Average Voltage Calculation (DYNAMIC)
    () => {
        const peaks = [100, 160, 200, 311, 400];
        const peak = peaks[Math.floor(Math.random() * peaks.length)];
        
        // V_avg = V_peak * 0.637
        const ans = (peak * 0.637).toFixed(1);
        
        const d1 = (peak * 0.707).toFixed(1); // Calculated RMS instead of Average
        const d2 = (peak * 1.414).toFixed(1); // Multiplied by root 2
        const d3 = (peak * 0.500).toFixed(1); // Halved it

        return {
            topic: "AC Theory",
            q: `What is the Average voltage of a single alternation (half-cycle) of a pure sine wave with a Peak value of ${peak}V?`,
            options: [`${d1} V`, `${d2} V`, `${d3} V`],
            correct: `${ans} V`
        };
    },

    // 20. AC Theory: Form Factor (STATIC)
    () => {
        return {
            topic: "AC Theory",
            q: "For a pure sinusoidal waveform, the 'Form Factor' is the ratio of the RMS value to the Average value. What is this constant value?",
            options: [
                "0.707", 
                "1.414", 
                "0.637"
            ],
            correct: "1.11"
        };
    },

    // 21. Generators: GCU Regulation (STATIC)
    () => {
        return {
            topic: "AC Generators",
            q: "In a typical aircraft brushless alternator system, how does the Generator Control Unit (GCU) regulate the main AC output voltage?",
            options: [
                "By varying the AC frequency delivered to the main stator", 
                "By mechanically adjusting the Constant Speed Drive (CSD) ratio", 
                "By altering the resistance of the main output lines"
            ],
            correct: "By varying the DC current supplied to the stationary exciter field"
        };
    },

    // 22. Power: Power Factor Calculation (DYNAMIC)
    () => {
        const truePower = Math.floor(Math.random() * 5) + 5; // 5 to 9 kW
        const appPower = truePower + Math.floor(Math.random() * 4) + 2; // Higher than true
        
        // PF = True Power / Apparent Power
        const pf = (truePower / appPower).toFixed(2);
        
        const d1 = (appPower / truePower).toFixed(2); // Flipped the division
        const d2 = (truePower / (appPower * 1.732)).toFixed(2); // Threw in 3-phase math randomly
        const d3 = "1.00"; 

        return {
            topic: "Power",
            q: `An AC circuit consumes ${truePower} kW of True Power, while the Apparent Power supplied by the source is ${appPower} kVA. What is the Power Factor of this circuit?`,
            options: [d1, d2, d3],
            correct: pf
        };
    },

    // 23. Motors: Shaded Pole Motor (STATIC)
    () => {
        return {
            topic: "AC Motors",
            q: "What is the primary purpose of the heavy copper ring (shaded pole) used in a shaded-pole single-phase induction motor?",
            options: [
                "To reduce eddy currents in the stator core", 
                "To act as a physical brake when power is removed", 
                "To step down the voltage entering the main winding"
            ],
            correct: "To delay the build-up of magnetic flux in that portion of the pole, creating a sweeping magnetic field for starting"
        };
    },

    // 24. Transformers: Autotransformer Properties (STATIC)
    () => {
        return {
            topic: "Transformers",
            q: "Which of the following is a key characteristic of an Autotransformer?",
            options: [
                "It uses completely separate primary and secondary windings", 
                "It provides complete electrical isolation between the input and output", 
                "It can only be used as a step-down transformer"
            ],
            correct: "It uses a single continuous winding shared by both the primary and secondary circuits"
        };
    },

    // 25. Inductors: Energy Storage (STATIC)
    () => {
        return {
            topic: "Inductors",
            q: "How does an inductor store electrical energy?",
            options: [
                "In an electrostatic field between its windings", 
                "As chemical energy in its core", 
                "As thermal energy (heat) dissipating from the coil"
            ],
            correct: "In an electromagnetic field surrounding the coil"
        };
    },

    // 26. Motors: Synchronous Motor Power Factor (STATIC)
    () => {
        return {
            topic: "AC Motors",
            q: "A unique feature of a synchronous motor is that its power factor can be altered. What happens if the DC field excitation is 'over-excited'?",
            options: [
                "The motor acts as an inductor, causing a lagging power factor", 
                "The motor speed increases beyond synchronous speed", 
                "The motor instantly stalls and draws excessive current"
            ],
            correct: "The motor acts as a capacitor, providing a leading power factor to correct the system"
        };
    },

    // 27. AC Circuits: Total Impedance Calculation (DYNAMIC)
    () => {
        // Use a 3-4-5 triangle to ensure clean integer math for the student
        const multipliers = [2, 5, 10, 20];
        const m = multipliers[Math.floor(Math.random() * multipliers.length)];
        
        const R = 3 * m;
        const netX = 4 * m; 
        const Z = 5 * m; // Correct answer
        
        const Xc = Math.floor(Math.random() * 50) + 10;
        const Xl = Xc + netX; // Ensures Xl - Xc = netX
        
        const d1 = R + Xl + Xc; // Direct addition (wrong)
        const d2 = R + netX; // Added R and net reactance directly (wrong)
        const d3 = Math.round(Math.sqrt((R*R) + (Xl*Xl))); // Ignored Xc
        
        return {
            topic: "AC Circuits",
            q: `In a series RLC circuit, the Resistance (R) is ${R}Ω, Inductive Reactance (XL) is ${Xl}Ω, and Capacitive Reactance (XC) is ${Xc}Ω. What is the total Impedance (Z) of the circuit?`,
            options: [`${d1} Ω`, `${d2} Ω`, `${d3} Ω`],
            correct: `${Z} Ω`
        };
    },

    // 28. Filters: Decibel Roll-off (STATIC)
    () => {
        return {
            topic: "Filters",
            q: "For a standard, simple single-pole RC low-pass filter, what is the expected rate of attenuation (roll-off) beyond the cut-off frequency?",
            options: [
                "-3 dB per octave (-10 dB per decade)", 
                "-12 dB per octave (-40 dB per decade)", 
                "-20 dB per octave (-100 dB per decade)"
            ],
            correct: "-6 dB per octave (-20 dB per decade)"
        };
    },

    // 29. AC Theory: Reactive Power (STATIC)
    () => {
        return {
            topic: "Power",
            q: "What is the unit of measurement for Reactive Power (the power that flows back and forth between reactive components and the source without doing useful work)?",
            options: [
                "Watts (W)", 
                "Volt-Amperes (VA)", 
                "Joules (J)"
            ],
            correct: "Volt-Amperes Reactive (VAR)"
        };
    },

    // 30. Generators: Permanent Magnet Generators (STATIC)
    () => {
        return {
            topic: "AC Generators",
            q: "In an aircraft AC generation system, what is the primary function of the Permanent Magnet Generator (PMG) mounted on the alternator shaft?",
            options: [
                "To provide the main 115V AC output for the aircraft bus bars", 
                "To cool the main stator windings during high-load conditions", 
                "To convert the main AC output into DC for the battery bus"
            ],
            correct: "To provide an independent power supply to the Generator Control Unit (GCU) for initial excitation"
        };
    }

// --- END PASTE SECTION ---
];

// ======================================================
// MODULE REGISTRATION
// ======================================================
registerModule(
    "Module 3: Electrical Fundamentals",
    52, // Questions per exam
    function(count) {
        const shuffledGens = shuffle([...electricalGenerators]);
        const selectedGens = shuffledGens.slice(0, count);
        
        return selectedGens.map(gen => {
            const data = gen();
            
            // Compatibility Check: Handle both {a, d} and {correct, options} formats
            let finalOptions = [];
            let finalCorrect = "";
            let finalQuestion = data.q || data.question; // Handle if key is 'q' or 'question'

            if (data.d && data.a) {
                // Original Format
                finalOptions = [...data.d, data.a];
                finalCorrect = data.a;
            } else if (data.options && data.correct) {
                // Newer Format
                finalOptions = [...data.options, data.correct];
                finalCorrect = data.correct;
            }

            return {
                topic: data.topic || "General",
                question: finalQuestion,
                img: data.img || null,
                options: shuffle(finalOptions),
                correct: finalCorrect
            };
        });
    },
    `${electricalGenerators.length} Scenarios (CASA B-03)`
);