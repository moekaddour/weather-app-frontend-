import React, { Component } from "react";
import {
  Button,
  Jumbotron,
  Input,
  ListGroupItem,
  ListGroup,
  Badge
} from "reactstrap";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    location: "",
    apparentTemperature: "N/A",
    humidity: "N/A",
    pressure: "N/A",
    city: "N/A",
    summary: "N/A",
    temperature: "N/A",
    visibility: "N/A",
    windSpeed: "N/A"
  };
  inputHandler = e => {
    this.setState({ location: e.target.value });
  };
  submitHandler = () => {
    axios
      .post("/weather", {
        address: this.state.location
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          city: response.data.city,
          apparentTemperature: response.data.apparentTemperature,
          humidity: response.data.humidity,
          pressure: response.data.pressure,
          summary: response.data.summary,
          temperature: response.data.temperature,
          visibility: response.data.visibility,
          windSpeed: response.data.windSpeed
        });
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ location: "" });
  };
  render() {
    return (
      <div className="App">
        <Jumbotron className="jumbotron">
          <h1 className="display-3">Welcom, WeatherApp</h1>
          <p className="lead">This is a simple way, Ask for weather Info.</p>
          <hr className="my-2" />
          <p>Search by Country, City, or even ZipCode ...</p>
          <p className="lead">
            <Input
              value={this.state.location}
              type="text"
              name="text"
              id="exampleText"
              placeholder="Type Country, City, or even ZipCode!..."
              onChange={this.inputHandler}
            />
            <hr />
            <Button onClick={this.submitHandler} color="success">
              Get Info.
            </Button>
          </p>
        </Jumbotron>
        <ListGroup className="listGroup">
          <ListGroupItem className="justify-content-between">
            Time Zone:{" "}
            <Badge color="primary" pill>
              {this.state.city}
            </Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Summary:{" "}
            <Badge color="success" pill>
              {this.state.summary}
            </Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Temperature:{" "}
            <Badge color="info" pill>
              {this.state.temperature}
            </Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Feels like:{" "}
            <Badge color="info" pill>
              {this.state.apparentTemperature}
            </Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Humidity:{" "}
            <Badge color="info" pill>
              {this.state.humidity}
            </Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            Pressure:{" "}
            <Badge color="info" pill>
              {this.state.pressure}
            </Badge>
          </ListGroupItem>
         
          <ListGroupItem className="justify-content-between">
            Visibility:{" "}
            <Badge color="info" pill>
              {this.state.visibility}
            </Badge>
          </ListGroupItem>
          <ListGroupItem className="justify-content-between">
            WindSpeed:{" "}
            <Badge color="info" pill>
              {this.state.windSpeed}
            </Badge>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default App;
