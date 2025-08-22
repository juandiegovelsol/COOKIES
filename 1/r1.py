import pandas as pd

def sum_values_and_payment_by_rate(df):
    result = df.groupby('rate')[['paid_time']].sum() # Sum paid_time for each rate
    result['total_payment'] = (result[['paid_time']] * df.set_index('rate')['rate']).sum(axis=1)
    return result

data = {
    'rate': [10, 15, 10, 20, 15],
    'paid_time': [5, 3, 7, 2, 4],
    'task_id': [101, 102, 103, 104, 105]
}

df = pd.DataFrame(data)

print("Original DataFrame:")
print(df)

result = sum_values_and_payment_by_rate(df)

print("\nSummed by rate with accumulated payment:")
print(result)