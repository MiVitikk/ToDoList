import TodoList from "./TodoList";
import TodoTable from "./TodoTable";
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("Clear todos", () => {
    
    render(<TodoList />, <TodoTable/>);

    const descInput = screen.getByPlaceholderText("Description");
    const dateInput = screen.getByLabelText("Date");
    const priorityInput = screen.getByPlaceholderText("Priority");

    fireEvent.change(descInput, { target: { value: "Go to coffee" } });
    fireEvent.change(dateInput, { target: { value: "2024-10-01" } });
    fireEvent.change(priorityInput, { target: { value: "High" } });

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);
 
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    const updatedRows = screen.queryAllByRole("row");
    const removedRow = updatedRows.find(row => row.textContent.includes("Go to coffee"));
    expect(removedRow).toBeFalsy()
});