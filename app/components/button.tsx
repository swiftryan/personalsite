import clsx from "clsx";
import React, {DetailedHTMLProps, forwardRef, HTMLAttributes} from "react";
import {ChipVariants} from "@/app/components/chip";

interface ButtonOptions {
    /**
     * Display variants
     * @default "normal"
     * @type ButtonVariant
     */
    variant?: ButtonVariant;
    size?: ButtonSizes;
}

type Ref = HTMLButtonElement;

export type ButtonProps = DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & ButtonOptions;

const DefaultButtonStyle = ""

export enum ButtonVariants {
    Empty = "empty"
}
export enum ButtonSizes {
    Normal = "normal"
}

type ButtonVariant = ButtonVariants.Empty;
type ButtonSize = ButtonSizes.Normal;

const variantStyle = {
    [ButtonVariants.Empty]: ""
}

const sizeStyle = {
    [ButtonSizes.Normal]: ""
}

const getVariant = (variant: ButtonVariant) => {
    return variantStyle[variant] ? variantStyle[variant] : undefined
};

const getSize = (size: ButtonSize) => {
    return sizeStyle[size] ? sizeStyle[size] : undefined
};

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
    const {
        variant = ButtonVariants.Empty,
        size = ButtonSizes.Normal,
        className,
        children,
        ...rest
    } = props;

    const merged = clsx(DefaultButtonStyle, getVariant(variant), getSize(size), className);

    return (
        <button ref={ref} className={merged} type={"button"} {...rest}>
            {children}
        </button>
    );
});

Button.displayName = "Chip";
export default Button;