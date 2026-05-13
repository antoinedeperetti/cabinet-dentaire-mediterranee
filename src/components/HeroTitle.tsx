import { motion } from 'motion/react';

const lines = [
  'Le soin dentaire',
  'pensé comme',
  'une expérience',
];

export default function HeroTitle() {
  return (
    <h1
      style={{
        fontFamily: "'Fraunces', Georgia, serif",
        fontWeight: 600,
        letterSpacing: '-0.02em',
        lineHeight: 1.03,
        color: '#0A0A0A',
        fontSize: 'clamp(3rem, 7vw, 8.5rem)',
      }}
    >
      {lines.map((line, i) => (
        <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
          <motion.span
            style={{ display: 'block' }}
            initial={{ y: '103%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.0,
              delay: 0.15 + i * 0.14,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
