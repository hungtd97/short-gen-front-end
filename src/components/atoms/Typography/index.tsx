import classNames from "classnames";
import React, { useMemo } from "react";
import { Unbounded, Montserrat, Raleway } from "next/font/google";
type HeadingType = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphType = React.HTMLAttributes<HTMLParagraphElement>;
type SpanType = React.HTMLAttributes<HTMLSpanElement>;

const MontserratFont = Montserrat({
  subsets: ["vietnamese"],
  display: "swap",
});

type IProps = (HeadingType | ParagraphType | SpanType) & {
  htmlComponent?: any;
};

const Typography = (props: IProps) => {
  const {
    children,
    style,
    className = "",
    htmlComponent = "",
    ...rest
  } = props;

  const fontFamily = useMemo(() => {
    return MontserratFont.className;
  }, []);

  const Component = useMemo((): keyof JSX.IntrinsicElements => {
    if (htmlComponent) return htmlComponent;

    return "span";
  }, [htmlComponent]);

  return (
    // @ts-ignore
    <Component
      className={classNames(fontFamily, className)}
      style={{
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
  // return <></>;
};

export default Typography;
