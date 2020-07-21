package com.ifisolution.shopcar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ifisolution.shopcar.model.Contact;
import com.ifisolution.shopcar.service.ContactService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
@Controller
	public class ContactController {
		@Autowired
		private ContactService contactService;

		@GetMapping("/contact") //
		@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
		public String list(Model model) {
			model.addAttribute("contacts", contactService.findAll());
			return "list";
		}

		@GetMapping("/contact/search")
		@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
		public String search(@RequestParam("name") String name, Model model) {
			if (StringUtils.isEmpty(name)) {
				return "redirect:/contact";
			}
			model.addAttribute("contacts", contactService.search(name));
			return "list";
		}

		@GetMapping("/contact/add")
		@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
		public String add(Model model) {
			model.addAttribute("contact", new Contact());
			return "form";
		}

		@GetMapping("/contact/{id}/edit")
		@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
		public String edit(@PathVariable("id") Integer id, Model model) {
			model.addAttribute("contact", contactService.findById(id));
			return "form";
		}

		@PostMapping("/contact/save")
		@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
		public String save(@Validated Contact contact, BindingResult result, RedirectAttributes redirect) {
			if (result.hasErrors()) {
				return "form";
			}
			contactService.save(contact);
			redirect.addFlashAttribute("successMessage", "Saved contact successfully!");
			return "redirect:/contact";
		}

		@GetMapping("/contact/{id}/delete")
		@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
		public String delete(@PathVariable int id, RedirectAttributes redirect) {
			contactService.delete(id);
			redirect.addFlashAttribute("successMessage", "Deleted contact successfully!");
			return "redirect:/contact";

		}
	}

