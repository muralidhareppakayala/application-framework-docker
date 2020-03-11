package cloud.nativ.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cloud.nativ.application.dto.CourseDTO;

@Repository
public interface CourseRepository extends JpaRepository<CourseDTO, String>{

}
