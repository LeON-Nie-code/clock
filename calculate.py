import math

def calculate_dot_on_circle(theta, radius, x, y):
    return ((x + radius * math.cos(theta)), y + radius * math.sin(theta))  

def _main_():
    for i in range(0, 360, 6):
        dot_0 = calculate_dot_on_circle(math.radians(i), 48, 50, 50)
        formatted_dot_0 = (f"{dot_0[0]:.4f}", f"{dot_0[1]:.4f}")

        dot_1 = calculate_dot_on_circle(math.radians(i), 46, 50, 50)
        formatted_dot_1 = (f"{dot_1[0]:.4f}", f"{dot_1[1]:.4f}")

        print(f'<line x1="{float(formatted_dot_0[0])}" y1="{float(formatted_dot_0[1])}" x2="{float(formatted_dot_1[0])}" y2="{float(formatted_dot_1[1])}" stroke="red" stroke-width="0.5"/>')

if __name__ == "__main__":
    _main_()
