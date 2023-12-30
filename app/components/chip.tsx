import clsx from "clsx";
import React, {DetailedHTMLProps, forwardRef, HTMLAttributes} from "react";

interface ChipOptions {
    /**
     * Display variants
     * @default "solid"
     * @type ChipVariant
     */
    variant?: ChipVariant;
    size?: ChipSize;
}

type Ref = HTMLDivElement;

export type ChipProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & ChipOptions;

const DefaultChipStyle = "rounded-full"

export enum ChipVariants {
    SOLID = "solid"
}

export enum ChipSizes {
    Small = "small",
    Normal = "normal"
}

type ChipVariant = ChipVariants.SOLID;
type ChipSize = ChipSizes.Small | ChipSizes.Normal;

const variantStyle = {
    [ChipVariants.SOLID]: "bg-amber-600"
}

const sizeStyle = {
    [ChipSizes.Small]: "py-1 px-2",
    [ChipSizes.Normal]: "py-2 px-2"
}

const getVariant = (variant: ChipVariant) => {
    return variantStyle[variant] ? variantStyle[variant] : undefined
};

const getSize = (size: ChipSize) => {
    return sizeStyle[size] ? sizeStyle[size] : undefined
};

const Chip = forwardRef<Ref, ChipProps>((props, ref) => {
    const {
        variant = ChipVariants.SOLID,
        size = ChipSizes.Normal,
        className,
        children,
        ...rest
    } = props;

    const merged = clsx(DefaultChipStyle, getVariant(variant), getSize(size), className);

    return (
        <div ref={ref} className={merged} {...rest}>
            {children}
        </div>
    );
});

Chip.displayName = "Chip";
export default Chip;