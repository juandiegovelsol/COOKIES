import matplotlib.pyplot as plt
from matplotlib.patches import Circle, Wedge

def draw_ring_with_cutout():
    center = (0.5, 0.5)
    center_cut = (0.9, 0.9)
    outer_radius = 0.4
    cutout_angles = (45, 135)
    cutout_radius = 0.6  # Increased this to be greater than outer_radius

    fig, ax = plt.subplots()

    # Correctly use outer_radius for the Circle
    ax.add_patch(Circle(center, outer_radius, color='saddlebrown', ec='black', lw=2))

    # Make sure cutout_radius is greater than outer_radius
    ax.add_patch(Wedge(center_cut, cutout_radius, *cutout_angles, facecolor='white', edgecolor='white'))

    ax.set_aspect('equal')
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.axis('off')
    plt.show()

draw_ring_with_cutout()