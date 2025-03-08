import {
  Shimmer as V8Shimmer,
  ShimmerElementType as V8ShimmerElementType,
} from "@fluentui/react";
import { makeStyles, Skeleton, SkeletonItem } from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  skeleton: {
    width: "200px",
    height: "32px",
  },
});

//#region Stories
export const Shimmer = () => {
  const styles = useStyles();

  return (
    <CompareGrid
      v8Component={
        <V8Shimmer
          shimmerElements={[
            { type: V8ShimmerElementType.line, width: 200, height: 32 },
          ]}
        />
      }
      v9Component={
        <Skeleton>
          <SkeletonItem className={styles.skeleton} />
        </Skeleton>
      }
    />
  );
};
//#endregion
