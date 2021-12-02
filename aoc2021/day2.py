# Advent of Code 2021 - Day 2

# Splitting input file into the form I want
input = open('aoc2021/day2input.txt', 'r')
lines = input.read().splitlines()
input.close()
for index in range(len(lines)):
    lines[index] = lines[index].split(' ')

# Part 1
horizontalPos = 0
depth = 0
for line in lines:
    if line[0] == 'forward':
        horizontalPos += int(line[1])
    elif line[0] == 'down':
        depth += int(line[1])
    elif line[0] == 'up':
        depth -= int(line[1])
print(horizontalPos * depth)

# Part 2
horizontalPos = 0
depth = 0
aim = 0
for line in lines:
    if line[0] == 'forward':
        horizontalPos += int(line[1])
        depth += (int(line[1]) * aim)
    elif line[0] == 'down':
        aim += int(line[1])
    elif line[0] == 'up':
        aim -= int(line[1])
print(horizontalPos * depth)