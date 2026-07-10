const aerodynamicsGenerators = [
            // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Atmospheric Properties",
            question: "If an aircraft climbs through the troposphere into the tropopause, how does the ambient temperature profile change?",
            options: ["It increases steadily at 2(deg) C per 1000 ft", "It decreases more rapidly as the air becomes thinner", "It fluctuates wildly due to increased water vapour concentration"],
            correct: "It ceases to decrease and remains approximately constant"
            };
        },
            () => {
        return {
            topic: "Atmospheric Properties",
            question: "What is the primary operational effect of flying in the lower stratosphere compared to the troposphere?",
            options: ["The aircraft experiences higher parasite drag due to increased air density", "The engines produce more thrust due to higher oxygen concentration", "The airframe is subjected to rapid temperature fluctuations"],
            correct: "The aircraft benefits from reduced drag due to lower air density"
            };
        },
            () => {
        return {
            topic: "Air Density Effects",
            question: "If an aircraft takes off from a runway on a day with high humidity instead of dry air at the same temperature, how is the air density affected?",
            options: ["Air density increases because water droplets add mass to the air", "Air density remains unchanged unless the pressure altitude changes", "Air density increases due to the higher molecular weight of water"],
            correct: "Air density decreases because water vapour is lighter than dry air"
            };
        },
            () => {
        return {
            topic: "Air Density Effects",
            question: "Why does a decrease in atmospheric pressure have a more dominant effect on air density than the corresponding decrease in temperature as altitude increases?",
            options: ["Temperature changes only affect moisture content rather than air mass", "Pressure governs the speed of sound rather than molecular spacing", "Temperature drops counteract pressure drops completely above 10000 ft"],
            correct: "The air expansion from pressure drop outweighs the contraction from cooling"
            };
        },
            () => {
        return {
            topic: "Humidity Variations",
            question: "When comparing absolute humidity to relative humidity, which scenario describes a 100% relative humidity condition?",
            options: ["The air contains exactly 100 grams of water vapour per cubic metre", "The air has reached a temperature of exactly 100(deg) C", "The air pressure has condensed all available atmospheric nitrogen"],
            correct: "The air is holding the maximum total water vapour it is capable of holding"
            };
        },
            () => {
        return {
            topic: "Humidity Variations",
            question: "What occurs to the water vapour in a rising mass of humid air as it cools to its dew point?",
            options: ["It sublimates directly into ice crystals causing airframe icing", "It absorbs heat from the surrounding air causing severe turbulence", "It evaporates completely leaving the air mass completely dry"],
            correct: "It condenses into liquid droplets forming visible clouds"
            };
        },
            () => {
        return {
            topic: "ISA Standards",
            question: "How is the International Standard Atmosphere (ISA) temperature model applied to aircraft performance?",
            options: ["It guarantees that aircraft fly in standard conditions above 36000 ft", "It dictates the maximum operational ceiling based on standard gravity", "It provides a constant pressure value for all altimeter calibrations"],
            correct: "It provides a baseline to compare actual performance by correcting parameters"
            };
        },
            () => {
        return {
            topic: "ISA Standards",
            question: "If the actual atmospheric pressure at mean sea level drops below 1013.25 hPa, how does this affect the indicated pressure altitude?",
            options: ["The pressure altitude becomes a negative value regardless of true altitude", "The pressure altitude precisely matches the density altitude", "The pressure altitude will be lower than the actual true altitude"],
            correct: "The pressure altitude will be higher than the actual true altitude"
            };
        },
            () => {
        return {
            topic: "Air Density Effects",
            question: "Which combination of environmental factors will result in the highest density altitude?",
            options: ["High atmospheric pressure with low temperature and low humidity", "Low atmospheric pressure with low temperature and high humidity", "High atmospheric pressure with high temperature and low humidity"],
            correct: "Low atmospheric pressure with high temperature and high humidity"
            };
        },
            () => {
        return {
            topic: "Atmospheric Properties",
            question: "Why is the tropopause height variable rather than fixed at exactly 36000 ft?",
            options: ["It is altered by aircraft traffic condensing water vapour at high altitudes", "It is fixed at 36000 ft only over the poles and drops over the equator", "It is dictated entirely by the gravitational pull of the moon and tides"],
            correct: "It fluctuates due to seasonal temperature changes and latitudinal position"
            };
        },
            () => {
        return {
            topic: "ISA Standards",
            question: "In the ISA model, what is the established temperature lapse rate in the troposphere?",
            options: ["It decreases by exactly 1.98(deg) F per 1000 ft", "It increases by exactly 1.98(deg) C per 1000 ft", "It decreases by exactly 6.49(deg) F per 1000 m"],
            correct: "It decreases by exactly 1.98(deg) C per 1000 ft"
            };
        },
            () => {
        return {
            topic: "Humidity Variations",
            question: "If air is blown over both a wet-bulb and a dry-bulb thermometer, how is the relative humidity determined?",
            options: ["By adding the two temperatures and dividing by the atmospheric pressure", "By measuring the time it takes for the wet bulb to completely dry", "By calculating the exact mass of the water evaporated from the bulb"],
            correct: "By comparing the difference in readings between the two thermometers"
            };
        },
            () => {
        return {
            topic: "Air Density Effects",
            question: "If half of all air molecule mass is located below 18000 ft altitude, how does this affect aircraft performance at 30000 ft?",
            options: ["The aircraft will experience a massive increase in parasitic drag", "The engine will generate excessive thrust due to cold temperatures", "The wings will generate lift more efficiently without any drag penalties"],
            correct: "The engine and wings will have reduced performance due to thin air"
            };
        },
            () => {
        return {
            topic: "Atmospheric Properties",
            question: "How does the stratosphere isothermal layer characteristic impact flight dynamics?",
            options: ["The sudden drop in temperature causes immediate airframe icing", "The rapidly increasing temperature reduces engine thrust significantly", "The extreme turbulence requires constant pilot control inputs"],
            correct: "The constant temperature means density changes are purely pressure-driven"
            };
        },
            () => {
        return {
            topic: "ISA Standards",
            question: "What is the specific gravity (g) constant defined by ISA standard conditions?",
            options: ["9.809 ft/s^2", "32.174 m/s^2", "14.69 m/s^2"],
            correct: "9.809 m/s^2"
            };
        },
            () => {
        return {
            topic: "Airflow Characteristics",
            question: "How does the boundary layer velocity profile change from the surface of the aerofoil to the outer edge of the layer?",
            options: ["It remains constant at zero throughout the entire boundary layer", "It is highest at the surface and decreases to zero at the outer edge", "It fluctuates randomly depending on the angle of attack"],
            correct: "It varies from zero at the surface to free stream velocity at the outer edge"
            };
        },
            () => {
        return {
            topic: "Airflow Characteristics",
            question: "What is the primary aerodynamic consequence if the transition point on an aerofoil moves significantly forward?",
            options: ["The boundary layer remains laminar and drag is significantly reduced", "The stagnation point shifts to the trailing edge causing a stall", "The wake behind the aerofoil disappears completely"],
            correct: "The boundary layer becomes turbulent earlier causing increased skin friction"
            };
        },
            () => {
        return {
            topic: "Generation of Lift",
            question: "According to Bernoulli principle, how is the lift force generated on an asymmetric aerofoil?",
            options: ["By increasing both the potential and kinetic energy simultaneously", "By accelerating air under the wing to decrease the dynamic pressure", "By increasing the pressure on the upper surface to push the wing down"],
            correct: "By increasing air velocity over the top surface to decrease its pressure"
            };
        },
            () => {
        return {
            topic: "Generation of Lift",
            question: "How do wing tip vortices influence the airflow pattern surrounding an aircraft?",
            options: ["They create an upwash that pushes the aircraft forward and increases thrust", "They form a high-pressure zone directly above the fuselage", "They completely eliminate the boundary layer on the outer wing sections"],
            correct: "They cause a downward flow that modifies the lift and increases induced drag"
            };
        },
            () => {
        return {
            topic: "Aerofoil Terminology",
            question: "If an aerofoil has a double convex curvature with identical upper and lower cambers, how is it classified?",
            options: ["It is classified as a high-lift aerofoil section", "It is classified as a general-purpose aerofoil section", "It is classified as an inverted asymmetric aerofoil section"],
            correct: "It is classified as a symmetrical aerofoil section"
            };
        },
            () => {
        return {
            topic: "Aerofoil Terminology",
            question: "How is the fineness ratio of an aerofoil section calculated?",
            options: ["By dividing the maximum camber by the mean aerodynamic chord", "By multiplying the wingspan by the mean chord length", "By dividing the wingspan squared by the wing area"],
            correct: "By dividing the chord length by the maximum thickness"
            };
        },
            () => {
        return {
            topic: "Airflow Characteristics",
            question: "What happens to the free stream airflow as an object presents greater resistance to it?",
            options: ["The free stream airflow conforms perfectly to the object surface", "The boundary layer thickness decreases to zero", "The streamlines compress and increase in density"],
            correct: "The turbulence increases and the free stream airflow is pushed further away"
            };
        },
            () => {
        return {
            topic: "Aerofoil Terminology",
            question: "Which aerodynamic characteristic dictates the selection of a very low thickness-to-chord ratio (7%) for an aerofoil?",
            options: ["The need for a very high coefficient of lift at low speeds", "The requirement for maximum internal fuel storage capacity", "The necessity to increase the wing tip vortex circulation"],
            correct: "The overriding requirement for low drag at high speeds"
            };
        },
            () => {
        return {
            topic: "Generation of Lift",
            question: "What physical phenomenon causes the upwash effect ahead of a lift-producing aerofoil?",
            options: ["The high-pressure air below the wing leaking around the wing tips", "The friction between the boundary layer and the free stream airflow", "The rapid acceleration of air leaving the trailing edge"],
            correct: "The tendency of air to flow towards the low-pressure area above the wing"
            };
        },
            () => {
        return {
            topic: "Aerofoil Terminology",
            question: "How does increasing the aspect ratio of a wing affect its aerodynamic efficiency?",
            options: ["It increases the physical thickness of the boundary layer", "It increases the maximum lift coefficient drastically", "It causes the transition point to move forward to the leading edge"],
            correct: "It reduces the size of wing-tip vortices and lowers induced drag"
            };
        },
            () => {
        return {
            topic: "Generation of Lift",
            question: "What causes the central core of a trailing vortex to become visible under certain atmospheric conditions?",
            options: ["The friction heating the air to the boiling point of water", "The exhaust gases mixing with the high-pressure air", "The rapid increase in ambient pressure squeezing the air molecules"],
            correct: "The condensation of moisture due to decreased pressure and temperature"
            };
        },
            () => {
        return {
            topic: "Airflow Characteristics",
            question: "What defines the stagnation point on the leading edge of an aerofoil?",
            options: ["The point where the boundary layer changes from laminar to turbulent", "The point where the airflow separates completely from the upper surface", "The point where the trailing vortices meet and cancel each other out"],
            correct: "The point where the relative airflow first contacts the surface and divides"
            };
        },
            () => {
        return {
            topic: "Aerofoil Terminology",
            question: "Why is the Mean Aerodynamic Chord (MAC) used instead of the average chord for calculating weight-and-balance on tapered wings?",
            options: ["Because the average chord is always twice the length of the root chord", "Because the MAC is physically drawn on the wing surface for reference", "Because the MAC changes based on the angle of attack during flight"],
            correct: "Because the MAC accurately represents the aerodynamic center of the tapered area"
            };
        },
            () => {
        return {
            topic: "Airflow Characteristics",
            question: "What is the primary cause of the boundary layer forming on an aircraft surface?",
            options: ["The sudden drop in atmospheric pressure over the wing", "The expansion of air molecules as they heat up", "The Coanda effect pulling the air downwards"],
            correct: "The viscosity of the air sticking to the surface"
            };
        },
            () => {
        return {
            topic: "Aerofoil Terminology",
            question: "Which wing planform design offers the highest aerodynamic efficiency but is generally more complex to manufacture?",
            options: ["The rectangular wing planform", "The heavily tapered wing planform", "The highly sweptback wing planform"],
            correct: "The elliptical wing planform"
            };
        },
            () => {
        return {
            topic: "Flight Forces & Angles",
            question: "How does the Centre of Pressure (CP) move on an asymmetrical aerofoil as the angle of attack is increased toward the stall point?",
            options: ["It remains completely stationary at the 25% chord position", "It moves rapidly backward toward the trailing edge", "It moves perpendicularly away from the chord line"],
            correct: "It moves progressively forward toward the leading edge"
            };
        },
            () => {
        return {
            topic: "Flight Forces & Angles",
            question: "What distinguishes the angle of incidence from the angle of attack?",
            options: ["The angle of incidence changes based on the relative airflow", "The angle of incidence is measured between the chord line and the horizon", "The angle of incidence is adjusted by the pilot during flight"],
            correct: "The angle of incidence is fixed during manufacture and does not change"
            };
        },
            () => {
        return {
            topic: "Drag Characteristics",
            question: "As an aircraft accelerates to higher speeds, how does the relationship between induced drag and parasite drag change?",
            options: ["Both induced drag and parasite drag decrease simultaneously", "Induced drag increases rapidly while parasite drag decreases", "Both induced drag and parasite drag increase proportionally"],
            correct: "Induced drag decreases while parasite drag increases exponentially"
            };
        },
            () => {
        return {
            topic: "Lift & Stalling",
            question: "What happens to the Coefficient of Lift (C_L) when an aircraft reaches its critical angle of attack?",
            options: ["It continues to increase exponentially with airspeed", "It becomes perfectly equal to the Coefficient of Drag", "It stabilizes and remains constant regardless of airspeed"],
            correct: "It reaches its maximum value and then rapidly drops to zero"
            };
        },
            () => {
        return {
            topic: "Flight Forces & Angles",
            question: "If the upper surface of a wing provides 80% of the total lift, what does this indicate about the pressure distribution?",
            options: ["The pressure increase on the lower surface is greater than the decrease on top", "The pressure on both surfaces is evenly distributed along the chord line", "The highest pressure point is located exactly at the trailing edge"],
            correct: "The decrease in pressure on the upper surface is significantly larger"
            };
        },
            () => {
        return {
            topic: "Icing & Contamination",
            question: "How does frost accumulation on the wing surface primarily degrade aircraft performance?",
            options: ["It decreases the parasite drag by smoothing microscopic surface imperfections", "It increases the kinetic energy of the boundary layer air", "It lowers the weight of the aircraft by displacing dense air"],
            correct: "It alters the aerofoil shape and reduces lift while increasing stall speed"
            };
        },
            () => {
        return {
            topic: "Drag Characteristics",
            question: "Which specific type of drag is generated when the varied air currents over the wing and fuselage meet and interact?",
            options: ["Form drag", "Induced drag", "Skin friction drag"],
            correct: "Interference drag"
            };
        },
            () => {
        return {
            topic: "Drag Characteristics",
            question: "According to the drag equation, how does doubling the airspeed affect the total aerodynamic drag?",
            options: ["The drag increases by a factor of two", "The drag remains constant if altitude is unchanged", "The drag increases by a factor of eight"],
            correct: "The drag increases by a factor of four"
            };
        },
            () => {
        return {
            topic: "Flight Forces & Angles",
            question: "What is the primary purpose of designing a wing with washout (a smaller angle of incidence at the tip than at the root)?",
            options: ["To reduce the overall wingspan and save structural weight", "To increase the maximum coefficient of lift for short takeoffs", "To prevent the propeller torque from rolling the aircraft"],
            correct: "To ensure the wing root stalls before the wing tip for better control"
            };
        },
            () => {
        return {
            topic: "Lift & Stalling",
            question: "At higher subsonic speeds, why does the rate of lift increase begin to fall below the predicted V^2 law?",
            options: ["The air density increases exponentially at high velocities", "The boundary layer becomes completely laminar reducing skin friction", "The angle of attack automatically decreases due to structural bending"],
            correct: "The compressible nature of the air alters the airflow characteristics"
            };
        },
            () => {
        return {
            topic: "Flight Forces & Angles",
            question: "What is defined as the Polar Curve in aerodynamic analysis?",
            options: ["A graph showing the relationship between altitude and air density", "A mathematical model predicting the transition point movement", "A diagram illustrating the pressure distribution over the chord line"],
            correct: "A mathematical representation of lift versus drag and angle of attack"
            };
        },
            () => {
        return {
            topic: "Lift & Stalling",
            question: "Which two primary factors determine the Coefficient of Lift (C_L) for a given aerofoil?",
            options: ["Velocity and air density", "Wing area and total thrust", "Angle of incidence and flight path"],
            correct: "Aerofoil shape and angle of attack"
            };
        },
            () => {
        return {
            topic: "Drag Characteristics",
            question: "Why is an aircraft with a high aspect ratio more efficient at low cruising speeds?",
            options: ["It reduces the form drag caused by the fuselage", "It eliminates the need for trailing edge flaps", "It decreases the skin friction over the entire airframe"],
            correct: "It significantly reduces the dimensions of wing-tip vortices and induced drag"
            };
        },
            () => {
        return {
            topic: "Lift & Stalling",
            question: "If an aircraft is flying straight and level at a constant speed, what is the exact relationship between the four aerodynamic forces?",
            options: ["Lift equals thrust and weight equals drag", "Lift is greater than weight and thrust equals drag", "Lift equals weight and thrust is greater than drag"],
            correct: "Lift equals weight and thrust equals drag"
            };
        },
            () => {
        return {
            topic: "Flight Forces & Angles",
            question: "How does the resultant aerodynamic force relate to the relative airflow?",
            options: ["It acts perfectly parallel to the relative airflow", "It is composed entirely of the lift vector", "It acts completely perpendicular to the relative airflow"],
            correct: "It is the net force containing both perpendicular lift and parallel drag components"
            };
        },
            () => {
        return {
            topic: "Flight Dynamics",
            question: "During a steady climb, how must the pilot balance the aircraft aerodynamic forces?",
            options: ["Thrust must equal drag and lift must equal weight", "Thrust must equal drag while lift must exceed weight", "Thrust must balance only the drag force component"],
            correct: "Thrust must balance the drag plus a portion of the aircraft weight"
            };
        },
            () => {
        return {
            topic: "Flight Dynamics",
            question: "What determines the best glide distance an aircraft can achieve in a steady descent with no thrust?",
            options: ["Minimizing the rate of descent to maximize total flight time", "Gliding at a speed significantly lower than the best glide speed", "Flying at the absolute minimum controllable airspeed"],
            correct: "Maintaining the angle of attack that produces the maximum lift-to-drag ratio"
            };
        },
            () => {
        return {
            topic: "Turning Theory",
            question: "When an aircraft banks to initiate a turn, which specific force causes the aircraft flight path to curve?",
            options: ["The increased vertical component of lift opposing weight", "The centrifugal force pulling the aircraft outwards", "The increased thrust applied by the pilot"],
            correct: "The horizontal component of lift acting as a centripetal force"
            };
        },
            () => {
        return {
            topic: "Turning Theory",
            question: "If an aircraft initiates a turn with an insufficient bank angle for its speed, what physical sensation will the pilot experience?",
            options: ["A feeling of being pushed down heavily into the seat", "A feeling of the airflow coming from the inside of the turn", "A feeling of weightlessness due to negative load factor"],
            correct: "A feeling of sliding outwards due to excessive centrifugal force"
            };
        },
            () => {
        return {
            topic: "Aircraft Loading",
            question: "How is the wing loading of an aircraft mathematically calculated?",
            options: ["By multiplying the wingspan by the mean aerodynamic chord", "By dividing the wing area by the total aircraft weight", "By multiplying the aircraft weight by the load factor"],
            correct: "By dividing the total aircraft weight by the wing area"
            };
        },
            () => {
        return {
            topic: "Aircraft Loading",
            question: "What occurs to an aircraft stall speed if it enters a steep coordinated turn resulting in a load factor of 4g?",
            options: ["The stall speed remains unchanged as weight is constant", "The stall speed increases by a factor of four", "The stall speed decreases by half to maintain lift"],
            correct: "The stall speed doubles due to the square root relationship"
            };
        },
            () => {
        return {
            topic: "Flight Dynamics",
            question: "If an aircraft is loaded so that the Centre of Gravity (CG) is too far aft, what is a primary aerodynamic consequence?",
            options: ["The aircraft will experience an increased tendency to dive", "The pilot will have difficulty raising the nose during landing", "The aircraft will become excessively longitudinally stable"],
            correct: "The aircraft will develop poor stability and dangerous spin characteristics"
            };
        },
            () => {
        return {
            topic: "Lift Augmentation",
            question: "How do leading-edge slots increase the critical angle of attack and delay a stall?",
            options: ["By extending the physical chord line of the aerofoil", "By reducing the total wing area and decreasing wing loading", "By creating a downward force on the tail to raise the nose"],
            correct: "By directing high-velocity air over the upper surface to energize the boundary layer"
            };
        },
            () => {
        return {
            topic: "Lift Augmentation",
            question: "What is the operational advantage of deploying full trailing-edge flaps during a landing approach?",
            options: ["It increases the stall speed ensuring a firmer touchdown", "It completely eliminates induced drag improving the glide ratio", "It shifts the centre of gravity forward for better stability"],
            correct: "It allows a steeper descent angle at a reduced speed without gaining airspeed"
            };
        },
            () => {
        return {
            topic: "Flight Dynamics",
            question: "In a steady, powered descent, what is the relationship between the aerodynamic forces?",
            options: ["Lift is greater than weight and drag equals thrust", "Lift equals weight and thrust equals drag", "Lift is less than weight and thrust is zero"],
            correct: "Lift is less than weight and drag is balanced by reduced thrust and a part of weight"
            };
        },
            () => {
        return {
            topic: "Turning Theory",
            question: "Why must a pilot increase back pressure on the elevator during a level coordinated turn?",
            options: ["To counteract the excessive adverse yaw produced by the ailerons", "To increase the horizontal component of lift for a tighter radius", "To decrease the angle of attack and reduce parasitic drag"],
            correct: "To increase overall lift so the vertical component remains equal to weight"
            };
        },
            () => {
        return {
            topic: "Aircraft Loading",
            question: "What is the structural definition of Load Factor (g) in aviation?",
            options: ["The ratio of lift produced to the parasitic drag generated", "The physical weight of the payload divided by the fuel weight", "The ratio of the aircraft empty weight to its maximum takeoff weight"],
            correct: "The ratio of the load imposed on the structure to the weight of the structure itself"
            };
        },
            () => {
        return {
            topic: "Flight Dynamics",
            question: "What force opposes the centripetal force during a coordinated level turn?",
            options: ["The total lift resultant force", "The vertical component of lift", "The longitudinal drag force"],
            correct: "The centrifugal force acting outwards"
            };
        },
            () => {
        return {
            topic: "Lift Augmentation",
            question: "What distinguishes a leading-edge slat from a leading-edge slot?",
            options: ["A slat is located on the trailing edge while a slot is on the leading edge", "A slat only reduces parasite drag while a slot increases lift", "A slat is a fixed duct while a slot is mechanically deployed"],
            correct: "A slat is a movable surface that extends to form a slot duct"
            };
        },
            () => {
        return {
            topic: "Aircraft Loading",
            question: "Why do transport category aircraft generally have a minimum positive load factor certification limit of +2.5 g?",
            options: ["To allow the aircraft to perform unlimited aerobatic maneuvers", "To guarantee the aircraft stalls before structural damage occurs in all conditions", "To ensure the engines can produce 2.5 times the required takeoff thrust"],
            correct: "To ensure the airframe is strong enough to withstand expected operational stresses"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "How is positive static stability defined in aerodynamic terms?",
            options: ["The tendency for oscillations to increase in magnitude over time", "The tendency of an aircraft to remain in its displaced attitude", "The tendency to move farther away from the original attitude after a disturbance"],
            correct: "The tendency of an aircraft to return to its original attitude after displacement"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "Which control surface is primarily responsible for providing longitudinal stability in an aircraft?",
            options: ["The ailerons on the trailing edge of the wing", "The vertical fin located at the tail", "The leading-edge slats on the main wing"],
            correct: "The horizontal stabiliser located at the tail"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "If an aircraft suffers from Dutch roll, which two rotational motions are coupled together in an unstable oscillation?",
            options: ["Pitching and rolling", "Pitching and yawing", "Heaving and surging"],
            correct: "Rolling and yawing"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "How does a sweptback wing configuration aid in maintaining directional stability during a yaw?",
            options: ["The trailing wing produces a higher coefficient of lift causing a restoring roll", "The swept geometry moves the centre of gravity aft to restore balance", "The wing into the wind stalls earlier bringing the nose back to centre"],
            correct: "The wing farther ahead experiences more drag which pulls it back into alignment"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "What defines the phenomenon of spiral instability in an aircraft handling characteristics?",
            options: ["The aircraft responds to a roll by pitching up until it stalls violently", "The aircraft oscillates rapidly in pitch when passing the critical Mach number", "The aircraft remains perfectly level but drifts laterally off course"],
            correct: "The aircraft responds to a dropped wing by yawing and rolling into a diving spiral"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "What is the primary function of anhedral (negative dihedral) on a high-mounted swept wing aircraft?",
            options: ["To maximize the ground effect cushion during landing", "To lower the centre of gravity for better ground handling", "To increase the effective aspect ratio and reduce induced drag"],
            correct: "To counteract excessive dihedral effect and prevent Dutch roll tendencies"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "In relation to multi-engine aircraft, what establishes the minimum directional control speed during an engine failure?",
            options: ["The speed where aileron authority overcomes the asymmetric lift", "The stalling speed of the aircraft multiplied by a factor of 1.2", "The speed at which the elevator can prevent a nose-down pitch"],
            correct: "The lowest speed where maximum rudder deflection balances the asymmetric thrust"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "How does geometric dihedral provide lateral stability when an aircraft enters a sideslip?",
            options: ["The downward wing experiences a higher parasite drag and pulls the aircraft level", "The downward wing stalls immediately causing the upper wing to drop level", "The airflow from the side pushes against the vertical fin to level the wings"],
            correct: "The wing dropping into the airflow experiences an increased angle of attack and more lift"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "What creates the pendulum effect that enhances lateral stability in high-wing aircraft?",
            options: ["The sweptback angle of the wings increasing root drag", "The placement of the horizontal stabiliser above the wing wake", "The location of the vertical fin generating a large side force"],
            correct: "The fuselage and centre of gravity being positioned below the centre of lift"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "Which description best explains an aircraft with positive static stability but negative dynamic stability?",
            options: ["The aircraft remains at the displaced attitude without any oscillations", "The aircraft returns to its original attitude immediately without overshooting", "The aircraft attempts to return to normal but the oscillations remain constant"],
            correct: "The aircraft tries to return to its original attitude but oscillations increase in magnitude"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "When discussing the axes of an aeroplane, motion about the lateral axis is referred to as:",
            options: ["Yawing", "Rolling", "Sideslipping"],
            correct: "Pitching"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "What is meant by the term longitudinal dihedral in aircraft rigging?",
            options: ["The angle of sweepback measured from the fuselage centreline", "The physical upward tilt of the wingtips relative to the root", "The anhedral angle applied to the horizontal stabiliser"],
            correct: "The difference in setting angles between the wing chord and the horizontal stabiliser chord"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "How do modern high-speed aircraft that are aerodynamically unstable maintain controllable flight?",
            options: ["They rely exclusively on massive vertical fins and dorsal ridges", "They use highly swept wings to passively dampen all oscillations", "They require the pilot to constantly manipulate manual cable controls"],
            correct: "They rely upon active stability control systems via digital flight computers"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "Why does a large vertical fin (keel surface) sometimes contribute to oscillatory instability (Dutch roll)?",
            options: ["It moves the aerodynamic centre too far forward of the CG", "It prevents the rudder from deflecting fully at high speeds", "It completely negates the stabilizing effects of wing sweepback"],
            correct: "It produces a directional restoring force that overpowers the lateral dihedral effect"
            };
        },
            () => {
        return {
            topic: "Aircraft Stability",
            question: "If a stable aircraft is disturbed in pitch from its trimmed straight-and-level flight, what restores its attitude?",
            options: ["The gyroscopic precession of the engine propeller", "The pendulum effect of the undercarriage weight", "The shifting of the internal fuel load to the lower tanks"],
            correct: "The change in lift at the horizontal stabiliser providing a restoring moment"
            };
        }
    ];
        




// REGISTER MODULE 8: Aerodynamics
if (typeof registerModule !== 'undefined') {
    registerModule(
        "Module 8: Aerodynamics",
        20, // Standard exam length
        function(count) {
            // Shuffle the pool
            const pool = [...aerodynamicsGenerators];
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
        `${aerodynamicsGenerators.length} Scenarios (CASA B2-08)`
    );
}