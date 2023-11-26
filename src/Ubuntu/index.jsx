import classes from "ubuntu/index.module.scss";
import LockScreen from "ubuntuPages/lockScreen";
import LoginScreen from "ubuntuPages/loginScreen";
const Ubuntu = () => {
  return (
    <>
      <main className={classes.ubuntu}>
        <LoginScreen />
      </main>
    </>
  );
};

export default Ubuntu;
