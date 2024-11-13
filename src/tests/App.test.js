import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { TaskProvider } from "../context/TaskContext";
import App from "../App";

// Mocking localStorage for testing
beforeAll(() => {
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => (store[key] = value),
      clear: () => (store = {}),
    };
  })();
  Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
  });
});

describe("To-Do App", () => {
  // Test for adding tasks
  test("should add a new task", async () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>
    );

    const input = screen.getByPlaceholderText("Enter a task");
    const addButton = screen.getByText("Add Task");
  });

  // Test for editing tasks
  it("should edit an existing task", async () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>
    );
    const input = screen.getByPlaceholderText("Enter a task");
    const addButton = screen.getByText("Add Task");
    // Add a task first
    fireEvent.change(input, { target: { value: "Initial Task" } });
    fireEvent.click(addButton);
  });
  //   // Test for deleting tasks
  it("should delete a task", async () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>
    );
    const input = screen.getByPlaceholderText("Enter a task");
    const addButton = screen.getByText("Add Task");
    // Add a task first
    fireEvent.change(input, { target: { value: "Task to Delete" } });
    fireEvent.click(addButton);
    // Now delete the task
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);
  });
});
