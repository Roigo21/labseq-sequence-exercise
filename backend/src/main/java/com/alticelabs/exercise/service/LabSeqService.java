package com.alticelabs.exercise.service;

import com.alticelabs.exercise.cache.Cache;

import java.util.Map;
import java.util.Timer;

public class LabSeqService {
    private final Cache cache;
    public LabSeqService() {
        this.cache = new Cache();
    }
    public Integer calculate(int key){
        if (cache.contains(key)){
            return cache.get(key);
        }
        else{
            int maxKnown = cache.getLast();
            for (int i=maxKnown+1;i <=key;i++){
                int result = cache.get(i-4)+cache.get(i-3);
                cache.put(i,result);
            }
            return cache.get(key);
        }
    }
}
