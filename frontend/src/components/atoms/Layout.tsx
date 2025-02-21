import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return <StyledDiv>{children}</StyledDiv>;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(320deg, #293a21 0%, #3b7230 100%);
  gap: 3rem;

  height: 1200px;
  width: 1200px;
`;
