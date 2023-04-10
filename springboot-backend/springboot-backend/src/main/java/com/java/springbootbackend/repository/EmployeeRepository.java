package com.java.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.springbootbackend.models.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
