package com.alticelabs.exercise;

import com.alticelabs.exercise.controller.LabSeqController;
import io.quarkus.runtime.Application;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
@Path("/labseq")
public class Endpoint {
    @Inject
    private LabSeqController controller;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("{n}")
    public int labseq(@PathParam("n") int n){
        return controller.labseq(n);
    }
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus REST";
    }
}
