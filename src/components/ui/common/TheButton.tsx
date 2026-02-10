"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

interface TheButtonProps {
    children: React.ReactNode;
    href?: string;
    onClick?: () => void;
    icon?: IconDefinition;
    variant?: "primary" | "outline";
    download?: boolean;
    target?: string;
    className?: string;
}

const TheButton = ({
    children,
    href,
    onClick,
    icon,
    variant = "primary",
    download,
    target, 
    className = "",
}: TheButtonProps) => {

    const baseClasses = "px-8 py-3 font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer";
    
    const primaryClasses = "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 border border-transparent";
    const outlineClasses = "border border-light-muted/30 text-light hover:bg-white/5";

    const variantStyles = variant === "primary" ? primaryClasses : outlineClasses;
    const finalClasses = `${baseClasses} ${variantStyles} ${className}`;

    if (href) {
        if (download || target === "_blank" || href.startsWith("http")) {
             return (
                <a 
                    href={href} 
                    className={finalClasses} 
                    download={download} 
                    target={target} 
                    rel={target === "_blank" ? "noopener noreferrer" : undefined}
                >
                    {icon && <FontAwesomeIcon icon={icon} className={variant === "outline" ? "text-primary": ""} />}
                    {children}
                </a>
             );
        }

        return (
            <Link href={href} className={finalClasses}>
                 {icon && <FontAwesomeIcon icon={icon} className={variant === "outline" ? "text-primary": ""} />}
                 {children}
            </Link>
        );
    }
    
    return (
        <button onClick={onClick} className={finalClasses}>
             {icon && <FontAwesomeIcon icon={icon} className={variant === "outline" ? "text-primary": ""} />}
             {children}
        </button>
    );
};

export default TheButton;
