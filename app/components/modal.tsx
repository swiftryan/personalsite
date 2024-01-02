import clsx from "clsx";
import React, {DetailedHTMLProps, forwardRef, HTMLAttributes} from "react";

interface ModalOptions {
    id: string;
    hidden?: boolean
}

type Ref = HTMLDivElement;

export type ChipProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & ModalOptions;

const DefaultModalStyle = "fixed top-0 right-0 left-0 z-50 justify-center items-center w-full h-[calc(100%-1rem)] max-h-full"

// Generic Modal component
const Modal = forwardRef<Ref, ChipProps>((props, ref) => {
    const {
        id,
        hidden = true,
        className,
        children,
        ...rest
    } = props;

    const isHiddenStyle = hidden ? "hidden" : undefined

    const merged = clsx(DefaultModalStyle, className, isHiddenStyle);

    return (
        <div id={id} ref={ref} className={merged} {...rest}>
            {children}
        </div>
    );
});

Modal.displayName = "Modal";
export default Modal;