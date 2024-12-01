import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

public class CustomersFilter {

    static class Customer {
        String name;
        String phoneNumber;
        String mobileService;
        String flatRate;
        int balance;

        public Customer(final String name, final String phoneNumber, final String mobileService, final String flatRate, final int balance) {
            this.name = name;
            this.phoneNumber = phoneNumber;
            this.mobileService = mobileService;
            this.flatRate = flatRate;
            this.balance = balance;
        }

        @Override
        public String toString() {
            return String.format("%-20s %-15s %-10s %-10s %-10d", this.name, this.phoneNumber, this.mobileService, this.flatRate, this.balance);
        }
    }

    public static void main(final String[] args) {
        if (args.length < 2) {
            System.out.println("Usage: java CustomersFilter.java <file_path> <filter_type>");
            return;
        }

        final String filePath = args[0];
        final char filterType = args[1].charAt(0);

        try (final BufferedReader br = new BufferedReader(new FileReader(filePath))) {
            final List<Customer> customers = br.lines()
                    .skip(1)
                    .map(line -> line.split(","))
                    .map(fields -> {
                        final String name = removeApostrophesAndTrim(fields[0]);
                        final String phoneNumber = removeApostrophesAndTrim(fields[1]);
                        final String mobileService = removeApostrophesAndTrim(fields[2]);
                        final String flatRate = removeApostrophesAndTrim(fields[3]);
                        final int balance = removeApostrophesAndTrim(fields[4]).isEmpty() ? 0 : Integer.parseInt(removeApostrophesAndTrim(fields[4]));

                        return new Customer(name, phoneNumber, mobileService, flatRate, balance);
                    })
                    .toList();

            final List<Customer> filteredCustomers = switch (filterType) {
                case 'h' ->
                        customers.stream().filter(customer -> "hlas".equalsIgnoreCase(customer.mobileService)).collect(Collectors.toList());
                case 'i' ->
                        customers.stream().filter(customer -> "internet".equalsIgnoreCase(customer.flatRate)).collect(Collectors.toList());
                case 'f' -> customers.stream().filter(customer -> customer.balance < 0).collect(Collectors.toList());
                case 'm' ->
                        customers.stream().filter(customer -> customer.phoneNumber.startsWith("09")).collect(Collectors.toList());
                default -> {
                    System.out.println("Invalid filter type provided.");
                    yield List.of();
                }
            };

            System.out.printf("%-20s %-15s %-10s %-10s %-10s%n", "Meno", "Tel. číslo", "Mobilná služba", "Paušál", "Stav účtu");
            filteredCustomers.forEach(System.out::println);
        } catch (final IOException | NumberFormatException e) {
            System.out.println("Error reading or parsing the CSV file: " + e.getMessage());
        }
    }

    private static String removeApostrophesAndTrim(final String text) {
        return text.replace("\"", "").trim();
    }

}