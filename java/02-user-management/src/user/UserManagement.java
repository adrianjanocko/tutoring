package user;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class UserManagement {
    private final List<User> users;

    public UserManagement() {
        this.users = new ArrayList<>();
    }

    public void addUser(final User user) {
        this.users.add(user);
    }

    public boolean removeUser(final User user) {
        return this.users.remove(user);
    }

    public User findUserById(final UUID uuid) {
        return this.users.stream().filter(user -> user.getUuid().equals(uuid)).findFirst().orElse(null);
    }

    public void listUsers() {
        if (this.users.isEmpty())
            System.out.println("Žiadni používatelia.");
        else
            this.users.forEach(System.out::println);

    }
}
