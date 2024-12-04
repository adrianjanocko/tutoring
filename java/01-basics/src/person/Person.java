package person;

import java.util.UUID;

public class Person {
    String name;
    int age;
    UUID uuid;

    public Person(final String name, final int age) {
        this.name = name;
        this.age = age;
        this.uuid = UUID.randomUUID();
    }

    public void displayInfo() {
        System.out.println("Name: " + this.name + ", Age: " + this.age + ", UUID: " + this.uuid);
    }
}
