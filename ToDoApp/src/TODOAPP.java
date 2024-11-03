import java.util.ArrayList;
import java.util.Scanner;


public class TODOAPP {


        // Inner class to represent a Task
        static class Task {
            String description;
            boolean isCompleted;

            Task(String description) {
                this.description = description;
                this.isCompleted = false;
            }

            void markAsComplete() {
                isCompleted = true;
            }

            @Override
            public String toString() {
                return (isCompleted ? "[Completed] " : "[Pending] ") + description;
            }
        }

        public static void main(String[] args) {
            ArrayList<Task> tasks = new ArrayList<>(); // List to store tasks
            Scanner scanner = new Scanner(System.in);   // Scanner for user input

            System.out.println("Welcome to the To-Do List App!");

            // Main loop
            while (true) {
                System.out.println("\nChoose an option:");
                System.out.println("1. Add a task");
                System.out.println("2. View all tasks");
                System.out.println("3. Mark a task as complete");
                System.out.println("4. Exit");

                int choice = scanner.nextInt();
                scanner.nextLine();  // Consume the newline character after int input

                switch (choice) {
                    case 1:
                        // Add a new task
                        System.out.print("Enter the task description: ");
                        String description = scanner.nextLine();
                        tasks.add(new Task(description));
                        System.out.println("Task added!");
                        break;

                    case 2:
                        // View all tasks
                        System.out.println("\nYour Tasks:");
                        if (tasks.isEmpty()) {
                            System.out.println("No tasks to show.");
                        } else {
                            for (int i = 0; i < tasks.size(); i++) {
                                System.out.println((i + 1) + ". " + tasks.get(i));
                            }
                        }
                        break;

                    case 3:
                        // Mark a task as complete
                        System.out.print("Enter the task number to mark as complete: ");
                        int taskNumber = scanner.nextInt();
                        if (taskNumber > 0 && taskNumber <= tasks.size()) {
                            tasks.get(taskNumber - 1).markAsComplete();
                            System.out.println("Task marked as complete!");
                        } else {
                            System.out.println("Invalid task number.");
                        }
                        break;

                    case 4:
                        // Exit the app
                        System.out.println("Goodbye! :)");
                        scanner.close();
                        return;

                    default:
                        System.out.println("Invalid choice. Please choose a valid option.");
                }
            }
        }
    }
