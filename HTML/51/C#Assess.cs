using System;
using System.Collections.Generic;

public class Shirt
{
    public string Color { get; set; }
    public string Pattern { get; set; }

    public Shirt(string color, string pattern)
    {
        Color = color;
        Pattern = pattern;
    }

    public override string ToString()
    {
        return $"{Color}:{Pattern}";
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        // Define colors and patterns
        List<string> colors = new List<string> { "red", "green", "blue" };
        List<string> patterns = new List<string> { "striped", "checked", "plain" };

        // Create a list to hold all shirts
        List<Shirt> shirts = new List<Shirt>();

        // Generate all possible combinations of colors and patterns
        foreach (var color in colors)
        {
            foreach (var pattern in patterns)
            {
                shirts.Add(new Shirt(color, pattern));
            }
        }

        // Print all shirts
        foreach (var shirt in shirts)
        {
            Console.WriteLine(shirt);
        }
    }
}