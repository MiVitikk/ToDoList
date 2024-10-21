import TodoTable from "./TodoTable";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test ('render todotable', () => {
    const row =[
        {desc: 'Do something', priority: 'High', date:'24.11.2024'}
    ];
    render(<TodoTable todos={row}/>);
    const table = screen.getByRole('table')
    expect(table).toHaveTextContent(/Do something/i);
})