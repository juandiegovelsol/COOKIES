import statistics
import numpy as np

def detect_sales_outliers(daily_sales):
    """Detects outlier sales days using IQR method"""
    if not daily_sales:
        return [], None  # Return None if no sales data

    sorted_sales = sorted(daily_sales)
    n = len(sorted_sales)
    
    q1 = np.percentile(sorted_sales, 25)
    q3 = np.percentile(sorted_sales, 75)
    iqr = q3 - q1

    lower_bound = q1 - 1.5 * iqr
    upper_bound = q3 + 1.5 * iqr

    outliers = []
    for sale in daily_sales:
        if sale < lower_bound or sale > upper_bound:
            outliers.append(sale)

    median = statistics.median(daily_sales)
    
    # Check if outliers list is empty before using max
    if outliers:
        most_extreme = max(outliers, key=lambda x: abs(x - median))
    else:
        most_extreme = None  # Or return a default value like "No outliers"

    return outliers, most_extreme

# Example sale data
january_sales = [1200, 1350, 1180, 1290, 1220, 3380, 3150, 1340, 1280, 1190, 1250, 1320, 1170, 1310]
february_sales = [1250, 1280, 1270, 1265, 1295, 1270, 1280, 1275, 1290]

jan_outliers, jan_extreme = detect_sales_outliers(january_sales)
print(f"January outliers: {jan_outliers}")
print(f"Most extreme day: {jan_extreme}")

feb_outliers, feb_extreme = detect_sales_outliers(february_sales)
print(f"February outliers: {feb_outliers}")
print(f"Most extreme day: {feb_extreme}")