package com.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import springfox.documentation.swagger2.annotations.EnableSwagger2;
@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.bean")
@EnableJpaRepositories(basePackages = "com")
@EnableSwagger2
public class ArogyaPhApplication {

	public static void main(String[] args) {
		
		
		SpringApplication.run(ArogyaPhApplication.class, args);
		
		System.out.println("APPLICATION RUNS HERE ");
	}

}
