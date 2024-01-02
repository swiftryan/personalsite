import clsx from "clsx";
import React, {DetailedHTMLProps, forwardRef, HTMLAttributes} from "react";

interface TypographyOptions {}

type Ref = HTMLDivElement;

export type TypographyProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & TypographyOptions;

const DefaultTypographyStyle = ""

// Generic Typography component
const Typography = forwardRef<Ref, TypographyProps>((props, ref) => {
    const {
        className,
        children,
        ...rest
    } = props;

    const merged = clsx(DefaultTypographyStyle, className);

    return (
        <div ref={ref} className={merged} {...rest}>
            {children}
        </div>
    );
});

Typography.displayName = "Typography";
export default Typography;