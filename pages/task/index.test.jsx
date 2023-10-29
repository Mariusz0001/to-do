import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TaskDetails from ".";
import axiosMock from "axios";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

jest.mock("axios");

describe("TaskDetails", () => {
  it("validates the form and shows error messages", () => {
    useRouter.mockImplementation(() => ({
      route: "/task?id=09519305-88f3-4dd7-a8f2-5369e5c64d52",
      pathname: "/task",
      query: {
        id: "09519305-88f3-4dd7-a8f2-5369e5c64d52",
      },
      asPath: "",
      isReady: true,
    }));
    
    axiosMock.get.mockResolvedValueOnce({
      data: {
        data: {
          id: "09519305-88f3-4dd7-a8f2-5369e5c64d52",
          name: "hey 5+14",
          creationDate: "2023-10-27T09:35:24.787078",
          status: "IN_PROGRESS",
          priority: "HIGH",
        },
      },
    });

    const { getByText, getByTestId } = render(<TaskDetails />);

    const saveButton = getByText("Save");

    // Click the save button without filling out the form
    fireEvent.click(saveButton);

    // Assert that error messages are displayed
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(getByText("Name is required.")).toBeInTheDocument();
    expect(getByText("Priority is required.")).toBeInTheDocument();
    expect(getByText("Status is required.")).toBeInTheDocument();

    // Fill out the form with invalid data
    fireEvent.change(getByPlaceholderText("Enter task name"), {
      target: { value: "A" },
    });
    fireEvent.click(saveButton);

    // Assert that the specific error message is displayed
    expect(
      getByText("Name should be longer than 2 chars.")
    ).toBeInTheDocument();

    // Fill out the form with valid data
    fireEvent.change(getByPlaceholderText("Enter task name"), {
      target: { value: "Valid Name" },
    });
    fireEvent.change(getByLabelText("Status"), {
      target: { value: "in_progress" },
    });
    fireEvent.change(getByLabelText("Priority"), { target: { value: "high" } });

    // Submit the form
    fireEvent.click(saveButton);

    // Assert that no error messages are displayed
    expect(getByTestId("error-message")).not.toBeInTheDocument();
  });
});
