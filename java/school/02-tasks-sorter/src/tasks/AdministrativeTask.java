package tasks;

import tasks.util.Task;

import java.time.LocalDate;

public class AdministrativeTask extends Task {
    public AdministrativeTask(final String description, final LocalDate dateCreated, final boolean isImportant) {
        super("admin", description, dateCreated, isImportant);
    }

    @Override
    public void process() {
        System.out.println("Processing administrative task: " + this.description);
    }

    public void postpone() {
        this.dateCreated = this.dateCreated.plusDays(1);
        System.out.println("Task postponed to: " + this.dateCreated);
    }
}