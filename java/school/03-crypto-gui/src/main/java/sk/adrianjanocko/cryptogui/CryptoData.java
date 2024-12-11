package sk.adrianjanocko.cryptogui;

public class CryptoData {
    private final String name;
    private final String symbol;
    private final double priceUsd;

    public CryptoData(final String name, final String symbol, final double priceUsd) {
        this.name = name;
        this.symbol = symbol;
        this.priceUsd = priceUsd;
    }

    public String getName() {
        return this.name;
    }

    public String getSymbol() {
        return this.symbol;
    }

    public double getPriceUsd() {
        return this.priceUsd;
    }
}