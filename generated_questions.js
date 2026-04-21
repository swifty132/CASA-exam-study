    // --- BATCH GENERATED FROM CSV ---

    () => {
        return {
            topic: "Logic Circuits",
            question: "In an EFIS architecture, what is the logical function of the third (centre) symbol generator in the event of a primary unit failure?",
            options: ["It acts as a bus controller for the MIL-STD 1553 architecture to reset the failed unit.", "It converts synchronous data to asynchronous data for the standby altimeter.", "It isolates the failed display unit to prevent a short circuit to earth on the data bus."],
            correct: "It provides redundancy by switching its drive signals to the affected Captain or First Officer display."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Within a Boeing EICAS architecture, how is symbol generation logic handled differently compared to a standard EFIS?",
            options: ["It uses a dedicated external SGU for each display unit to reduce processor heat.", "It relies exclusively on the Flight Warning Computer (FWC) for all graphical rendering.", "It requires an analog-to-digital converter for every input before the CPU can process it."],
            correct: "The circuitry for symbol generation is incorporated directly into the EICAS computers or displays."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In the Airbus ECAM system, what is the role of the Flight Warning Computer (FWC) regarding system inputs?",
            options: ["It generates the master timing for the stroke and raster display drivers.", "It converts all ARINC 629 digital data into ARINC 429 analog signals.", "It stores the navigation database (NDB) and updates it every 28 days."],
            correct: "It receives aircraft system inputs and monitors the other FWC for errors or malfunctions."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What logic governs the transition of an EICAS display in a modern 'glass cockpit' compared to older configurations?",
            options: ["The EICAS can only be displayed on the lower DU to prevent pilot distraction.", "The EICAS data is restricted to the upper DU and cannot be interchanged with the ND.", "The EICAS display automatically shuts down if the symbol generator detects a 10(deg) bank."],
            correct: "The EICAS display is not restricted to centre displays and can be shown in place of EFIS displays."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "How does the EFIS Display Controller interact with the Symbol Generator memory during a data clash?",
            options: ["The I/O processor forces a reset of the RAM storage locations.", "The ARINC 429 parity bit is inverted to pause the data stream.", "The Display Controller is bypassed and data is read directly from the PROM."],
            correct: "The main processor controls all activities to prevent clashes between writing and reading memory."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What determines whether a failure detected by BITE is classified as 'intermittent' or 'permanent' in an A330 OBMS?",
            options: ["The number of times the power up test is manually requested via the MCDU.", "The length of the wiring between the LRU and the Central Maintenance Computer.", "The status of the 115 VAC to 28 VDC standby power supply switch-over."],
            correct: "The BITE section of the computer which continuously monitors internal circuits and inputs/outputs."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In an ACARS system, what occurs during the first three seconds of a Management Unit (MU) test initiated by the test switch?",
            options: ["The GMT clock signal is synchronized with the ground station.", "A maintenance report is automatically transmitted to the ground via VHF.", "The alphanumeric keyboard is locked to prevent data entry errors."],
            correct: "All four lights illuminate to test lamp operation functionality."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Why would a maintenance engineer use the EICAS Maintenance Control Panel (MCP) instead of the standard pilot select panel?",
            options: ["To manually switch between the Left and Right EICAS computers during flight.", "To adjust the brightness of the IDUs for night vision compatibility.", "To reset the Master Caution lights after a nuisance alert."],
            correct: "To retrieve and display maintenance data stored in the computer's memory after landing."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Why is the lower EICAS display normally kept blank during standard flight operations?",
            options: ["To reserve processing power for the Primary Flight Display (PFD) symbol generator.", "To prevent the secondary engine parameters from overwriting the master caution logic.", "To allow the CMC to perform cyclic RAM tests without visual interference."],
            correct: "To reduce interference from screen glow in the centre pedestal during flight."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What specific system interaction occurs when the 'WHOOP - WHOOP - PULL UP' aural sounds during a GPWS self-test?",
            options: ["The VSI display tape changes to a magenta color to indicate terrain height.", "The GLIDESLOPE aural is inhibited and the BELOW G/S light is extinguished.", "The TCAS Resolution Advisory is automatically triggered to clear the vertical path."],
            correct: "The PULL UP light on the pilot panel is illuminated simultaneously with the aural warning."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the primary advantage of the 'Basic T' configuration being maintained in modern electronic display systems?",
            options: ["It allows the use of lower permeability shielding on individual conductors.", "It reduces the requirement for Analog to Digital converters in the data bus.", "It prevents RFI from permeating the system through passenger windows."],
            correct: "It minimizes training times and makes finding critical instruments intuitive for the pilot."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "What is the primary operational consequence if a 1(deg) bank occurs on an aircraft only equipped with a basic 'T' configuration without a turn coordinator?",
            options: ["The VSI will immediately indicate a descent due to loss of lift.", "The ASI will show a significant decrease in indicated airspeed.", "The Altimeter will oscillate due to static pressure changes."],
            correct: "The pilot may not notice the bank on the ADI and experience a gradual heading drift."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "How does the symbol generator ensure that weather radar imagery does not obscure critical flight symbology on the display unit?",
            options: ["By converting all stroke data into raster format before writing to the main RAM.", "By using a digital-to-analog converter to prioritize analog sensor signals over the bus.", "By assigning the weather radar data to a higher priority address in the Main PROM."],
            correct: "By writing symbol generator data over the top of the existing weather radar data in the WXR memory."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "What is the technical purpose of the Raster Generator acting as the master timing device for Stroke data?",
            options: ["To ensure digital-to-analog conversion happens at exactly 400 MHz.", "To prevent the ARINC 429 bus from exceeding its maximum data transfer rate.", "To synchronize the brightness control signals between the L and R light sensors."],
            correct: "To ensure lines and circles are drawn at the end of each raster scan row to avoid jagged appearances."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "In a digital data bus system, why are some simple systems connected through Analog to Digital Converters (ADCs)?",
            options: ["To increase the signal amplitude for high-speed fiber optic transmission.", "To provide electrical isolation from the MIL-STD 1553 bus controller.", "To allow the FMC to rewrite the BIOS-type software on the target hardware."],
            correct: "To enable systems with outputs that cannot be transmitted on the data bus to pass information to digital systems."
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "In accordance with DO-178C, a software system that could cause a major negative impact on safety and result in serious or fatal injuries is assigned which design assurance level?",
            options: ["Level A (Catastrophic)", "Level C (Major)", "Level D (Minor)"],
            correct: "Level B (Hazardous)"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "What is the specific probability of failure requirement for software assigned to Design Assurance Level A (Catastrophic)?",
            options: ["Less than 1 in  $10^{-7}$  per flying hour", "Less than 1 in  $10^{-5}$  per flying hour", "Less than 1 in  $10^{-3}$  per flying hour"],
            correct: "Less than 1 in  $10^{-9}$  per flying hour"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "Which characteristic uniquely distinguishes Field-Loadable Software (FLS) from Preloaded or Resident Software during maintenance?",
            options: ["FLS is stored on a ROM chip that requires physical replacement to update", "FLS changes the part number of the target hardware once it is installed", "FLS cannot be verified electronically through the target hardware memory"],
            correct: "FLS can be loaded by maintenance personnel without removing the equipment"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "A Model/Engine Database (MEDB) containing fuel flow and drag factors is classified as which type of software part?",
            options: ["Aeronautical Database (ADB)", "User Modifiable Software (UMS)", "Non-Loadable Software Part"],
            correct: "Loadable Software Aircraft Part (LSAP)"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "Which type of software allows an operator to modify system functions to suit local infrastructure without review by the certification authority?",
            options: ["User-Certifiable Software (UCS)", "Supplier Controlled Software (SCS)", "Operational Program Software (OPS)"],
            correct: "User-Modifiable Software (UMS)"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "What is the regulatory requirement for the certification of a change made to User-Certifiable Software (UCS)?",
            options: ["No certification is required as it is modified by the operator", "It must be reviewed and certified by the original equipment manufacturer", "It requires an amendment to the aircraft Supplemental Type Certificate"],
            correct: "It requires certification acceptable to the operator's regulatory authority"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "What is the primary function of Operational Program Configuration (OPC) software in modern avionics Line-Replaceable Units?",
            options: ["It provides the basic program instructions for the unit's microprocessor", "It acts as a BIOS that cannot be modified by a standard data loader", "It records the flight-cycle history and serial number of the hardware"],
            correct: "It enables or disables optional functions to replace physical pin programming"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "Under what condition is it permitted to use an FLS storage medium that has a known defect?",
            options: ["If the data can be successfully verified after the loading process", "If the defect is only on the physical label and not the digital data", "If it is used only for Level E (No Effect) in-flight entertainment software"],
            correct: "Defective media must never be used and should be placed in quarantine"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "According to official software handling procedures, what is the maximum allowable rate of temperature change for FLS storage media?",
            options: ["10 (deg)C per hour", "15 (deg)C per hour", "25 (deg)C per hour"],
            correct: "20 (deg)C per hour"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "What documentation must accompany a Loadable Software Aircraft Part (LSAP) to ensure it is from an approved source?",
            options: ["A Certificate of Conformity from the airline's internal quality department", "A copy of the Aircraft Configuration List signed by a B1 or B2 engineer", "A manufacturer's service letter stating the software version status"],
            correct: "A JAA Form 1, FAA 8130-3, or an equivalent regulatory release document"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "Which hardware component is listed as a valid target for a Navigation Database (NDB) or Terrain Database (TDB)?",
            options: ["Air Data Computer (ADC)", "Electronic Control Unit (ECU)", "Digital Flight Data Acquisition Unit (DFDAU)"],
            correct: "Enhanced Ground Proximity Warning System (EGPWS)"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "Following the loading of a Loadable Software Aircraft Part (LSAP) on an aircraft, what is the final certification requirement?",
            options: ["A data loader confirmation screen must be photographed for the records", "The pilot in command must sign a statement of operational acceptance", "A service bulletin must be raised to update the Type Certificate"],
            correct: "An authorized staff member must issue a Certificate of Release to Service"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "When replicating LSAP copies, where must the activity be recorded to ensure the process remains traceable and auditable?",
            options: ["In the aircraft Technical Logbook under the maintenance section", "In the operator's Maintenance Management Exposition manual", "On the storage media label using a permanent industrial marker"],
            correct: "In an Aircraft Software Replication Register"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "Why are some critical systems like the Flight Control Computer (FCC) less likely to be modified via a standard data loader?",
            options: ["They use high-speed fiber optic links that data loaders cannot interface with", "The software is too large to fit on a standard 3.5-inch 1.44 MB floppy disc", "The memory units are located in pressurized areas that are inaccessible"],
            correct: "They utilize BIOS-type software stored on ROM, PROM, or EPROM"
            };
        },
            () => {
        return {
            topic: "Software Management",
            question: "The Mt Erebus disaster involving Flight 901 was a case study highlighting the catastrophic effects of what specific software-related failure?",
            options: ["A hardware mismatch between the FMC and the inertial reference unit", "A corruption of the Operating System during a high-speed data transfer", "A lightning strike that caused an indirect transient in the data bus"],
            correct: "Unapproved changes to coordinates within the navigation database"
            };
        },
            () => {
        return {
            topic: "Integrated Test Systems",
            question: "What differentiates a BITE Power Up Test from a Cyclic Test regarding operational execution and triggers?",
            options: ["Power Up Tests occur continuously without disturbing the system while Cyclic Tests only trigger after ground power cuts.", "Cyclic Tests verify memory data lines every 200 milliseconds while Power Up Tests only monitor software watchdogs.", "Power Up Tests are strictly ground-based manual requests while Cyclic Tests are automated safety compliance objectives."],
            correct: "Power Up Tests are triggered by ground power interruptions exceeding 200 milliseconds while Cyclic Tests run permanently during operation."
            };
        },
            () => {
        return {
            topic: "Integrated Test Systems",
            question: "In an Airbus On Board Maintenance System (OBMS), what specific advantage does the BITE \"Isolation\" step provide following detection?",
            options: ["It initiates a dry cranking cycle of the engines to clear intermittent sensor faults automatically.", "It disconnects the ARINC 429 data lines to prevent the failure from propagating to System Z.", "It triggers a software watchdog to restart the microprocessor if the RAM test fails during cyclic monitoring."],
            correct: "It identifies the specific failed Line Replaceable Unit (LRU) and determines if the fault is intermittent or permanent."
            };
        },
            () => {
        return {
            topic: "Integrated Test Systems",
            question: "What logic governs the execution of a BITE Power Up Test if the aircraft is currently airborne?",
            options: ["The test is inhibited entirely to prevent uncommanded movement of actuators or valves.", "The test runs at full duration but ignores all input/output circuit failures to maintain flight status.", "The test requires a manual override from the MCDU status page before the microprocessor can be tested."],
            correct: "The test is limited to a few critical items to enable a quick return to system operation."
            };
        },
            () => {
        return {
            topic: "Integrated Test Systems",
            question: "How is a \"Specific Test\" differentiated from a \"System Test\" in the BITE functional hierarchy?",
            options: ["Specific Tests check RAM and watchdogs while System Tests move flight control surfaces.", "System Tests are performed only during power-up while Specific Tests occur during cyclic monitoring.", "System Tests generate stimuli for valves while Specific Tests are used only after an LRU replacement."],
            correct: "Specific Tests generate stimuli for command devices like actuators while System Tests check general integrity for troubleshooting."
            };
        },
            () => {
        return {
            topic: "Communications and Reporting",
            question: "During an ACARS Management Unit (MU) BITE test initiated by the faceplate switch, what is the significance of the lamp sequence at the six-second mark?",
            options: ["All four lights illuminate red to indicate the GMT clock signal has successfully synchronized with the ground station.", "The lamps extinguish permanently to indicate the VHF transceiver has been keyed for digital tuning verification.", "A flashing amber light identifies that the Control Unit keyboard is ready for alphanumeric function inquiries."],
            correct: "The appropriate lamp illuminates either green for a pass or red to indicate a system failure after the initial lamp test phase."
            };
        },
            () => {
        return {
            topic: "Communications and Reporting",
            question: "How does the ACARS system improve aircraft turnaround time during maintenance events?",
            options: ["By automatically uploading new Field-Loadable Software (FLS) to the FMC while the aircraft is taxiing.", "By using the BITE circuit to bypass the Flight Management Computer and directly rig the flight control surfaces.", "By resetting the IRS alignment process remotely so the aircraft does not need to remain stationary for eight minutes."],
            correct: "By transmitting fault data to the ground during flight so parts and personnel are ready upon arrival."
            };
        },
            () => {
        return {
            topic: "Communications and Reporting",
            question: "What is the primary role of the ACARS Management Unit (MU) regarding time-stamping events?",
            options: ["It receives a time sync pulse from the ground-based transponder every 28 days.", "It extracts the GMT from the IRS alignment process after the eight-minute initialization.", "It utilizes the aircraft's master clock on the EFIS control panel to synchronize its telemetry."],
            correct: "It generates its own internal GMT clock signal used for recording the time of events."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "In an Electronic Flight Instrument System (EFIS) symbol generator, how does the main processor prevent memory access conflicts between the I/O and display sections?",
            options: ["It utilizes a digital to analog converter (DAC) to isolate the ARINC 429 bus from the internal RAM timing.", "It assigns the Raster Generator as a slave device that only reads from RAM when the I/O processor is in standby.", "It forces all stroke data to be written into the WXR memory before the raster data is allocated to storage locations."],
            correct: "It controls all activities to ensure there are no clashes between I/O writing to memory and the display controller reading from memory."
            };
        },
            () => {
        return {
            topic: "Logic Circuits",
            question: "Why is the Raster Generator considered the master timing device in an aircraft display system processing both raster and stroke data?",
            options: ["Because it converts all digital bus inputs into high-speed analog deflection signals for the CRT.", "Because it allocates storage locations in the RAM for both the I/O processors and the display sequencer.", "Because it prioritizes stroke video over the WXR input data to ensure the horizon is never obscured."],
            correct: "Because stroke data is drawn at the end of each row of pixels in the raster scan, requiring synchronized timing."
            };
        },
            () => {
        return {
            topic: "Electronic Flight Instrument Systems",
            question: "When performing a Radio Altimeter BITE test on the ground, what specific logic condition causes the red ANT LED to illuminate?",
            options: ["The Captain's EADI display indicates an altitude of exactly  $40 +/- 2.0$  feet for more than three seconds.", "The system detects that the R/T unit has failed to switch from standby to primary power within 15 seconds.", "Two separate system faults have been detected and stored in the non-volatile memory during the last four flights."],
            correct: "The BITE circuit detects that either the transmit (TX) or receive (RX) antenna has been grounded."
            };
        },
            () => {
        return {
            topic: "Electronic Flight Instrument Systems",
            question: "What is the primary operational purpose of the third (center) symbol generator in a typical 4-tube EFIS arrangement?",
            options: ["To manage the ACARS data link while the primary generators handle attitude and navigation displays.", "To act as a Bus Controller for MIL-STD 1553 signals when the ARINC 429 bus fails.", "To process engine secondary-partial data for display on the auxiliary EICAS during takeoff."],
            correct: "To provide redundancy by being switchable to either the Captain or First Officer displays if a primary generator fails."
            };
        },
            () => {
        return {
            topic: "Electronic Flight Instrument Systems",
            question: "In the Boeing EICAS system, how is symbol generation handled compared to the Airbus ECAM system?",
            options: ["Boeing uses independent Symbol Generator Units (SGUs) while Airbus incorporates them into the Flight Warning Computers.", "Boeing incorporates SGUs into the display units while Airbus uses a dedicated central symbol generator for all six screens.", "Boeing utilizes a dedicated hardware-based stroke generator while Airbus relies on software-emulated raster only."],
            correct: "Boeing does not use separate symbology generators; the function is performed directly by the EICAS computers."
            };
        },
            () => {
        return {
            topic: "Electronic Flight Instrument Systems",
            question: "What information is typically lost or replaced on the PFD when transitioning from an EADI/EHSI configuration to a modern Primary Flight Display?",
            options: ["The PFD removes the attitude director indicator to make room for the weather radar map.", "The PFD replaces the vertical speed indicator with a dedicated TCAS resolution advisory screen.", "The PFD eliminates the compass rose in favor of a digital-only Ground Speed (GS) readout."],
            correct: "The PFD integrates formerly separate instruments like the altimeter and airspeed indicator into a single tape-format screen."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "How does the symbol generator handle the integration of Weather Radar (WXR) and symbol data on a multifunction display?",
            options: ["It uses a stroke generator to draw radar pixels and a raster generator to draw circle and line symbology.", "It converts symbol data to analog signals which are then superimposed over the digital WXR memory map.", "It writes symbol data into the RAM first and then uses the WXR memory to mask the symbols for better contrast."],
            correct: "It writes WXR information into the memory first and then overwrites the symbol generator data on top for legibility."
            };
        },
            () => {
        return {
            topic: "Data Conversion",
            question: "In an ECAM system, what component is responsible for processing inputs from simple analog-based sensors before they reach the Flight Warning Computers?",
            options: ["The Symbol Generator Unit (SGU)", "The Maintenance Control Display Unit (MCDU)", "The ACARS Management Unit (MU)"],
            correct: "The Signal Analogue to Digital Converter"
            };
        },
            () => {
        return {
            topic: "EMI reduction",
            question: "Which shielding configuration is most effective at minimising low-frequency EMI in the audio range according to the text?",
            options: ["Foil wrap shields because they provide 100% component coverage.", "Non-ferrous braided shields with moderate mesh density.", "Single layer metallised Kevlar hybrids due to their lightweight structure."],
            correct: "Ferrous braided shields because their reduction efficiency depends on mesh count and wire diameter."
            };
        },
            () => {
        return {
            topic: "EMI reduction",
            question: "What is the primary reason that a 5-kVA power supply can fail conducted emissions limits at frequencies up to several megahertz?",
            options: ["The use of switch-mode fundamental frequencies between 2 and 500 kHz.", "The antenna effect caused by long earth conductor runs.", "Capacitive coupling between the internal bridge rectifier and the chassis."],
            correct: "Switching noise generated by its 50- or 60-Hz bridge rectifier at higher harmonics."
            };
        },
            () => {
        return {
            topic: "EMI reduction",
            question: "How does the use of twisted pair wiring in balanced circuits specifically eliminate inductive and capacitive pickup?",
            options: ["By increasing the impedance from each wire to earth to a maximum value.", "By ensuring the pull tension and bend radius stay within tight tolerances.", "By reflecting energy away from the conductors via a low-permeability layer."],
            correct: "By inducing equal and opposite currents in each wire that effectively cancel each other out."
            };
        },
            () => {
        return {
            topic: "EMI reduction",
            question: "In a multi-shielded cable design intended to protect internal conductors from external EMI, what logic determines the placement of the shield layers?",
            options: ["The high-permeability shield must be on the outside to reflect initial radiation.", "The low-permeability shield is placed in the center to absorb heat.", "A ferrous braid must be placed between two foil wraps for crosstalk reduction."],
            correct: "The low-permeability shield is placed closest to the source of interference to prevent radiation."
            };
        },
            () => {
        return {
            topic: "EMI reduction",
            question: "What is the functional purpose of a continuous ground plane under high-speed signal lines on a Printed Circuit Board (PCB)?",
            options: ["To act as a Faraday cage for the entire electronic assembly.", "To increase the ohmic resistance between the signal source and the receptor.", "To provide a high-impedance path that dissipates high-voltage transients."],
            correct: "To provide shielding from EMI and reduce emissions and crosstalk."
            };
        },
            () => {
        return {
            topic: "EMI reduction",
            question: "What is the goal of structure shielding in relation to the \"Faraday cage\" principle?",
            options: ["To ensure the total charge inside the fuselage is always positive.", "To eliminate the need for static wick dischargers on wing tips.", "To replace metal structures with more conductive composite materials."],
            correct: "To seal cracks and holes in the fuselage to make the enclosed charge zero."
            };
        },
            () => {
        return {
            topic: "EMI reduction",
            question: "What is a significant disadvantage of using twisted pair wiring for EMI protection during maintenance/installation?",
            options: ["It increases the weight of the aircraft compared to coaxial cabling.", "It requires the addition of RF filters at both ends of the cable.", "It makes the circuit unbalanced due to equal impedance to earth."],
            correct: "Susceptibility increases if twisting schemes are damaged by over-tension."
            };
        },
            () => {
        return {
            topic: "EMI reduction",
            question: "Why are capacitors often placed across potentially \"noisy\" components like relays and motors?",
            options: ["To provide a low-permeability path for magnetic field induction.", "To increase the \"compass safe distance\" of the LRU.", "To act as a backup power supply during high-voltage transients."],
            correct: "To act as filters to reduce the interference generated by these components."
            };
        },
            () => {
        return {
            topic: "Shielding",
            question: "Why is a foil shield generally considered less effective than a braided shield for preventing low-frequency EMI?",
            options: ["Foil provides 100% coverage which creates excessive parasitic capacitance.", "Foil is only suitable for shielding individual pairs to prevent crosstalk.", "The dielectric film used in foil shields is too permeable to magnetic fields."],
            correct: "The resistance of a foil shield is too high because the material is very thin."
            };
        },
            () => {
        return {
            topic: "Shielding",
            question: "In a multi-shield construction, where does the \"First Boundary Reflection Loss\" specifically occur?",
            options: ["At the inside surface of the outer shield after penetration.", "At the outside surface of the inner high-permeability shield.", "Within the permeable material where absorption takes place."],
            correct: "At the outside surface of the outer shield when incident radiation strikes it."
            };
        },
            () => {
        return {
            topic: "Shielding",
            question: "What is the \"Broadband Coverage\" strategy for effective EMI/RFI management in cable design?",
            options: ["Using non-ferrous braids for both high and low frequencies.", "Utilizing fiber optics to replace all copper-based shielding.", "Separating the power and signal wiring by at least 150 mm."],
            correct: "Using a braid for low frequencies and a foil for high frequencies."
            };
        },
            () => {
        return {
            topic: "Shielding",
            question: "What happens to a conductor's efficiency as an antenna when its length equals one-fourth of the signal's wavelength?",
            options: ["Its efficiency drops to nearly 0% due to reflection losses.", "It becomes a perfect insulator against radiated emissions.", "It begins to act as a Faraday cage for the signal."],
            correct: "It becomes a perfect converter of signals to fields."
            };
        },
            () => {
        return {
            topic: "Coupling paths",
            question: "At what distance from the source do electric and magnetic fields typically develop into full electromagnetic (EM) fields for a 300 MHz signal?",
            options: ["At a distance equal to the wavelength (approx. 1 metre).", "At a distance of approximately 50 mm from the conductor.", "At distances less than one-sixth of the wavelength (approx. 25 mm)."],
            correct: "At a distance of approximately 150 mm from the conductor."
            };
        },
            () => {
        return {
            topic: "Coupling paths",
            question: "What specific mechanism allows personal electronic devices (PEDs) to interfere with navigation receivers despite airframe shielding?",
            options: ["Conductive coupling through the aircraft's 115V AC power bus.", "Magnetic field induction through the aluminium skin of the fuselage.", "Static discharge from the device screen to the composite floor panels."],
            correct: "Radiation through passenger windows being picked up by external antennas."
            };
        },
            () => {
        return {
            topic: "Coupling paths",
            question: "Which coupling path category involves magnetic fields as the primary mode of energy transfer?",
            options: ["Radiated coupling.", "Capacitively coupled.", "Conducted coupling."],
            correct: "Inductively coupled."
            };
        },
        