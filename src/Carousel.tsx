import { Component, MouseEvent } from "react";

interface IProps {
  images: string[];
}

class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  //componentDidMount
  //componentDidUpdate
  //componentWillUnmount
  //componentDidCatch
  //shouldComponentUpdate

  //   componentDidCatch() {
  //     console.log("catch error");
  //   }

  //   componentDidMount() {
  //     console.log("component mounted");
  //   }

  //   componentDidUpdate() {
  //     console.log("component updated");
  //   }

  handleIndexClick = (event: MouseEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index,
      });
    }
  };

  render() {
    // throw new Error("lol error");
    // if(true){
    //     throw new Error('lol error')
    // }

    // eslint-disable-next-line no-unreachable
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="flex gap-4">
        <img
          src={images[active]}
          alt="animal-hero"
          className="aspect-square h-40 w-20 flex-grow rounded-lg object-contain"
        />
        <div className="flex h-20 w-20 flex-grow  gap-2">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={
                index === active ? "rounded-full opacity-50" : "rounded-full"
              }
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
