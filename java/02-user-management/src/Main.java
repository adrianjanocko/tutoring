import user.User;
import user.UserManagement;

import java.util.Scanner;
import java.util.UUID;

public class Main {
    public static void main(final String[] args) {
        final UserManagement userManagement = new UserManagement();
        final Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("=== Rezervačný systém ===");
            System.out.println("1. Pridať používateľa");
            System.out.println("2. Zobraziť všetkých používateľov");
            System.out.println("3. Upraviť používateľa");
            System.out.println("4. Odstrániť používateľa");

            System.out.print("Zvoľte možnosť: ");
            final int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1 -> {
                    System.out.print("Meno: ");
                    final String name = scanner.nextLine();
                    System.out.print("Email: ");
                    final String email = scanner.nextLine();
                    System.out.print("Telefón: ");
                    final String phone = scanner.nextLine();
                    final User user = new User(name, email, phone);
                    userManagement.addUser(user);
                    System.out.println("Používateľ pridaný: " + user);
                }
                case 2 -> {
                    System.out.println("Všetci používatelia:");
                    userManagement.listUsers();
                }
                case 3 -> {
                    System.out.print("Zadajte ID používateľa: ");
                    final String uuid = scanner.nextLine();

                    final User user = userManagement.findUserById(UUID.fromString(uuid));

                    if (user != null) {
                        System.out.print("Zadajte nové meno (aktuálne: " + user.getName() + "): ");
                        final String name = scanner.nextLine();
                        user.setName(name);
                        System.out.print("Zadajte nový email (aktuálne: " + user.getEmail() + "): ");
                        final String email = scanner.nextLine();
                        user.setEmail(email);
                        System.out.print("Zadajte nový telefón (aktuálne: " + user.getPhone() + "): ");
                        final String phone = scanner.nextLine();
                        user.setPhone(phone);

                        System.out.println("Používateľ upravený: " + user);
                    } else
                        System.out.println("Používateľ s ID `" + uuid + "` neexistuje.");

                }
                case 4 -> {
                    System.out.print("Zadajte ID používateľa na odstránenie: ");
                    final String uuid = scanner.nextLine();

                    final User user = userManagement.findUserById(UUID.fromString(uuid));

                    if (user != null) {
                        userManagement.removeUser(user);

                        System.out.println("Používateľ odstránený.");
                    } else
                        System.out.println("Používateľ s ID `" + uuid + "` neexistuje.");
                }

                default -> System.out.println("Neplatná možnosť. Skúste znova.");
            }
        }
    }
}
