"use client";

import { Burger, Container, Group, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";

import styles from "./Header.module.css";

const navigationItems = [
  { href: "#about", label: "About", jpLabel: "自己紹介" },
  { href: "#career", label: "Career", jpLabel: "経歴" },
  { href: "#works", label: "Works", jpLabel: "開発経験" },
  { href: "#research", label: "Research", jpLabel: "研究" },
  { href: "#skills", label: "Skills", jpLabel: "スキル" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // スクロールが下方向の場合はヘッダーを非表示
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80; // ヘッダーの高さ分を考慮
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    toggle(); // モバイルメニューを閉じる
  };

  return (
    <header
      className={`${styles.header} ${isVisible ? styles.headerVisible : ""}`}
    >
      <Container size="lg" className={styles.container}>
        <nav className={styles.nav}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              <Text size="md" fw={900}>
                {item.label}
              </Text>
              <Text size="xs" c="dimmed">
                {item.jpLabel}
              </Text>
            </a>
          ))}
        </nav>

        <Group>
          <Burger
            opened={opened}
            onClick={toggle}
            className={styles.mobileMenuButton}
          />
        </Group>
      </Container>

      {opened && (
        <div className={styles.mobileMenu}>
          <Stack>
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <Text size="lg" fw={500}>
                  {item.label}
                </Text>
                <Text size="sm" c="dimmed">
                  {item.jpLabel}
                </Text>
              </a>
            ))}
          </Stack>
        </div>
      )}
    </header>
  );
}
