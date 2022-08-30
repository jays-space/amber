import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { TableRows } from "..";

const data = {
  gender: "male",
  name: {
    title: "ms",
    first: "jane",
    last: "doe",
  },
  location: {
    street: {
      number: 123,
      name: "sicamore street",
    },
    city: "johannesburg",
    state: "gauteng",
    country: "south africa",
    postcode: 1111,
    coordinates: {
      latitude: "-54.4721",
      longitude: "30.6940",
    },
    timezone: {
      offset: "+2:00",
      description: "cape town, harare",
    },
  },
  email: "jane.doe@example.com",
  login: {
    uuid: "d5ac5d23-f1f2-41c7-87fe-6d5d4eaa448c",
    username: "tinykoala839",
    password: "wp2003wp",
    salt: "f9keVBXE",
    md5: "e30841088e1974b003980f11ec19b835",
    sha1: "25e4069400001e76738ee6bf13bd524a6df2f2d8",
    sha256: "f38eff8fdee487e1888fb93dd91fd2cafecd83c9fcbe49658d1a070125854d9a",
  },
  dob: {
    date: "1989-04-24T06:25:40.777Z",
    age: 33,
  },
  registered: {
    date: "2016-09-28T11:15:47.538Z",
    age: 5,
  },
  phone: "078 225 75 50",
  cell: "075 437 25 80",
  id: {
    name: "AVS",
    value: "756.9989.7526.17",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/16.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/16.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/16.jpg",
  },
  nat: "CH",
  stage: 3,
  position: { role: "fullstack developer", team: "dev team" },
};

const mockData = [data];
const TableRowWithMockedRouter = ({ data }) => {
  return (
    <BrowserRouter>
      <TableRows data={data} />
    </BrowserRouter>
  );
};

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("<TableRows />", () => {
  it("should render correctly", () => {
    render(<TableRowWithMockedRouter data={mockData} />);

    const tableRows = screen.getAllByTestId("table-row");
    expect(tableRows.length).toBeTruthy();
    expect(tableRows).toMatchSnapshot();
  });

  it("should navigate to selected candidate page with correct candidate details - small screens", () => {
    render(<TableRowWithMockedRouter data={mockData} />);

    const buttons = screen.getAllByTestId("button-primary");
    const button = buttons[0];

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("jane-doe");
  });

  it("should navigate to selected candidate page with correct candidate details - large screens", () => {
    render(<TableRowWithMockedRouter data={mockData} />);

    const buttons = screen.getAllByTestId("button-primary");
    const button = buttons[1];

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith("jane-doe");
  });
});
