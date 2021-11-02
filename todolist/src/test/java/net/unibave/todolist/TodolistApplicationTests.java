package net.unibave.todolist;

import org.junit.jupiter.api.Test;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TodolistApplicationTests {

	@Test
	void contextLoads() {
	}

    public static void main(String[] args) {
    	SpringApplication.run(TodolistApplication.class, args);
    }

}
