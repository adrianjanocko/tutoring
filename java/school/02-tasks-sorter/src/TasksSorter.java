import tasks.util.Task;
import tasks.util.TaskManager;

import java.util.List;
import java.util.Scanner;

public class TasksSorter {
    public static void main(final String[] args) {
        final TaskManager taskManager = new TaskManager();
        final Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Menu:");
            System.out.println("1. Load tasks from file");
            System.out.println("2. Show next task");
            System.out.println("3. Process task");
            System.out.println("4. Save tasks and exit");

            final int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1 -> {
                    System.out.println("Enter file path:");
                    final String filePath = scanner.nextLine();
                    taskManager.loadTasksFromFile(filePath);
                }
                case 2 -> {
                    final Task nextTask = taskManager.getNextTask();

                    if (nextTask != null)
                        System.out.println("Next task: " + nextTask.getDescription());
                    else
                        System.out.println("No tasks available.");

                }
                case 3 -> {
                    final Task nextTask = taskManager.getNextTask();
                    if (nextTask != null)
                        taskManager.processTask(nextTask);
                    else
                        System.out.println("No tasks available to process.");
                }
                case 4 -> {
                    final List<Task> remainingTasks = taskManager.getRemainingTasks();
                    final List<Task> processedTasks = taskManager.getProcessedTasks();

                    if (!remainingTasks.isEmpty() && !processedTasks.isEmpty()) {
                        taskManager.saveProcessedTasks("processed_tasks.csv");
                        taskManager.saveRemainingTasks("remaining_tasks.csv");
                        System.out.println("Tasks saved. Exiting...");

                        return;
                    } else
                        System.out.println("No tasks available.");
                }
                default -> System.out.println("Invalid choice. Try again.");
            }
        }
    }
}