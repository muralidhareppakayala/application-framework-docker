package cloud.nativ.application.api.gateway;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

@EnableZuulProxy
@EnableDiscoveryClient
@SpringBootApplication
public class SampleGatewayApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(SampleGatewayApplication.class, args);
	}
}
