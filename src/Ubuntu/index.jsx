import classes from "ubuntu/index.module.scss";
import LockScreen from "ubuntuPages/lockScreen";
const Ubuntu = () => {
  return (
    <>
      <main className={classes.ubuntu}>
        <LockScreen />
      </main>
    </>
  );
};

export default Ubuntu;
