package com.alticelabs.exercise;

import com.alticelabs.exercise.DTO.LabseqResponseDTO;
import com.alticelabs.exercise.controller.LabSeqController;
import io.quarkus.runtime.Application;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.HashMap;
import java.util.Map;

@Path("/labseq")
public class Endpoint {
    @Inject
    private LabSeqController controller;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("{n}")
    public Response labseq(@PathParam("n") int n) {
        if (n<0){
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
        long start = System.nanoTime();
        int result = controller.labseq(n);
        long end = System.nanoTime();
        long duration = end - start;

        return Response.ok(new LabseqResponseDTO(result, duration)).build();
    }
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus REST";
    }
}
