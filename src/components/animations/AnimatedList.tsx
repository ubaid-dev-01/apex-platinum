"use client";

import React, { useRef, useState, useEffect, useCallback, ReactNode, MouseEventHandler, UIEvent } from "react";
import { motion, useInView } from "motion/react";
import type { LiveActivityItem } from "@/lib/landing-content";

interface AnimatedItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.92, opacity: 0, y: 12 }}
      animate={inView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.92, opacity: 0, y: 12 }}
      transition={{ duration: 0.25, delay }}
      className="mb-3 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const toneStyles: Record<LiveActivityItem["tone"], string> = {
  success: "bg-neon-cyan/15 text-neon-cyan border-neon-cyan/25",
  pending: "bg-gold-shimmer/10 text-gold-shimmer border-gold-shimmer/25",
  info: "bg-primary/10 text-on-surface border-[var(--color-border-subtle)]",
  warning: "bg-amber-500/10 text-amber-400 border-amber-500/25",
};

interface AnimatedListProps {
  items?: string[];
  feedItems?: LiveActivityItem[];
  onItemSelect?: (item: string, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [],
  feedItems,
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = "",
  itemClassName = "",
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const count = feedItems?.length ?? items.length;
  const isFeed = Boolean(feedItems?.length);

  const handleItemMouseEnter = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleItemClick = useCallback(
    (label: string, index: number) => {
      setSelectedIndex(index);
      onItemSelect?.(label, index);
    },
    [onItemSelect]
  );

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLDivElement;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  };

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, count - 1));
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < count) {
          e.preventDefault();
          const label = isFeed
            ? `${feedItems![selectedIndex].channel} — ${feedItems![selectedIndex].status}`
            : items[selectedIndex];
          onItemSelect?.(label, selectedIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, feedItems, count, isFeed, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement | null;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: "smooth",
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  const renderFeedItem = (item: LiveActivityItem, index: number) => (
    <AnimatedItem
      key={`${item.channel}-${index}`}
      delay={0.05}
      index={index}
      onMouseEnter={() => handleItemMouseEnter(index)}
      onClick={() => handleItemClick(`${item.channel} — ${item.status}`, index)}
    >
      <div
        className={`terminal-feed-item p-4 rounded-xl border transition-all duration-300 ${
          selectedIndex === index
            ? "border-neon-cyan/50 bg-neon-cyan/5 shadow-[0_8px_32px_rgba(0,210,255,0.12)]"
            : "border-[var(--color-border-subtle)] bg-[var(--surface-glass)] hover:border-neon-cyan/25"
        } ${itemClassName}`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <span className="mt-0.5 w-2 h-2 rounded-full bg-neon-cyan animate-pulse shrink-0" />
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-cyan mb-1">{item.channel}</p>
              <p className="text-sm text-on-surface m-0 truncate">{item.detail}</p>
            </div>
          </div>
          <span
            className={`shrink-0 font-mono text-[9px] uppercase tracking-wider px-2 py-1 rounded border ${toneStyles[item.tone]}`}
          >
            {item.status}
          </span>
        </div>
      </div>
    </AnimatedItem>
  );

  const renderStringItem = (item: string, index: number) => (
    <AnimatedItem
      key={index}
      delay={0.05}
      index={index}
      onMouseEnter={() => handleItemMouseEnter(index)}
      onClick={() => handleItemClick(item, index)}
    >
      <div
        className={`p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--surface-glass)] transition-all duration-300 ${
          selectedIndex === index ? "ring-2 ring-neon-cyan/40 shadow-[0_8px_24px_rgba(0,180,216,0.15)]" : ""
        } ${itemClassName}`}
      >
        <p className="text-on-surface m-0 text-sm">{item}</p>
      </div>
    </AnimatedItem>
  );

  return (
    <div className={`terminal-feed relative w-full max-w-lg ${className}`}>
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-neon-cyan/20 via-transparent to-gold-shimmer/10 pointer-events-none" />
      <div className="relative rounded-2xl border border-[var(--color-border-subtle)] bg-background/80 backdrop-blur-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border-subtle)] bg-surface-container-lowest/50">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-gold-shimmer/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-neon-cyan/80" />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.25em] text-platinum-muted">
            apex-terminal — live
          </span>
        </div>
        <div
          ref={listRef}
          className={`max-h-[420px] overflow-y-auto p-3 terminal-feed-scroll ${
            displayScrollbar ? "" : "scrollbar-hide"
          }`}
          onScroll={handleScroll}
        >
          {isFeed
            ? feedItems!.map(renderFeedItem)
            : items.map(renderStringItem)}
        </div>
        {showGradients && (
          <>
            <div
              className="absolute top-[52px] left-0 right-0 h-12 bg-gradient-to-b from-background to-transparent pointer-events-none transition-opacity duration-300"
              style={{ opacity: topGradientOpacity }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none transition-opacity duration-300"
              style={{ opacity: bottomGradientOpacity }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AnimatedList;
