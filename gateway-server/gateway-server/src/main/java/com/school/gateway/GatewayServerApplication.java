package com.school.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class GatewayServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayServerApplication.class, args);
	}

	@Bean
	public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
		return builder.routes()
				.route("auth_service", r -> r.path("/auth/**").uri("lb://auth-service"))
				.route("student_service", r -> r.path("/students/**").uri("lb://student-service"))
				.route("course_service", r -> r.path("/courses/**").uri("lb://course-service"))
				.route("enrollment_service", r -> r.path("/enrollments/**").uri("lb://enrollment-service"))
				.route("grade_service", r -> r.path("/grades/**").uri("lb://grade-service"))
				.build();
	}
}
