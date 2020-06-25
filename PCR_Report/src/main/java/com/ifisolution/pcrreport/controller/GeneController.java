package com.ifisolution.pcrreport.controller;

import com.ifisolution.pcrreport.entities.Chemical;
import com.ifisolution.pcrreport.service.GeneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class GeneController {
    @Autowired
    private GeneService geneService;

    @GetMapping("/chemical") //
    public String list(Model model) {

        model.addAttribute("contacts", geneService.findAll());
        return "list";
    }

    @GetMapping("/contact/search")

    public String search(@RequestParam("name") String name, Model model) {
        if (StringUtils.isEmpty(name)) {
            return "redirect:/contact";
        }
        model.addAttribute("contacts", geneService.search(name));
        return "list";
    }

    @GetMapping("/contact/add")
    public String add(Model model) {
        model.addAttribute("contact", new Chemical());
        return "form";
    }

    @GetMapping("/contact/{id}/edit")
    public String edit(@PathVariable("id") Integer id, Model model) {
        model.addAttribute("contact", geneService.findById(id));
        return "form";
    }

    @PostMapping("/contact/save")
    public String save(@Validated Chemical chemical, BindingResult result, RedirectAttributes redirect) {
        if (result.hasErrors()) {
            return "form";
        }
        geneService.save(chemical);
        redirect.addFlashAttribute("successMessage", "Saved contact successfully!");
        return "redirect:/contact";
    }

    @GetMapping("/contact/{id}/delete")
    public String delete(@PathVariable int id, RedirectAttributes redirect) {
        geneService.delete(id);
        redirect.addFlashAttribute("successMessage", "Deleted contact successfully!");
        return "redirect:/contact";

    }
}
