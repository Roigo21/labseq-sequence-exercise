package com.alticelabs.exercise.DTO;

public class LabseqResponseDTO {
    private int result;
    private long execTimeNanoSeconds;

    public LabseqResponseDTO() {}

    public LabseqResponseDTO(int result, long execTimeNanoSeconds) {
        this.result = result;
        this.execTimeNanoSeconds = execTimeNanoSeconds;
    }
    public int getResult() { return result; }
    public void setResult(int result) { this.result = result; }

    public long getExecTimeNanoSeconds() { return execTimeNanoSeconds; }
    public void setExecTimeNanoSeconds(long execTimeNanoSeconds) { this.execTimeNanoSeconds = execTimeNanoSeconds; }
}
