package com.alticelabs.exercise.controller;

import com.alticelabs.exercise.service.LabSeqService;
import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class LabSeqController {
    public LabSeqService labSeqService;
    public LabSeqController() {
        labSeqService = new LabSeqService();
    }
    public int labseq(int key){
        if (key<0){
            return -1;
        }
        return labSeqService.calculate(key);
    }
}
