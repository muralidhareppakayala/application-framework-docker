package cloud.nativ.application.controller;

import cloud.nativ.application.dto.UserDTO;
import cloud.nativ.application.repository.UserRepository;

import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins="*" )
public class UserController {

	private static Logger log= LoggerFactory.getLogger(UserController.class);
	@Autowired
	private UserRepository repository;
	
	
	//@Autowired
	//private RabbitMQSender sender;
	
	
	@PostMapping("/user")
	public ResponseEntity<UserDTO> postUser(@RequestBody UserDTO user ) {
        log.info(" before user post is called");
        if(user.getId()==null) {
        	
        	throw new ResourceNotFoundException("Username cannot be null");
        }
        repository.save(user);
        
        log.info(" after user post is called");
       // sender.send(user);
        return new ResponseEntity<UserDTO>(user, HttpStatus.CREATED);
		
	}
	
	@PutMapping("/user/{id}")
   public ResponseEntity<UserDTO> putUser(@RequestBody UserDTO user, @PathVariable String id){
		
		if(id!=null) {
			Optional<UserDTO> user1 =repository.findById(id);
			
			if(!user1.isPresent()) {
				throw new ResourceNotFoundException("ID not found : " + id );
			}
			
		}
		
       
        repository.save(user);
        //sender.send(user);
        return new ResponseEntity<UserDTO>(user, HttpStatus.OK);
		
		
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<UserDTO> getUser(@PathVariable String id){
		Optional<UserDTO> user1=null;
		if(id!=null) {
			 user1 =repository.findById(id);
			
			if(!user1.isPresent()) {
				throw new ResourceNotFoundException("ID not found : " + id );
			}
			
		}
		
       
      //  repository.save(user);
        return new ResponseEntity<UserDTO>(user1.get(),HttpStatus.OK);
		
		
	}

}
