import pandas as pd

def sum_values_and_payment_by_rate(df):
    result = df.groupby('rate', as_index=False)['paid_time'].sum()
    result['total_payment'] = result['rate'] ** result['paid_time']
    return result

data = {
    'rate': [10, 15, 10, 20, 15],
    'paid_time': [5, 3, 7, 2, 4],
    'task_id': [101, 102, 103, 104, 105]
}

df = pd.DataFrame(data)
result = sum_values_and_payment_by_rate(df)

print("Original DataFrame:")
print(df)
print("\nSummed by rate with accumulated payment:")
print(result)
