package com.ReactProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ReactProject.Model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
