import {DetailedHTMLProps, HTMLAttributes, PropsWithChildren} from "react";
import clsx from "clsx";

interface InlineLinkOptions {
    href: string,
    target?: string,
}

type InlineLinkProps = DetailedHTMLProps<
    HTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
> & InlineLinkOptions;

const DefaultInlineLinkStyle = "text-emerald-400 hover:text-emerald-600 transition duration-150 ease-out hover:ease-in"

export default function InlineLink(props: PropsWithChildren<InlineLinkProps>) {
    // Default open link in new tab
    const {
        href,
        target = "_blank",
        className,
        children,
        ...rest
    } = props

    const merged = clsx(DefaultInlineLinkStyle, className);
    return (
        <a href={href} target={target} className={merged} {...rest}>
            {children}
        </a>
    )
}