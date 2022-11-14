import Country from "./Country";
import AddCountry from "./AddCountry";
import React from "react";

interface AppState {
  items: any[],
  error: {message: string} | null,
  isLoaded: boolean
}

export default class Home extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://8spvlsgby5.execute-api.us-east-1.amazonaws.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  deletecountry(name: string) {
    fetch("https://8spvlsgby5.execute-api.us-east-1.amazonaws.com/items/" + name, {method: 'DELETE'})
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({items: this.state.items.filter( i => i.name !== name)});
        },
        (error) => {
          console.log(error)
        }
      )
  }

  addcountry(name: string) {
    fetch("https://8spvlsgby5.execute-api.us-east-1.amazonaws.com/items/" + name,
      {
        method: 'PUT',
        body: JSON.stringify({}),
        headers: {"Content-Type": "application/json"},
      })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          this.setState({items: [...this.state.items, {name}]});
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Got an Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return <>
          <ul>
            {items.map((item:any) => (
              <Country key={item.name}
                country={item}
                deletecountry={ (c:any) => this.deletecountry(c) } />
            ))}
            </ul>
            <AddCountry addcountry={ (c:any) => this.addcountry(c) }/>
          </>
      }
    }
}
