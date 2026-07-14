"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedRoleProps = {
  roles: string[];
};

const TYPE_SPEED = 46;
const DELETE_SPEED = 28;
const HOLD_DELAY = 1300;

export function AnimatedRole({ roles }: AnimatedRoleProps) {
  const shouldReduceMotion = useReducedMotion();
  const safeRoles = useMemo(() => roles.filter(Boolean), [roles]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(safeRoles[0] ?? "");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion || safeRoles.length <= 1) {
      setDisplayText(safeRoles[0] ?? "");
      return;
    }

    const currentRole = safeRoles[roleIndex] ?? "";
    const isComplete = !isDeleting && displayText === currentRole;
    const isEmpty = isDeleting && displayText === "";

    const timeout = window.setTimeout(
      () => {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }

        if (isEmpty) {
          setIsDeleting(false);
          setRoleIndex((current) => (current + 1) % safeRoles.length);
          return;
        }

        setDisplayText((current) => {
          if (isDeleting) {
            return current.slice(0, -1);
          }

          return currentRole.slice(0, current.length + 1);
        });
      },
      isComplete ? HOLD_DELAY : isDeleting ? DELETE_SPEED : TYPE_SPEED
    );

    return () => window.clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, safeRoles, shouldReduceMotion]);

  return (
    <motion.span
      className="inline-flex min-h-7 items-center font-mono text-sm font-medium text-accent sm:text-base"
      aria-label={safeRoles[roleIndex] ?? displayText}
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <span aria-hidden="true">{displayText}</span>
      <span aria-hidden="true" className="ml-1 h-5 w-px bg-accent" />
    </motion.span>
  );
}
