package cloud.nativ.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import cloud.nativ.application.dto.UserDTO;

@Repository
public interface UserRepository extends JpaRepository<UserDTO, String> {

}
