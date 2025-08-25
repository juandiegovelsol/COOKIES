def count_long_words(text):
  words = text.split()
  long_words = [w for w in words if len(w) > 5]
  print("Words with more than 5 letters:", long_words)
  return len(long_words)

sentence1 = "What is essential is invisible to the eye"
sentence2 = "You become responsible, forever, for what you have tamed."
sentence3 = "All grown-ups were once children, but only few of them remember it."

print("Final result sentence 1: ", count_long_words(sentence1))
print("Final result sentence 2: ", count_long_words(sentence2))
print("Final result sentence 3: ", count_long_words(sentence3))