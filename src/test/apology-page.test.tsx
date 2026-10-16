import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ApologyPage } from "@/routes/index";

describe("Veduu's apology page", () => {
  it("keeps the letter and the three sincere promises from the brief", () => {
    render(<ApologyPage />);

    expect(screen.getByText("Meri pyaari Veduuuu,")).toBeInTheDocument();
    expect(screen.getByText(/Aaj jo bhi bhasad hui/)).toBeInTheDocument();
    expect(screen.getByText(/Please, jab tera mann kare/)).toBeInTheDocument();
    expect(screen.getByText("I'll listen before I react")).toBeInTheDocument();
    expect(screen.getByText("I'll communicate instead of fighting")).toBeInTheDocument();
    expect(screen.getByText("I'll show you through my actions")).toBeInTheDocument();
  });

  it("sends the requested virtual hug when tapped", () => {
    render(<ApologyPage />);

    fireEvent.click(screen.getByRole("button", { name: "Tap for a hug" }));

    expect(screen.getByRole("status")).toHaveTextContent("Sending you the biggest, warmest hug, Veduu! 🫂❤️");
  });
});