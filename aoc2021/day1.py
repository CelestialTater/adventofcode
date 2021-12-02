# Advent of Code 2021 - Day 1

# Splitting input file into the form I want
input = open('aoc2021/day1input.txt', 'r')
lines = input.read()
lines = lines.splitlines()

# Part 1
greaterCount = 0
for index in range(1, len(lines)):
    if int(lines[index]) > int(lines[index-1]):
        greaterCount += 1
        
print(greaterCount)

# Part 2
greaterWindows = 0
for index in range(0, len(lines) - 3):
    sum = int(lines[index]) + int(lines[index+1]) + int(lines[index+2])
    nextSum = int(lines[index+1]) + int(lines[index+2]) + int(lines[index+3])
    if nextSum > sum:
        greaterWindows += 1
print(greaterWindows)