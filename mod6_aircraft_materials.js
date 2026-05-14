const aircraftMaterialGenerators = [
        // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Logic Circuits",
            question: "In the process of hardening carbon steel, which quenching medium would provide the slowest cooling rate to the alloy?",
            options: ["Water with a high salt content (brine).", "Pure distilled water at room temperature.", "Compressed air forced over the surface."],
            correct: "Industrial oil specifically selected for quenching."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "During the normalizing of welded aircraft parts, how does the cooling process differ from the annealing process?",
            options: ["Normalizing requires the part to be packed in hot sand to slow the cooling.", "Normalizing involves rapid quenching in a brine solution to set the grains.", "Normalizing requires the furnace to be turned off and cooled with the part."],
            correct: "Normalizing allows the part to be removed from the oven and cooled in still air."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the primary consequence of failing to remove the alloying elements from an oven and quenching them immediately during the heat treatment of steel?",
            options: ["The steel becomes excessively soft and loses its response to any future tempering processes.", "The carbon content increases to above  $2\%$  making the material behave more like cast iron.", "The internal stresses are eliminated entirely resulting in a metal with no tensile strength."],
            correct: "The particles of carbon precipitate out and form larger grains which can lead to reduced strength."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which heat treatment process is specifically intended to relieve internal stresses and reduce brittleness in steel after it has been hardened?",
            options: ["Normalising the part in still air.", "Case hardening with low-alloy steel.", "Annealing the part in a bed of hot ash."],
            correct: "Tempering the alloy at a specific temperature."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Why is high-carbon steel generally considered unsuitable for the case-hardening process used in aircraft gears?",
            options: ["The core material remains too soft to support the high-carbon surface case.", "The carbon content prevents the formation of any durable surface zone.", "The high carbon content causes the steel to warp during the tempering stage."],
            correct: "The hardness penetrates to the core of the part causing excessive brittleness."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "When interpreting the SAE steel numbering system for an alloy designated as '2320', what does the second digit (3) represent?",
            options: ["The hundredths of a percent of carbon contained within the specific alloy.", "The principal alloying element which in this case is identified as Nickel.", "The hardening depth in thousandths of an inch achieved during heat treatment."],
            correct: "The approximate percentage of the principal alloying element in the steel."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "Which alloying agent is specifically added to steel to eliminate the brittle effects caused by leftover sulphur impurities from the refining process?",
            options: ["Silicon to act as a hardener.", "Nickel to produce a finer grain.", "Phosphorous to raise yield strength."],
            correct: "Manganese to form manganese sulphide."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "What characteristic is added to steel by the inclusion of Tungsten, making it suitable for magneto breaker contacts?",
            options: ["It provides non-magnetic properties with extreme anti-wear characteristics.", "It reduces the grain size and increases the elastic limit of the material.", "It improves the atmospheric corrosion resistance in low-carbon steels."],
            correct: "It maintains hardness at elevated temperatures and has a high melting point."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "What is the primary relationship between carbon content and the properties of steel as shown in standard metallurgy graphs?",
            options: ["Higher carbon content increases ductility but reduces the tensile strength.", "Lower carbon content increases hardness but reduces the overall weldability.", "Higher carbon content increases malleability while reducing the tensile strength."],
            correct: "Higher carbon content increases tensile strength but reduces the malleability."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "Why is cast iron, which contains more than  $2\%$  carbon, generally excluded from structural airframe applications?",
            options: ["It has an extremely high strength-to-weight ratio that is difficult to machine.", "It combines too readily with oxygen and cannot be protected against rust.", "It is too soft and malleable to withstand the loading forces of a fuselage."],
            correct: "It has a low strength-to-weight ratio and exhibits high brittleness."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "In the stress versus strain curve for structural steel, how is the 'Yield Strength' specifically defined?",
            options: ["The maximum stress the material can withstand before a complete rupture occurs.", "The point where the material begins 'necking' just before the coordinate of failure.", "The stress coordinate at the exact point of rupture on the stress-strain curve."],
            correct: "The stress at which the material strain changes from elastic to plastic deformation."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What specific property of a metal is being tested when it is subjected to repeated loading to determine its endurance limit?",
            options: ["Impact Strength.", "Torsional Strength.", "Ultimate Strength."],
            correct: "Fatigue Strength."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "Which physical property identifies a metal's ability to be drawn into wire stock or rods without failure?",
            options: ["Malleability.", "Elasticity.", "Fusibility."],
            correct: "Ductility."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What is the relationship between hardness and malleability in most aircraft metallic materials?",
            options: ["They are directly proportional; as a metal is hardened its malleability increases.", "Hardness defines the ability to be hammered into sheets while malleability resists it.", "There is no relationship as malleability is only a property of non-ferrous metals."],
            correct: "They are generally considered opposite properties in manufacturing and construction."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "Which alloy steel contains Chromium and Nickel and is commonly used for high-temperature applications like firewalls?",
            options: ["Chrome-Molybdenum Steel.", "Silicon-Manganese Steel.", "Manganese Steel (Mangalloy)."],
            correct: "Stainless Steel."
            };
        },
            () => {
        return {
            topic: "Aluminium Alloys",
            question: "According to the wrought aluminium alloy designation system, what is indicated by the first digit in the 1xxx series?",
            options: ["The principal alloying element is copper.", "The alloy has been specifically strain-hardened.", "The modification to original impurity limits."],
            correct: "The minimum aluminium content is 99%."
            };
        },
            () => {
        return {
            topic: "Aluminium Alloys",
            question: "What identifies an alloy designated as 1130 in the wrought aluminium numbering system?",
            options: ["99.30% aluminium with copper as the main alloy.", "99.00% aluminium with 30% manganese.", "99.30% aluminium without special impurity control."],
            correct: "99.30% aluminium with special control of one or more impurities."
            };
        },
            () => {
        return {
            topic: "Aluminium Alloys",
            question: "What specific drawback is associated with the 2xxx series aluminium-copper alloys used in aircraft skins?",
            options: ["High susceptibility to stress corrosion cracking in still air.", "Low strength-to-weight ratio compared to pure aluminium.", "Difficulty in mechanical working due to high melting points."],
            correct: "Susceptibility to intergranular corrosion if improperly heat-treated."
            };
        },
            () => {
        return {
            topic: "Aluminium Alloys",
            question: "What defines 'Alclad' material used in external aircraft surfaces?",
            options: ["A zinc-based coating applied to improve paint adhesion.", "A heat-treatable surface layer of magnesium-silicon alloy.", "A layer of chrome-molybdenum rolled onto the core material."],
            correct: "A pure aluminium coating rolled onto heat-treated alloy sheets."
            };
        },
            () => {
        return {
            topic: "Aluminium Alloys",
            question: "Under the aluminium alloy temper designation system, what does the 'T6' condition represent?",
            options: ["Annealed condition with lowest strength.", "Solution heat-treated and naturally aged at room temperature.", "Solution heat-treated followed by 6% cold-rolling."],
            correct: "Solution heat-treated followed by artificial ageing."
            };
        },
            () => {
        return {
            topic: "Aluminium Alloys",
            question: "In the 7xxx series aluminium alloys, which element is added to provide maximum strength for parts like floor beams and wing ribs?",
            options: ["Silicon", "Manganese", "Iron"],
            correct: "Zinc"
            };
        },
            () => {
        return {
            topic: "Heat Treatment",
            question: "During solution heat treatment of aluminium, what is the consequence of exceeding the specified 10-second quench delay?",
            options: ["The metal will become too soft to be straightened.", "The core material will migrate into the Alclad surface.", "The alloying elements will remain in solid solution permanently."],
            correct: "Large grains of alloy precipitate, leading to intergranular corrosion."
            };
        },
            () => {
        return {
            topic: "Heat Treatment",
            question: "What is the primary objective of 'precipitation heat treatment' when applied to aluminium alloys?",
            options: ["To soften the metal and decrease internal stresses.", "To allow the core material to mix with the surface cladding.", "To prevent the metal from warping during subsequent forming."],
            correct: "To complete the aging process and reach the desired temper."
            };
        },
            () => {
        return {
            topic: "Heat Treatment",
            question: "What limitation exists regarding the reheat treatment of Alclad material?",
            options: ["It cannot be reheat-treated after natural aging has begun.", "It must be kept on dry ice for at least 24 hours between cycles.", "It can be reheat-treated an unlimited number of times."],
            correct: "It is generally limited to no more than three heat treatments."
            };
        },
            () => {
        return {
            topic: "Non-Ferrous Properties",
            question: "Which series of aluminium alloys is specifically noted for being generally non-heat-treatable and utilizing manganese as the principal element?",
            options: ["5xxx series", "2xxx series", "6xxx series"],
            correct: "3xxx series"
            };
        },
            () => {
        return {
            topic: "Non-Ferrous Properties",
            question: "Which non-ferrous metal is approximately two-thirds the weight of aluminium but carries a risk of intense fire if water is used as an extinguisher?",
            options: ["Titanium", "Monel", "Inconel"],
            correct: "Magnesium"
            };
        },
            () => {
        return {
            topic: "Non-Ferrous Properties",
            question: "Titanium is widely used in modern jet transport structural areas because of its:",
            options: ["Ability to absorb nitrogen at high temperatures to increase hardness.", "Low cost of extraction using chlorine gas.", "Lack of an oxide film when exposed to salt water."],
            correct: "High strength-to-weight ratio and salt-water corrosion resistance."
            };
        },
            () => {
        return {
            topic: "Non-Ferrous Properties",
            question: "Monel is a non-ferrous alloy consisting primarily of which elements?",
            options: ["Copper and Zinc.", "Aluminium and Magnesium.", "Titanium and Chromium."],
            correct: "Nickel and Copper."
            };
        },
            () => {
        return {
            topic: "Nickel Alloys",
            question: "Inconel is preferred over stainless steel in turbine engine nozzle supports primarily because it:",
            options: ["Is significantly lighter than titanium alloys.", "Can be differentiated from steel without chemical tests.", "Is the only non-ferrous metal that can be welded."],
            correct: "Maintains strength and corrosion resistance at extreme temperatures."
            };
        },
            () => {
        return {
            topic: "Copper Alloys",
            question: "Why is Beryllium copper identified as a hazardous material in Safety Data Sheets (SDS)?",
            options: ["It produces a blue-green toxic powder when it tarnishes.", "It has extremely high thermal conductivity that causes burns.", "It is highly anodic and causes rapid galvanic corrosion."],
            correct: "Grinding, dust, or fumes produce airborne contaminants."
            };
        },
            () => {
        return {
            topic: "Resin Matrix Systems",
            question: "Why is it critical to never mix resin accelerators directly with catalysts during the preparation of a matrix?",
            options: ["The resulting mixture will become too thick to saturate the reinforcing fibres.", "Direct mixing causes the shelf life of the base resin to be reduced to zero days.", "The accelerator will neutralize the catalyst, preventing the resin from ever curing."],
            correct: "They will violently react with each other and catch on fire or explode."
            };
        },
            () => {
        return {
            topic: "Resin Matrix Systems",
            question: "In epoxy resin systems, what logic governs the relationship between the hardener and the pot life?",
            options: ["The pot life can be significantly increased by reducing the amount of hardener.", "The pot life is only determined by the thickness of the laminate, not the hardener.", "The hardener acts as a catalyst and its proportion determines the final density."],
            correct: "The pot life for epoxy resin cannot be changed by reducing the amount of hardener."
            };
        },
            () => {
        return {
            topic: "Resin Matrix Systems",
            question: "What determines the cure rate of a polyester resin once it has been applied to a laminate?",
            options: ["Only the amount of flox or microballoons that have been added to the mixture.", "The thickness of the fibres, as aramid fibres cure faster than carbon fibres.", "The amount of UV light the part is exposed to during the first ten minutes."],
            correct: "The chemical reaction, the ambient temperature, and the thickness of the layer."
            };
        },
            () => {
        return {
            topic: "Resin Matrix Systems",
            question: "A technician is mixing polyester resin on a hot day. How should the mix be adjusted to ensure a proper pot life?",
            options: ["Increase the proportion of hardener to speed up the molecular cross-linking.", "Use a larger volume of resin to ensure the heat is dissipated more slowly.", "Add more accelerator directly to the catalyst before mixing with the base resin."],
            correct: "Use less catalyst than usual to prolong the cure time and avoid rapid gelling."
            };
        },
            () => {
        return {
            topic: "Resin Matrix Systems",
            question: "What is the operational difference between thermoplastic and thermosetting resins used in aircraft construction?",
            options: ["Thermosetting resins can be reheated and reshaped multiple times if a defect is found.", "Thermoplastic resins are cured by a catalyst and cannot be converted back to liquids.", "Thermosetting resins are only used for transparent windshields like Plexiglas."],
            correct: "Thermoplastic resins can be reheated and reshaped, while thermosets cannot."
            };
        },
            () => {
        return {
            topic: "Working with Resins",
            question: "What is the primary technical advantage of using pre-impregnated (pre-preg) materials over hand lay-up techniques?",
            options: ["Pre-preg materials can be stored at room temperature for several years without curing.", "Pre-preg materials are significantly less expensive than raw fabric and liquid resins.", "Pre-preg materials eliminate the need for refrigeration and vacuum bagging systems."],
            correct: "The fibres are already encapsulated with the proper amount and weight of matrix."
            };
        },
            () => {
        return {
            topic: "Working with Resins",
            question: "A pre-preg material has been left out of the freezer at room temperature for several hours. What is the most likely consequence?",
            options: ["The resin will become too thin and drain out of the fibres by gravity.", "The material will absorb too much atmospheric moisture and become anodic.", "The shelf life will be extended as the maturing time is allowed to start early."],
            correct: "The resins and catalysts will start their chemical reaction and begin to cure."
            };
        },
            () => {
        return {
            topic: "Working with Resins",
            question: "What is the primary danger associated with disposing of rags soaked in polyester resin accelerators and catalysts?",
            options: ["The chemicals will leach out and dissolve the plastic of the general waste bins.", "The fumes produced are highly corrosive to any nearby 2024 aluminium alloys.", "The resins will never harden if they are contaminated by common organic waste."],
            correct: "The rags could spontaneously combust if they are not disposed of correctly."
            };
        },
            () => {
        return {
            topic: "Working with Resins",
            question: "Which term describes the period of time required for a composite moulding to achieve its maximum chemical resistance and stability?",
            options: ["Hardening Time, which is when the resin first sets into a solid form.", "Pot Life, which is the time span that the product remains useful in the bottle.", "Shelf Life, which is the time span before the resin reaches its expiration date."],
            correct: "Maturing Time, which follows the initial hardening of the composite moulding."
            };
        },
            () => {
        return {
            topic: "Reinforcing Fibres",
            question: "A technician is bonding carbon fibre components to aluminium structures. What is the most critical risk associated with this interface?",
            options: ["The carbon fibre will absorb the aluminium and become excessively brittle.", "The aluminium acts as a cathode and will rapidly dissolve the carbon fibre.", "The carbon fibre is anodic and will be eaten away by the aluminium frame."],
            correct: "The carbon fibre is cathodic and will promote galvanic corrosion of the aluminium."
            };
        },
            () => {
        return {
            topic: "Reinforcing Fibres",
            question: "When comparing Kevlar $^{\textregistered}$  to alloyed aluminium, which mechanical property is approximately 4 times greater?",
            options: ["The compressive strength of the Kevlar $^{\textregistered}$  composite material.", "The density and overall weight of the Kevlar $^{\textregistered}$  composite material.", "The electrical conductivity and galvanic potential of the material."],
            correct: "The tensile strength of the Kevlar $^{\textregistered}$  composite material."
            };
        },
            () => {
        return {
            topic: "Reinforcing Fibres",
            question: "In which scenario would ceramic fibres be the most logical choice for an aircraft component?",
            options: ["Primary wing skins where a high strength-to-weight ratio is the only priority.", "Control surfaces that require extreme flexibility and vibration damping.", "Interior furnishings where low cost and ease of fabrication are paramount."],
            correct: "Firewalls and engine guide vanes where temperatures reach up to 1200 deg C."
            };
        },
            () => {
        return {
            topic: "Composite Elements",
            question: "In an advanced composite structure, what is the primary functional logic behind the matrix component?",
            options: ["The matrix acts as the primary source of tensile strength within the laminate structure.", "The matrix serves as a protective outer skin to prevent moisture ingress to the core.", "The matrix provides the aerodynamic shape while the fibres provide only the weight."],
            correct: "The matrix serves as the bonding substance that transfers stress to the reinforcing fibres."
            };
        },
            () => {
        return {
            topic: "Fabric Orientation",
            question: "During a composite repair, a technician must identify the direction that provides the maximum strength. Which term refers to this direction?",
            options: ["The bias direction, which is designated as 45 deg to the roll of the fabric.", "The weft direction, which consists of the threads running at 90 deg to the roll.", "The selvage edge, which is the tightly woven edge parallel to the fill threads."],
            correct: "The warp direction, which is designated as 0 deg and has more woven threads."
            };
        },
            () => {
        return {
            topic: "Composite Fillers",
            question: "When repairing a hole in a structural composite component, why might 'flox' be added to the epoxy resin instead of 'microballoons'?",
            options: ["Flox reduces the density of the resin more effectively than glass microballoons.", "Microballoons react chemically with the resin to create a superior molecular bond.", "Flox is used to decrease the viscosity and make the resin easier to pour into holes."],
            correct: "Flox provides added strength to the repair while microballoons do not add strength."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "When performing a Brinell hardness test on a metallic sample, which specific measurement is taken to determine the final Brinell number?",
            options: ["The depth to which a diamond-tipped penetrator sinks into the material surface.", "The amount of hydraulic pressure required to cause surface fracture.", "The time taken for the hydraulic hand pump to reach maximum test pressure."],
            correct: "The diameter of the impression made by a spherical penetrator using a calibrated microscope."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "What is the primary operational difference between the Rockwell hardness tester and the Brinell hardness tester?",
            options: ["The Rockwell tester measures the diameter of the impression while the Brinell measures depth.", "The Rockwell tester uses a red scale for non-ferrous metals and a black scale for ferrous metals.", "The Brinell tester uses a diamond tip while the Rockwell uses a hardened steel ball exclusively."],
            correct: "The Rockwell tester measures the depth of penetration rather than the diameter of the impression."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "How is the tensile strength of a ferrous metal sample typically verified during inspection?",
            options: ["By measuring the depth a penetrator sinks into the metal under a 150 kgf load.", "By rotating a test piece until it fractures under a cantilevered bending load.", "By striking a notched bar with a pendulum and measuring the energy absorbed."],
            correct: "By applying a longitudinal load to a sample and plotting it against the resulting elongation."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "In fatigue strength testing, what specific parameter is used to classify the 'fatigue life' of a component?",
            options: ["The total weight of the overhung load required to cause an immediate fracture.", "The maximum temperature the metal reaches before structural failure occurs.", "The depth of the grain boundary separation measured after 1000 revolutions."],
            correct: "The number of tension and compression cycles completed before structural failure occurs."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "What is the primary purpose of subjecting a complete airframe to fatigue testing in a laboratory environment?",
            options: ["To determine the maximum ultimate strength of the primary wing spar in tension.", "To calibrate the hardness scales for the specific aluminium alloys used in construction.", "To measure the impact resistance of the fuselage skin against foreign object debris."],
            correct: "To provide data to identify the likelihood and causes of premature damage on structural components."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "When using a pendulum-type impact tester, what is the fundamental difference between the Izod and Charpy techniques?",
            options: ["The Izod test uses a V-notch specimen while the Charpy test uses a smooth bar.", "The Charpy test uses a hydraulic pump while the Izod test is strictly mechanical.", "The Izod test measures tensile strength while the Charpy test measures impact resistance."],
            correct: "They utilize different beam configurations, such as cantilevered versus a three-point beam."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "During a Charpy V-notch impact test, how is the energy absorbed by the test specimen calculated?",
            options: ["By calculating the difference between the minor load and the major load on the scale.", "By measuring the diameter of the fracture zone using a calibrated microscope.", "By timing the speed of the pendulum as it passes the zero reference point."],
            correct: "By calculating the difference between the initial and final heights of the swinging pendulum."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "Which tests are standardly required for a non-ferrous component after it has undergone heat treatment in the workplace?",
            options: ["Fatigue strength and Charpy V-notch impact tests.", "Tensile strength and longitudinal elongation tests.", "Izod impact testing and three-point beam configuration analysis."],
            correct: "Hardness and conductivity tests."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "Why must the selection of the penetrator and major load be considered critical when using a Rockwell hardness tester?",
            options: ["The diameter of the impression must be precisely matched to the calibrated chart.", "An incorrect load will cause the hydraulic hand pump to exceed the pressure gauge limit.", "The diamond tip must only be used on non-ferrous metals to avoid surface contamination."],
            correct: "The tester indicates depth in specific Rockwell numbers based on various scales like A, B, or C."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "What does a Rockwell hardness tester require before the 'major load' is applied and the final reading is taken?",
            options: ["The diameter of the specimen must be measured with a microscope.", "The material must be heated to its specific annealing temperature.", "A V-notch must be machined into the test piece to provide a strike point."],
            correct: "A minor load must be applied and the machine must be zeroed."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "Which property is essentially being measured when a metal is described as having 'toughness' in the context of impact testing?",
            options: ["Its ability to resist longitudinal elongation before reaching the yield point.", "Its ability to resist surface penetration by a 1/16 inch hardened steel ball.", "Its tendency to return to its original shape after a deforming force is removed."],
            correct: "Its ability to resist shock and fracture when subjected to a single heavy blow."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "When using a Wohler Cantilever machine for fatigue testing, what is the action of the load on the test piece?",
            options: ["It applies a constant longitudinal tension until rupture is reached.", "It applies an impact blow from a weighted pendulum hammer released from a height.", "It applies hydraulic pressure through a spherical penetrator to check for grain growth."],
            correct: "It stresses the rotating piece in tension and compression once every revolution."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "If a technician is testing a heat-treated component, what must the 'test piece' consist of to ensure accurate results?",
            options: ["A standardized block of mild steel provided by the testing machine manufacturer.", "A piece of any available alloy as long as it has been polished to a high luster.", "A specimen that is exactly twice the thickness of the actual aircraft component."],
            correct: "The same material and thickness as the component that was heat-treated with it."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "How does the Brinell hardness tester apply its force to the penetrator?",
            options: ["Through a weighted pendulum released from a fixed starting position.", "Through an electric motor rotating the sample at high speed.", "Through an interference fit collar being swaged into a locked position."],
            correct: "Through a hydraulic actuating unit operated by a hand pump."
            };
        },
            () => {
        return {
            topic: "Metallic Material Testing",
            question: "What specific feature characterizes the test specimen used in the Charpy V-Notch technique?",
            options: ["A bar with a circular cross section gripped in a Wohler cantilever.", "A smooth sheet of metal stretched until the necking region is reached.", "A tapered tube that has been pre-set using a special tool."],
            correct: "A bar of square cross section with a V-shaped notch."
            };
        },
            () => {
        return {
            topic: "Composite Inspection and Maintenance",
            question: "When performing a visual inspection on a composite structure, what is the specific purpose of using a small microscope on a cracked surface?",
            options: ["To determine the depth of a resin-rich pocket within the laminate plies.", "To identify the presence of entrapped moisture between the face sheet and the core.", "To measure the exact degree of resin starvation on the edge delamination."],
            correct: "To determine if the fibres are broken or if the crack is restricted to the resin matrix only."
            };
        },
            () => {
        return {
            topic: "Composite Inspection and Maintenance",
            question: "Which NDT method is most appropriate for specifically detecting internal water ingress within the individual cells of a honeycomb core sandwich structure?",
            options: ["Ultrasonic through-transmission testing.", "Tap testing using a calibrated hammer.", "Visible light inspection with a magnifying glass."],
            correct: "Radiographic (X-ray) inspection."
            };
        },
            () => {
        return {
            topic: "Composite Inspection and Maintenance",
            question: "A 'kissing bond' is a type of defect particularly difficult to detect with NDT because it is:",
            options: ["An edge delamination that has been filled with moisture ingress.", "A resin-rich area that mimics the density of the surrounding laminate.", "A fracture in the honeycomb core that has not yet reached the face sheet."],
            correct: "A disbond where the surfaces are in close contact but lack structural adhesion."
            };
        },
            () => {
        return {
            topic: "Composite Inspection and Maintenance",
            question: "Which NDT method uses an infrared camera to measure temperature gradients on a surface to identify moisture ingress after a flight?",
            options: ["Radiographic inspection.", "Pulse-echo ultrasonic testing.", "Through-transmission ultrasonic testing."],
            correct: "Thermography."
            };
        },
            () => {
        return {
            topic: "Composite Defects and Damage",
            question: "How does 'disbonding' fundamentally differ from 'delamination' in a composite sandwich structure?",
            options: ["Disbonding involves separation between plies, while delamination occurs between different materials.", "Delamination is caused by lightning strikes, while disbonding is exclusively caused by impact.", "Disbonding is always visible on the outer skin, whereas delamination is hidden underneath."],
            correct: "Disbonding is separation from an adhesively bonded material, while delamination is separation between fabric plies."
            };
        },
            () => {
        return {
            topic: "Composite Defects and Damage",
            question: "What is the primary risk associated with performing a high-temperature repair on a composite structure that has not undergone moisture evacuation?",
            options: ["The resin will lose its chemical compatibility with the reinforcement fibres.", "The high heat will cause the core material to increase its density and weight.", "The curing agent will fail to activate, leading to a permanent 'kissing bond'."],
            correct: "Trapped water will turn to steam and cause further disbonding of the face sheets."
            };
        },
            () => {
        return {
            topic: "Composite Defects and Damage",
            question: "Which type of damage classification allows for a simple repair with no resulting restrictions on flight operations?",
            options: ["Repairable damage.", "Cosmetic surface defect.", "Non-repairable damage."],
            correct: "Negligible damage."
            };
        },
            () => {
        return {
            topic: "Composite Defects and Damage",
            question: "What specific indicator might suggest water ingress in a structure following cold-soaking at altitude?",
            options: ["The appearance of white powdery clumps on the surface.", "A change in the natural lay line of the underlying fabric plies.", "Resin matrix breakout at the edge of the manufactured head."],
            correct: "Areas of condensation remaining on the structure after it has warmed up."
            };
        },
            () => {
        return {
            topic: "Composite Defects and Damage",
            question: "According to the source, why are thin face sheets on sandwich panels particularly critical during ground handling?",
            options: ["They are susceptible to galvanic corrosion from concrete floors.", "They are prone to resin matrix breakout from UV ray exposure.", "They are vulnerable to intergranular cracks from thermal expansion."],
            correct: "They are very susceptible to impact damage from careless handling."
            };
        },
            () => {
        return {
            topic: "Composite Repair Procedures",
            question: "Why are resin injection repairs generally restricted to non-structural composite components?",
            options: ["Because the high pressure of the syringe creates new cracks in the reinforcement fibres.", "Because the resin used for injection has a higher density than the original matrix.", "Because injected resins require a shelf life that is shorter than standard laminating resins."],
            correct: "Because the injected resin does not restore original strength and may expand the delamination."
            };
        },
            () => {
        return {
            topic: "Composite Repair Procedures",
            question: "What is the most desirable method for performing a permanent structural repair to a damaged composite laminate?",
            options: ["Injecting a potting compound mixture into the void and clamping.", "Applying a bolted metal patch with a one-inch overlap on the surface.", "Bonding a cured composite patch directly over the surface of the damage."],
            correct: "Removing the damaged layers and laminating new repair plies into the area."
            };
        },
            () => {
        return {
            topic: "Composite Repair Procedures",
            question: "In a potted repair of a honeycomb core, what is the specified maximum diameter limit for the damage to be considered viable for this procedure?",
            options: ["Up to 0.5 inches.", "Exactly 13 mm.", "Up to 2 inches."],
            correct: "Up to 1 inch."
            };
        },
            () => {
        return {
            topic: "Composite Repair Procedures",
            question: "If a balsa wood plug is used to repair a honeycomb core, how must the wood be oriented relative to the skin?",
            options: ["With the grain running parallel to the manufactured head of the plies.", "With the grain running at a 45(deg) bias to the warp direction.", "With the grain aligned horizontally with the core ribbon direction."],
            correct: "With the grain running perpendicular to the skin surface."
            };
        },
            () => {
        return {
            topic: "Composite Repair Procedures",
            question: "What is the primary aerodynamic drawback of using bolted or bonded metal patches for composite repair?",
            options: ["They increase the thickness of the resin matrix unnecessarily.", "They react with the carbon fibres to cause accelerated pitting.", "They require the use of synthetic 'O' ring seals which increase drag."],
            correct: "They are attached to the surface and cause undesirable aerodynamic changes."
            };
        },
            () => {
        return {
            topic: "Composite Repair Procedures",
            question: "When repairing a thick laminate structure, why is a modified step-cut (meeting in the middle) often preferred over a single-sided step-cut?",
            options: ["It prevents the core material from expanding during the curing process.", "It ensures the replacement fibres are oriented precisely at 0(deg).", "It allows the use of two-part sealants instead of film adhesives."],
            correct: "It significantly reduces the required size (diameter) of the repair patch."
            };
        },
            () => {
        return {
            topic: "Corrosion Mechanisms",
            question: "Which condition is required for the initiation of electrochemical (galvanic) corrosion in aircraft structures?",
            options: ["A non-conductive medium must separate the anodic and cathodic materials.", "The two dissimilar metals must be placed in a perfectly dry vacuum environment.", "The metal being eaten away must be more cathodic than the surrounding material."],
            correct: "A continuous conductive liquid must be in electrical contact with both metals."
            };
        },
            () => {
        return {
            topic: "Corrosion Mechanisms",
            question: "What is the primary reason why maintaining surface cleanliness with dirt and grease removal is critical for corrosion control?",
            options: ["Dirt acts as a cathode in the presence of most common aluminium alloys.", "Grease reacts with aluminium to form corrosive alkaline solution residues.", "Clean surfaces increase the electrode potential difference between alloys."],
            correct: "Accumulated dirt and grease hold moisture in direct contact with the metal."
            };
        },
            () => {
        return {
            topic: "Corrosion Mechanisms",
            question: "Direct chemical attack on aircraft aluminium can be severely accelerated by which of the following scenarios?",
            options: ["Allowing the aluminium to remain in a dry, low-temperature hangar environment.", "Applying Alodine as a protective coating during surface treatment procedures.", "Mixing different alloys of aluminium in a single structural assembly."],
            correct: "Leaving aluminium structure on a concrete floor where water leaches out lime."
            };
        },
            () => {
        return {
            topic: "Corrosion Mechanisms",
            question: "What occurs when the anode in a galvanic couple is significantly smaller than the cathode?",
            options: ["The corrosion rate of the anode is significantly reduced due to ion saturation.", "The cathode begins to give up electrons and becomes the anodic material.", "The electrolyte becomes non-conductive and stops the electrochemical action."],
            correct: "The anode will give up electrons more easily and corrode more rapidly."
            };
        },
            () => {
        return {
            topic: "Specific Corrosion Types",
            question: "How does filiform corrosion typically propagate differently from standard surface corrosion?",
            options: ["It occurs primarily in areas with an overabundance of concentrated oxygen.", "It creates white puffy mounds that lift the entire paint system simultaneously.", "It converts the metal into salts through a slow, non-electrochemical dry reaction."],
            correct: "It forms under organic coatings in areas where there is a deficiency of oxygen."
            };
        },
            () => {
        return {
            topic: "Specific Corrosion Types",
            question: "Which type of corrosion is specifically characterized by a 'smoking' appearance around aircraft skin fasteners?",
            options: ["Galvanic corrosion caused by steel fasteners in 2024 aluminium alloy.", "Intergranular corrosion caused by delayed quenching during heat treatment.", "Exfoliation corrosion resulting from the delamination of extruded channels."],
            correct: "Fretting corrosion caused by relative motion between two tightly fitted surfaces."
            };
        },
            () => {
        return {
            topic: "Specific Corrosion Types",
            question: "What is the defining characteristic of exfoliation corrosion in aircraft components?",
            options: ["It is a form of surface pitting that affects only the Alclad pure aluminium layer.", "It is caused by direct chemical attack from phosphate ester hydraulic fluids.", "It is an oxygen cell reaction that creates thread-like filaments under the primer."],
            correct: "It is an extreme case of intergranular corrosion that causes material to delaminate."
            };
        },
            () => {
        return {
            topic: "Specific Corrosion Types",
            question: "Pitting corrosion is most often detected by which visual indication on the metal surface?",
            options: ["A dulling of the surface caused by microscopic conversion to salts.", "A thread-like filamentary growth propagating from a single scratch.", "Dark deposits that appear to be 'streaming' behind a rivet head."],
            correct: "The appearance of clumps of white powder (salts) on the surface."
            };
        },
            () => {
        return {
            topic: "Material Susceptibility",
            question: "In the event of a mercury spill on an aluminium airframe, why is the damage considered catastrophic and immediate?",
            options: ["Mercury acts as a powerful electrolyte that increases galvanic current flow.", "Mercury reacts with atmospheric nitrogen to dissolve the protective Alclad layer.", "The spill creates a uniform surface corrosion that thins the metal rapidly."],
            correct: "Mercury attacks along the grain boundaries through a process called amalgamation."
            };
        },
            () => {
        return {
            topic: "Material Susceptibility",
            question: "Why is it necessary to avoid using titanium tools or hardware in direct contact with other corroding metals?",
            options: ["Titanium is the most anodic metal and will be eaten away first.", "Titanium cannot form a protective oxide film when in contact with air.", "Titanium reacts with battery fumes to create highly acidic surface runoff."],
            correct: "Titanium is cathodic and can greatly accelerate the corrosion of the coupled metal."
            };
        },
            () => {
        return {
            topic: "Material Susceptibility",
            question: "In avionics systems, why is gold plating applied over silver or copper despite the risk of accelerated corrosion at pinholes?",
            options: ["Gold is highly anodic and protects the underlying silver by galvanic action.", "Gold plating prevents the growth of 'whiskers' common in silver components.", "The gold layer increases the tensile strength of the microminiature circuits."],
            correct: "It provides the best combination of corrosion resistance and solderability."
            };
        },
            () => {
        return {
            topic: "Material Susceptibility",
            question: "Which of the following is true regarding the corrosion of cadmium plating on high-strength steel parts?",
            options: ["Mottling and cracks in the cadmium indicate the part has lost all protection.", "Cadmium is cathodic to steel and must be perfectly sealed to prevent attack.", "The presence of black mottling means the steel core is currently failing."],
            correct: "Cadmium is anodic to steel and protects it even when mottling or cracks appear."
            };
        },
            () => {
        return {
            topic: "Material Susceptibility",
            question: "Why is copper corrosion (patina) generally considered less dangerous than aluminium corrosion?",
            options: ["Copper salts are electrically conductive and do not affect circuit performance.", "Copper is the most anodic metal and therefore protects all other system parts.", "Copper corrosion converts the entire thickness of the metal into stable salts."],
            correct: "The airtight copper oxide crust offers protection for the underlying metal."
            };
        },
            () => {
        return {
            topic: "Microbiological Corrosion",
            question: "What is the primary mechanism by which microbes cause corrosion in aircraft integral fuel tanks?",
            options: ["The microbes consume the aluminium alloy as a primary food source.", "They secrete hydrocarbon fluids that dissolve the internal sealant beads.", "The fungus growth increases the fuel temperature beyond safe operating limits."],
            correct: "Microbial scum holds water against the structure to form concentration cells."
            };
        },
            () => {
        return {
            topic: "Heat Treatment Effects",
            question: "If an aluminium alloy is not quenched within the specified time (approx. 10 seconds) after heat treatment, what is the likely structural result?",
            options: ["The metal will become too soft and fail under simple compressive loads.", "The Alclad coating will melt and merge with the core material of the sheet.", "The surface will immediately develop a thick protective zinc patina layer."],
            correct: "The grains grow large enough to provide efficient anodes for intergranular corrosion."
            };
        },
            () => {
        return {
            topic: "Rivet Standards",
            question: "Which hardware standard prefix is specifically identified as Military Standards for aircraft hardware specifications?",
            options: ["AN", "NAS", "SAE"],
            correct: "MS"
            };
        },
            () => {
        return {
            topic: "Rivet Mechanics",
            question: "How is a rivet defined in terms of its primary mechanical clamping action?",
            options: ["By using high-tension threaded collars", "By applying interference fits into reamed holes", "By shrinking the shank diameter through cooling"],
            correct: "By having one of its ends mechanically upset"
            };
        },
            () => {
        return {
            topic: "Solid-Shank Rivets",
            question: "What specific physical change occurs to a solid-shank rivet's material properties during the driving process?",
            options: ["Its tensile strength decreases to allow better forming", "Its overall length increases to provide more grip range", "Its density decreases as the head is flattened"],
            correct: "Its cross-sectional area increases along with bearing and shearing strengths"
            };
        },
            () => {
        return {
            topic: "Rivet Identification",
            question: "In the rivet coding system, what does the second part of a code (e.g., 470 or 426) represent?",
            options: ["Shank diameter", "Alloy material", "Numbering system"],
            correct: "Head style"
            };
        },
            () => {
        return {
            topic: "Rivet Dimensioning",
            question: "In a standard rivet code like MS20470-AD4-4, in what increments is the shank diameter indicated?",
            options: ["1/16-inch", "1/8-inch", "1/64-inch"],
            correct: "1/32-inch"
            };
        },
            () => {
        return {
            topic: "Rivet Length Measurement",
            question: "When measuring the length of an AN426 countersunk rivet, the measurement is taken from the:",
            options: ["Bottom of the manufactured head to the end of the shank", "Center of the head to the end of the shank", "Shoulder of the head to the bucktail"],
            correct: "Top of the manufactured head to the end of the shank"
            };
        },
            () => {
        return {
            topic: "Fastener Aerodynamics",
            question: "Why were AN426 countersunk rivets specifically developed for aircraft applications?",
            options: ["To provide higher shear strength in thin materials", "To allow for thicker gusset plate attachments", "To eliminate the need for mechanical upsetting"],
            correct: "To streamline aerofoils and permit smooth flow over wings"
            };
        },
            () => {
        return {
            topic: "Rivet Metallurgy",
            question: "Which alloy code represents commercially pure aluminum rivets used only for non-structural assemblies?",
            options: ["AD", "D", "DD"],
            correct: "A"
            };
        },
            () => {
        return {
            topic: "Fastener Applications",
            question: "What is the primary technical reason for using 5056 (B) rivets in magnesium structures?",
            options: ["They provide higher shear strength than steel", "They allow for easier removal than universal heads", "They resist high temperatures found in engine baffles"],
            correct: "To prevent dissimilar metal corrosion"
            };
        },
            () => {
        return {
            topic: "Rivet Heat Treatment",
            question: "Why are 2017 (D) and 2024 (DD) rivets stored in freezers immediately after quenching?",
            options: ["To prevent atmospheric corrosion", "To accelerate the precipitation hardening process", "To increase the shear strength of the shank"],
            correct: "To keep them in an annealed condition so they remain soft enough to drive"
            };
        },
            () => {
        return {
            topic: "Blind Fasteners",
            question: "Which blind rivet uses a lock ring stowed on the head that slips down the stem during installation?",
            options: ["Huck-Lok", "Cherry friction-lock", "Jo-Bolt"],
            correct: "Olympic-Lok"
            };
        },
            () => {
        return {
            topic: "Fastener Engineering",
            question: "What distinguishes a Hi-Shear rivet from a standard AN bolt regarding the securing method?",
            options: ["A Hi-Shear is secured by a locking nut", "A Hi-Shear is secured by a cotter pin", "A Hi-Shear is secured by an adhesive resin"],
            correct: "A Hi-Shear is secured by a crushed or swaged collar"
            };
        },
            () => {
        return {
            topic: "Hi-Lok Installation",
            question: "In a Hi-Lok fastener assembly, what happens when the appropriate torque value is reached during installation?",
            options: ["The Allen wrench snaps inside the socket", "The shank diameter increases to form an interference fit", "The collar deforms into a hexagonal shape"],
            correct: "The wrenching device shears off from the collar"
            };
        },
            () => {
        return {
            topic: "Special Fastener Removal",
            question: "What is the specific procedure for removing a flush-type Jo-Bolt from a structural hole?",
            options: ["Linish the head until it reaches the locking collar", "Use a pair of vise-grips to unscrew the blind head", "Apply heat to the collar and tap it with a mallet"],
            correct: "Drill a pilot hole and use a drill bit the same size as the shank to reach the pilot depth"
            };
        },
            () => {
        return {
            topic: "Rivet Material Identification",
            question: "How can an aircraft technician visually identify a 2117-T3 (AD) rivet head at a glance?",
            options: ["It has two raised dashes", "It has a raised cross", "It has no head markings"],
            correct: "It has a dimple in the center of the head"
            };
        },
            () => {
        return {
            topic: "Rigid Lines",
            question: "A technician is fabricating a replacement rigid line for a high-pressure (3000 psi) hydraulic system. Which material selection and characteristic is most appropriate according to Chapter 6.6?",
            options: ["1100-H14 aluminium alloy due to its ease of flaring and low installation weight.", "Copper tubing because it provides high flexibility and resistance to vibration-induced brittleness.", "3003-H14 aluminium alloy with thick walls to compensate for lower tensile strength."],
            correct: "Corrosion-resistant steel because its high tensile strength allows for thinner walls and comparable weight to aluminium."
            };
        },
            () => {
        return {
            topic: "Rigid Lines",
            question: "If a rigid tube has an outside diameter of 0.5 inches and a wall thickness of 0.072 inches, what is its inside diameter?",
            options: ["0.428 inches.", "0.394 inches.", "0.464 inches."],
            correct: "0.356 inches."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "A -10 flexible hose needs to be replaced. What is the correct size designation for the replacement part?",
            options: ["A hose with an outside diameter of 10/16 inches.", "A hose with an inside diameter of 10/32 inches.", "A hose with a wall thickness of 0.010 inches."],
            correct: "A hose with an inside diameter of 5/8 inches."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Which type of fitting allows for stress-free alignment of a fluid line to a component by being free to rotate before the bolt is torqued?",
            options: ["Universal Bulkhead Fitting.", "Flareless Tube Fitting.", "Quick-Disconnect Coupling."],
            correct: "Banjo Fitting."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the functional purpose of the sleeve in an AN flared-tube fitting assembly?",
            options: ["To provide a primary sealing surface between the B-nut and the male fitting.", "To decrease the required torque value by providing a lubricated sliding surface for the nut.", "To allow the B-nut to be tightened without the need for a flared tube end."],
            correct: "To support the tube and prevent vibration from concentrating at the flare while eliminating wiping damage."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "When comparing AN and AC flared fittings, which physical feature uniquely identifies an AN fitting?",
            options: ["A flared cone angle of 35(deg) and a shorter overall body length.", "The absence of a shoulder between the end of the threads and the flare cone.", "A yellow anodised finish indicating it is made specifically from aluminium alloy."],
            correct: "The presence of a shoulder between the threads and the flare cone and a noticeably longer sleeve."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is a critical requirement during the pre-setting process of a new flareless tube assembly?",
            options: ["The tube must be flared to 24(deg) before the sleeve is positioned and compressed.", "The sleeve must be heated to its critical range to ensure it bites into the heavy wall tubing.", "The nut must be lubricated with petroleum fluid to ensure the sleeve rotates freely during compression."],
            correct: "Enough pressure must be applied to the sleeve to cause it to deform into the outside of the tube."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In high-pressure systems (3000 psi and above), why are MS flareless fittings often preferred over AN flared fittings for heavy wall tubing?",
            options: ["MS fittings use a 37(deg) internal bevel which provides a better seal for thin-walled tubes.", "Heavy wall tubing is easier to flare manually using standard field maintenance tools.", "Flareless fittings do not require the pre-setting process, reducing installation time in the field."],
            correct: "Heavy wall tubing is difficult to flare, and flareless fittings provide leak-free attachments without flares."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "How is a seal achieved in a tapered pipe thread fitting assembly?",
            options: ["By using a 37(deg) flare and a cadmium-plated aluminium bronze sleeve.", "By compressing a synthetic O-ring against the shoulder of the male fitting.", "By pre-setting a sleeve so that it bites into the straight-cut end of the tube."],
            correct: "By wedging the tapered external male threads into the tapered internal female threads."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is a major limitation of swaged-end fittings on flexible hoses compared to reusable fittings?",
            options: ["They cannot withstand system pressures exceeding 1000 psi.", "They require the use of Butyl rubber liners to prevent galvanic corrosion.", "They must be inspected for wrench damage and cracks before every flight."],
            correct: "They require special machinery for assembly and cannot be removed and used again."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "Which synthetic compound is specifically selected for the inner liner of flexible hoses used in systems carrying phosphate ester-base hydraulic fluids (Skydrol)?",
            options: ["Neoprene, due to its high abrasion resistance and compatibility with synthetic esters.", "Buna-N, because it is better suited to carry petroleum-based products and their derivatives.", "Teflon, as it is the only compound capable of handling the volumetric expansion of Skydrol."],
            correct: "Butyl, because it does not break down when exposed to phosphate ester-base fluids."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "During the installation of a flexible fluid line, the technician notes that the lay line is spiraling around the hose. What does this indicate and what is the consequence?",
            options: ["The hose is under high pressure; this is a normal indication of volumetric expansion.", "The hose is an aromatic-resistant type; spiraling is used to identify the inner reinforcement layers.", "The hose is manufactured by an unapproved source; lay lines must be parallel to the longitudinal axis."],
            correct: "The hose is twisted; this can lead to premature failure when system pressure is applied."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What is the primary advantage of a Teflon inner liner over a standard synthetic rubber liner in a flexible hose?",
            options: ["It has a narrower operating temperature range, ensuring stability in extreme cold.", "It is significantly more porous, allowing the reinforcement layers to bond more effectively.", "It is specifically designed to carry only petroleum-based fluids with high viscosity."],
            correct: "It has a broad temperature range and an almost limitless shelf and service life."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What specific identification marking is used for a medium-pressure hose designed to carry phosphate ester-base hydraulic fluid?",
            options: ["A grey-black outer braid with a yellow lay line and red numerals.", "A smooth black outer cover with a white lay line and white letters.", "A single layer of cotton braid with a blue stripe running the length of the hose."],
            correct: "A green outer braid with the word \"SKYDROL\" written on it."
            };
        },
            () => {
        return {
            topic: "Microprocessors",
            question: "What is the recommended practice for protecting an open fluid system during maintenance when a line is disconnected?",
            options: ["The ends should be left open to allow residual pressure to bleed off safely.", "Cotton rags should be stuffed into the line ends to absorb any leaking fluid.", "The system should be immediately energized to check for remaining blockages."],
            correct: "Appropriate cap plugs or blanks should be fitted and lightly torqued to prevent contamination."
            };
        }
    ];
        




// REGISTER MODULE 6: Aircraft Materials
if (typeof registerModule !== 'undefined') {
    registerModule(
        "Module 6: Aircraft Materials",
        60, // Standard exam length
        function(count) {
            // Shuffle the pool
            const pool = [...aircraftMaterialGenerators];
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
                    topic: data.topic || "Aircraft Materials",
                    question: data.question,
                    img: data.img || null,
                    options: finalOptions,
                    correct: data.correct
                };
            });
        },
        `${aircraftMaterialGenerators.length} Scenarios (CASA B2-06)`
    );
}