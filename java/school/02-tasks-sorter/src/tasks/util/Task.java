package tasks.util;

import java.time.LocalDate;

public abstract class Task {
    protected String type;
    protected String description;
    protected LocalDate dateCreated;
    protected boolean isImportant;

    public Task(final String type, final String description, final LocalDate dateCreated, final boolean isImportant) {
        this.type = type;
        this.description = description;
        this.dateCreated = dateCreated;
        this.isImportant = isImportant;
    }

    public boolean isImportant() {
        return this.isImportant;
    }

    public LocalDate getDateCreated() {
        return this.dateCreated;
    }

    public String getType() {
        return this.type;
    }

    public String getDescription() {
        return this.description;
    }

    public abstract void process();
}