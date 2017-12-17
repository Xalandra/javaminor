package com.stenden.controller;



import com.stenden.TestObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Ron on 24/11/2016.
 */

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/rest")
public class HelloController {

    @Autowired


    @RequestMapping(value = "/hi", method = RequestMethod.GET)
    public ResponseEntity<TestObject> Hello() throws Exception {
        TestObject x = new TestObject("Jannemarie", 28);
        return new ResponseEntity(x, HttpStatus.OK);
    }


//    @RequestMapping(value = "/personen", method = RequestMethod.POST)
//    public ResponseEntity addPersoon(@RequestBody Persoon persoon) {
//        System.out.println(persoon.toString());
//        persoonService.add(persoon);
//        return new ResponseEntity(toJson(persoon), HttpStatus.CREATED);
//    }
//
//
//    @RequestMapping(value = "/personen", method = RequestMethod.GET)
//    public ResponseEntity getAllPersonen() {
//        List<Persoon> personen = persoonService.findAll();
//        return new ResponseEntity(personen, HttpStatus.OK);
//    }
//
//
//    private String toJson(Object o) {
//        return "";
//    }



}