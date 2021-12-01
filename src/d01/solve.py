def get_inputs_from_file() -> list:
    return [int(j) for j in open('input.txt', 'r').read().strip().split('\n')]


def part_one(depths):
    count = 0

    for i, j in zip(depths[:-1], depths[1:]):
        if i < j:
            count += 1
    return count


def part_two(depths):
    count = 0
    prev = sum(depths[0:3])

    for i in range(1, len(depths)-2):
        if sum(depths[i:i+3]) > prev:
            count += 1
        prev = sum(depths[i:i+3])
    return count


def main():
    depths = get_inputs_from_file()

    print("Part 1 answer is: ", part_one(depths))
    print("Part 2 answer is : ", part_two(depths))


main()
