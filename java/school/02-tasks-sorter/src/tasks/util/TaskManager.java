package tasks.util;

import tasks.AdministrativeTask;
import tasks.ComplaintTask;

import java.io.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class TaskManager {
    private final List<Task> remainingTasks = new ArrayList<>();
    private final List<Task> processedTasks = new ArrayList<>();

    public void loadTasksFromFile(final String filePath) {
        try (final BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            String line;
            final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

            while ((line = br.readLine()) != null) {
                final String[] fields = line.split(",");
                final String type = removeApostrophesAndTrim(fields[0]);
                final String description = removeApostrophesAndTrim(fields[1]);
                final LocalDate dateCreated = LocalDate.parse(removeApostrophesAndTrim(fields[2]), formatter);
                final boolean isImportant = fields.length > 3 && removeApostrophesAndTrim(fields[3]).equalsIgnoreCase("important");

                final Task task;

                if (type.equalsIgnoreCase("admin"))
                    task = new AdministrativeTask(description, dateCreated, isImportant);
                else if (type.equalsIgnoreCase("complaint"))
                    task = new ComplaintTask(description, dateCreated, isImportant);
                else
                    continue;

                this.remainingTasks.add(task);
            }

            this.prioritizeTasks();

        } catch (final IOException e) {
            System.err.println("Error loading tasks from file: " + e.getMessage());
        }

    }

    private static String removeApostrophesAndTrim(final String text) {
        return text.replace("\"", "").trim();
    }

    private void prioritizeTasks() {
        this.remainingTasks.sort((t1, t2) -> {
            if (t1.isImportant() && !t2.isImportant()) return -1;
            if (!t1.isImportant() && t2.isImportant()) return 1;
            return t1.getDateCreated().compareTo(t2.getDateCreated());
        });
    }

    public Task getNextTask() {
        return this.remainingTasks.isEmpty() ? null : this.remainingTasks.getFirst();
    }

    public void processTask(final Task task) {
        if (task != null) {
            task.process();
            this.remainingTasks.remove(task);
            this.processedTasks.add(task);
        }
    }

    public void saveProcessedTasks(final String filePath) {
        this.saveTasksToFile(this.processedTasks, filePath);
    }

    public void saveRemainingTasks(final String filePath) {
        this.saveTasksToFile(this.remainingTasks, filePath);
    }

    private void saveTasksToFile(final List<Task> tasks, final String filePath) {
        try (final BufferedWriter bw = new BufferedWriter(new FileWriter(filePath))) {
            for (final Task task : tasks) {
                bw.write(task.getType() + "," + task.getDescription() + "," + task.getDateCreated() + "," + (task.isImportant() ? "important" : "") + "\n");
            }
        } catch (final IOException e) {
            System.err.println("Error saving tasks to file: " + e.getMessage());
        }
    }

    public List<Task> getRemainingTasks() {
        return this.remainingTasks;
    }

    public List<Task> getProcessedTasks() {
        return this.processedTasks;
    }
}
