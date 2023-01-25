const colors = {
  white: "#ffffff",
  black: "#000000",
  grey: "#e9e9e9",
  orange1: "#ffb300",
  blue: "#000080",
};

const fontSize = {
  small: "12px",
  middle: "16px",
  big: "20px",
};

const widthStyle = {
  inputWidth: "300px",
  inputHeigh: "50px",
  inputBR: "8px",
  paddingLeft: "12px",
};

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: flex-start;
  `,
};

const buttonStyle = {
  basic: `
  width: 100px;
  height: 50px;
  color : #aaaaaa;
  font-weight: 700;
  font-size: 12px;
  border-radius : 8px;
  border: none
  `,
};

const imgStyle = {
  profileImg: `
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  `,
  backgroundImg: `
    width: 250px;
    height: 250px;
    object-fit: cover;
    `,
};

const theme = { colors, common, widthStyle, buttonStyle, imgStyle };
export default theme;
