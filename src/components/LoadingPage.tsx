import { FC } from "react";
// import { Loading, Grid } from "@nextui-org/react";
import styles from "./LoadingPage.module.scss";

const LoadingPage: FC = () => {
  return (
    <div className={styles.Loading}>
      loading...
      {/* <Grid.Container justify="center" alignItems="center">
        <Loading
          loadingCss={{ $$loadingSize: "150px", $$loadingBorder: "20px" }}
        />
      </Grid.Container> */}
    </div>
  );
};

export default LoadingPage;
