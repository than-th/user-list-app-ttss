import Svg, { Path } from 'react-native-svg';

const SVGComponent = ({width = 200, height = 200, ...props}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 300 300"
    {...props}>
    <Path
      d="M0 46C0 20.6 20.6 0 46 0h208c25.4 0 46 20.6 46 46v208c0 25.4-20.6 46-46 46H46c-25.4 0-46-20.6-46-46z"
      fill="#fff"
    />

    <Path
      d="M204.4 107.2S190.8 60 129.8 61c-42.9.7-60 32.8-66.4 51.8-2.3 7-3.4 14.3-3.4 21.6V149s-36.7.1-34.9 42.1c1.7 42 40.5 48.4 40.5 48.4l49.1-82.2 17.1-.1-50.6 82.3h17.4l46.1-82.3h16.1l-46.1 82.3h13.9z"
      fill="#000"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
    />

    <Path
      d="m217.3 110.4-72.5 129.1h72.5s57.8-1.6 57.2-64.5c-.7-63-57.2-64.6-57.2-64.6z"
      fill="#f06642"
      stroke="#f06642"
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </Svg>
);

export default SVGComponent;
