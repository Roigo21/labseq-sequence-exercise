package com.alticelabs.exercise.cache;

import java.util.HashMap;

public class Cache {
    private final HashMap<Integer, Integer> cache;
    public Cache(){
        cache = new HashMap<>();
        cache.put(0,0);
        cache.put(1,1);
        cache.put(2,0);
        cache.put(3,1);
    }
    public boolean contains(int key){
        return this.cache.containsKey(key);
    }
    public boolean put(int key, int value){
        return cache.put(key, value) != null;
    }
    public Integer get(int key){
        return cache.get(key);
    }
    public Integer getLast(){
        return cache.keySet().stream().max(Integer::compareTo).orElse(3);
    }
}
