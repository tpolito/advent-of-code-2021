extends Node2D

func _ready() -> void:
	var commands = []
	for command in load_input():
		var data = command.split(' ')
		
		commands.push_back({"dir": data[0], "mag": int(data[1])})
	solve_both(commands)

func load_input():
	var file = File.new()
	file.open("res://src/day02/input.txt", File.READ)	
	var content = file.get_as_text()
	file.close()
	return content.split('\n')

func solve_both(commands):
	var aim = 0
	var depth = 0
	var hpos = 0
	
	for cmd in commands:
		match cmd["dir"]:
			"down":
				aim += cmd["mag"]
			"up":
				aim -= cmd["mag"]
			"forward":
				hpos += cmd["mag"]
				depth += aim*cmd["mag"]
				
	print("pt1: " + str((aim*hpos)))
	print("pt2: " + str((depth*hpos)))
