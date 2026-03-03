/* MODULE 1: MATHEMATICS (FULL DYNAMIC EDITION) */
/* Contains: 
   - 100+ Variation Word Problem Bank (Dynamic Numbers)
   - Algorithmic Pure Maths Generators 
*/

// --- LOCAL UTILITIES ---
// const rInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// const rFloat = (min, max, d=1) => parseFloat((Math.random() * (max - min) + min).toFixed(d));
// const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
// const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);
// const toSuper = (num) => String(num).split("").map(c => ({"0":"⁰","1":"¹","2":"²","3":"³","4":"⁴","5":"⁵","6":"⁶","7":"⁷","8":"⁸","9":"⁹","-":"⁻"})[c] || c).join("");

// ======================================================
// PART 1: DYNAMIC WORD PROBLEM GENERATORS (SCENARIOS)
// ======================================================
const wordGenerators = [
    
    // --- 1. RATIO & PROPORTION (Aviation Contexts) ---
    () => { // Fuel Mixture
        const partsOil = 1;
        const partsGas = pick([20, 25, 40, 50]);
        const gasVol = rInt(10, 50) * partsGas; // Ensure clean division
        const ans = gasVol / partsGas;
        return {
            topic: "Arithmetic",
            q: `A two-stroke engine requires a fuel mixture of ${partsOil}:${partsGas} (oil to petrol). If you have ${gasVol} Liters of petrol, how much oil is needed?`,
            a: `${ans} L`,
            d: [`${ans*2} L`, `${(gasVol/10).toFixed(1)} L`, `${ans+1} L`]
        };
    },
    () => { // Wing Aspect Ratio
        const chord = rInt(2, 5);
        const span = rInt(20, 40);
        // AR = Span / Chord
        const ar = (span / chord).toFixed(1);
        return {
            topic: "Arithmetic",
            q: `A wing has a span of ${span}m and a mean chord of ${chord}m. Calculate the Aspect Ratio.`,
            a: `${ar}`,
            d: [`${(span*chord)}`, `${(chord/span).toFixed(2)}`, `${(span+chord)}`]
        };
    },
    () => { // Glide Ratio
        const height = rInt(2, 10) * 1000; // ft
        const dist = rInt(10, 30); // nm
        // 1nm approx 6000ft for mental math, but let's stick to simple ratios
        // Let's change question: Glide Ratio 1:X. Height H. Dist?
        const ratio = pick([10, 12, 15]);
        const h_meters = rInt(100, 500); // meters AGL
        const dist_meters = h_meters * ratio;
        return {
            topic: "Arithmetic",
            q: `An aircraft has a glide ratio of 1:${ratio}. If it is ${h_meters}m AGL, how far can it glide (in meters)?`,
            a: `${dist_meters} m`,
            d: [`${h_meters/ratio} m`, `${h_meters+ratio} m`, `${dist_meters*2} m`]
        };
    },
    () => { // Concrete/Composite Mixture
        const total = rInt(10, 50) * 10;
        const ratios = [rInt(1,2), rInt(2,3), rInt(4,6)];
        const sum = ratios[0] + ratios[1] + ratios[2];
        const scaledTotal = total * sum; // Ensure divisibility
        const share = scaledTotal / sum;
        const target = ratios[1]; // Ask for middle ingredient
        return {
            topic: "Arithmetic",
            q: `A composite filler is mixed in ratio ${ratios.join(':')}. Total weight is ${scaledTotal}g. How much of the second ingredient is needed?`,
            a: `${share * target} g`,
            d: [`${share * ratios[0]} g`, `${share * ratios[2]} g`, `${scaledTotal/3} g`]
        };
    },

    // --- 2. INVERSE PROPORTION (Work & Gears) ---
    () => { // Draining Tanks
        const pumps = rInt(2, 4);
        const time = rInt(20, 60);
        const totalWork = pumps * time;
        // New scenario
        const newPumps = pumps + rInt(1, 2);
        const newTime = (totalWork / newPumps).toFixed(1); // Might be decimal
        // Let's force integer
        const p1 = 2, t1 = 30; // 60 work
        const p2 = pick([3, 4, 5, 6]); 
        const t2 = (60 / p2); 
        return {
            topic: "Arithmetic",
            q: `It takes ${t1} minutes to drain a tank with ${p1} pumps. How long with ${p2} pumps?`,
            a: `${t2} mins`,
            d: [`${t1*2} mins`, `${t1-5} mins`, `${t1+10} mins`]
        };
    },
    () => { // Pulleys RPM
        const d1 = rInt(10, 20); // Driver diameter
        const rpm1 = rInt(10, 20) * 100; // Driver RPM
        const d2 = d1 / 2; // Driven diameter (smaller)
        const rpm2 = rpm1 * 2; // Speed doubles
        return {
            topic: "Arithmetic",
            q: `A driver pulley (Diameter ${d1}cm) spins at ${rpm1} RPM. It drives a smaller pulley (Diameter ${d2}cm). What is the speed of the driven pulley?`,
            a: `${rpm2} RPM`,
            d: [`${rpm1/2} RPM`, `${rpm1} RPM`, `${rpm2*2} RPM`]
        };
    },
    
    // --- 3. PERCENTAGES & EFFICIENCY ---
    () => { // Engine Efficiency
        const input = rInt(100, 500) * 10; // kW
        const eff = pick([75, 80, 85, 90]);
        const output = (input * eff) / 100;
        return {
            topic: "Arithmetic",
            q: `An engine has a thermal efficiency of ${eff}%. If the heat input is ${input} kW, what is the power output?`,
            a: `${output} kW`,
            d: [`${input - eff} kW`, `${input + eff} kW`, `${output/2} kW`]
        };
    },
    () => { // Weight Change
        const weight = rInt(2000, 5000);
        const pct = pick([10, 20, 25]);
        const increase = (weight * pct) / 100;
        return {
            topic: "Arithmetic",
            q: `An aircraft weight of ${weight}kg is increased by ${pct}%. What is the new weight?`,
            a: `${weight + increase} kg`,
            d: [`${weight - increase} kg`, `${increase} kg`, `${weight * 2} kg`]
        };
    },

    // --- 4. GEOMETRY (Areas & Volumes) ---
    () => { // Circle Area
        const r = rInt(2, 9);
        return {
            topic: "Geometry",
            q: `Calculate the Area of a circle with radius ${r}cm. (Use π ≈ 3.14)`,
            a: `${(3.14 * r * r).toFixed(2)} cm²`,
            d: [`${(2 * 3.14 * r).toFixed(2)} cm²`, `${(3.14 * r).toFixed(2)} cm²`, `${(r*r).toFixed(2)} cm²`]
        };
    },
    () => { // Circle Circumference
        const d = rInt(10, 50);
        return {
            topic: "Geometry",
            q: `Calculate the Circumference of a wheel with diameter ${d}cm. (Use π ≈ 3.14)`,
            a: `${(3.14 * d).toFixed(1)} cm`,
            d: [`${(3.14 * d * d).toFixed(1)} cm`, `${(3.14 * d / 2).toFixed(1)} cm`, `${d*2} cm`]
        };
    },
    () => { // Trapezium Area (Wing)
        const a = rInt(2, 5); // top
        const b = rInt(6, 10); // bottom
        const h = rInt(2, 5); // height
        const area = ((a+b)/2) * h;
        return {
            topic: "Geometry",
            q: `Calculate area of a trapezium: parallel sides ${a}m and ${b}m, height ${h}m.`,
            a: `${area} m²`,
            d: [`${(a+b)*h} m²`, `${area*2} m²`, `${a*b*h} m²`]
        };
    },
    () => { // Cylinder Volume
        const r = rInt(2, 5);
        const h = rInt(5, 10);
        // V = pi r^2 h
        return {
            topic: "Geometry",
            q: `Calculate volume of a cylinder: radius ${r}m, height ${h}m. (Leave as π)`,
            a: `${r*r*h}π m³`,
            d: [`${2*r*h}π m³`, `${r*h}π m³`, `${r*r}π m³`]
        };
    },
    () => { // Annulus (Washer) Area
        const R = rInt(6, 10);
        const r = rInt(2, 5);
        const ans = (R*R) - (r*r);
        return {
            topic: "Geometry",
            q: `Calculate the area of a washer (annulus) with outer radius ${R}mm and inner radius ${r}mm. (Leave as π)`,
            a: `${ans}π mm²`,
            d: [`${R-r}π mm²`, `${R*R + r*r}π mm²`, `${(R-r)*2}π mm²`]
        };
    },

    // --- 5. TRIGONOMETRY (SOH CAH TOA) ---
    () => { // Sin (Height)
        const hyp = rInt(10, 20);
        const angle = 30; // sin30 = 0.5
        const opp = hyp * 0.5;
        return {
            topic: "Geometry",
            q: `A ramp is ${hyp}m long at 30° to the horizontal. How high is the top? (sin30=0.5)`,
            a: `${opp} m`,
            d: [`${hyp*2} m`, `${hyp} m`, `${opp*1.5} m`]
        };
    },
    () => { // Cos (Base)
        const hyp = rInt(10, 20);
        const angle = 60; // cos60 = 0.5
        const adj = hyp * 0.5;
        return {
            topic: "Geometry",
            q: `A ladder ${hyp}m long leans against a wall at 60° to the ground. How far is the base from the wall? (cos60=0.5)`,
            a: `${adj} m`,
            d: [`${hyp*0.866} m`, `${hyp} m`, `${adj*1.5} m`]
        };
    },
    () => { // Tan (Shadow)
        const h = rInt(10, 50);
        const angle = 45; // tan45 = 1
        return {
            topic: "Geometry",
            q: `A pole is ${h}m tall. The sun is at 45°. How long is the shadow? (tan45=1)`,
            a: `${h} m`,
            d: [`${h/2} m`, `${h*2} m`, `${h*1.5} m`]
        };
    },
    
    // --- 6. COORDINATE GEOMETRY ---
    () => { // Midpoint
        const x1 = rInt(0, 10), y1 = rInt(0, 10);
        const x2 = x1 + rInt(2, 8), y2 = y1 + rInt(2, 8); // Ensure different
        const mx = (x1+x2)/2;
        const my = (y1+y2)/2;
        return {
            topic: "Graphs",
            q: `Find the midpoint between (${x1}, ${y1}) and (${x2}, ${y2}).`,
            a: `(${mx}, ${my})`,
            d: [`(${x1+x2}, ${y1+y2})`, `(${x2-x1}, ${y2-y1})`, `(${mx*2}, ${my*2})`]
        };
    },
    () => { // Gradient
        const m = rInt(2, 5);
        const c = rInt(1, 9);
        return {
            topic: "Graphs",
            q: `What is the gradient of the line y = ${m}x - ${c}?`,
            a: `${m}`,
            d: [`${c}`, `-${m}`, `-${c}`]
        };
    },
    () => { // Polar to Rect (Standard Angles)
        const r = pick([10, 20, 100]);
        const deg = 30; // cos=0.866, sin=0.5
        return {
            topic: "Graphs",
            q: `Convert Polar (${r}, 30°) to Rectangular (x,y). (sin30=0.5, cos30=0.866)`,
            a: `x=${r*0.866}, y=${r*0.5}`,
            d: [`x=${r*0.5}, y=${r*0.866}`, `x=${r}, y=${r}`, `x=${r*0.866}, y=${r*0.866}`]
        };
    },

    // --- 7. LOGARITHMS & SOUND ---
    () => { // Log Product
        const log2 = 0.301;
        const log3 = 0.477;
        return {
            topic: "Algebra",
            q: `Given log(2)=0.301 and log(3)=0.477, evaluate log(6).`,
            a: `${(log2+log3).toFixed(3)}`,
            d: [`${(log3-log2).toFixed(3)}`, `${(log2*log3).toFixed(3)}`, `0.700`]
        };
    },
    () => { // Log Power
        const log2 = 0.3;
        const pow = pick([2, 3, 4]); // log(4), log(8), log(16)
        return {
            topic: "Algebra",
            q: `Given log(2) ≈ 0.3, estimate log(${Math.pow(2, pow)}).`,
            a: `${(0.3 * pow).toFixed(1)}`,
            d: [`${0.3 + pow}`, `${Math.pow(0.3, pow).toFixed(2)}`, `${pow}`]
        };
    },
    () => { // dB Gain (Voltage)
        // dB = 20 log (Vout/Vin)
        const ratio = pick([10, 100, 1000]);
        const logs = {10:1, 100:2, 1000:3};
        const ans = 20 * logs[ratio];
        return {
            topic: "Algebra",
            q: `Calculate Voltage Gain in dB if V_out is ${ratio} times V_in.`,
            a: `${ans} dB`,
            d: [`${ans/2} dB`, `${10 * logs[ratio]} dB`, `${ratio} dB`]
        };
    },
    () => { // dB Gain (Power)
        // dB = 10 log (Pout/Pin)
        const ratio = pick([10, 100]);
        const logs = {10:1, 100:2};
        const ans = 10 * logs[ratio];
        return {
            topic: "Algebra",
            q: `Calculate Power Gain in dB if P_out is ${ratio} times P_in.`,
            a: `${ans} dB`,
            d: [`${ans*2} dB`, `${ratio} dB`, `${logs[ratio]} dB`]
        };
    },

    // --- 8. NUMBER BASES ---
    () => { // Binary to Dec
        const d = rInt(5, 15);
        return {
            topic: "Arithmetic",
            q: `Convert Binary ${d.toString(2)} to Decimal.`,
            a: `${d}`,
            d: [`${d+1}`, `${d-1}`, `${d+2}`]
        };
    },
    () => { // Hex to Dec
        const d = rInt(10, 15); // A-F
        const h = d.toString(16).toUpperCase();
        return {
            topic: "Arithmetic",
            q: `Convert Hex '${h}' to Decimal.`,
            a: `${d}`,
            d: [`${d+1}`, `${d-1}`, `16`]
        };
    },
    () => { // Octal to Dec
        const d = rInt(8, 15); 
        return {
            topic: "Arithmetic",
            q: `Convert Decimal ${d} to Octal.`,
            a: `${d.toString(8)}`,
            d: [`${d}`, `${d.toString(16)}`, `20`]
        };
    },
    () => { // Binary Math
        const a = rInt(3, 7);
        const b = rInt(1, 3);
        return {
            topic: "Arithmetic",
            q: `Binary Subtraction: ${a.toString(2)} - ${b.toString(2)}`,
            a: `${(a-b).toString(2)}`,
            d: [`${(a+b).toString(2)}`, `111`, `100`]
        };
    },

    // --- 9. PHYSICS (Force, Motion, Etc) ---
    // Note: Tagging as "Algebra" (Formula substitution) or "Arithmetic" to fit Module 1 Competency
    () => { // F=ma
        const m = rInt(10, 100);
        const a = rInt(2, 10);
        return {
            topic: "Algebra",
            q: `Force required to accelerate ${m}kg mass at ${a}m/s²?`,
            a: `${m*a} N`,
            d: [`${m+a} N`, `${m/a} N`, `${m*a*10} N`]
        };
    },
    () => { // Weight (W=mg)
        const m = rInt(5, 50);
        const g = 9.8;
        // Approximation often allowed in mental math exams, checking 10 vs 9.8 logic
        const w = (m * g).toFixed(1);
        return {
            topic: "Arithmetic",
            q: `Calculate weight of ${m}kg mass (g=9.8 m/s²).`,
            a: `${w} N`,
            d: [`${m*10} N`, `${m} N`, `${(m/g).toFixed(1)} N`]
        };
    },
    () => { // Moment (See-saw)
        // F1 d1 = F2 d2
        const F1 = rInt(10, 50) * 10;
        const d1 = 2;
        const d2 = 4; // F2 must be half
        const F2 = (F1 * d1) / d2;
        return {
            topic: "Algebra",
            q: `A lever is balanced. Left side: ${F1}N at ${d1}m. Right side: Distance ${d2}m. What Force is on the right?`,
            a: `${F2} N`,
            d: [`${F1} N`, `${F1*2} N`, `${F2-10} N`]
        };
    },
    () => { // Work Done
        const F = rInt(50, 200);
        const d = rInt(2, 5);
        return {
            topic: "Arithmetic",
            q: `Work done moving an object ${d}m with a force of ${F}N?`,
            a: `${F*d} J`,
            d: [`${F/d} J`, `${F+d} J`, `${F*d*10} J`]
        };
    },
    () => { // Power (Mechanical)
        const W = rInt(100, 500);
        const t = pick([2, 4, 5, 10]);
        return {
            topic: "Arithmetic",
            q: `Power used if ${W} Joules of work is done in ${t} seconds?`,
            a: `${W/t} Watts`,
            d: [`${W*t} Watts`, `${W-t} Watts`, `${W} Watts`]
        };
    },
    () => { // Pressure (Hydraulic)
        const F = rInt(100, 500);
        const A = pick([2, 4, 5]); // cm^2
        // P = F/A
        return {
            topic: "Arithmetic",
            q: `Pressure in a system with Force ${F}N on piston area ${A}cm²?`,
            a: `${F/A} N/cm²`,
            d: [`${F*A} N/cm²`, `${F} N/cm²`, `${(F/A)*10} N/cm²`]
        };
    },
    () => { // Density
        const V = pick([2, 4, 5]); // m3
        const m = rInt(2000, 5000); // kg
        return {
            topic: "Arithmetic",
            q: `Density of a material with Mass ${m}kg and Volume ${V}m³?`,
            a: `${m/V} kg/m³`,
            d: [`${m*V} kg/m³`, `${V/m} kg/m³`, `${m-V} kg/m³`]
        };
    },
    () => { // Strain
        const ext = 0.5; // mm
        const len = rInt(100, 500); // mm
        // Strain = ext / len (no units)
        const ans = (ext / len).toFixed(4);
        return {
            topic: "Arithmetic",
            q: `Calculate Strain: Extension ${ext}mm, Original Length ${len}mm.`,
            a: `${ans}`,
            d: [`${ans*10}`, `${(len/ext).toFixed(1)}`, `${ans/10}`]
        };
    },
    () => { // Temperature (C to K)
        const C = rInt(-50, 150);
        return {
            topic: "Arithmetic",
            q: `Convert ${C}°C to Kelvin.`,
            a: `${C + 273} K`,
            d: [`${C - 273} K`, `${273 - C} K`, `${C} K`]
        };
    },
    
    // --- 10. ALGEBRA (Equations) ---
    () => { // Simple Linear
        const m = rInt(2, 9);
        const c = rInt(1, 10);
        const x = rInt(2, 5);
        const y = m*x + c;
        return {
            topic: "Algebra",
            q: `Solve for x: ${m}x + ${c} = ${y}`,
            a: `${x}`,
            d: [`${x+1}`, `${x-1}`, `${y-c}`]
        };
    },
    () => { // Transpose
        return {
            topic: "Algebra",
            q: `Make 'a' the subject: v = u + at`,
            a: `a = (v-u)/t`,
            d: [`a = (v+u)/t`, `a = v - u - t`, `a = v/t - u`]
        };
    },
    () => { // Quadratic Expansion
        const a = rInt(1, 5);
        const b = rInt(1, 5);
        return {
            topic: "Algebra",
            q: `Expand: (x + ${a})(x + ${b})`,
            a: `x² + ${a+b}x + ${a*b}`,
            d: [`x² + ${a*b}x + ${a+b}`, `x² + ${a+b}x - ${a*b}`, `x² + ${a}x + ${b}`]
        };
    },
    // --- NEW BATCH: APPEND THESE TO YOUR LIST ---

    // --- 11. SHEET METAL & RIVETS ---
    () => { // Rivet Pitch
        const rivets = rInt(5, 20);
        const pitch = rInt(3, 6) * 10; // mm
        const len = (rivets - 1) * pitch;
        return {
            topic: "Arithmetic",
            q: `A row of ${rivets} rivets has a pitch of ${pitch}mm. Distance between first and last rivet?`,
            a: `${len} mm`,
            d: [`${len + pitch} mm`, `${rivets * pitch} mm`, `${len / 10} mm`]
        };
    },
    () => { // Bend Allowance (Simplified)
        // BA = (0.01743 * R + 0.0078 * T) * Angle
        // Let's use a simplified rule often used in exams: BA for 90 deg = 1.57(R + T/2) or similar
        // Let's stick to simple Arc Length: L = (Angle/360) * 2 * pi * R
        const r = rInt(10, 50); // Radius
        const angle = 90;
        const arc = (0.25 * 2 * 3.14 * r).toFixed(1);
        return {
            topic: "Geometry",
            q: `Calculate bend allowance (arc length) for a 90° bend with Neutral Axis radius ${r}mm. (π≈3.14)`,
            a: `${arc} mm`,
            d: [`${(arc*2).toFixed(1)} mm`, `${r} mm`, `${(r*3.14).toFixed(1)} mm`]
        };
    },
    () => { // Sheet Area
        const w = rInt(50, 100); // cm
        const l = rInt(100, 200); // cm
        const areaM2 = (w * l) / 10000;
        return {
            topic: "Geometry",
            q: `A sheet of aluminium is ${w}cm wide and ${l}cm long. Area in m²?`,
            a: `${areaM2} m²`,
            d: [`${areaM2*10} m²`, `${areaM2*100} m²`, `${(w*l)} m²`]
        };
    },

    // --- 12. ADVANCED ELECTRICAL ---
    () => { // Total Capacitance (Parallel)
        const c1 = rInt(10, 50);
        const c2 = rInt(10, 50);
        return {
            topic: "Arithmetic",
            q: `Two capacitors ${c1}µF and ${c2}µF are in parallel. Total Capacitance?`,
            a: `${c1+c2} µF`,
            d: [`${((c1*c2)/(c1+c2)).toFixed(1)} µF`, `${c1} µF`, `${Math.abs(c1-c2)} µF`]
        };
    },
    () => { // Total Capacitance (Series)
        const c = pick([10, 20, 100]);
        // Two equal in series = half
        return {
            topic: "Arithmetic",
            q: `Two ${c}µF capacitors are connected in series. Total Capacitance?`,
            a: `${c/2} µF`,
            d: [`${c*2} µF`, `${c} µF`, `${c*4} µF`]
        };
    },
    () => { // Kirchhoff's Voltage Law
        const source = 28;
        const v1 = rInt(5, 10);
        const v2 = rInt(5, 10);
        const v3 = source - v1 - v2;
        return {
            topic: "Arithmetic",
            q: `28V supply connected to 3 loads in series. Load 1 drops ${v1}V, Load 2 drops ${v2}V. Voltage drop across Load 3?`,
            a: `${v3} V`,
            d: [`${v1+v2} V`, `${28-v1} V`, `${28+v1+v2} V`]
        };
    },
    () => { // Frequency to Wavelength
        // c = f * lambda -> lambda = c / f. c = 300,000,000 m/s
        const f = pick([100, 150, 300]); // MHz
        const lambda = 300 / f; // simplified (300 / MHz = meters)
        return {
            topic: "Arithmetic",
            q: `Calculate wavelength of a ${f} MHz radio signal. (Speed of light ≈ 300,000 km/s)`,
            a: `${lambda} m`,
            d: [`${lambda*10} m`, `${300*f} m`, `${lambda/2} m`]
        };
    },

    // --- 13. GRAPHS & FUNCTIONS ---
    () => { // Y-Intercept
        const m = rInt(2, 5);
        const c = rInt(1, 9);
        return {
            topic: "Graphs",
            q: `Identify the y-intercept of the line y = ${m}x + ${c}.`,
            a: `${c}`,
            d: [`${m}`, `-${c}`, `${m+c}`]
        };
    },
    () => { // X-Intercept
        // y = mx + c. Let y=0. mx = -c. x = -c/m
        const m = 2;
        const c = pick([4, 6, 8, 10]);
        const xInt = -c / m;
        return {
            topic: "Graphs",
            q: `At what x value does y = ${m}x + ${c} cross the x-axis? (Where y=0)`,
            a: `${xInt}`,
            d: [`${c}`, `${xInt*-1}`, `${c/m}`]
        };
    },
    () => { // Gradient between points
        const x1 = 1, y1 = 2;
        const x2 = 3;
        const y2 = pick([6, 8, 10]); // ensure integer
        const m = (y2-y1) / (x2-x1);
        return {
            topic: "Graphs",
            q: `Calculate gradient of line passing through (${x1},${y1}) and (${x2},${y2}).`,
            a: `${m}`,
            d: [`${m*2}`, `${y2-y1}`, `${x2-x1}`]
        };
    },
    () => { // Quadratic Shape
        const a = rInt(1, 5);
        const type = (Math.random() > 0.5) ? "positive" : "negative";
        const coeff = (type === "positive") ? a : -a;
        return {
            topic: "Graphs",
            q: `Does the curve y = ${coeff}x² + x + 1 open Up or Down?`,
            a: type === "positive" ? "Up (Concave Up)" : "Down (Concave Down)",
            d: [type === "positive" ? "Down (Concave Down)" : "Up (Concave Up)", "Left", "Right"]
        };
    },

    // --- 14. LOGARITHMS (Advanced Laws) ---
    () => { // Log of Power 10
        const n = rInt(2, 6);
        return {
            topic: "Algebra",
            q: `Evaluate log₁₀(10${toSuper(n)}).`,
            a: `${n}`,
            d: [`10`, `${n*10}`, `1`]
        };
    },
    () => { // Log Base Change logic
        return {
            topic: "Algebra",
            q: `If ln(x) = 1, what is x? (e ≈ 2.718)`,
            a: `2.718`,
            d: [`1`, `10`, `0`]
        };
    },
    () => { // Log Multiplication
        // log(50) = log(5) + log(10) = 0.7 + 1 = 1.7
        return {
            topic: "Algebra",
            q: `Given log₁₀(5) ≈ 0.7, evaluate log₁₀(50).`,
            a: `1.7`,
            d: [`0.7`, `5.7`, `1.4`]
        };
    },
    () => { // Log Division
        // log(2) = 0.3. log(0.5) = log(1/2) = log1 - log2 = 0 - 0.3
        return {
            topic: "Algebra",
            q: `Given log₁₀(2) ≈ 0.3, evaluate log₁₀(0.5).`,
            a: `-0.3`,
            d: [`0.3`, `0.2`, `-0.7`]
        };
    },

    // --- 15. ALGEBRA (Substitution & Rearranging) ---
    () => { // Evaluate Expression
        const x = rInt(2, 5);
        const y = rInt(2, 5);
        // 2x^2 - y
        const ans = (2 * x * x) - y;
        return {
            topic: "Algebra",
            q: `Evaluate 2x² - y when x=${x} and y=${y}.`,
            a: `${ans}`,
            d: [`${Math.pow(2*x, 2) - y}`, `${2*x - y}`, `${ans+10}`]
        };
    },
    () => { // Factorials
        const n = pick([3, 4, 5]);
        // 3! = 6, 4! = 24, 5! = 120
        const facts = {3:6, 4:24, 5:120};
        return {
            topic: "Arithmetic",
            q: `Evaluate ${n}! (Factorial).`,
            a: `${facts[n]}`,
            d: [`${n*n}`, `${n+n}`, `${facts[n]*2}`]
        };
    },
    () => { // Solve Inequality
        // 2x > 10
        const m = rInt(2, 5);
        const rhs = m * rInt(3, 8);
        return {
            topic: "Algebra",
            q: `Solve for x: ${m}x > ${rhs}`,
            a: `x > ${rhs/m}`,
            d: [`x < ${rhs/m}`, `x > ${rhs}`, `x = ${rhs/m}`]
        };
    },

    // --- 16. MENSURATION (Solids) ---
    () => { // Sphere Surface Area
        const r = rInt(2, 10);
        // 4 pi r^2
        return {
            topic: "Geometry",
            q: `Surface Area of a sphere radius ${r}m? (Leave as π)`,
            a: `${4*r*r}π m²`,
            d: [`${4/3*r*r*r}π m²`, `${r*r}π m²`, `${2*r}π m²`]
        };
    },
    () => { // Sphere Volume
        // 4/3 pi r^3
        const r = 3; 
        // 4/3 * 27 = 36
        return {
            topic: "Geometry",
            q: `Volume of a sphere radius 3m? (Leave as π)`,
            a: `36π m³`,
            d: [`27π m³`, `108π m³`, `9π m³`]
        };
    },
    () => { // Pyramid Volume
        // 1/3 * base_area * h
        const b = rInt(3, 6); // square base side
        const h = rInt(3, 9);
        const vol = (b*b*h)/3;
        return {
            topic: "Geometry",
            q: `Volume of square pyramid: base side ${b}m, height ${h}m.`,
            a: `${vol.toFixed(1)} m³`,
            d: [`${(b*b*h).toFixed(1)} m³`, `${(b*h).toFixed(1)} m³`, `${(vol*2).toFixed(1)} m³`]
        };
    },

    // --- 17. NAVIGATION & VECTORS ---
    () => { // Reciprocal Heading
        const h = rInt(10, 170);
        return {
            topic: "Arithmetic",
            q: `Calculate reciprocal heading of ${h.toString().padStart(3,'0')}°.`,
            a: `${h+180}°`,
            d: [`${h+90}°`, `${h-10}°`, `${360-h}°`]
        };
    },
    () => { // Reciprocal Heading (>180)
        const h = rInt(190, 350);
        return {
            topic: "Arithmetic",
            q: `Calculate reciprocal heading of ${h}°.`,
            a: `${h-180}°`,
            d: [`${h-90}°`, `${360-h}°`, `${h+10}°`]
        };
    },
    () => { // Ground Speed
        const dist = 120; // nm
        const time = 60; // mins
        // If time changes to 40 mins
        const t2 = pick([30, 40, 45]);
        const gs = (dist / (t2/60)).toFixed(0);
        return {
            topic: "Arithmetic",
            q: `Aircraft travels ${dist}nm in ${t2} minutes. Calculate Ground Speed.`,
            a: `${gs} kts`,
            d: [`${dist*2} kts`, `${gs/2} kts`, `${100} kts`]
        };
    },

    // --- 18. BINARY/HEX LOGIC ---
    () => { // Binary AND
        // 101 & 100 = 100
        // 111 & 010 = 010
        return {
            topic: "Arithmetic",
            q: `Perform bitwise AND: 1101 & 1001`,
            a: `1001`,
            d: [`1101`, `0100`, `1111`]
        };
    },
    () => { // Binary OR
        return {
            topic: "Arithmetic",
            q: `Perform bitwise OR: 1010 | 0101`,
            a: `1111`,
            d: [`0000`, `1010`, `0101`]
        };
    },
    () => { // Octal Addition
        // 7 + 1 = 10 (in octal)
        return {
            topic: "Arithmetic",
            q: `Octal Addition: 7 + 2`,
            a: `11`,
            d: [`9`, `10`, `8`]
        };
    },
    () => { // Hex Subtraction
        // F - A = 5
        return {
            topic: "Arithmetic",
            q: `Hexadecimal Subtraction: F - A`,
            a: `5`,
            d: [`6`, `4`, `E`]
        };
    },

    // --- 19. GAS TURBINE PHYSICS ---
    () => { // Thrust
        const m = rInt(50, 100); // mass flow kg/s
        const vOut = rInt(500, 800); // m/s
        const vIn = rInt(100, 200);
        const thrust = m * (vOut - vIn);
        return {
            topic: "Arithmetic",
            q: `Engine Airflow ${m}kg/s. Exhaust Velocity ${vOut}m/s. Inlet Velocity ${vIn}m/s. Calculate Thrust (F = m(v_out - v_in)).`,
            a: `${thrust} N`,
            d: [`${thrust/10} N`, `${m*vOut} N`, `${thrust*2} N`]
        };
    },
    () => { // Force on Blade
        // Centrifugal Force F = m w^2 r
        // Simplified proportionality
        return {
            topic: "Arithmetic",
            q: `If RPM of a turbine disc doubles, the centrifugal force on the blades increases by factor of?`,
            a: `4`,
            d: [`2`, `8`, `16`]
        };
    },

    // --- 20. MISC MATHS ---
    () => { // Complex Numbers (Add)
        // (3 + 2j) + (1 - 4j)
        const r1 = rInt(1,5), i1 = rInt(1,5);
        const r2 = rInt(1,5), i2 = rInt(1,5);
        const rT = r1+r2;
        const iT = i1-i2;
        const sign = iT >= 0 ? "+" : "";
        return {
            topic: "Algebra",
            q: `Add vectors: (${r1} + j${i1}) + (${r2} - j${i2})`,
            a: `${rT} ${sign}${iT}j`,
            d: [`${rT} + ${i1+i2}j`, `${r1-r2} + j${i1}`, `${rT*2}j`]
        };
    },
    () => { // Statistical Mean
        const s1 = 10, s2 = 20, s3 = 30;
        const x = rInt(1,9); 
        // 10+x, 20+x, 30+x. Mean is 20+x
        return {
            topic: "Arithmetic",
            q: `Calculate mean of: ${10+x}, ${20+x}, ${30+x}.`,
            a: `${20+x}`,
            d: [`${30+x}`, `${10+x}`, `${60+x}`]
        };
    }
];


// ======================================================
// PART 2: PURE MATHS GENERATORS (ALGORITHMIC SKILLS)
// ======================================================
const mathGenerators = [
    () => { // Binary Math
        const a = rInt(6, 15);
        const b = rInt(2, 8);
        const op = Math.random()>0.5 ? '+' : '-';
        const ans = op==='+' ? a+b : a-b;
        return {
            topic: "Arithmetic",
            q: `Binary: ${a.toString(2)} ${op} ${b.toString(2)}`,
            a: ans.toString(2),
            d: [(ans+1).toString(2), (ans-1).toString(2), (ans+2).toString(2)]
        };
    },
    () => { // Hex Conversion
        const val = rInt(10, 255);
        return {
            topic: "Arithmetic",
            q: `Convert Decimal ${val} to Hexadecimal.`,
            a: val.toString(16).toUpperCase(),
            d: [(val-1).toString(16).toUpperCase(), (val+16).toString(16).toUpperCase(), val.toString(8)]
        };
    },
    () => { // Indices Laws
        const x = rInt(2, 9);
        const y = rInt(2, 5);
        return {
            topic: "Algebra",
            q: `Simplify: y${toSuper(x)} ÷ y${toSuper(y)}`,
            a: `y${toSuper(x-y)}`,
            d: [`y${toSuper(x+y)}`, `y${toSuper(x*y)}`, `y${toSuper(1)}`]
        };
    },
    () => { // Sci Notation
        const a = rInt(2, 5);
        const b = rInt(2, 4);
        const p1 = rInt(3, 6);
        const p2 = rInt(-3, -1);
        return {
            topic: "Arithmetic",
            q: `Calculate: (${a}×10${toSuper(p1)}) × (${b}×10${toSuper(p2)})`,
            a: `${a*b}×10${toSuper(p1+p2)}`,
            d: [`${a*b}×10${toSuper(p1-p2)}`, `${a+b}×10${toSuper(p1+p2)}`]
        };
    },
    () => { // Transposition
        const set = [
            {q: "v = u + at", s: "t", a: "(v-u)/a"},
            {q: "P = IV", s: "I", a: "P/V"},
            {q: "A = πr²", s: "r", a: "√(A/π)"},
            {q: "V = IR", s: "R", a: "V/I"}
        ];
        const i = rInt(0, set.length-1);
        return {
            topic: "Algebra",
            q: `Transpose ${set[i].q} for '${set[i].s}'.`,
            a: set[i].a,
            d: ["Invalid", "1/2", "0"] 
        };
    },
    () => { // Quadratics
        const m = rInt(1, 9);
        const n = rInt(1, 5);
        return {
            topic: "Algebra",
            q: `Factorise: x² + ${m+n}x + ${m*n}`,
            a: `(x+${m})(x+${n})`,
            d: [`(x-${m})(x-${n})`, `(x+${m})(x-${n})`, `(x-${m})(x+${n})`]
        };
    },
    () => { // Linear Solve
        const m = rInt(2, 8);
        const c = rInt(1, 10);
        const y = (m*2) + c; // ensure integer answer x=2
        return {
            topic: "Algebra",
            q: `Solve for x: ${m}x + ${c} = ${y}`,
            a: "2",
            d: ["1", "3", "4"]
        };
    },
    () => { // Fractions
        const n1 = 1, d1 = 2;
        const n2 = 1, d2 = [4, 3, 8][rInt(0,2)];
        return {
            topic: "Arithmetic",
            q: `Solve: ${n1}/${d1} + ${n2}/${d2}`,
            a: `${(n1*d2 + n2*d1)}/${d1*d2}`,
            d: [`${n1+n2}/${d1+d2}`, `1`, `1/2`]
        };
    },
    // ======================================================
    // BATCH: IMAGE-BASED GEOMETRY & GRAPHS
    // Requires: images/mod1/ folder
    // ======================================================
    () => { // Pythagoras Visual
        const a = 3, b = 4; // 3-4-5 triangle
        return {
            topic: "Geometry",
            q: `Refer to the image. If Side A is 3m and Side B is 4m, what is the length of Side C?`,
            img: "mod1/triangle_pythag.png", 
            a: `5 m`,
            d: [`7 m`, `12 m`, `25 m`]
        };
    },
    () => { // Trigonometry Visual
        return {
            topic: "Trigonometry",
            q: `Refer to the image. Which ratio represents the Sine of angle θ?`,
            img: "mod1/triangle_pythag.png",
            a: `Side A / Side C (Opposite / Hypotenuse)`,
            d: [`Side B / Side C`, `Side A / Side B`, `Side C / Side A`]
        };
    },
    () => { // Sector Area Formula
        return {
            topic: "Geometry",
            q: `Refer to the image. The formula for the Area of the shaded sector is:`,
            img: "mod1/circle_sector.png",
            a: `(θ / 360) × πr²`,
            d: [`(θ / 180) × πr`, `2πr × θ`, `0.5 × base × height`]
        };
    },
    () => { // Sector Arc Length
        return {
            topic: "Geometry",
            q: `Refer to the image. The length of the curved arc is calculated by:`,
            img: "mod1/circle_sector.png",
            a: `(θ / 360) × 2πr`,
            d: [`(θ / 360) × πr²`, `θ × r`, `2πr`]
        };
    },
    () => { // Linear Graph Equation
        return {
            topic: "Algebra",
            q: `Refer to the graph. What is the equation of the line shown?`,
            img: "mod1/graph_linear.png",
            a: `y = x + 2`,
            d: [`y = x - 2`, `y = 2x`, `y = -x + 2`]
        };
    },
    () => { // Linear Graph Intercept
        return {
            topic: "Algebra",
            q: `Refer to the graph. The Y-intercept (c) is:`,
            img: "mod1/graph_linear.png",
            a: `+2`,
            d: [`-2`, `0`, `+1`]
        };
    },
    () => { // Nomogram Usage
        return {
            topic: "Arithmetic",
            q: `Refer to the Nomogram. A line drawn connecting Scale A and Scale B will intersect Scale C to provide:`,
            img: "mod1/nomogram_fuel.png",
            a: `The Resultant (Product or Sum)`,
            d: [`The Average`, `The Difference`, `The Error`]
        };
    },
    () => { // Vernier Reading
        // Assuming the image shows 1.4 main scale, and 5th line alignment
        return {
            topic: "Arithmetic",
            q: `Refer to the Vernier scale image. What is the reading shown?`,
            img: "mod1/vernier_scale.png",
            a: `1.45 mm`,
            d: [`1.05 mm`, `1.54 mm`, `2.45 mm`]
        };
    },
    () => { // Vernier Precision
        return {
            topic: "Arithmetic",
            q: `Refer to the Vernier scale. The precision of this instrument is determined by:`,
            img: "mod1/vernier_scale.png",
            a: `The number of divisions on the sliding Vernier scale`,
            d: [`The length of the main scale`, `The thickness of the jaws`, `The temperature`]
        };
    }
];

// ======================================================
// PART 3: MODULE REGISTRATION
// ======================================================
// 1. Create a combined array of all generator functions
const allMathsGenerators = [...wordGenerators, ...mathGenerators];

registerModule(
    "Module 1: Maths",
    32, 
    function(count) {
        // 2. Shuffle the ARRAY, not the number
        const shuffledGens = shuffle([...allMathsGenerators]);
        const selectedGens = shuffledGens.slice(0, count);
        return selectedGens.map(gen => {
            const data = gen();
            return {
                topic: data.topic,
                question: data.q,
                img: data.img, // <--- Image support enabled
                options: shuffle([...data.d, data.a]),
                correct: data.a
            };
        });
    },
    // 3. Use the length of the array for the label
    `${allMathsGenerators.length} Scenarios (CASA B-01)`
);