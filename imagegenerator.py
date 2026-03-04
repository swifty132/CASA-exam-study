import schemdraw
import schemdraw.elements as elm
import os

# Create the nested directory structure if it doesn't exist
os.makedirs('images/mod4', exist_ok=True)

print("1/4 Generating Direct Coupling...")
with schemdraw.Drawing(file='images/mod4/direct_coupling.png', show=False) as d:
    d.config(fontsize=14)
    Q1 = elm.BjtNpn(circle=True).label('Q1', loc='bottom')
    d += Q1
    d += elm.Line().up().at(Q1.collector).length(1)
    d += elm.Resistor().up().label('R_C1')
    d += elm.Vdd().label('+Vcc')
    
    # Direct connection from Q1 Collector to Q2 Base
    d += elm.Line().right().at(Q1.collector).length(2)
    Q2 = elm.BjtNpn(circle=True).anchor('base').label('Q2', loc='bottom')
    d += Q2
    
    d += elm.Line().up().at(Q2.collector).length(1)
    d += elm.Resistor().up().label('R_C2')
    d += elm.Vdd().label('+Vcc')
    
    d += elm.Line().down().at(Q1.emitter).length(1)
    d += elm.Ground()
    d += elm.Line().down().at(Q2.emitter).length(1)
    d += elm.Ground()
    
    d += elm.Line().left().at(Q1.base).length(1)
    d += elm.Dot(open=True).label('V_in', loc='left')
    d += elm.Line().right().at(Q2.collector).length(1)
    d += elm.Dot(open=True).label('V_out', loc='right')

print("2/4 Generating Darlington Pair...")
with schemdraw.Drawing(file='images/mod4/darlington_pair.png', show=False) as d:
    d.config(fontsize=14)
    Q1 = elm.BjtNpn(circle=True).label('Q1')
    d += Q1
    d += elm.Line().right().at(Q1.emitter).length(1)
    Q2 = elm.BjtNpn(circle=True).anchor('base').label('Q2')
    d += Q2
    
    # Connect collectors
    d += elm.Line().up().at(Q1.collector).toy(Q2.collector)
    d += elm.Line().right().tox(Q2.collector)
    d += elm.Dot()
    d += elm.Line().up().length(1)
    d += elm.Dot(open=True).label('Collector (C)', loc='top')
    
    d += elm.Line().left().at(Q1.base).length(1)
    d += elm.Dot(open=True).label('Base (B)', loc='left')
    
    d += elm.Line().down().at(Q2.emitter).length(1)
    d += elm.Dot(open=True).label('Emitter (E)', loc='bottom')

print("3/4 Generating Voltage Divider Bias...")
with schemdraw.Drawing(file='images/mod4/voltage_divider_bias.png', show=False) as d:
    d.config(fontsize=14)
    d += elm.Vdd().label('+Vcc')
    d += elm.Line().down().length(0.5)
    d += elm.Dot()
    d.push()
    d += elm.Resistor().down().label('R1')
    d += elm.Dot()
    d.push()
    d += elm.Line().right().length(1.5)
    Q1 = elm.BjtNpn(circle=True).anchor('base')
    d += Q1
    d.pop()
    d += elm.Resistor().down().label('R2')
    d += elm.Ground()
    d.pop()
    d += elm.Line().right().length(3.2)
    d += elm.Resistor().down().label('R_C').toy(Q1.collector)
    d += elm.Line().left().tox(Q1.collector)
    d += elm.Line().down().at(Q1.emitter).length(1)
    d += elm.Resistor().down().label('R_E')
    d += elm.Ground()

print("4/4 Generating Active High-Pass Filter...")
with schemdraw.Drawing(file='images/mod4/active_highpass.png', show=False) as d:
    d.config(fontsize=14)
    op = elm.Opamp(sign=True)
    d += op
    
    # Input network (High Pass RC)
    d += elm.Line().left().at(op.in2).length(1)
    d += elm.Dot()
    d.push()
    d += elm.Resistor().down().label('R')
    d += elm.Ground()
    d.pop()
    d += elm.Capacitor().left().label('C')
    d += elm.Dot(open=True).label('V_in', loc='left')
    
    # Feedback loop (Voltage follower style for simplicity)
    d += elm.Line().left().at(op.in1).length(1)
    d += elm.Line().up().length(1.5)
    d += elm.Line().right().tox(op.out)
    d += elm.Line().down().toy(op.out)
    d += elm.Dot()
    d += elm.Line().right().at(op.out).length(1)
    d += elm.Dot(open=True).label('V_out', loc='right')

print("Done! New Module 4b images saved to the 'images/mod4' folder.")