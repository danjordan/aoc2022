import { sumOf } from "https://deno.land/std@0.167.0/collections/sum_of.ts";
import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

function main(input: string): number {
  const elves = input.split("\n\n").map((elf) => elf.split("\n").map(Number));

  const calories = elves.map((meals) => sumOf(meals, (_) => _));

  return Math.max(...calories);
}

Deno.test("main", () => {
  const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;
  assertEquals(main(input), 24000);
});

const input = await Deno.readTextFile("./input.txt");
console.log(main(input));
