package cloud.nativ.application.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import cloud.nativ.application.dto.CourseDTO;
import cloud.nativ.application.repository.CourseRepository;



@RestController
@CrossOrigin(origins="*" )
public class CourseController {
	
	private static Logger log= LoggerFactory.getLogger(CourseController.class);
	@Autowired
	private CourseRepository repository;
	
	
	//@Autowired
	//private RabbitMQSender sender;
	
	
	@PostMapping("/course")
	public ResponseEntity<CourseDTO> createCourse(@RequestBody CourseDTO course ) throws Exception {
        log.info(" before user post is called");
        if(course.getId()==null) {
        	
        	throw new Exception("Course ID  cannot be null");
        }
        repository.save(course);
        
        log.info(" after user post is called");
       // sender.send(user);
        return new ResponseEntity<CourseDTO>(course, HttpStatus.CREATED);
		
	}
	
	@PutMapping("/course/{id}")
   public ResponseEntity<CourseDTO> updateCourse(@RequestBody CourseDTO course, @PathVariable String id) throws Exception{
		
		if(id!=null) {
			Optional<CourseDTO> course1 =repository.findById(id);
			
			if(!course1.isPresent()) {
				throw new Exception("ID not found : " + id );
			}
			
		}
		
       
        repository.save(course);
        //sender.send(user);
        return new ResponseEntity<CourseDTO>(course, HttpStatus.OK);
		
		
	}
	
	@GetMapping("/course/{id}")
	public ResponseEntity<CourseDTO> getCourse(@PathVariable String id) throws Exception{
		Optional<CourseDTO> course1=null;
		if(id!=null) {
			course1 =repository.findById(id);
			
			if(!course1.isPresent()) {
				throw new Exception("ID not found : " + id );
			}
			
		}
		
       
      //  repository.save(user);
        return new ResponseEntity<CourseDTO>(course1.get(),HttpStatus.OK);
		
		
	}
    
	@GetMapping("/courses")
	public ResponseEntity<List<CourseDTO>> getAllCourse(){
		
		return new ResponseEntity<List<CourseDTO>>(repository.findAll(),HttpStatus.OK);
		
	}
}
