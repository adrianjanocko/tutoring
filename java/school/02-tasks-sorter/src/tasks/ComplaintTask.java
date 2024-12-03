package tasks;

import tasks.util.Task;

import java.time.LocalDate;

public class ComplaintTask extends Task {
    public ComplaintTask(final String description, final LocalDate dateCreated, final boolean isImportant) {
        super("complaint", description, dateCreated, isImportant);
    }

    @Override
    public void process() {
        System.out.println("Processing complaint task: " + this.description);
    }

    public void cancel() {
        System.out.println("Complaint task canceled: " + this.description);
    }
}