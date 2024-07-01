package com.school.enrollment.service;

import com.school.enrollment.model.Enrollment;
import com.school.enrollment.repository.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    @Autowired
    private RestTemplate restTemplate;

    public Enrollment addEnrollment(Enrollment enrollment) {
        // Validate student and course existence
        validateStudent(enrollment.getStudentId());
        validateCourse(enrollment.getCourseId());
        return enrollmentRepository.save(enrollment);
    }

    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public Enrollment getEnrollmentById(Long id) {
        return enrollmentRepository.findById(id).orElse(null);
    }

    public Enrollment updateEnrollment(Long id, Enrollment enrollmentDetails) {
        Enrollment enrollment = enrollmentRepository.findById(id).orElse(null);
        if (enrollment != null) {
            validateStudent(enrollmentDetails.getStudentId());
            validateCourse(enrollmentDetails.getCourseId());
            enrollment.setStudentId(enrollmentDetails.getStudentId());
            enrollment.setCourseId(enrollmentDetails.getCourseId());
            return enrollmentRepository.save(enrollment);
        }
        return null;
    }

    public void deleteEnrollment(Long id) {
        enrollmentRepository.deleteById(id);
    }

    private void validateStudent(Long studentId) {
        // Make a REST call to student-service to validate the student
//        String url = "http://student-service/students/" + studentId;
        String url = "http://localhost:8080/students/" + studentId;
        restTemplate.getForObject(url, String.class);
    }

    private void validateCourse(Long courseId) {
        // Make a REST call to course-service to validate the course
//        String url = "http://course-service/courses/" + courseId;
        String url = "http://localhost:8080//courses/" + courseId;
        restTemplate.getForObject(url, String.class);
    }
}
