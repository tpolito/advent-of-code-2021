defmodule DayOne do
  def get_data do
    File.read!("input.txt")
    |> String.split("\n", trim: true)
    |> Enum.map(fn x -> Integer.parse(x) end)
  end

  def part_one() do
    get_data()
    |> Enum.chunk_every(2, 1)
    |> Enum.filter(fn x -> length(x) > 1 end)
    |> Enum.filter(fn [x, y] -> y > x end)
    |> Enum.count()
    |> IO.inspect()
  end

  def part_two() do
    get_data()
    |> Enum.chunk_every(3, 1)
    |> Enum.filter(fn x -> length(x) > 2 end)
    |> Enum.map(fn x -> Enum.sum(x) end)
    |> Enum.chunk_every(2, 1)
    |> Enum.filter(fn x -> length(x) > 1 end)
    |> Enum.filter(fn [x, y] -> y > x end)
    |> Enum.count()
    |> IO.inspect()
  end
end

DayOne.part_one()
DayOne.part_two()
