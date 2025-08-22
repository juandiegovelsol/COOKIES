import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Wedge

def draw_ring_with_cutout():
    center = (0.5, 0.5)
    center_cut = center  # Change this line to match the center
    outer_radius = 0.4
    cutout_angles = (45, 135)
    cutout_radius = 0.4

    fig, ax = plt.subplots()

    ax.add_patch(Circle(center, outer_radius, color='saddlebrown', ec='black', lw=2))
    ax.add_patch(Wedge(center_cut, cutout_radius, *cutout_angles, facecolor='white', edgecolor='white'))

    ax.set_aspect('equal')
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')
    plt.show()

draw_ring_with_cutout()