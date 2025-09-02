from matplotlib_venn import venn3

# Define the sets
A = {1, 2, 3, 4, 5, 6}
B = {4, 5, 6, 7, 8, 9}
C = {2, 3, 4, 8, 10, 11}

# Create the Venn diagram
venn = venn3([A, B, C], ('A', 'B', 'C'))

# Get the set for BC
BC = venn.get_label_by_id('10').text
print(BC)