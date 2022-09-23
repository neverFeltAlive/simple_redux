import React from 'react';

/**
 * Component used to display titile
 * @constructor
 */


export const Title = ({children, className}: React.ButtonHTMLAttributes<HTMLHeadElement>): JSX.Element => {
    return (
        <h4 className={className + " font-medium text-lg"}>
            {children}
        </h4>
    );
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    type: string
}

export const Input = ({type, className, ...props}: InputProps): JSX.Element => {
    return (
        <input
            type={type}
            className={className + " bg-transparent border-2 rounded-lg p-3 my-3 w-full border-blue-400"}
            {...props}
        />
    )
}

export const Button = ({className, children, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
    return (
        <button
            className={className + "p-2 hover:font-bold"}
            {...props}
        >
            {children}
        </button>
    );
};

export const Form = ({className, children, ...props}: React.FormHTMLAttributes<HTMLFormElement>): JSX.Element => {
    return (
        <form
            className={className + " my-3 border-2 rounded-lg p-3 border-blue-400"}
            {...props}
        >
            {children}
        </form>
    );
};

