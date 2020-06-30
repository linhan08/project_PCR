package com.ifisolution.pcrangular.controller;


import com.ifisolution.pcrangular.entities.ThongTinChung;
import com.ifisolution.pcrangular.service.ThongTinChungService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ControlThongTinchung {
    public static Logger logger = (Logger) LoggerFactory.getLogger(ControlThongTinchung.class);

    @Autowired
    ThongTinChungService thongTinChungService;

    @RequestMapping(value = "/thongtinchung/", method = RequestMethod.GET)
    public ResponseEntity<List<ThongTinChung>> listAllContact(){
        List<ThongTinChung> listThongTinChung= thongTinChungService.findAll();
        if(listThongTinChung.isEmpty()) {
            return new ResponseEntity(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<ThongTinChung>>(listThongTinChung, HttpStatus.OK);
    }

    @RequestMapping(value = "/thongtinchung/{id}", method = RequestMethod.GET)
    public ThongTinChung findContact(@PathVariable("id") long id) {
        ThongTinChung contact= thongTinChungService.getOne(id);
        if(contact == null) {
            ResponseEntity.notFound().build();
        }
        return contact;
    }

    @RequestMapping(value = "/thongtinchung/", method = RequestMethod.POST)
    public ThongTinChung saveContact(@Valid @RequestBody ThongTinChung thongTinChung) {
        return thongTinChungService.save(thongTinChung);
    }

    @RequestMapping(value = "/thongtinchung/", method = RequestMethod.PUT)
    public ResponseEntity<ThongTinChung> updateContact(@PathVariable(value = "id") Long contactId,
                                                 @Valid @RequestBody ThongTinChung contactForm) {
        ThongTinChung thongTinChung = thongTinChungService.getOne(contactId);
        if(thongTinChung == null) {
            return ResponseEntity.notFound().build();
        }
        thongTinChung.setName(contactForm.getName());
        thongTinChung.setAge(contactForm.getAge());

        ThongTinChung updatedContact = thongTinChungService.save(thongTinChung);
        return ResponseEntity.ok(updatedContact);
    }

    @RequestMapping(value = "/thongtinchung/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<ThongTinChung> deleteContact(@PathVariable(value = "id") Long id) {
        ThongTinChung thongTinChung = thongTinChungService.getOne(id);
        if(thongTinChung == null) {
            return ResponseEntity.notFound().build();
        }

        thongTinChungService.delete(thongTinChung);
        return ResponseEntity.ok().build();
    }
}
