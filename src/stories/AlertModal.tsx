import React, { ReactNode } from "react";
import {
  CircleCheck,
  Info,
  CircleAlert,
  OctagonAlert,
  SquareX,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useState } from "react"; // REMOVE IF YOU DON'T WANT THE FUNCTION HIDDEN

type Variant = "subtle" | "solid" | "surface";
type AlertType = "success" | "info" | "warning" | "error";

const variantStyles: Record<Variant, Record<AlertType, string>> = {
  subtle: {
    success:
      "bg-green-200 text-green-800 border-l-[5px] border-green-600 dark:bg-green-900 dark:border-green-600 dark:text-green-100",
    info: "bg-blue-200 text-blue-800 border-l-[5px] border-blue-600 dark:bg-blue-900 dark:border-blue-600 dark:text-blue-100",
    warning:
      "bg-yellow-200 text-yellow-800 border-l-[5px] border-yellow-600 dark:bg-yellow-900 dark:border-yellow-600 dark:text-yellow-100",
    error:
      "bg-red-200 text-red-800 border-l-[5px] border-red-600 dark:bg-red-900 dark:border-red-600 dark:text-red-100",
  },
  solid: {
    success: "bg-green-600 text-white dark:bg-green-700",
    info: "bg-blue-600 text-white dark:bg-blue-700",
    warning: "bg-yellow-600 text-white dark:bg-yellow-700",
    error: "bg-red-600 text-white dark:bg-red-700",
  },
  surface: {
    success:
      "bg-white text-green-800 border-2 border-green-300 dark:bg-gray-800 dark:border-green-600 dark:text-green-200",
    info: "bg-white text-blue-800 border-2 border-blue-300 dark:bg-gray-800 dark:border-blue-600 dark:text-blue-200",
    warning:
      "bg-white text-yellow-800 border-2 border-yellow-300 dark:bg-gray-800 dark:border-yellow-600 dark:text-yellow-200",
    error:
      "bg-white text-red-800 border-2 border-red-300 dark:bg-gray-800 dark:border-red-600 dark:text-red-200",
  },
} as const;

const variantIcons: Record<AlertType, React.ReactElement> = {
  success: <CircleCheck className="w-5 h-5" />,
  info: <Info className="w-5 h-5" />,
  warning: <CircleAlert className="w-5 h-5" />,
  error: <OctagonAlert className="w-5 h-5" />,
};

interface AlertProps {
  variant?: Variant;
  type: AlertType;
  title?: string;
  description?: string;
  showIcon?: boolean;
  icon?: React.ReactElement | React.ComponentType;
  closeIcon?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

export const AlertModal: React.FC<AlertProps> = ({
  variant = "subtle",
  type,
  title,
  description,
  icon,
  showIcon = true,
  closeIcon = true,
  onClose,
  children,
}) => {
  const [hidden, setHidden] = useState(false); // REMOVE IF YOU DON'T WANT THE FUNCTION HIDDEN
  return (
    <Alert
      className={`${variantStyles[variant][type]} rounded-xl items-center
      transition-all duration-700 ease-in-out ${
        hidden ? " translate-y-6 opacity-0" : " translate-y-0 opacity-100"
      } `}
      // REMOVE from (transition-all)...  IF YOU DON'T WANT THE FUNCTION HIDDEN
    >
      {showIcon && (
        <>
          {icon &&
            (React.isValidElement(icon)
              ? icon
              : React.createElement(icon as React.ComponentType))}
          {!icon && variantIcons[type]}
        </>
      )}
      <div className="mr-auto px-2">
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
      </div>

      {closeIcon ? (
        <SquareX
          //MAKE IT   onClick={onClose}   if you want to make another function when using the component
          onClick={() => {
            setHidden(!hidden);
          }}
          className="cursor-pointer"
        />
      ) : (
        ""
      )}
    </Alert>
  );
};

export default AlertModal;
