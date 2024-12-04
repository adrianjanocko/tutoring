import animal.Animal;
import animal.Dog;
import person.Person;

public class Main {

    public static void main(final String[] args) {
        final int age = 0;
        final double height = 175.5;
        final String name = "Adrián";
        final boolean isStudent = false;

        System.out.println("Meno: " + name);
        System.out.printf("%d %f %s", age, height, (isStudent ? "Áno" : "Nie") + "\n");

        if (isStudent)
            System.out.println("Študent");
        else
            System.out.println("✖️");

        if (age > 0) {
            System.out.println("Kladné");
            System.out.println("Test");
        } else if (age < 0)
            System.out.println("Záporné");
        else
            System.out.println("Nula");

        for (int i = 1; i <= 10; i++)
            System.out.println(i);

        //List<Integer> numbers = List.of(15, 12, 5);

        final int[] numbers = {12, 3, 5};

        for (final int number : numbers)
            System.out.println("Číslo: " + number);

        int count = 5;

        while (count >= 0) {
            System.out.println("Ostáva: " + count);
            count--;
        }

        final int result = sum(5, 11);
        System.out.println("Súčet: " + result);

        final String test1 = "Test";
        final String test2 = "Test";

        if (test1.equals(test2))
            System.out.println("Stringy sa zhodujú");

        final boolean test3 = true;
        final boolean test4 = true;

        if (test3 == test4)
            System.out.println("Booleany sa zhodujú.");

        final Person person1 = new Person("Adrián", 20);
        final Person person2 = new Person("Peter", 20);
        person1.displayInfo();
        person2.displayInfo();

        final Animal animal = new Animal();
        animal.sound();

        final Dog dog = new Dog();
        dog.sound();
    }

    private static int sum(final int a, final int b) {
        return a + b;
    }

}