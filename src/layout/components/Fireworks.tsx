import { motion } from 'framer-motion';
import styled from 'styled-components';
import Confetti from "react-confetti";

const CountDownContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Countdown = () => {
    return (
        <CountDownContainer>
            <Confetti  />
        </CountDownContainer>
    )
}
