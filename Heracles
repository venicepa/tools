package com.yho.service;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.*;
import java.util.stream.IntStream;

public class Heracles {

    private static final Logger LOGGER = LoggerFactory.getLogger("Heracles");

    static Map<String, String> mappingAccount = new ConcurrentHashMap();

    private static ExecutorService executor = Executors.newFixedThreadPool(10);

    private static final Gson GSON = new Gson();
    public static Future<Void> getNid(String accountNumber) {
        return executor.submit(() -> {

            try {
                String nid = getNidByAccountNumber(accountNumber);
                mappingAccount.put(accountNumber, nid);
            } catch (InterruptedException e) {
                LOGGER.error("Fail to handle this.", e);
            }
            return null;
        });
    }

    public static String getNidByAccountNumber(String accountNumber) throws InterruptedException {
        Thread.sleep(6);
        return UUID.randomUUID().toString();
    }

    public static void main(String[] args) throws Exception {

        int sourceSize = 10;

        List<String> accountNumbers = initSource(sourceSize);

        long start = System.currentTimeMillis();

        for (int i = 0; i < accountNumbers.size(); i++) {
            String accountNumber = accountNumbers.get(i);
            String nid = getNidByAccountNumber(accountNumber);
            mappingAccount.put(accountNumber, nid);
        }

        System.out.println("handle with sync, Use " + (System.currentTimeMillis() - start) + " ms.");

        System.out.println(GSON.toJson(mappingAccount));

        mappingAccount.clear();

        start = System.currentTimeMillis();

        List<Future<Void>> nids = new ArrayList<>();

        for (int i = 0; i < accountNumbers.size(); i++) {
            nids.add(getNid(accountNumbers.get(i)));
        }

        nids.stream().forEach(s-> {
            try {
                s.get();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            } catch (ExecutionException e) {
                throw new RuntimeException(e);
            }
        });

        System.out.println("handle with async, Use " + (System.currentTimeMillis() - start) + " ms.");
        System.out.println(GSON.toJson(mappingAccount));
        executor.shutdownNow();
    }

    private static List<String> initSource(int size){
        List<String> accountNumbers = new ArrayList<>();

        IntStream.range(0, size).forEach(i -> {
            accountNumbers.add(String.valueOf(i));
        });

        return accountNumbers;
    }
}
