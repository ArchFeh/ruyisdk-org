import React from 'react';

interface ButtonProps {
  link: string,
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <a
      className="inline-block text-black bg-white px-20 py-3 mx-auto rounded-md drop-shadow-md transition hover:no-underline hover:-translate-y-1"
      href={props.link}
    >{props.children}</a>
  )
};

export default Button;