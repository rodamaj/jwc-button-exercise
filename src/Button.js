import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--borderRadius": "2px",
    "--fontSize": "16px",
    "--padding": "4px 12px",
  },
  medium: {
    "--borderRadius": "2px",
    "--fontSize": "18px",
    "--padding": "12px 20px",
  },
  large: {
    "--borderRadius": "4px",
    "--fontSize": "21px",
    "--padding": "16px 32px",
  },
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let ButtonVariant;
  if (variant === "outline") {
    ButtonVariant = OutlineButton;
  } else if (variant === "ghost") {
    ButtonVariant = GhostButton;
  } else {
    ButtonVariant = FillButton;
  }

  return <ButtonVariant style={styles}>{children}</ButtonVariant>;
};

const BaseButton = styled.button`
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  text-transform: uppercase;
  border: none;
  border-radius: var(--borderRadius);
  font-size: var(--fontSize);
  font-weight: 500;
  border: 2px solid transparent;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillButton = styled(BaseButton)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineButton = styled(BaseButton)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostButton = styled(BaseButton)`
  background-color: transparent;
  color: ${COLORS.gray};

  &:focus {
    outline-color: currentColor;
  }

  &:hover {
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;
