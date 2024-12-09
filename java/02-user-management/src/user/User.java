package user;

import java.util.UUID;

public class User {
    private final UUID uuid;
    private String name;
    private String email;
    private String phone;

    public User(final String name, final String email, final String phone) {
        this.uuid = UUID.randomUUID();
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    public UUID getUuid() {
        return this.uuid;
    }

    public String getName() {
        return this.name;
    }

    public void setName(final String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(final String email) {
        this.email = email;
    }

    public String getPhone() {
        return this.phone;
    }

    public void setPhone(final String phone) {
        this.phone = phone;
    }

    @Override
    public String toString() {
        return String.format("Používateľ %s: %s, Email: %s, Telefón: %s",
                this.uuid, this.name, this.email, this.phone);
    }
}
