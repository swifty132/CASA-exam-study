import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np
import os

output_dir = "images/mod3"
if not os.path.exists(output_dir): os.makedirs(output_dir)

# 1. RL Vector Diagram
fig, ax = plt.subplots(figsize=(4,4)); ax.axis('off'); ax.set_xlim(-1,4); ax.set_ylim(-1,4)
ax.arrow(0,0,3,0, head_width=0.1, color='k'); ax.text(1.5, -0.3, 'Current (I)')
ax.arrow(0,0,0,3, head_width=0.1, color='r'); ax.text(0.1, 1.5, 'Voltage (V)', color='r')
ax.arrow(0,0,3,3, head_width=0.1, color='b', ls='--'); ax.text(2, 2, 'Impedance (Z)', color='b')
plt.title("RL Circuit Vector"); plt.savefig(f"{output_dir}/vector_rl.png", bbox_inches='tight'); plt.close()

# 2. Transformer
fig, ax = plt.subplots(figsize=(5,3)); ax.axis('off'); ax.set_xlim(0,5); ax.set_ylim(0,3)
rect = patches.Rectangle((2, 0.5), 1, 2, fc='gray', alpha=0.3); ax.add_patch(rect)
# Primary
for i in range(5): ax.plot([1.8, 2], [0.6 + i*0.4, 0.6 + i*0.4], 'k-')
ax.text(1, 1.5, 'Primary\n(100 Turns)', ha='center')
# Secondary
for i in range(10): ax.plot([3, 3.2], [0.6 + i*0.2, 0.6 + i*0.2], 'b-')
ax.text(4, 1.5, 'Secondary\n(200 Turns)', ha='center', color='b')
plt.title("Transformer Ratio"); plt.savefig(f"{output_dir}/transformer.png", bbox_inches='tight'); plt.close()

# 3. Bridge Rectifier
fig, ax = plt.subplots(figsize=(4,4)); ax.axis('off'); ax.set_xlim(-2,2); ax.set_ylim(-2,2)
# Diamond
ax.plot([0, 1.5, 0, -1.5, 0], [1.5, 0, -1.5, 0, 1.5], 'k-')
ax.text(0.8, 0.8, 'D1'); ax.text(0.8, -0.8, 'D2'); ax.text(-0.8, -0.8, 'D3'); ax.text(-0.8, 0.8, 'D4')
ax.text(0, 0, 'AC IN', ha='center', fontsize=8)
ax.arrow(1.5, 0, 0.5, 0, head_width=0.1, color='r'); ax.text(1.8, 0.2, '+ DC')
plt.title("Full Wave Rectifier"); plt.savefig(f"{output_dir}/bridge_rectifier.png", bbox_inches='tight'); plt.close()

# 4. Logic Gate (AND)
fig, ax = plt.subplots(figsize=(4,2)); ax.axis('off'); ax.set_xlim(0,4); ax.set_ylim(0,2)
ax.plot([0, 1], [1.5, 1.5], 'k-'); ax.text(-0.2, 1.5, 'A')
ax.plot([0, 1], [0.5, 0.5], 'k-'); ax.text(-0.2, 0.5, 'B')
# D shape
ax.plot([1, 1], [0.2, 1.8], 'k-')
arc = patches.Arc((1, 1), 2, 1.6, theta1=-90, theta2=90, color='k'); ax.add_patch(arc)
ax.plot([2, 3], [1, 1], 'k-'); ax.text(3.1, 1, 'Q')
plt.title("Identify Gate"); plt.savefig(f"{output_dir}/logic_gate.png", bbox_inches='tight'); plt.close()

# 5. Internal Resistance
fig, ax = plt.subplots(figsize=(5,3)); ax.axis('off'); ax.set_xlim(0,5); ax.set_ylim(0,3)
rect = patches.Rectangle((0.5, 0.5), 2.5, 2, fill=False, ls='--'); ax.add_patch(rect)
ax.text(1.7, 2.6, 'Battery Unit'); ax.plot([1, 1], [1, 2], 'k-', lw=3); ax.plot([1.5, 1.5], [1.2, 1.8], 'k-', lw=3)
ax.plot([1.8, 2.2], [1.5, 1.5], 'r-'); ax.text(2, 1.6, 'r (int)', color='r', fontsize=8)
ax.plot([3, 4], [1.5, 1.5], 'k-'); ax.text(3.5, 1.6, 'Load')
plt.title("Internal Resistance"); plt.savefig(f"{output_dir}/battery_internal.png", bbox_inches='tight'); plt.close()

# 6. KCL Node
fig, ax = plt.subplots(figsize=(4,4)); ax.axis('off'); ax.set_xlim(-2,2); ax.set_ylim(-2,2)
ax.plot([-2, 2], [0, 0], 'k-'); ax.plot([0, 0], [-2, 2], 'k-')
circle = patches.Circle((0,0), 0.1, color='k'); ax.add_patch(circle)
ax.arrow(-1.5, 0, 0.5, 0, head_width=0.2, color='g'); ax.text(-1.5, 0.3, '5A In', color='g')
ax.arrow(0, 1.5, 0, -0.5, head_width=0.2, color='g'); ax.text(0.2, 1.5, '3A In', color='g')
ax.arrow(0.5, 0, 0.5, 0, head_width=0.2, color='r'); ax.text(1, 0.3, 'I_out = ?', color='r')
plt.title("Kirchhoff's Current Law"); plt.savefig(f"{output_dir}/kcl_node.png", bbox_inches='tight'); plt.close()

# 7. Relay Schematic
fig, ax = plt.subplots(figsize=(4,3)); ax.axis('off'); ax.set_xlim(0,4); ax.set_ylim(0,3)
# Coil
for i in range(4): ax.add_patch(patches.Arc((1, 0.5 + i*0.4), 0.5, 0.4, theta1=0, theta2=180))
ax.text(1, 2.5, 'Coil')
# Switch
ax.plot([2.5, 3.5], [1, 1.5], 'k-', lw=2); ax.plot([3.5, 3.5], [1.5, 1.5], 'ko')
ax.text(3, 2, 'Contact'); ax.plot([2.5, 2.5], [1, 0.5], 'k--')
plt.title("Identify Component"); plt.savefig(f"{output_dir}/relay_schematic.png", bbox_inches='tight'); plt.close()

# 8. Thermocouple
fig, ax = plt.subplots(figsize=(5,3)); ax.axis('off'); ax.set_xlim(0,5); ax.set_ylim(0,3)
ax.plot([1, 4], [2, 2], 'r-', lw=2, label='Metal A')
ax.plot([1, 4], [1, 1], 'b-', lw=2, label='Metal B')
ax.plot([1, 1], [1, 2], 'k-', lw=4); ax.text(0.5, 1.5, 'Hot Junction')
ax.plot([4, 4], [1, 2], 'k-', lw=4); ax.text(4.2, 1.5, 'Cold Junction')
ax.text(2.5, 2.2, 'Copper'); ax.text(2.5, 0.8, 'Constantan')
plt.title("Thermocouple Principle"); plt.savefig(f"{output_dir}/thermocouple.png", bbox_inches='tight'); plt.close()

# 9. Potentiometer
fig, ax = plt.subplots(figsize=(3,4)); ax.axis('off'); ax.set_xlim(0,3); ax.set_ylim(0,4)
# Resistor Zigzag
y = np.linspace(1, 3, 10); x = 1.5 + 0.2*np.sin(y*10)
ax.plot(x, y, 'k-')
# Wiper
ax.arrow(0.5, 2, 0.8, 0, head_width=0.1, color='r'); ax.text(0.2, 2, 'Wiper', color='r')
ax.text(1.5, 3.2, 'A'); ax.text(1.5, 0.8, 'B')
plt.title("Voltage Divider"); plt.savefig(f"{output_dir}/potentiometer.png", bbox_inches='tight'); plt.close()

# 10. DC Motor
fig, ax = plt.subplots(figsize=(4,4)); ax.axis('off'); ax.set_xlim(-2,2); ax.set_ylim(-2,2)
circle = patches.Circle((0,0), 1, fill=False); ax.add_patch(circle)
ax.text(0, 0, 'Armature', ha='center')
rect1 = patches.Rectangle((-0.2, 1), 0.4, 0.4, fc='black'); ax.add_patch(rect1)
rect2 = patches.Rectangle((-0.2, -1.4), 0.4, 0.4, fc='black'); ax.add_patch(rect2)
ax.text(0.5, 1.2, 'Brush', fontsize=8)
plt.title("DC Motor Parts"); plt.savefig(f"{output_dir}/dc_motor_parts.png", bbox_inches='tight'); plt.close()