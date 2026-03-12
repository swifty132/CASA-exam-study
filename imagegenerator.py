import schemdraw
import schemdraw.elements as elm
import os

# Create the nested directory structure if it doesn't exist
os.makedirs('images/mod4', exist_ok=True)

symbols = {
    'diode_pn.png': elm.Diode().label('Terminal 1', 'left').label('Terminal 2', 'right'),
    'diode_zener.png': elm.Zener().label('Terminal 1', 'left').label('Terminal 2', 'right'),
    'diode_led.png': elm.LED().label('Terminal 1', 'left').label('Terminal 2', 'right'),
    'diode_photo.png': elm.Photodiode().label('Terminal 1', 'left').label('Terminal 2', 'right'),
    'diode_schottky.png': elm.Schottky().label('Terminal 1', 'left').label('Terminal 2', 'right'),
    'diode_varactor.png': elm.Varactor().label('Terminal 1', 'left').label('Terminal 2', 'right'),
    'transistor_npn.png': elm.BjtNpn(circle=True),
    'transistor_pnp.png': elm.BjtPnp(circle=True),
    'transistor_jfet.png': elm.JFetN(circle=True),
    'transistor_mosfet.png': elm.NFet(),  # Updated class name here
    'thyristor_scr.png': elm.SCR(),
    'thyristor_triac.png': elm.Triac()
}

count = 1
for filename, element in symbols.items():
    print(f"{count}/12 Generating {filename}...")
    with schemdraw.Drawing(file=f'images/mod4/{filename}', show=False) as d:
        d.config(fontsize=14)
        d += element
    count += 1

print("Done! All 12 component symbols saved to the 'images/mod4' folder.")