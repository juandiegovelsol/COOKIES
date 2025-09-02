from matplotlib_venn import venn3
import matplotlib.pyplot as plt

sneakers = {"Ava","Ben","Cara","Diego","Eva","Finn","Gina","Holly"}
hoodies = {"Cara","Diego","Finn","Ivy","Jack","Liam","Mia","Noah"}
caps = {"Ben","Cara","Gina","Ivy","Kyle","Maya","Noah","Owen"}

plt.figure(figsize=(7,7))
venn3([sneakers, hoodies, caps], set_labels=("Sneakers buyers","Hoodies buyers","Caps buyers"), set_colors=("cornflowerblue","lightcoral","yellowgreen"))
plt.title("E-commerce: customer overlap by product category")
plt.tight_layout()
plt.show()
