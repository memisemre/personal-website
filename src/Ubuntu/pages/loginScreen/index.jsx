import classes from "./index.module.scss";
const LoginScreen = () => {
  return (
    <div className={classes.loginScreen}>
      <img src="./emrememis-pp.png" alt="" />
      <p>Emre Memiş</p>
      <div>
        <button></button>
        <input type="text" placeholder="Password" />
      </div>
    </div>
  );
};
export default LoginScreen;
