/* MODULE 2: PHYSICS (CASA B-02 SYLLABUS) */
/* Covers: Matter, Mechanics, Thermodynamics, Optics, Wave Motion */
/* NOTE: Helper functions (rInt, pick, etc.) are inherited from question_bank.js */

const physicsGenerators = [

    // ======================================================
    // TOPIC 1: MATTER (Atoms, Molecules, States)
    // ======================================================
    () => { // Atomic Structure
        const protons = rInt(6, 20);
        const neutrons = rInt(6, 22);
        const massNum = protons + neutrons;
        return {
            topic: "Mechanics",
            q: `An atom has ${protons} protons and ${neutrons} neutrons. What is its Mass Number?`,
            a: `${massNum}`,
            d: [`${protons}`, `${neutrons}`, `${massNum * 2}`]
        };
    },
    () => { // Electron Shells
        // Max electrons = 2n^2
        const n = pick([1, 2, 3, 4]);
        const max = 2 * n * n;
        return {
            topic: "Mechanics",
            q: `According to the 2n² rule, what is the maximum number of electrons in shell n=${n}?`,
            a: `${max}`,
            d: [`${n*2}`, `${n*n}`, `${8}`]
        };
    },
    () => { // Isotopes
        return {
            topic: "Mechanics",
            q: `Isotopes of an element have the same number of _____ but different numbers of _____?`,
            a: `Protons, Neutrons`,
            d: [`Neutrons, Protons`, `Electrons, Protons`, `Protons, Electrons`]
        };
    },
    () => { // States of Matter
        return {
            topic: "Thermodynamics",
            q: `Which state of matter has a definite volume but no definite shape?`,
            a: `Liquid`,
            d: [`Solid`, `Gas`, `Plasma`]
        };
    },
    () => { // Chemical Change
        return {
            topic: "Mechanics",
            q: `Which of the following is a Chemical Change?`,
            a: `Rusting of Iron`,
            d: [`Melting Ice`, `Boiling Water`, `Dissolving Sugar`]
        };
    },

    // ======================================================
    // TOPIC 2: MECHANICS - STATICS (Stress, Strain, Forces)
    // ======================================================
    () => { // Stress Calculation
        const F = rInt(1000, 5000); // Newtons
        const A = pick([2, 4, 5, 10]); // mm^2
        // Stress = F/A
        const stress = F / A;
        return {
            topic: "Mechanics",
            q: `Calculate the Stress in a cable with Force ${F}N and Area ${A}mm².`,
            a: `${stress} N/mm²`,
            d: [`${F*A} N/mm²`, `${stress/10} N/mm²`, `${A/F} N/mm²`]
        };
    },
    () => { // Strain Calculation
        const L = rInt(100, 500); // mm
        const ext = pick([0.1, 0.2, 0.5]); // mm
        // Strain = ext / L
        const strain = (ext / L).toFixed(4);
        return {
            topic: "Mechanics",
            q: `A ${L}mm bar stretches by ${ext}mm. Calculate the Strain.`,
            a: `${strain}`,
            d: [`${(strain*100).toFixed(2)}`, `${(L/ext).toFixed(1)}`, `${ext}`]
        };
    },
    () => { // Hooke's Law
        const k = rInt(50, 150); // N/m
        const x = 0.5; // m
        const F = k * x;
        return {
            topic: "Mechanics",
            q: `Spring Constant k=${k} N/m. Force required to extend it by ${x}m? (F=kx)`,
            a: `${F} N`,
            d: [`${k} N`, `${k*2} N`, `${F/2} N`]
        };
    },
    () => { // Vector Addition (Resultant)
        const v1 = 30, v2 = 40; // 3-4-5 triangle
        const res = 50;
        return {
            topic: "Mechanics",
            q: `Two forces of 30N and 40N act at right angles to each other. Resultant force?`,
            a: `50 N`,
            d: [`70 N`, `10 N`, `1200 N`]
        };
    },
    () => { // Equilibrium (Moments)
        const d1 = 2;
        const F1 = rInt(10, 50) * 10;
        const d2 = 4;
        const F2 = (F1 * d1) / d2;
        return {
            topic: "Mechanics",
            q: `Lever balance: Left side ${F1}N at ${d1}m. Right side distance ${d2}m. Required Force?`,
            a: `${F2} N`,
            d: [`${F1} N`, `${F1*2} N`, `${F2/2} N`]
        };
    },

    // ======================================================
    // TOPIC 3: MECHANICS - KINETICS (Motion)
    // ======================================================
    () => { // Linear Motion (v = u + at)
        const u = rInt(0, 10);
        const a = rInt(2, 5);
        const t = rInt(5, 10);
        const v = u + (a * t);
        return {
            topic: "Mechanics",
            q: `Accelerating from ${u}m/s at ${a}m/s² for ${t} seconds. Final Velocity? (v=u+at)`,
            a: `${v} m/s`,
            d: [`${u+a} m/s`, `${a*t} m/s`, `${v*2} m/s`]
        };
    },
    () => { // Distance (s = ut + 0.5at^2)
        const u = 0;
        const a = 10;
        const t = rInt(2, 6);
        const s = 0.5 * a * t * t;
        return {
            topic: "Mechanics",
            q: `Object falls from rest (a=10m/s²) for ${t} seconds. Distance fallen?`,
            a: `${s} m`,
            d: [`${10*t} m`, `${s*2} m`, `${5*t} m`]
        };
    },
    () => { // Rotational Velocity
        const rpm = pick([120, 240, 360]);
        // rad/s = rpm * 2pi / 60 = rpm * 0.1047
        const rads = (rpm * 0.1047).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Convert ${rpm} RPM to radians per second.`,
            a: `${rads} rad/s`,
            d: [`${rpm} rad/s`, `${(rpm/60).toFixed(1)} rad/s`, `${(rpm*6).toFixed(1)} rad/s`]
        };
    },
    () => { // Period of Pendulum
        return {
            topic: "Mechanics",
            q: `If the length of a pendulum is quadrupled (x4), its period (T) will:`,
            a: `Double`,
            d: [`Quadruple`, `Halve`, `Remain same`]
        };
    },

    // ======================================================
    // TOPIC 4: MECHANICS - DYNAMICS (Newton's Laws)
    // ======================================================
    () => { // Newton's Second Law
        const m = rInt(50, 100);
        const a = rInt(2, 8);
        return {
            topic: "Mechanics",
            q: `Force required to accelerate ${m}kg at ${a}m/s²? (F=ma)`,
            a: `${m*a} N`,
            d: [`${m+a} N`, `${m/a} N`, `${10*m} N`]
        };
    },
    () => { // Work Done
        const F = rInt(10, 50);
        const d = rInt(5, 20);
        return {
            topic: "Mechanics",
            q: `Work done pushing a box ${d}m with ${F}N force? (W=Fd)`,
            a: `${F*d} J`,
            d: [`${F+d} J`, `${F/d} J`, `${F*d*10} J`]
        };
    },
    () => { // Power
        const W = rInt(100, 1000);
        const t = pick([2, 4, 5, 10]);
        return {
            topic: "Mechanics",
            q: `Power developed if ${W}J of work is done in ${t}s? (P=W/t)`,
            a: `${W/t} Watts`,
            d: [`${W*t} Watts`, `${W} Watts`, `${W-t} Watts`]
        };
    },
    () => { // Kinetic Energy
        const m = 20;
        const v = rInt(2, 10);
        const ke = 0.5 * m * v * v;
        return {
            topic: "Mechanics",
            q: `Kinetic Energy of ${m}kg mass at ${v}m/s? (KE=½mv²)`,
            a: `${ke} J`,
            d: [`${m*v} J`, `${ke*2} J`, `${m*v*v} J`]
        };
    },
    () => { // Potential Energy
        const m = rInt(5, 20);
        const h = 10;
        const g = 10; // approx
        return {
            topic: "Mechanics",
            q: `Potential Energy of ${m}kg raised to ${h}m? (PE=mgh)`,
            a: `${m*g*h} J`,
            d: [`${m*h} J`, `${m*g} J`, `${m+h} J`]
        };
    },
    () => { // Friction
        const N = rInt(100, 500); // Normal force
        const mu = 0.5;
        const Ff = N * mu;
        return {
            topic: "Mechanics",
            q: `Normal reaction is ${N}N. Coefficient of friction is ${mu}. Frictional Force?`,
            a: `${Ff} N`,
            d: [`${N} N`, `${N*2} N`, `${N+mu} N`]
        };
    },

    // ======================================================
    // TOPIC 5: FLUID DYNAMICS (Liquids & Gases)
    // ======================================================
    () => { // Density
        const m = rInt(200, 800);
        const v = 2;
        return {
            topic: "Fluid Dynamics",
            q: `Density of substance with Mass ${m}kg and Volume ${v}m³?`,
            a: `${m/v} kg/m³`,
            d: [`${m*v} kg/m³`, `${v/m} kg/m³`, `${m} kg/m³`]
        };
    },
    () => { // Specific Gravity
        const density = pick([800, 2700, 7800]);
        const sg = density / 1000;
        return {
            topic: "Fluid Dynamics",
            q: `Density is ${density} kg/m³. What is the Specific Gravity? (Water=1000)`,
            a: `${sg}`,
            d: [`${density}`, `${sg*10}`, `${sg/10}`]
        };
    },
    () => { // Pressure Head
        const h = rInt(5, 20);
        const g = 10;
        const rho = 1000; // water
        const p = rho * g * h; // Pascals
        return {
            topic: "Fluid Dynamics",
            q: `Hydrostatic Pressure at depth ${h}m in water? (P=ρgh, g=10)`,
            a: `${p} Pa`,
            d: [`${h*10} Pa`, `${1000*h} Pa`, `${p/1000} Pa`]
        };
    },
    () => { // Pascal's Principle (Hydraulics)
        const F1 = 100, A1 = 5;
        const A2 = 50;
        const F2 = (F1/A1) * A2;
        return {
            topic: "Fluid Dynamics",
            q: `Hydraulics: Input ${F1}N on ${A1}cm². Output piston is ${A2}cm². Output Force?`,
            a: `${F2} N`,
            d: [`${F1*10} N`, `${F1} N`, `${F2/2} N`]
        };
    },
    () => { // Buoyancy
        return {
            topic: "Fluid Dynamics",
            q: `Archimedes Principle states Upthrust is equal to:`,
            a: `Weight of fluid displaced`,
            d: [`Volume of object`, `Weight of object`, `Density of fluid`]
        };
    },
    () => { // Bernoulli
        return {
            topic: "Fluid Dynamics",
            q: `Bernoulli's Principle: As fluid velocity increases, static pressure:`,
            a: `Decreases`,
            d: [`Increases`, `Remains constant`, `Fluctuates`]
        };
    },

    // ======================================================
    // TOPIC 6: THERMODYNAMICS (Heat)
    // ======================================================
    () => { // Temperature Conversion
        const C = rInt(20, 100);
        const K = C + 273;
        return {
            topic: "Thermodynamics",
            q: `Convert ${C}°C to Kelvin.`,
            a: `${K} K`,
            d: [`${C} K`, `${C-273} K`, `${C*273} K`]
        };
    },
    () => { // Specific Heat Capacity
        const m = 2; // kg
        const c = 4200; // Water
        const dt = 10; // deg
        const Q = m * c * dt;
        return {
            topic: "Thermodynamics",
            q: `Energy to heat ${m}kg water by ${dt}°C? (c=4200 J/kg°C) (Q=mcΔT)`,
            a: `${Q} J`,
            d: [`${c*dt} J`, `${m*c} J`, `${Q/2} J`]
        };
    },
    () => { // Linear Expansion
        const L = 100; // m
        const alpha = 0.000024; // Aluminium approx
        const dt = 50;
        const dL = L * alpha * dt;
        return {
            topic: "Thermodynamics",
            q: `Bar length ${L}m, Coeff Exp ${alpha}, Temp rise ${dt}°C. Expansion? (ΔL=αLΔT)`,
            a: `${dL} m`,
            d: [`${dL*10} m`, `${dL*100} m`, `1.0 m`]
        };
    },
    () => { // Gas Laws (Boyle's)
        const P1 = 100, V1 = rInt(4, 10);
        const V2 = V1 / 2;
        const P2 = (P1 * V1) / V2;
        return {
            topic: "Thermodynamics",
            q: `Gas at 100kPa volume ${V1}L compressed to ${V2}L (Temp constant). New Pressure?`,
            a: `${P2} kPa`,
            d: [`50 kPa`, `100 kPa`, `150 kPa`]
        };
    },
    () => { // Heat Transfer Methods
        return {
            topic: "Thermodynamics",
            q: `Heat transfer through a solid medium (particle to particle) is called:`,
            a: `Conduction`,
            d: [`Convection`, `Radiation`, `Advection`]
        };
    },
    () => { // Radiation
        return {
            topic: "Thermodynamics",
            q: `Which heat transfer method does NOT require a medium?`,
            a: `Radiation`,
            d: [`Conduction`, `Convection`, `Expansion`]
        };
    },
    () => { // Engine Efficiency
        return {
            topic: "Thermodynamics",
            q: `Second Law of Thermodynamics implies no engine can be:`,
            a: `100% Efficient`,
            d: [`50% Efficient`, `Liquid cooled`, `Internal combustion`]
        };
    },

    // ======================================================
    // TOPIC 7: OPTICS (Light)
    // ======================================================
    () => { // Reflection
        const i = rInt(10, 80);
        return {
            topic: "Waves & Optics",
            q: `A light ray strikes a mirror with angle of incidence ${i}°. Angle of reflection?`,
            a: `${i}°`,
            d: [`${90-i}°`, `${i*2}°`, `0°`]
        };
    },
    () => { // Refraction Index
        const c = 300000;
        const v = 200000;
        const n = (c/v).toFixed(2);
        return {
            topic: "Waves & Optics",
            q: `Speed of light in vacuum 300,000 km/s. In glass 200,000 km/s. Refractive Index? (n=c/v)`,
            a: `${n}`,
            d: [`0.66`, `1.0`, `2.0`]
        };
    },
    () => { // Total Internal Reflection
        return {
            topic: "Waves & Optics",
            q: `Fibre optics rely on which optical principle?`,
            a: `Total Internal Reflection`,
            d: [`Dispersion`, `Diffraction`, `Interference`]
        };
    },
    () => { // Concave Mirror
        return {
            topic: "Waves & Optics",
            q: `A Concave Mirror creates what type of image for an object placed inside the focal point?`,
            a: `Virtual and Magnified`,
            d: [`Real and Inverted`, `Real and Magnified`, `Virtual and Diminished`]
        };
    },
    () => { // Convex Lens
        return {
            topic: "Waves & Optics",
            q: `A Convex lens is also known as a:`,
            a: `Converging Lens`,
            d: [`Diverging Lens`, `Planar Lens`, `Reflecting Lens`]
        };
    },

    // ======================================================
    // TOPIC 8: WAVE MOTION & SOUND
    // ======================================================
    () => { // Wave Equation
        const f = 100; // Hz
        const lambda = pick([2, 3, 4]); // m
        return {
            topic: "Waves & Optics",
            q: `Frequency ${f}Hz, Wavelength ${lambda}m. Wave speed? (v=fλ)`,
            a: `${f*lambda} m/s`,
            d: [`${f/lambda} m/s`, `${lambda} m/s`, `${f} m/s`]
        };
    },
    () => { // Speed of Sound
        return {
            topic: "Waves & Optics",
            q: `The speed of sound in air is approximately:`,
            a: `340 m/s`,
            d: [`300,000 km/s`, `1000 m/s`, `1500 m/s`]
        };
    },
    () => { // Doppler Effect
        return {
            topic: "Waves & Optics",
            q: `Doppler Effect: As a sound source moves TOWARDS you, the perceived frequency:`,
            a: `Increases`,
            d: [`Decreases`, `Stays constant`, `Becomes zero`]
        };
    },
    () => { // Longitudinal Waves
        return {
            topic: "Waves & Optics",
            q: `Sound waves are which type of wave?`,
            a: `Longitudinal`,
            d: [`Transverse`, `Electromagnetic`, `Stationary`]
        };
    },
    () => { // Resonance
        return {
            topic: "Waves & Optics",
            q: `When a forcing frequency matches natural frequency, amplitude increases. This is:`,
            a: `Resonance`,
            d: [`Damping`, `Interference`, `Diffraction`]
        };
    }, 

    // --- BATCH 2: MATTER & PARTICLES ---
    () => { // Molecules
        return {
            topic: "Mechanics",
            q: `The smallest particle of a substance that retains the chemical properties of that substance is a:`,
            a: `Molecule`,
            d: [`Atom`, `Electron`, `Neutron`]
        };
    },
    () => { // Ions
        return {
            topic: "Mechanics",
            q: `An atom that has lost or gained an electron is called an: `,
            a: `Ion`,
            d: [`Isotope`, `Molecule`, `Compound`]
        };
    },
    () => { // Solids
        return {
            topic: "Mechanics",
            q: `In which state of matter are molecules arranged in a fixed, rigid pattern?`,
            a: `Solid`,
            d: [`Liquid`, `Gas`, `Plasma`]
        };
    },

    // --- BATCH 2: MECHANICS (DYNAMICS & MOMENTUM) ---
    () => { // Momentum
        const m = rInt(10, 50);
        const v = rInt(5, 20);
        return {
            topic: "Mechanics",
            q: `Calculate Momentum of a ${m}kg object moving at ${v}m/s. (p=mv)`,
            a: `${m*v} kg m/s`,
            d: [`${m+v} kg m/s`, `${m*v*v} kg m/s`, `${m/v} kg m/s`]
        };
    },
    () => { // Impulse
        const F = rInt(100, 500);
        const t = pick([0.1, 0.5, 1, 2]);
        return {
            topic: "Mechanics",
            q: `A force of ${F}N acts for ${t} seconds. Calculate Impulse. (I=Ft)`,
            a: `${F*t} Ns`,
            d: [`${F/t} Ns`, `${F} Ns`, `${F+t} Ns`]
        };
    },
    () => { // Conservation of Momentum
        return {
            topic: "Mechanics",
            q: `The Principle of Conservation of Momentum states that in a closed system, total momentum before collision equals:`,
            a: `Total momentum after collision`,
            d: [`Zero`, `Half momentum after collision`, `Double momentum after collision`]
        };
    },
    () => { // Centrifugal Force
        return {
            topic: "Mechanics",
            q: `The apparent outward force on a body rotating about a centre is called: `,
            a: `Centrifugal Force`,
            d: [`Centripetal Force`, `Gravitational Force`, `Frictional Force`]
        };
    },

    // --- BATCH 2: GYROSCOPES ---
    () => { // Rigidity in Space
        return {
            topic: "Mechanics",
            q: `The property of a spinning gyroscope to maintain its axis fixed in space is called:`,
            a: `Rigidity`,
            d: [`Precession`, `Drift`, `Toppling`]
        };
    },
    () => { // Precession Rule
        return {
            topic: "Mechanics",
            q: `If a force is applied to a spinning gyro, the reaction (precession) occurs: `,
            a: `90° later in direction of rotation`,
            d: [`90° earlier in direction of rotation`, `180° opposite`, `In the direction of force`]
        };
    },

    // --- BATCH 2: FLUIDS (ADVANCED) ---
    () => { // Viscosity
        return {
            topic: "Fluid Dynamics",
            q: `The internal resistance of a fluid to flow is called:`,
            a: `Viscosity`,
            d: [`Density`, `Porosity`, `Capillarity`]
        };
    },
    () => { // Temperature vs Viscosity
        return {
            topic: "Fluid Dynamics",
            q: `For most liquids, as temperature increases, viscosity:`,
            a: `Decreases`,
            d: [`Increases`, `Remains constant`, `Becomes infinite`]
        };
    },
    () => { // Absolute Pressure
        const gauge = rInt(30, 50);
        const atm = 14.7;
        return {
            topic: "Fluid Dynamics",
            q: `Gauge pressure is ${gauge} psi. Atmospheric is 14.7 psi. Absolute Pressure?`,
            a: `${gauge + 14.7} psia`,
            d: [`${gauge - 14.7} psia`, `${gauge} psia`, `14.7 psia`]
        };
    },

    // --- BATCH 2: THERMODYNAMICS (LAWS) ---
    () => { // First Law
        return {
            topic: "Thermodynamics",
            q: `The First Law of Thermodynamics is essentially the Law of:`,
            a: `Conservation of Energy`,
            d: [`Conservation of Momentum`, `Entropy`, `Thermal Equilibrium`]
        };
    },
    () => { // Second Law
        return {
            topic: "Thermodynamics",
            q: `Heat naturally flows from:`,
            a: `Hot to Cold`,
            d: [`Cold to Hot`, `Low pressure to High pressure`, `Solid to Liquid`]
        };
    }, 

    // --- BATCH 2: THERMODYNAMICS (LAWS) ---
    () => { // Volumetric Expansion
        return {
            topic: "Thermodynamics",
            q: `The coefficient of Volumetric Expansion is approximately how many times the Linear coefficient?`,
            a: `3 times`,
            d: [`2 times`, `Same`, `Squared`]
        };
    },

    // --- BATCH 2: LIGHT & OPTICS (LENSES) ---
    () => { // Concave Lens
        return {
            topic: "Waves & Optics",
            q: `A Concave Lens is: `,
            a: `Diverging`,
            d: [`Converging`, `Reflecting`, `Focusing`]
        };
    },
    () => { // Convex Mirror
        return {
            topic: "Waves & Optics",
            q: `A Convex Mirror (like a car side mirror) produces an image that is:`,
            a: `Virtual, Upright, Diminished`,
            d: [`Real, Inverted, Magnified`, `Real, Upright, Same size`, `Virtual, Inverted`]
        };
    },
    () => { // Fibre Optics Principle
        return {
            topic: "Waves & Optics",
            q: `For Total Internal Reflection to occur in a fibre optic, the light must travel from:`,
            a: `High refractive index to Low`,
            d: [`Low refractive index to High`, `Air to Glass`, `Vacuum to Water`]
        };
    },

    // --- BATCH 2: WAVE MOTION & SOUND ---
    () => { // Pitch
        return {
            topic: "Waves & Optics",
            q: `The 'Pitch' of a sound is determined chiefly by its:`,
            a: `Frequency`,
            d: [`Amplitude`, `Phase`, `Speed`]
        };
    },
    () => { // Loudness
        return {
            topic: "Waves & Optics",
            q: `The 'Loudness' of a sound is determined chiefly by its:`,
            a: `Amplitude`,
            d: [`Frequency`, `Wavelength`, `Phase`]
        };
    },
    () => { // Decibel Scale
        return {
            topic: "Waves & Optics",
            q: `An increase of 3 dB represents approximately a:`,
            a: `Doubling of Power`,
            d: [`Tripling of Power`, `Halving of Power`, `Ten-fold increase`]
        };
    },
    () => { // Diffraction
        return {
            topic: "Waves & Optics",
            q: `The bending of waves around an obstacle is called: 

[Image of wave diffraction]
`,
            a: `Diffraction`,
            d: [`Refraction`, `Reflection`, `Interference`]
        };
    },
    () => { // Constructive Interference
        return {
            topic: "Waves & Optics",
            q: `When two wave crests meet, the amplitude increases. This is:`,
            a: `Constructive Interference`,
            d: [`Destructive Interference`, `Resonance`, `Damping`]
        };
    },

    // --- BATCH 2: SCALARS & VECTORS ---
    () => { // Vector Identification
        return {
            topic: "Mechanics",
            q: `Which of the following is a Vector quantity?`,
            a: `Velocity`,
            d: [`Speed`, `Mass`, `Temperature`]
        };
    },
    () => { // Scalar Identification
        return {
            topic: "Mechanics",
            q: `Which of the following is a Scalar quantity?`,
            a: `Energy`,
            d: [`Force`, `Acceleration`, `Momentum`]
        };
    },
    () => { // Centre of Gravity
        return {
            topic: "Mechanics",
            q: `The point where the entire weight of a body is considered to act is the:`,
            a: `Centre of Gravity`,
            d: [`Centre of Pressure`, `Centroid`, `Fulcrum`]
        };
    },
    () => { // Couple
        return {
            topic: "Mechanics",
            q: `Two equal and opposite parallel forces that cause rotation are called a: `,
            a: `Couple`,
            d: [`Moment`, `Equilibrium`, `Vector pair`]
        };
    },

    // --- BATCH 3: ATMOSPHERIC PHYSICS (ISA & ALTITUDE) ---
    () => { // ISA Standard Pressure
        return {
            topic: "Thermodynamics",
            q: `What is the standard ISA pressure at Mean Sea Level (MSL)?`,
            a: `1013.25 hPa`,
            d: [`1000 hPa`, `29.92 hPa`, `14.7 hPa`]
        };
    },
    () => { // ISA Temperature Lapse Rate
        return {
            topic: "Thermodynamics",
            q: `In the ISA model, temperature decreases with altitude in the Troposphere at a rate of:`,
            a: `1.98°C per 1000 ft`,
            d: [`3°C per 1000 ft`, `1°C per 1000 ft`, `Zero (Isothermal)`]
        };
    },
    () => { // Pressure Lapse Rate (Low Alt)
        return {
            topic: "Thermodynamics",
            q: `At low altitudes, static pressure decreases by approximately 1 hPa for every:`,
            a: `30 ft`,
            d: [`100 ft`, `10 ft`, `50 ft`]
        };
    },
    () => { // Stratosphere Temp
        return {
            topic: "Thermodynamics",
            q: `In the Stratosphere (up to 20km), the temperature is assumed to be:`,
            a: `Constant (Isothermal) at -56.5°C`,
            d: [`Decreasing steadily`, `Increasing rapidly`, `Constant at 0°C`]
        };
    },

    // --- BATCH 3: FLUID DYNAMICS (ADVANCED) ---
    () => { // Venturi Effect
        return {
            topic: "Fluid Dynamics",
            q: `In a Venturi tube, the point of narrowest restriction (throat) has: `,
            a: `Lowest Pressure, Highest Velocity`,
            d: [`Highest Pressure, Lowest Velocity`, `Lowest Pressure, Lowest Velocity`, `Highest Pressure, Highest Velocity`]
        };
    },
    () => { // Surface Tension
        return {
            topic: "Fluid Dynamics",
            q: `The force that causes the surface of a liquid to behave like an elastic skin is:`,
            a: `Surface Tension`,
            d: [`Viscosity`, `Capillarity`, `Buoyancy`]
        };
    },
    () => { // Cohesion vs Adhesion
        return {
            topic: "Fluid Dynamics",
            q: `The attraction between molecules of the SAME substance is called:`,
            a: `Cohesion`,
            d: [`Adhesion`, `Magnetism`, `Fusion`]
        };
    },
    () => { // Capillary Action
        return {
            topic: "Fluid Dynamics",
            q: `Capillary action (liquid rising in a narrow tube) is caused by:`,
            a: `Adhesion being stronger than Cohesion`,
            d: [`Cohesion being stronger than Adhesion`, `Viscosity`, `Surface Tension only`]
        };
    },

    // --- BATCH 3: GYROSCOPES (REAL WANDER) ---
    () => { // Real Wander
        return {
            topic: "Mechanics",
            q: `Real Wander in a gyroscope is caused by:`,
            a: `Mechanical friction and unbalance`,
            d: [`Earth's rotation`, `Transport of the gyro`, `Latitude changes`]
        };
    },
    () => { // Apparent Wander (Earth Rate)
        return {
            topic: "Mechanics",
            q: `Apparent Wander due to Earth's rotation is maximum at the:`,
            a: `Poles`,
            d: [`Equator`, `Mid-latitudes`, `45° Latitude`]
        };
    },
    () => { // Transport Wander
        return {
            topic: "Mechanics",
            q: `If a directional gyro is transported East to West, the axis will appear to drift due to:`,
            a: `Transport Wander`,
            d: [`Real Wander`, `Toppling`, `Gimbal Lock`]
        };
    },

    // --- BATCH 3: THERMODYNAMICS (PROCESSES) ---
    () => { // Adiabatic Process
        return {
            topic: "Thermodynamics",
            q: `A compression or expansion where NO heat enters or leaves the system is called:`,
            a: `Adiabatic`,
            d: [`Isothermal`, `Isobaric`, `Isochoric`]
        };
    },
    () => { // Isothermal Process
        return {
            topic: "Thermodynamics",
            q: `A process that occurs at a Constant Temperature is called:`,
            a: `Isothermal`,
            d: [`Adiabatic`, `Isobaric`, `Isovolumetric`]
        };
    },
    () => { // Isobaric Process
        return {
            topic: "Thermodynamics",
            q: `A process that occurs at Constant Pressure is called:`,
            a: `Isobaric`,
            d: [`Isothermal`, `Adiabatic`, `Isotropic`]
        };
    },

    // --- BATCH 3: WAVE MOTION (SOUND) ---
    () => { // Mach Number
        const tas = rInt(300, 500);
        const lss = 600;
        const mach = (tas/lss).toFixed(2);
        return {
            topic: "Waves & Optics",
            q: `True Airspeed is ${tas} kts. Local Speed of Sound is ${lss} kts. Mach Number?`,
            a: `M ${mach}`,
            d: [`M ${(lss/tas).toFixed(2)}`, `M 1.0`, `M 2.0`]
        };
    },
    () => { // Beats
        return {
            topic: "Waves & Optics",
            q: `The periodic variation in volume when two sounds of slightly different frequencies are played together is:`,
            a: `Beats`,
            d: [`Resonance`, `Harmonics`, `Overtones`]
        };
    },
    () => { // Speed of Sound Factors
        return {
            topic: "Waves & Optics",
            q: `The speed of sound in air is determined PRIMARILY by:`,
            a: `Temperature`,
            d: [`Pressure`, `Density`, `Humidity`]
        };
    },

    // --- BATCH 3: MECHANICS (VECTORS & FORCES) ---
    () => { // Moment of a Couple
        const F = rInt(10, 50);
        const d = rInt(2, 5); // dist between forces
        return {
            topic: "Mechanics",
            q: `A couple consists of two ${F}N forces separated by ${d}m. Torque of the couple?`,
            a: `${F*d} Nm`,
            d: [`${F*d*2} Nm`, `${F/d} Nm`, `0 Nm`]
        };
    },
    () => { // Centre of Gravity (CG)
        return {
            topic: "Mechanics",
            q: `For a uniform beam, the Centre of Gravity is located at:`,
            a: `The geometric centre`,
            d: [`The heaviest end`, `The lightest end`, `Any point along the beam`]
        };
    },
    () => { // Stability
        return {
            topic: "Mechanics",
            q: `An object is in Stable Equilibrium if, when displaced, its CG:`,
            a: `Rises`,
            d: [`Falls`, `Remains level`, `Moves horizontally`]
        };
    },
    () => { // Neutral Equilibrium
        return {
            topic: "Mechanics",
            q: `A ball rolling on a flat surface is an example of:`,
            a: `Neutral Equilibrium`,
            d: [`Stable Equilibrium`, `Unstable Equilibrium`, `Dynamic Instability`]
        };
    },

    // --- BATCH 4: MECHANICS (STRESS & MODULUS) ---
    () => { // Young's Modulus
        // E = Stress / Strain
        const stress = rInt(100, 200); // MPa
        const strain = 0.001;
        const E = (stress / strain) / 1000; // GPa
        return {
            topic: "Mechanics",
            q: `A material has Stress ${stress} MPa and Strain ${strain}. Calculate Young's Modulus (E).`,
            a: `${E} GPa`,
            d: [`${stress} GPa`, `${E*10} GPa`, `${stress/10} GPa`]
        };
    },
    () => { // Elastic Limit
        return {
            topic: "Mechanics",
            q: `The point beyond which a material will NOT return to its original shape is called the: 

[Image of stress strain graph showing elastic limit]
`,
            a: `Elastic Limit`,
            d: [`Yield Point`, `Ultimate Tensile Strength`, `Breaking Point`]
        };
    },
    () => { // Plasticity
        return {
            topic: "Mechanics",
            q: `The property of a material to undergo permanent deformation without rupture is:`,
            a: `Plasticity`,
            d: [`Elasticity`, `Brittleness`, `Toughness`]
        };
    },

    // --- BATCH 4: ROTATIONAL DYNAMICS ---
    () => { // Moment of Inertia
        return {
            topic: "Mechanics",
            q: `Moment of Inertia (I) depends on mass and:`,
            a: `Distribution of mass from the axis`,
            d: [`Velocity`, `Acceleration`, `Applied Force`]
        };
    },
    () => { // Angular Momentum
        // L = I * omega
        return {
            topic: "Mechanics",
            q: `Conservation of Angular Momentum explains why an ice skater spins faster when they:`,
            a: `Pull their arms in (Decreasing Moment of Inertia)`,
            d: [`Extend their arms (Increasing Moment of Inertia)`, `Jump (Increasing Mass)`, `Stop moving`]
        };
    },
    () => { // Torque and Angular Accel
        // T = I * alpha
        const I = 2; // kg m^2
        const alpha = 5; // rad/s^2
        return {
            topic: "Mechanics",
            q: `Moment of Inertia I=${I} kg·m². Angular Accel α=${alpha} rad/s². Torque? (τ=Iα)`,
            a: `${I*alpha} Nm`,
            d: [`${alpha/I} Nm`, `${I+alpha} Nm`, `100 Nm`]
        };
    },

    // --- BATCH 4: THERMODYNAMICS (COMBINED GAS LAW) ---
    () => { // Combined Gas Law (P1V1/T1 = P2V2/T2)
        // P1=100, V1=10, T1=300. P2=200, V2=?, T2=600
        // (100*10)/300 = 3.33. (200*V2)/600 = V2/3.
        // V2 = 10.
        return {
            topic: "Thermodynamics",
            q: `Gas: P=100kPa, V=10L, T=300K. If Pressure DOUBLES and Temp DOUBLES, new Volume?`,
            a: `Remains 10 L`,
            d: [`Doubles to 20 L`, `Halves to 5 L`, `Quadruples`]
        };
    },
    () => { // Universal Gas Constant
        return {
            topic: "Thermodynamics",
            q: `In the ideal gas equation PV = nRT, 'R' represents:`,
            a: `Universal Gas Constant`,
            d: [`Reynolds Number`, `Resistance`, `Radius`]
        };
    },
    () => { // Adiabatic Expansion
        return {
            topic: "Thermodynamics",
            q: `During an Adiabatic Expansion of a gas (no heat transfer), the Temperature:`,
            a: `Decreases`,
            d: [`Increases`, `Remains Constant`, `Becomes Zero`]
        };
    },

    // --- BATCH 4: WAVES & HARMONICS (HARDER) ---
    () => { // Open Pipe Harmonics
        return {
            topic: "Waves & Optics",
            q: `In an OPEN organ pipe, the harmonics present are: `,
            a: `All harmonics (Odd and Even)`,
            d: [`Odd harmonics only`, `Even harmonics only`, `Fundamental only`]
        };
    },
    () => { // Closed Pipe Harmonics
        return {
            topic: "Waves & Optics",
            q: `In a CLOSED organ pipe (one end closed), the harmonics present are: `,
            a: `Odd harmonics only`,
            d: [`All harmonics`, `Even harmonics only`, `No harmonics`]
        };
    },
    () => { // Beat Frequency
        const f1 = rInt(400, 450);
        const diff = rInt(2, 5);
        const f2 = f1 + diff;
        return {
            topic: "Waves & Optics",
            q: `Two tones of ${f1}Hz and ${f2}Hz are played. What is the Beat Frequency?`,
            a: `${diff} Hz`,
            d: [`${f1+f2} Hz`, `${(f1+f2)/2} Hz`, `0 Hz`]
        };
    },

    // --- BATCH 4: OPTICS (LENS POWER & SNELL'S) ---
    () => { // Lens Power Calculation
        const f = 0.5; // meters
        const P = 1/f;
        return {
            topic: "Waves & Optics",
            q: `Focal length +0.5m. Calculate Lens Power in Diopters.`,
            a: `+2.0 D`,
            d: [`+0.5 D`, `+5.0 D`, `-2.0 D`]
        };
    },
    () => { // Snell's Law Concept
        return {
            topic: "Waves & Optics",
            q: `Light travels from Air (Low n) to Water (High n). The ray bends: `,
            a: `Towards the Normal`,
            d: [`Away from the Normal`, `Does not bend`, `Reflects back`]
        };
    },
    () => { // Myopia (Near Sighted)
        return {
            topic: "Waves & Optics",
            q: `Myopia (short-sightedness) is corrected using a:`,
            a: `Concave (Diverging) Lens`,
            d: [`Convex (Converging) Lens`, `Cylindrical Lens`, `Prism`]
        };
    },

    // --- BATCH 4: SIMPLE HARMONIC MOTION (SHM) ---
    () => { // SHM Acceleration
        return {
            topic: "Waves & Optics",
            q: `In Simple Harmonic Motion (e.g., a pendulum), acceleration is maximum at:`,
            a: `The extreme ends of the swing`,
            d: [`The centre (equilibrium)`, `Midway points`, `Constant throughout`]
        };
    },
    () => { // SHM Velocity
        return {
            topic: "Waves & Optics",
            q: `In Simple Harmonic Motion, velocity is maximum at:`,
            a: `The centre (equilibrium)`,
            d: [`The extreme ends`, `The top of the swing`, `Constant throughout`]
        };
    },

    // --- BATCH 5: BASE PHYSICS CALCULATIONS ---
    () => { // Speed Conversion (km/h to m/s)
        const kmh = pick([100, 180, 360]);
        // Divide by 3.6
        const ms = (kmh / 3.6).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Convert velocity of ${kmh} km/h into m/s.`,
            a: `${ms} m/s`,
            d: [`${kmh} m/s`, `${(kmh*3.6).toFixed(1)} m/s`, `${(kmh/10).toFixed(1)} m/s`]
        };
    },
    () => { // Weight Calculation
        const m = rInt(5, 50);
        const g = 9.8;
        const w = (m * g).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Calculate the Weight of a ${m}kg mass on Earth (g=9.8 m/s²). (W=mg)`,
            a: `${w} N`,
            d: [`${m} N`, `${(m/g).toFixed(1)} N`, `${(m+g).toFixed(1)} N`]
        };
    },
    () => { // Pressure (Basic)
        const F = rInt(20, 100);
        const A = pick([2, 4, 5]);
        const P = F / A;
        return {
            topic: "Fluid Dynamics",
            q: `A force of ${F}N acts over an area of ${A}m². Calculate Pressure. (P=F/A)`,
            a: `${P} Pa`,
            d: [`${F*A} Pa`, `${F} Pa`, `${A/F} Pa`]
        };
    },
    () => { // Frequency to Period
        const f = pick([50, 60, 100, 400]);
        const T = (1 / f).toFixed(3);
        return {
            topic: "Waves & Optics",
            q: `Calculate the Period (Time for 1 cycle) of a ${f}Hz wave. 

[Image of sine wave period vs frequency]
`,
            a: `${T} s`,
            d: [`${f} s`, `${(f/100).toFixed(3)} s`, `${(f*2).toFixed(3)} s`]
        };
    },
    () => { // Torque (Moment)
        const F = rInt(10, 50);
        const d = pick([0.2, 0.5, 1.5]); // meters
        const T = (F * d).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Calculate the Torque produced by a ${F}N force applied ${d}m from the pivot. (τ=Fd)`,
            a: `${T} Nm`,
            d: [`${(F/d).toFixed(1)} Nm`, `${F} Nm`, `${(F+d).toFixed(1)} Nm`]
        };
    },
    () => { // Density (Basic)
        const m = rInt(100, 500); // kg
        const v = pick([0.5, 1, 2]); // m3
        const rho = m / v;
        return {
            topic: "Fluid Dynamics",
            q: `Find the Density if Mass is ${m}kg and Volume is ${v}m³. (ρ=m/v)`,
            a: `${rho} kg/m³`,
            d: [`${m*v} kg/m³`, `${v/m} kg/m³`, `${m} kg/m³`]
        };
    },
    () => { // Ohm's Law (Physics Context)
        const I = rInt(2, 10);
        const R = rInt(5, 20);
        const V = I * R;
        return {
            topic: "Electricity",
            q: `Electrical Physics: Current ${I}A flows through ${R}Ω. Voltage drop? (V=IR)`,
            a: `${V} V`,
            d: [`${(I/R).toFixed(1)} V`, `${I+R} V`, `${(R/I).toFixed(1)} V`]
        };
    },
    () => { // Spring Extension (Hooke's Basic)
        const k = 100; // N/m
        const F = rInt(10, 50);
        const x = F / k;
        return {
            topic: "Mechanics",
            q: `A spring has stiffness k=100 N/m. How much does it extend under a ${F}N load? (F=kx)`,
            a: `${x} m`,
            d: [`${x*100} m`, `${F} m`, `${k/F} m`]
        };
    },

    // --- BATCH 6: BASE PHYSICS (RAPID FIRE) ---
    () => { // Metric Conversion (mA to A)
        const mA = pick([50, 200, 500]);
        const A = mA / 1000;
        return {
            topic: "Electricity",
            q: `Convert ${mA} milliamperes (mA) to Amperes.`,
            a: `${A} A`,
            d: [`${mA*10} A`, `${mA} A`, `${A/10} A`]
        };
    },
    () => { // Metric Conversion (kW to W)
        const kW = rInt(2, 10);
        return {
            topic: "Electricity",
            q: `Convert ${kW} kilowatts (kW) to Watts.`,
            a: `${kW * 1000} W`,
            d: [`${kW * 100} W`, `${kW} W`, `${kW / 1000} W`]
        };
    },
    () => { // Average Speed
        const d = rInt(100, 400); // km
        const t = rInt(2, 5); // hr
        return {
            topic: "Mechanics",
            q: `Vehicle travels ${d}km in ${t} hours. Average Speed?`,
            a: `${d/t} km/h`,
            d: [`${d*t} km/h`, `${d+t} km/h`, `${d-t} km/h`]
        };
    },
    () => { // Acceleration Basic
        const v1 = 0;
        const v2 = pick([20, 30, 40]);
        const t = 5;
        // a = (v-u)/t
        const a = (v2 - v1) / t;
        return {
            topic: "Mechanics",
            q: `Car accelerates from rest to ${v2}m/s in ${t} seconds. Acceleration?`,
            a: `${a} m/s²`,
            d: [`${v2*t} m/s²`, `${v2} m/s²`, `${t} m/s²`]
        };
    },
    () => { // Mass vs Weight Concept
        const m = 50;
        return {
            topic: "Mechanics",
            q: `A rock has mass ${m}kg on Earth. What is its MASS on the Moon?`,
            a: `${m} kg`,
            d: [`${m/6} kg`, `${m*6} kg`, `Zero`]
        };
    },
    () => { // Net Force (Opposite)
        const f1 = 100; // Right
        const f2 = 40; // Left
        return {
            topic: "Mechanics",
            q: `Force A is 100N Right. Force B is 40N Left. Net Force?`,
            a: `60N Right`,
            d: [`140N Right`, `60N Left`, `100N Right`]
        };
    },
    () => { // Net Force (Same)
        const f1 = 50;
        const f2 = 50;
        return {
            topic: "Mechanics",
            q: `Two engines each produce 50N thrust in the same direction. Resultant?`,
            a: `100 N`,
            d: [`0 N`, `50 N`, `2500 N`]
        };
    },
    () => { // Power (Electrical)
        const V = 24;
        const I = pick([2, 5, 10]);
        return {
            topic: "Electricity",
            q: `Calculate Power in a circuit with ${V}V and ${I}A. (P=VI)`,
            a: `${V*I} W`,
            d: [`${V/I} W`, `${V+I} W`, `${I/V} W`]
        };
    },
    () => { // Resistance (Ohm's)
        const V = 28;
        const I = 4;
        return {
            topic: "Electricity",
            q: `Circuit Voltage 28V, Current 4A. Calculate Resistance. (R=V/I)`,
            a: `7 Ω`,
            d: [`112 Ω`, `32 Ω`, `0.14 Ω`]
        };
    },
    () => { // Kelvin to Celsius
        const K = 293;
        // C = K - 273
        return {
            topic: "Thermodynamics",
            q: `Convert 293 Kelvin to Celsius.`,
            a: `20°C`,
            d: [`293°C`, `566°C`, `-20°C`]
        };
    },
    () => { // Absolute Zero
        return {
            topic: "Thermodynamics",
            q: `Absolute Zero (0 K) is equivalent to:`,
            a: `-273°C`,
            d: [`0°C`, `-100°C`, `273°C`]
        };
    },
    () => { // Frequency Definition
        return {
            topic: "Waves & Optics",
            q: `Frequency is defined as:`,
            a: `Number of cycles per second`,
            d: [`Time for one cycle`, `Distance per cycle`, `Speed of the wave`]
        };
    },
    () => { // Amplitude Definition
        return {
            topic: "Waves & Optics",
            q: `The maximum displacement of a wave from its equilibrium position is: 

[Image of wave amplitude diagram]
`,
            a: `Amplitude`,
            d: [`Wavelength`, `Period`, `Frequency`]
        };
    },
    () => { // Speed of Light
        return {
            topic: "Waves & Optics",
            q: `The speed of light (c) is approximately:`,
            a: `300,000 km/s`,
            d: [`340 m/s`, `1000 km/h`, `Infinite`]
        };
    },
    () => { // Magnetism Poles
        return {
            topic: "Electricity",
            q: `Two North poles of a magnet brought together will:`,
            a: `Repel`,
            d: [`Attract`, `Do nothing`, `Generate electricity`]
        };
    },
    () => { // Standard Pressure
        return {
            topic: "Thermodynamics",
            q: `Standard Sea Level atmospheric pressure is:`,
            a: `1013 hPa`,
            d: [`1000 hPa`, `980 hPa`, `1050 hPa`]
        };
    },
    () => { // Lever Classes
        return {
            topic: "Mechanics",
            q: `A wheelbarrow is an example of which Lever Class? (Load in middle) 

[Image of wheelbarrow lever diagram]
`,
            a: `Class 2`,
            d: [`Class 1`, `Class 3`, `Class 4`]
        };
    },
    () => { // Energy Conservation
        return {
            topic: "Mechanics",
            q: `The Law of Conservation of Energy states that energy:`,
            a: `Cannot be created or destroyed`,
            d: [`Can be destroyed`, `Is lost as friction`, `Increases over time`]
        };
    },
    () => { // Gravity value
        return {
            topic: "Mechanics",
            q: `The standard acceleration due to gravity (g) on Earth is approx:`,
            a: `9.8 m/s²`,
            d: [`10.5 m/s²`, `5.0 m/s²`, `1.6 m/s²`]
        };
    },
    () => { // Work (Lifting)
        const m = 10;
        const h = 2;
        const g = 10;
        return {
            topic: "Mechanics",
            q: `Work done lifting a ${m}kg box to a height of ${h}m? (W=mgh)`,
            a: `${m*g*h} J`,
            d: [`${m*h} J`, `${m*g} J`, `5 J`]
        };
    },

    // --- BATCH 6 & 7 REVISED: FULLY GENERATIVE PHYSICS ---
    
    // 1. Metric Conversions
    () => { 
        const mA = rInt(50, 900);
        const A = (mA / 1000).toFixed(3);
        return {
            topic: "Electricity",
            q: `Convert ${mA} milliamperes (mA) to Amperes.`,
            a: `${A} A`,
            d: [`${mA*10} A`, `${mA} A`, `${(mA/100).toFixed(2)} A`]
        };
    },
    () => { 
        const kW = rInt(2, 25);
        return {
            topic: "Electricity",
            q: `Convert ${kW} kilowatts (kW) to Watts.`,
            a: `${kW * 1000} W`,
            d: [`${kW * 100} W`, `${kW} W`, `${kW / 1000} W`]
        };
    },

    // 2. Motion & Mechanics
    () => { 
        const d = rInt(120, 480); // km
        const t = rInt(2, 6); // hr
        const s = (d/t).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Vehicle travels ${d}km in ${t} hours. Average Speed?`,
            a: `${s} km/h`,
            d: [`${d*t} km/h`, `${(d+t).toFixed(1)} km/h`, `${(d-t).toFixed(1)} km/h`]
        };
    },
    () => { 
        const v2 = rInt(20, 60); // m/s
        const t = rInt(4, 10); // s
        const a = (v2 / t).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Car accelerates from rest to ${v2}m/s in ${t} seconds. Acceleration?`,
            a: `${a} m/s²`,
            d: [`${v2*t} m/s²`, `${v2} m/s²`, `${t} m/s²`]
        };
    },
    () => { 
        const m = rInt(500, 2000); // kg
        const a = rInt(2, 5); // m/s2
        const f = m * a;
        return {
            topic: "Mechanics",
            q: `Force required to accelerate a ${m}kg car at ${a} m/s²? (F=ma)`,
            a: `${f} N`,
            d: [`${m/a} N`, `${m+a} N`, `${f*10} N`]
        };
    },
    () => { // Impulse
        const m = rInt(2, 10); // kg
        const u = rInt(5, 20); // m/s
        const imp = m * u;
        return {
            topic: "Mechanics",
            q: `A ${m}kg ball moving at ${u}m/s hits a wall and stops. Impulse delivered? (I = mv - mu)`,
            a: `${imp} Ns`,
            d: [`${m+u} Ns`, `${u/m} Ns`, `${imp/2} Ns`]
        };
    },
    () => { // Work Lifting
        const m = rInt(5, 50);
        const h = rInt(2, 10);
        const g = 10;
        const w = m * g * h;
        return {
            topic: "Mechanics",
            q: `Work done lifting a ${m}kg box to a height of ${h}m? (g=10 m/s²)`,
            a: `${w} J`,
            d: [`${m*h} J`, `${m*g} J`, `${w/10} J`]
        };
    },

    // 3. Energy & Efficiency
    () => { 
        const input = rInt(1000, 5000);
        const loss = rInt(100, 400);
        const output = input - loss;
        const eff = ((output / input) * 100).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Machine Input: ${input}J. Loss: ${loss}J. Calculate Efficiency.`,
            a: `${eff}%`,
            d: [`${(loss/input*100).toFixed(1)}%`, `99%`, `50%`]
        };
    },
    () => { 
        const m = rInt(50, 100);
        const h = rInt(10, 50);
        const pe = m * 10 * h;
        return {
            topic: "Mechanics",
            q: `Mass ${m}kg is lifted ${h}m. PE gained? (g=10)`,
            a: `${pe} J`,
            d: [`${m*h} J`, `${m+h} J`, `${pe/10} J`]
        };
    },

    // 4. Forces & Torque
    () => { 
        const F = rInt(20, 100);
        const d = pick([0.2, 0.4, 0.5, 1.2]);
        const T = (F * d).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Force ${F}N applied at distance ${d}m. Torque?`,
            a: `${T} Nm`,
            d: [`${(F/d).toFixed(1)} Nm`, `${F} Nm`, `${F+10} Nm`]
        };
    },
    () => { 
        const k = 100; 
        const F = rInt(10, 80);
        const x = (F / k).toFixed(2);
        return {
            topic: "Mechanics",
            q: `Spring (k=100 N/m) is pulled by ${F}N. Extension? (F=kx)`,
            a: `${x} m`,
            d: [`${x*100} m`, `${F} m`, `${k/F} m`]
        };
    },
    () => { // Net Force
        const f1 = rInt(80, 150);
        const f2 = rInt(20, 60);
        const net = f1 - f2;
        return {
            topic: "Mechanics",
            q: `Force A is ${f1}N Right. Force B is ${f2}N Left. Net Force?`,
            a: `${net}N Right`,
            d: [`${f1+f2}N Right`, `${net}N Left`, `${f1}N Right`]
        };
    },

    // 5. Electrical Physics
    () => { 
        const V = 24;
        const I = rInt(2, 8);
        const P = V * I;
        return {
            topic: "Electricity",
            q: `Circuit: ${V}V and ${I}A. Calculate Power.`,
            a: `${P} W`,
            d: [`${V/I} W`, `${V+I} W`, `${I} W`]
        };
    },
    () => { 
        const V = 28;
        const R = rInt(4, 14);
        const I = (V / R).toFixed(1);
        return {
            topic: "Electricity",
            q: `Voltage 28V, Resistance ${R}Ω. Calculate Current.`,
            a: `${I} A`,
            d: [`${V*R} A`, `${(R/V).toFixed(1)} A`, `${V-R} A`]
        };
    },
    () => { // Series Resistors
        const r1 = rInt(10, 30);
        const r2 = rInt(10, 30);
        return {
            topic: "Electricity",
            q: `Resistors ${r1}Ω and ${r2}Ω in Series. Total?`,
            a: `${r1+r2} Ω`,
            d: [`${(r1*r2)/(r1+r2)} Ω`, `${r1} Ω`, `0 Ω`]
        };
    },

    // 6. Thermodynamics & Fluids
    () => { 
        const K = rInt(280, 350);
        const C = K - 273;
        return {
            topic: "Thermodynamics",
            q: `Convert ${K} Kelvin to Celsius.`,
            a: `${C}°C`,
            d: [`${K}°C`, `${K+273}°C`, `0°C`]
        };
    },
    () => { // Gas Law Rigid Container
        const p1 = rInt(20, 50); // psi
        const t1 = 300;
        const t2 = pick([450, 600]);
        const p2 = (p1 * t2 / t1).toFixed(0);
        return {
            topic: "Thermodynamics",
            q: `Tyre pressure ${p1}psi at 300K. Temp rises to ${t2}K. New Pressure?`,
            a: `${p2} psi`,
            d: [`${p1} psi`, `${p1*2} psi`, `${p1+15} psi`]
        };
    },
    () => { // Pressure Depth
        const h = rInt(5, 50);
        const p = (1000 * 10 * h) / 1000; // kPa
        return {
            topic: "Fluid Dynamics",
            q: `Water Pressure at depth ${h}m? (g=10). Answer in kPa.`,
            a: `${p} kPa`,
            d: [`${p*10} kPa`, `${h} kPa`, `${p/10} kPa`]
        };
    },
    () => { // Hydraulic MA
        const a1 = 2; 
        const a2 = rInt(20, 80);
        const ma = a2 / a1;
        return {
            topic: "Fluid Dynamics",
            q: `Hydraulics: Input area ${a1}cm², Output area ${a2}cm². Mechanical Advantage?`,
            a: `${ma}:1`,
            d: [`1:${ma}`, `1:1`, `${a2}:1`]
        };
    },

    // 7. Waves & Sound
    () => { 
        const f = pick([100, 200, 500]);
        const T = (1 / f).toFixed(3);
        return {
            topic: "Waves & Optics",
            q: `Calculate Period of a ${f}Hz wave. (T=1/f)`,
            a: `${T} s`,
            d: [`${f} s`, `${(f/10).toFixed(3)} s`, `1.0 s`]
        };
    },
    () => { // Wavelength
        const f = 100;
        const v = rInt(300, 350); // speed of sound
        const lam = v / f;
        return {
            topic: "Waves & Optics",
            q: `Sound speed ${v}m/s, Frequency 100Hz. Wavelength? (λ=v/f)`,
            a: `${lam} m`,
            d: [`${v} m`, `${v*f} m`, `${lam/2} m`]
        };
    },

    // 8. Optics
    () => { // Refractive Index
        const v = pick([1.5, 2.0, 2.25]); // x10^8
        const c = 3.0;
        const n = (c/v).toFixed(2);
        return {
            topic: "Waves & Optics",
            q: `Light speed in medium is ${v} × 10⁸ m/s. (c = 3.0 × 10⁸). Refractive Index?`,
            a: `${n}`,
            d: [`${v}`, `${(v/c).toFixed(2)}`, `1.0`]
        };
    },

    // 9. Simple Machines
    () => { // Gear Ratio
        const dr = 10;
        const dn = rInt(20, 60);
        const ratio = dn / dr;
        return {
            topic: "Mechanics",
            q: `Driver gear ${dr} teeth, Driven gear ${dn} teeth. Ratio?`,
            a: `${ratio}:1`,
            d: [`1:${ratio}`, `${dn}:1`, `1:1`]
        };
    },
    () => { // Lever Torque
        const F = rInt(50, 200);
        const d = 2;
        return {
            topic: "Mechanics",
            q: `Force ${F}N applied to a 2m long lever. Torque?`,
            a: `${F*2} Nm`,
            d: [`${F} Nm`, `${F/2} Nm`, `10 Nm`]
        };
    }, 
    // ======================================================
    // PART 2: NEW SOURCE-BASED GENERATORS (From your PDFs)
    // ======================================================

    // --- MECHANICS: TORQUE, MOMENTS & LEVERS ---
    () => { // Spanner Torque 
        const F = rInt(30, 80); // Newtons
        const cm = pick([20, 25, 30, 40]); 
        const m = cm / 100;
        const T = (F * m).toFixed(1);
        return {
            topic: "Mechanics",
            q: `You exert a force of ${F}N on the end of a spanner that is ${cm}cm long. How much torque is applied?`,
            a: `${T} Nm`,
            d: [`${F*cm} Nm`, `${(F/m).toFixed(1)} Nm`, `${T*10} Nm`]
        };
    },
    () => { // Door Handle Moment 
        const T = rInt(15, 30); // Nm required
        const len = pick([0.4, 0.5, 0.6]); // meters
        const F = (T / len).toFixed(0);
        return {
            topic: "Mechanics",
            q: `An aircraft door handle requires ${T}Nm of torque to open. If the handle is ${len}m long, how much force is needed?`,
            a: `${F} N`,
            d: [`${T*len} N`, `${F/2} N`, `${T} N`]
        };
    },
    () => { // 1st Class Lever MA 
        const force = 7;
        const load = 49;
        const ma = load / force;
        return {
            topic: "Mechanics",
            q: `A first class lever allows you to lift ${load}kg with only ${force}kg of force. What is the Mechanical Advantage?`,
            a: `1:${ma}`,
            d: [`${ma}:1`, `1:1`, `1:${ma*2}`]
        };
    },
    () => { // Pulley System 
        const ropes = rInt(3, 6);
        const weight = rInt(20, 50);
        const force = (weight / ropes).toFixed(1);
        return {
            topic: "Mechanics",
            q: `How much force to lift a ${weight}kg weight using a pulley system with ${ropes} vertical ropes?`,
            a: `${force} kg`,
            d: [`${weight} kg`, `${weight*ropes} kg`, `${(weight/2).toFixed(1)} kg`]
        };
    },
    () => { // Couple Definition 
        return {
            topic: "Mechanics",
            q: `A 'Couple' consists of two forces that are:`,
            a: `Equal, Parallel, and Opposite`,
            d: [`Equal, Perpendicular, and Opposite`, `Unequal, Parallel, and Same Direction`, `Equal, Parallel, and Same Direction`]
        };
    },
    () => { // Lever Velocity 
        const vInput = 7; // m/s
        const ma = 7;
        return {
            topic: "Mechanics",
            q: `Input velocity on a 1:7 lever is ${vInput} m/s. What is the load velocity?`,
            a: `1 m/s`,
            d: [`7 m/s`, `49 m/s`, `0.1 m/s`]
        };
    },

    // --- MECHANICS: KINETICS & DYNAMICS ---
    () => { // 747 Runway Acceleration 
        const a = rInt(2, 6); // m/s2
        const t = rInt(10, 20); // seconds
        const s = 0.5 * a * t * t;
        return {
            topic: "Mechanics",
            q: `A 747 starts from rest and accelerates at ${a} m/s² for ${t} seconds. Distance travelled?`,
            a: `${s} m`,
            d: [`${a*t} m`, `${s*2} m`, `${a*t*t} m`]
        };
    },
    () => { // Golf Cart Velocity 
        const u = rInt(2, 5);
        const a = rInt(2, 4);
        const s = rInt(5, 10);
        const v = Math.sqrt((u*u) + (2*a*s)).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Golf cart at ${u}m/s accelerates at ${a}m/s² for ${s}m. New velocity? (v²=u²+2as)`,
            a: `${v} m/s`,
            d: [`${u+a} m/s`, `${u*s} m/s`, `${(v*2).toFixed(1)} m/s`]
        };
    },
    () => { // Bullet Acceleration 
        const v = rInt(300, 600);
        const t = pick([1.5, 2, 2.5]);
        const a = (v/t).toFixed(0);
        return {
            topic: "Mechanics",
            q: `A bullet reaches ${v}m/s just ${t} seconds after being shot (from rest). Acceleration?`,
            a: `${a} m/s²`,
            d: [`${v*t} m/s²`, `${v} m/s²`, `${a/2} m/s²`]
        };
    },
    () => { // Usain Bolt 
        const a = 2;
        const t = 10;
        const s = 0.5 * a * t * t;
        return {
            topic: "Mechanics",
            q: `Sprinter starts from rest, accelerates at ${a} m/s² for ${t} seconds. Distance?`,
            a: `${s} m`,
            d: [`${a*t} m`, `${s*2} m`, `20 m`]
        };
    },
    () => { // F1 Car Power 
        const work = 960000; // J
        const t = 4; // s
        const kw = (work / t) / 1000;
        return {
            topic: "Mechanics",
            q: `F1 Car does 960,000J of work in 4 seconds. Power in kW?`,
            a: `${kw} kW`,
            d: [`${kw*10} kW`, `${kw/10} kW`, `960 kW`]
        };
    },
    () => { // F1 Horsepower 
        const w = 240000;
        const hp = (w / 746).toFixed(1);
        return {
            topic: "Mechanics",
            q: `Convert ${w} Watts to Horsepower (1HP = 746W).`,
            a: `${hp} HP`,
            d: [`${(w/1000).toFixed(1)} HP`, `300 HP`, `746 HP`]
        };
    },
    () => { // Cessna Momentum 
        const m = 750;
        const v = 100;
        const p = m * v;
        return {
            topic: "Mechanics",
            q: `Momentum of a Cessna 172 (Mass 750kg) travelling at 100 m/s?`,
            a: `${p} kg m/s`,
            d: [`7500 kg m/s`, `${p*10} kg m/s`, `75 kg m/s`]
        };
    },
    () => { // CFM56 Thrust 
        const m = 300; // kg
        const a = 400; // m/s
        const f = (m * a) / 1000; // kN
        return {
            topic: "Mechanics",
            q: `CFM56 Engine: ${m}kg of air accelerated by ${a}m/s. Thrust in kN? (F=ma)`,
            a: `${f} kN`,
            d: [`${f*10} kN`, `${m+a} kN`, `${f/10} kN`]
        };
    },
    () => { // Centripetal vs Centrifugal 
        return {
            topic: "Mechanics",
            q: `The reaction to Centripetal force (Newton's 3rd Law) is:`,
            a: `Centrifugal Force`,
            d: [`Gravitational Force`, `Linear Force`, `Rotational Force`]
        };
    },
    () => { // Prop vs Jet 
        return {
            topic: "Mechanics",
            q: `A Propeller imparts a _____ acceleration to a _____ mass of air.`,
            a: `Small, Large`,
            d: [`Large, Small`, `Large, Large`, `Small, Small`]
        };
    },

    // --- FLUID DYNAMICS ---
    () => { // Tyre Absolute Pressure 
        const gauge = 115;
        const ambient = 14.7;
        return {
            topic: "Fluid Dynamics",
            q: `Nose wheel gauge pressure is 115 PSI. Ambient is 14.7 PSI. Absolute Pressure?`,
            a: `129.7 PSI`,
            d: [`100.3 PSI`, `115 PSI`, `14.7 PSI`]
        };
    },
    () => { // Skydrol Hydrostatic 
        const depth = 0.75; // m
        const rho = 1200; // kg/m3 (from pdf)
        const g = 10;
        const P = rho * g * depth;
        return {
            topic: "Fluid Dynamics",
            q: `Hydrostatic Pressure of Skydrol (density 1200) at 0.75m depth? (g=10)`,
            a: `${P} Pa`,
            d: [`${P/10} Pa`, `${rho} Pa`, `${120} Pa`]
        };
    },
    () => { // Swimmer Buoyancy 
        const spill = 70; // Litres
        return {
            topic: "Fluid Dynamics",
            q: `Swimmer displaces 70 Litres of water. Buoyant Force? (1L = 1kg = 10N)`,
            a: `700 N`,
            d: [`70 N`, `7 N`, `7000 N`]
        };
    },
    () => { // Boat Submerged 
        const dBoat = 0.76;
        const dWater = 1.0;
        const pct = (dBoat/dWater) * 100;
        return {
            topic: "Fluid Dynamics",
            q: `Boat density 0.76. Water density 1.0. What % is submerged?`,
            a: `${pct}%`,
            d: [`24%`, `100%`, `7.6%`]
        };
    },
    () => { // Hydrometer 
        return {
            topic: "Fluid Dynamics",
            q: `A Hydrometer is used to measure: 

[Image of Hydrometer]
`,
            a: `Specific Gravity`,
            d: [`Viscosity`, `Surface Tension`, `Pressure`]
        };
    },
    () => { // Viscosity Index 
        return {
            topic: "Fluid Dynamics",
            q: `A LOW Viscosity Index (VI) means the viscosity changes _____ with temperature.`,
            a: `Significantly (Large change)`,
            d: [`Very little (Small change)`, `Not at all`, `Inversely`]
        };
    },
    () => { // Venturi Throat 
        return {
            topic: "Fluid Dynamics",
            q: `In the throat of a Venturi, Dynamic Pressure is _____ and Static Pressure is _____.`,
            a: `High, Low`,
            d: [`Low, High`, `High, High`, `Low, Low`]
        };
    },
    () => { // Streamlining 
        return {
            topic: "Fluid Dynamics",
            q: `The purpose of streamlining is to:`,
            a: `Reduce Drag`,
            d: [`Increase Lift`, `Increase Weight`, `Reduce Thrust`]
        };
    },

    // --- THERMODYNAMICS ---
    () => { // 4WD Tyre Gas Law 
        const V1 = 25;
        const P1 = 40;
        const V2 = 20;
        const P2 = (P1 * V1) / V2;
        return {
            topic: "Thermodynamics",
            q: `Tyre: Vol 25, Pressure 40PSI. Compressed to Vol 20. New Pressure? (Temp const)`,
            a: `${P2} PSI`,
            d: [`30 PSI`, `80 PSI`, `45 PSI`]
        };
    },
    () => { // Balloon Charles Law 
        const V1 = 4;
        const T1 = 20 + 273; // 293
        const T2 = 35 + 273; // 308
        const V2 = (V1 * T2 / T1).toFixed(2);
        return {
            topic: "Thermodynamics",
            q: `Balloon 4L at 20°C. Heated to 35°C. New Volume?`,
            a: `${V2} L`,
            d: [`7.00 L`, `3.80 L`, `4.50 L`]
        };
    },
    () => { // C to F Specific 
        return {
            topic: "Thermodynamics",
            q: `Convert 35°C to Fahrenheit.`,
            a: `95°F`,
            d: [`63°F`, `100°F`, `85°F`]
        };
    },
    () => { // Latent Heat 
        return {
            topic: "Thermodynamics",
            q: `Heat added during a phase change that does NOT change temperature is:`,
            a: `Latent Heat`,
            d: [`Sensible Heat`, `Specific Heat`, `Radiant Heat`]
        };
    },
    () => { // Otto vs Brayton 
        return {
            topic: "Thermodynamics",
            q: `Brayton Cycle (Gas Turbine) operates at constant:`,
            a: `Pressure`,
            d: [`Volume`, `Temperature`, `Entropy`]
        };
    },
    () => { // 2nd Law 
        return {
            topic: "Thermodynamics",
            q: `Heat flowing naturally from Hot to Cold is the:`,
            a: `2nd Law of Thermodynamics`,
            d: [`1st Law`, `0th Law`, `3rd Law`]
        };
    },
    () => { // Specific Heat Definition 
        return {
            topic: "Thermodynamics",
            q: `Energy required to raise the temp of a fixed amount of substance by a fixed amount is:`,
            a: `Specific Heat`,
            d: [`Heat Capacity`, `Latent Heat`, `Sensible Heat`]
        };
    },

    // --- WAVES & OPTICS ---
    () => { // Big Ben Pendulum 
        const L = 10;
        const T = (6 * Math.sqrt(L/10)).toFixed(0); // g=10, 2pi=6
        return {
            topic: "Waves & Optics",
            q: `Period of a 10m pendulum (like Big Ben)? (Assume g=10, π=3)`,
            a: `6 s`,
            d: [`10 s`, `3 s`, `1 s`]
        };
    },
    () => { // 3rd Harmonic 
        const f = 65;
        return {
            topic: "Waves & Optics",
            q: `What is the 3rd harmonic of 65Hz?`,
            a: `195 Hz`,
            d: [`130 Hz`, `65 Hz`, `260 Hz`]
        };
    },
    () => { // Speed of Sound Formula 
        return {
            topic: "Waves & Optics",
            q: `The formula for the speed of sound (a) in knots based on Temp (T) is:`,
            a: `a = 39 √T`,
            d: [`a = 29 √T`, `a = 39 T`, `a = 39 / √T`]
        };
    },
    () => { // Mach Calc 
        const TAS = 600;
        const LSS = 540;
        const M = (TAS/LSS).toFixed(2);
        return {
            topic: "Waves & Optics",
            q: `TAS 600 kts. Local Speed of Sound 540 kts. Mach Number?`,
            a: `1.11`,
            d: [`0.90`, `1.00`, `1.20`]
        };
    },
    () => { // Magnifying Focal Point 
        const R = 4; // cm
        const f = R / 2;
        return {
            topic: "Waves & Optics",
            q: `Magnifying glass Radius 4cm. Where is the focal point?`,
            a: `2 cm`,
            d: [`4 cm`, `8 cm`, `1 cm`]
        };
    },
    () => { // Total Internal Reflection 
        return {
            topic: "Waves & Optics",
            q: `Fibre Optic cables operate on the principle of:`,
            a: `Total Internal Reflection`,
            d: [`Refraction`, `Diffraction`, `Dispersion`]
        };
    },
    () => { // Spherical Aberration 
        return {
            topic: "Waves & Optics",
            q: `When light is not properly focused on a point and image is not sharp:`,
            a: `Spherical Aberration`,
            d: [`Chromatic Aberration`, `Diffraction`, `Myopia`]
        };
    },
    () => { // Sound Intensity 
        return {
            topic: "Waves & Optics",
            q: `Sound intensity decreases inversely with the _____ of the distance.`,
            a: `Square`,
            d: [`Cube`, `Root`, `Log`]
        };
    },
    () => { // Timbre 
        return {
            topic: "Waves & Optics",
            q: `The 'quality' of a sound is also known as:`,
            a: `Timbre`,
            d: [`Pitch`, `Loudness`, `Tone`]
        };
    },
    () => { // Critical Angle 
        return {
            topic: "Waves & Optics",
            q: `The angle above which all light is reflected is the:`,
            a: `Critical Angle`,
            d: [`Normal Angle`, `Incident Angle`, `Refractive Angle`]
        };
    },

    // --- ELECTRICITY & MISC (From Revision) ---
    () => { // Battery Mass 
        const m = 47;
        const w = m * 10;
        return {
            topic: "Mechanics",
            q: `Weight of a 47kg aircraft battery? (g=10)`,
            a: `470 N`,
            d: [`47 N`, `4.7 N`, `94 N`]
        };
    },
    () => { // Moon Battery 
        const m = 47;
        const g = 2; // Moon approx in pdf
        return {
            topic: "Mechanics",
            q: `Weight of a 47kg battery on the Moon (g=2)?`,
            a: `94 N`,
            d: [`470 N`, `47 N`, `23.5 N`]
        };
    },
    () => { // Cable Strain 
        const L1 = 10;
        const L2 = 11;
        const strain = (L2-L1)/L1;
        return {
            topic: "Mechanics",
            q: `Cable length 10m stretches to 11m. Strain?`,
            a: `0.1 m/m`,
            d: [`1.0 m/m`, `0.01 m/m`, `1.1 m/m`]
        };
    },
    () => { // Plastic Deformation 
        return {
            topic: "Mechanics",
            q: `If a cable does not return to original length after load, it suffered:`,
            a: `Plastic Deformation`,
            d: [`Elastic Deformation`, `Tensile Failure`, `Fatigue`]
        };
    },
    () => { // Force for Impulse 
        const J = 500;
        const t = 5;
        const F = J/t;
        return {
            topic: "Mechanics",
            q: `Force required for Impulse 500Ns over 5 seconds?`,
            a: `100 N`,
            d: [`2500 N`, `50 N`, `10 N`]
        };
    },
    () => { // Gyro Precession 
        return {
            topic: "Mechanics",
            q: `Gyroscopic precession occurs 90 degrees _____ of the force.`,
            a: `Ahead`,
            d: [`Behind`, `Opposite`, `Below`]
        };
    },
    () => { // Geosynchronous 
        return {
            topic: "Mechanics",
            q: `A satellite in Geosynchronous orbit appears to _____ relative to Earth.`,
            a: `Stay Still`,
            d: [`Move Fast`, `Move Slow`, `Retrograde`]
        };
    },
    () => { // Friction types 
        return {
            topic: "Mechanics",
            q: `Which friction offers the LEAST resistance?`,
            a: `Rolling`,
            d: [`Sliding`, `Starting`, `Static`]
        };
    },
    () => { // Centre of Gravity 
        return {
            topic: "Mechanics",
            q: `The point through which all weight of a body appears to act:`,
            a: `Centre of Gravity`,
            d: [`Centre of Pressure`, `Aerodynamic Centre`, `Datum`]
        };
    },
    () => { // Couple 
        return {
            topic: "Mechanics",
            q: `Two equal, parallel, opposite forces are a:`,
            a: `Couple`,
            d: [`Moment`, `Vector`, `Resultant`]
        };
    },
    () => { // Atom Forces 
        return {
            topic: "Mechanics",
            q: `Force holding Nucleus and Electrons together?`,
            a: `Electrostatic`,
            d: [`Strong Nuclear`, `Gravitational`, `Magnetic`]
        };
    },
    () => { // Nucleus Forces 
        return {
            topic: "Mechanics",
            q: `Force holding Protons and Neutrons together?`,
            a: `Strong Nuclear`,
            d: [`Electrostatic`, `Weak Nuclear`, `Gravitational`]
        };
    },
    () => { // Sound Medium 
        return {
            topic: "Waves & Optics",
            q: `Sound travels FASTEST in:`,
            a: `Solids`,
            d: [`Liquids`, `Gases`, `Vacuum`]
        };
    },
    // ======================================================
    // BATCH 3: DEEP THEORY & VARIATIONS (50+ New)
    // Source: Physics Revision Questions PDF
    // ======================================================

    // --- MECHANICS: STATICS & DYNAMICS ---
    () => { // Newton 1 Definition 
        return {
            topic: "Mechanics",
            q: `Newton's First Law states a body will remain at rest unless acted upon by:`,
            a: `An external net force`,
            d: [`An internal force`, `Gravity`, `Friction`]
        };
    },
    () => { // Newton 3 Definition 
        return {
            topic: "Mechanics",
            q: `Newton's Third Law states for every action there is a reaction that is:`,
            a: `Equal in magnitude, Opposite in direction`,
            d: [`Equal in magnitude, Same direction`, `Double in magnitude, Opposite direction`, `Less in magnitude, Same direction`]
        };
    },
    () => { // Scalar Definition 
        return {
            topic: "Mechanics",
            q: `A Scalar quantity is defined as having:`,
            a: `Magnitude only`,
            d: [`Direction only`, `Magnitude and Direction`, `Neither`]
        };
    },
    () => { // Vector Definition 
        return {
            topic: "Mechanics",
            q: `A Vector quantity is defined as having:`,
            a: `Magnitude and Direction`,
            d: [`Magnitude only`, `Direction only`, `Mass and Weight`]
        };
    },
    () => { // Equilibrium Definition 
        return {
            topic: "Mechanics",
            q: `When all forces acting on a body are balanced, the body is in:`,
            a: `Equilibrium`,
            d: [`Freefall`, `Precession`, `Tension`]
        };
    },
    () => { // Inertia Definition 
        return {
            topic: "Mechanics",
            q: `The property of a body to resist changes to its state of motion is:`,
            a: `Inertia`,
            d: [`Momentum`, `Velocity`, `Torque`]
        };
    },
    () => { // Centripetal vs Centrifugal 
        return {
            topic: "Mechanics",
            q: `The force directing an object TOWARDS the center of rotation is:`,
            a: `Centripetal Force`,
            d: [`Centrifugal Force`, `Gravitational Force`, `Normal Force`]
        };
    },
    () => { // 2nd Class Lever Example 
        return {
            topic: "Mechanics",
            q: `A wheelbarrow is the classic example of a: 

[Image of wheelbarrow]
`,
            a: `2nd Class Lever`,
            d: [`1st Class Lever`, `3rd Class Lever`, `Pulley`]
        };
    },
    () => { // 3rd Class Lever MA 
        return {
            topic: "Mechanics",
            q: `A 3rd Class Lever always has a Mechanical Advantage (MA) of:`,
            a: `Less than 1`,
            d: [`More than 1`, `Exactly 1`, `Zero`]
        };
    },
    () => { // MA Distance Rule 
        return {
            topic: "Mechanics",
            q: `If MA > 1, the Load travels a ______ distance than the Effort.`,
            a: `Shorter`,
            d: [`Longer`, `Equal`, `Infinite`]
        };
    },
    () => { // Friction Coefficient 
        return {
            topic: "Mechanics",
            q: `A higher coefficient of friction means ______ resistance to movement.`,
            a: `Higher`,
            d: [`Lower`, `Zero`, `Constant`]
        };
    },
    () => { // Rolling Friction 
        return {
            topic: "Mechanics",
            q: `Which type of friction generally offers the LEAST resistance?`,
            a: `Rolling`,
            d: [`Sliding`, `Starting`, `Static`]
        };
    },
    () => { // Power Definition 
        return {
            topic: "Mechanics",
            q: `Power is defined as the Rate of doing:`,
            a: `Work`,
            d: [`Force`, `Energy`, `Momentum`]
        };
    },
    () => { // Work Unit 
        return {
            topic: "Mechanics",
            q: `The SI Unit for Work is the:`,
            a: `Joule`,
            d: [`Watt`, `Newton`, `Pascal`]
        };
    },
    () => { // Conservation of Energy 
        return {
            topic: "Mechanics",
            q: `Energy cannot be created or destroyed, only:`,
            a: `Converted`,
            d: [`Eliminated`, `Multiplied`, `Reduced`]
        };
    },

    // --- FLUID DYNAMICS ---
    () => { // SG Definition 
        return {
            topic: "Fluid Dynamics",
            q: `Specific Gravity is the density of a substance compared to:`,
            a: `Pure Water`,
            d: [`Air`, `Mercury`, `Oil`]
        };
    },
    () => { // SG Unit 
        return {
            topic: "Fluid Dynamics",
            q: `What are the units for Specific Gravity?`,
            a: `No Units (Dimensionless)`,
            d: [`kg/m³`, `N/m²`, `PSI`]
        };
    },
    () => { // Float/Sink Rule 
        return {
            topic: "Fluid Dynamics",
            q: `An object with SG 0.9 placed in water (SG 1.0) will:`,
            a: `Float`,
            d: [`Sink`, `Hover`, `Dissolve`]
        };
    },
    () => { // Pascal's Law 
        return {
            topic: "Fluid Dynamics",
            q: `Pascal's Law states pressure in an enclosed fluid is transmitted:`,
            a: `Equally to all parts`,
            d: [`Decreasing with distance`, `Increasing with depth only`, `Towards the center`]
        };
    },
    () => { // Viscosity vs Temp Liquid 
        return {
            topic: "Fluid Dynamics",
            q: `Increasing the temperature of a LIQUID causes viscosity to:`,
            a: `Decrease`,
            d: [`Increase`, `Stay same`, `Fluctuate`]
        };
    },
    () => { // Viscosity vs Temp Gas 
        return {
            topic: "Fluid Dynamics",
            q: `Increasing the temperature of a GAS causes viscosity to:`,
            a: `Increase`,
            d: [`Decrease`, `Stay same`, `Drop to zero`]
        };
    },
    () => { // Gauge Pressure 
        return {
            topic: "Fluid Dynamics",
            q: `Pressure measured relative to atmospheric pressure is:`,
            a: `Gauge Pressure`,
            d: [`Absolute Pressure`, `Differential Pressure`, `Vacuum Pressure`]
        };
    },
    () => { // Differential Pressure 
        return {
            topic: "Fluid Dynamics",
            q: `The difference between two pressures is called:`,
            a: `Differential Pressure`,
            d: [`Gauge Pressure`, `Static Pressure`, `Dynamic Pressure`]
        };
    },
    () => { // Streamlining 
        return {
            topic: "Fluid Dynamics",
            q: `Streamlining an object reduces:`,
            a: `Drag`,
            d: [`Lift`, `Weight`, `Thrust`]
        };
    },
    () => { // Compressibility 
        return {
            topic: "Fluid Dynamics",
            q: `In basic physics, Liquids are considered ______ while Gases are ______.`,
            a: `Incompressible, Compressible`,
            d: [`Compressible, Incompressible`, `Solid, Fluid`, `Heavy, Light`]
        };
    },

    // --- THERMODYNAMICS ---
    () => { // Absolute Zero C 
        return {
            topic: "Thermodynamics",
            q: `0 Kelvin is equal to:`,
            a: `-273°C`,
            d: [`0°C`, `100°C`, `-100°C`]
        };
    },
    () => { // Latent Heat Fusion 
        return {
            topic: "Thermodynamics",
            q: `Latent Heat of Fusion relates to the change between:`,
            a: `Solid and Liquid`,
            d: [`Liquid and Gas`, `Solid and Gas`, `Gas and Plasma`]
        };
    },
    () => { // Latent Heat Evaporation 
        return {
            topic: "Thermodynamics",
            q: `Latent Heat of Evaporation relates to the change between:`,
            a: `Liquid and Gas`,
            d: [`Solid and Liquid`, `Solid and Gas`, `Gas and Plasma`]
        };
    },
    () => { // Sensible Heat 
        return {
            topic: "Thermodynamics",
            q: `Heat that causes a change in TEMPERATURE is called:`,
            a: `Sensible Heat`,
            d: [`Latent Heat`, `Specific Heat`, `Radiant Heat`]
        };
    },
    () => { // Calorie Definition 
        return {
            topic: "Thermodynamics",
            q: `Amount of heat to raise 1g of water by 1°C is a:`,
            a: `Calorie`,
            d: [`Joule`, `Watt`, `Newton`]
        };
    },
    () => { // Conduction Definition 
        return {
            topic: "Thermodynamics",
            q: `Heat transfer via physical contact between substances is:`,
            a: `Conduction`,
            d: [`Convection`, `Radiation`, `Induction`]
        };
    },
    () => { // Convection Definition 
        return {
            topic: "Thermodynamics",
            q: `Heat transfer via bulk movement of a fluid is:`,
            a: `Convection`,
            d: [`Conduction`, `Radiation`, `Advection`]
        };
    },
    () => { // Radiation Definition 
        return {
            topic: "Thermodynamics",
            q: `Heat transfer requiring no medium (vacuum) is:`,
            a: `Radiation`,
            d: [`Conduction`, `Convection`, `Transmission`]
        };
    },
    () => { // Adiabatic Definition 
        return {
            topic: "Thermodynamics",
            q: `A process with NO heat transfer to/from the environment is:`,
            a: `Adiabatic`,
            d: [`Isothermal`, `Isobaric`, `Isochoric`]
        };
    },
    () => { // Isobaric Definition 
        return {
            topic: "Thermodynamics",
            q: `A process occurring at Constant Pressure is:`,
            a: `Isobaric`,
            d: [`Isothermal`, `Adiabatic`, `Isovolumetric`]
        };
    },

    // --- WAVES & OPTICS ---
    () => { // Reflection vs Refraction 
        return {
            topic: "Waves & Optics",
            q: `Bouncing of light off a surface is ______; Bending of light through a medium is ______.`,
            a: `Reflection, Refraction`,
            d: [`Refraction, Reflection`, `Diffraction, Dispersion`, `Incidence, Criticality`]
        };
    },
    () => { // Normal Definition 
        return {
            topic: "Waves & Optics",
            q: `In optics, the line perpendicular to the surface is called the:`,
            a: `Normal`,
            d: [`Tangent`, `Vector`, `Radius`]
        };
    },
    () => { // Critical Angle 
        return {
            topic: "Waves & Optics",
            q: `The angle of incidence above which Total Internal Reflection occurs is:`,
            a: `Critical Angle`,
            d: [`Refractive Angle`, `Normal Angle`, `Glancing Angle`]
        };
    },
    () => { // Concave Mirror Image 
        return {
            topic: "Waves & Optics",
            q: `A Concave Mirror generally causes light rays to:`,
            a: `Converge (Focus)`,
            d: [`Diverge`, `Scatter`, `Pass through`]
        };
    },
    () => { // Convex Mirror Image 
        return {
            topic: "Waves & Optics",
            q: `A Convex Mirror generally causes light rays to:`,
            a: `Diverge`,
            d: [`Converge`, `Focus`, `Intensify`]
        };
    },
    () => { // Real Image 
        return {
            topic: "Waves & Optics",
            q: `An image where light actually focuses on a screen is a:`,
            a: `Real Image`,
            d: [`Virtual Image`, `Imaginary Image`, `Phantom Image`]
        };
    },
    () => { // Virtual Image 
        return {
            topic: "Waves & Optics",
            q: `An image that appears to be there but cannot be projected on a screen is:`,
            a: `Virtual Image`,
            d: [`Real Image`, `Focused Image`, `Solid Image`]
        };
    },
    () => { // Sound Wave Type 
        return {
            topic: "Waves & Optics",
            q: `Sound waves are:`,
            a: `Longitudinal`,
            d: [`Transverse`, `Electromagnetic`, `Stationary`]
        };
    },
    () => { // Pitch vs Freq 
        return {
            topic: "Waves & Optics",
            q: `The Pitch of a sound is directly determined by its:`,
            a: `Frequency`,
            d: [`Amplitude`, `Phase`, `Speed`]
        };
    },
    () => { // Loudness vs Amp 
        return {
            topic: "Waves & Optics",
            q: `The Loudness of a sound is directly determined by its:`,
            a: `Amplitude`,
            d: [`Frequency`, `Wavelength`, `Period`]
        };
    },
    () => { // Constructive Interference 
        return {
            topic: "Waves & Optics",
            q: `When wave crests align and add together, it is called:`,
            a: `Constructive Interference`,
            d: [`Destructive Interference`, `Diffraction`, `Refraction`]
        };
    },
    () => { // Destructive Interference 
        return {
            topic: "Waves & Optics",
            q: `When a crest meets a trough and they cancel out, it is called:`,
            a: `Destructive Interference`,
            d: [`Constructive Interference`, `Resonance`, `Amplification`]
        };
    },
    () => { // Node Definition 
        return {
            topic: "Waves & Optics",
            q: `The point of zero amplitude on a standing wave is a:`,
            a: `Node`,
            d: [`Antinode`, `Crest`, `Trough`]
        };
    },
    () => { // Beat Frequency 
        return {
            topic: "Waves & Optics",
            q: `The pulsing sound caused by two slightly different frequencies is:`,
            a: `Beat Frequency`,
            d: [`Resonance`, `Doppler`, `Harmonic`]
        };
    },
    () => { // Mach Formula 
        return {
            topic: "Waves & Optics",
            q: `Mach Number is the ratio of:`,
            a: `TAS / Local Speed of Sound`,
            d: [`TAS / Ground Speed`, `Ground Speed / TAS`, `LSS / TAS`]
        };
    }
];



// ======================================================
// MODULE REGISTRATION
// ======================================================
registerModule(
    "Module 2: Physics",
    52, // Question Count
    function(count) {
        // 1. Shuffle ALL possible question generators first (Prevents duplicates)
        const shuffledGens = shuffle([...physicsGenerators]);
        
        // 2. Select only the number we need (count)
        const selectedGens = shuffledGens.slice(0, count);
        
        // 3. Generate the actual question data for the selected ones
        return selectedGens.map(gen => {
            const data = gen();
            return {
                topic: data.topic, // Pass topic for Competency Tracking
                question: data.q,
                options: shuffle([...data.d, data.a]),
                correct: data.a
            };
        });
    },
    `${physicsGenerators.length} Scenarios (CASA B-02)`
);