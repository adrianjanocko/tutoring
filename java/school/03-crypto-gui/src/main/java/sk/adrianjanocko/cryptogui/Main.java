package sk.adrianjanocko.cryptogui;

import kong.unirest.core.HttpResponse;
import kong.unirest.core.JsonNode;
import kong.unirest.core.Unirest;
import kong.unirest.core.json.JSONObject;

import javax.swing.*;
import java.awt.*;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;

public class Main {

    public static void main(final String[] args) {
        final JFrame frame = new JFrame("Získanie dát o kryptomene");
        frame.setSize(650, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setLayout(null);

        final JLabel labelInput = new JLabel("Zadajte token ID:");
        labelInput.setBounds(50, 30, 200, 30);
        frame.add(labelInput);

        final JTextField fieldInput = new JTextField();
        fieldInput.setBounds(200, 30, 400, 30);

        final String defaultTokenID = "0x6982508145454Ce325dDbE47a25d4ec3d2311933";
        fieldInput.setText(defaultTokenID);
        fieldInput.setForeground(Color.BLACK);
        frame.add(fieldInput);

        final JButton fetchButton = new JButton("Získať cenu");
        fetchButton.setBounds(50, 70, 300, 30);
        frame.add(fetchButton);

        final JLabel labelResult = new JLabel("Tu načítam dáta!");
        labelResult.setBounds(50, 120, 300, 50);
        frame.add(labelResult);

        fetchButton.addActionListener(_ -> {
            final String tokenID = fieldInput.getText().trim();

            if (tokenID.isEmpty()) {
                labelResult.setText("Chyba: Zadajte token ID.");

                return;
            }

            try {
                final DecimalFormatSymbols symbols = new DecimalFormatSymbols();
                symbols.setDecimalSeparator('.');

                final CryptoData cryptoData = getCryptoData(tokenID);
                if (cryptoData != null) {
                    labelResult.setText(
                            "<html>Názov: " + cryptoData.getName() + "<br>"
                                    + "Symbol: " + cryptoData.getSymbol() + "<br>"
                                    + "Cena: $" + new DecimalFormat("#.#######", symbols).format(cryptoData.getPriceUsd()) + "</html>"
                    );
                } else
                    labelResult.setText("Chyba: Kryptomena nenájdená.");
            } catch (final Exception ex) {
                labelResult.setText("Chyba pri načítavaní ceny.");
            }
        });

        frame.setVisible(true);
    }

    private static CryptoData getCryptoData(final String tokenID) {
        try {
            final HttpResponse<JsonNode> response = Unirest.get("https://api.dexscreener.com/latest/dex/tokens/" + tokenID).asJson();

            if (response.getStatus() == 200) {
                final JsonNode body = response.getBody();

                final JSONObject firstPair = body.getObject()
                        .getJSONArray("pairs")
                        .getJSONObject(0);

                final String baseTokenName = firstPair.getJSONObject("baseToken").getString("name");
                final String baseTokenSymbol = firstPair.getJSONObject("baseToken").getString("symbol");
                final double priceUsd = firstPair.getDouble("priceUsd");

                return new CryptoData(baseTokenName, baseTokenSymbol, priceUsd);
            }
        } catch (final Exception ex) {
            //ex.printStackTrace();
        }
        return null;
    }

}