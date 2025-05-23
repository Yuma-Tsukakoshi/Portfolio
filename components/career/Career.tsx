"use client";

import { Badge, Container } from "@mantine/core";
import {
  IconBriefcase,
  IconChalkboard,
  IconCode,
  IconMicroscope,
  IconRobot,
  IconRocket,
  IconRun,
  IconSchool,
  IconUsers,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { SectionTitle } from "@/components/common/SectionTitle";

import styles from "./Career.module.css";

interface ProfileEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  notionPageId?: string;
  tags: string[];
  icon: React.ReactNode;
  period: string;
}

export function Profile() {
  const events: ProfileEvent[] = [
    {
      year: "2016-2019",
      title: "中学時代：バスケットボール部",
      description:
        "【活動内容】\n・部長として県大会出場に向けて練習に励む\n・基礎技術の習得に取り組む\n\n【学び】\n・勝利に向かって努力する姿勢を体得\n・チームワークの重要性を実感",
      image: "/images/career/junior_basket.png",
      tags: ["部活動", "バスケットボール", "チームワーク"],
      icon: <IconRun size={24} />,
      period: "2016年4月-2019年3月",
    },
    {
      year: "2016-2019",
      title: "中学時代：駅伝部",
      description:
        "【活動内容】\n・県大会出場に向けてトレーニング\n・体幹や筋トレの体つくりに励む\n\n【学び】\n・精神力と体力の向上\n・切磋琢磨する楽しさ",
      image: "/images/career/ekiden.png",
      tags: ["部活動", "駅伝", "精神力"],
      icon: <IconRun size={24} />,
      period: "2016年4月-2019年3月",
    },
    {
      year: "2019-2021",
      title: "高校時代：バスケットボール部",
      description:
        "【活動内容】\n・チームの中心メンバーとして活動\n・後輩の指導にも携わる\n\n【学び】\n・リーダーシップの重要性\n・泥臭い努力の大切さ",
      image: "/images/career/high_basket.png",
      tags: ["部活動", "バスケットボール", "リーダーシップ"],
      icon: <IconRun size={24} />,
      period: "2019年4月-2021年3月",
    },
    {
      year: "2021",
      title: "大学1年：学習活動",
      description:
        "【活動内容】\n・コンピュータサイエンスの基礎学習\n・Pythonの基礎を習得\n\n【学び】\n・プログラミングの基礎知識\n・論理的思考力の向上",
      image: "/images/career/yagami.png",
      tags: ["大学", "学習", "プログラミング"],
      icon: <IconSchool size={24} />,
      period: "2021年4月-2022年3月",
    },
    {
      year: "2021-2023",
      title: "大学1年：塾講師のアルバイト",
      description:
        "【活動内容】\n・中学生・高校生への指導\n・授業計画の立案と実施\n\n【学び】\n・説明力・指導力の向上\n・人に教えることの楽しさ",
      image: "/images/career/juku.png",
      tags: ["アルバイト", "教育", "指導力"],
      icon: <IconChalkboard size={24} />,
      period: "2021年4月-2023年9月",
    },
    {
      year: "2022",
      title: "大学2年：プログラミング学習コミュニティPOSSEに入会",
      description:
        "【活動内容】\n・Web開発の学習を開始\n・HTML、CSS、JavaScript、PHP、Docker、MySQLを習得\n\n【学び】\n・Webサービスの設計手法\n・実践的な開発スキル",
      image: "/images/career/posse_all.png",
      tags: ["Web開発", "技術学習", "プログラミング"],
      icon: <IconCode size={24} />,
      period: "2022年4月-現在",
    },
    {
      year: "2022-",
      title: "大学2年：コミュニティ活動",
      description:
        "【活動内容】\n・技術的な立場からコミュニティを支える役職に就任\n・ハッカソンの運営を担当\n\n【学び】\n・チーム開発の楽しさと重要性\n・コミュニティ運営の難しさ",
      image: "/images/career/posse.png",
      tags: ["コミュニティ", "ハッカソン", "組織運営"],
      icon: <IconUsers size={24} />,
      period: "2022年4月-現在",
    },
    {
      year: "2023-",
      title: "大学3年：株式会社アンチパターン",
      description:
        "【活動内容】\n・Web開発インターンとして活動\n・エンジニアの組織作りを担当\n\n【学び】\n・実務での開発プロセス\n・エンジニア組織運営の重要性",
      image: "/images/career/antipattern.png",
      tags: ["Web開発", "インターン", "組織運営"],
      icon: <IconBriefcase size={24} />,
      period: "2023年11月-現在",
    },
    {
      year: "2024-2025",
      title: "大学3年：株式会社Pluszero",
      description:
        "【活動内容】\n・機械学習エンジニアとしてOCRサービス開発に従事\n・OpenCV、Google Vision APIを使用\n\n【学び】\n・実務でのコード品質の重要性\n・機械学習の実践的な知識",
      image: "/images/career/pluszero.png",
      tags: ["機械学習", "インターン", "AI"],
      icon: <IconRobot size={24} />,
      period: "2024年4月-2025年4月",
    },
    {
      year: "2024-2025",
      title: "大学4年：株式会社ハイクリ",
      description:
        "【活動内容】\n・AIスタートアップに参画\n・迅速な開発と意思決定\n\n【学び】\n・スタートアップでの柔軟な思考\n・迅速な意思決定の重要性",
      image: "/images/career/hicrea.png",
      tags: ["AI", "スタートアップ", "開発"],
      icon: <IconRocket size={24} />,
      period: "2024年6月-2025年4月",
    },
    {
      year: "2024",
      title: "大学4年：研究活動",
      description:
        "【活動内容】\n・土壌をテーマにした研究に取り組み\n・データ分析と実験の実施\n\n【学び】\n・研究方法とデータ分析力\n・問題解決アプローチ",
      image: "/images/career/research.png",
      tags: ["研究", "データ分析", "問題解決"],
      icon: <IconMicroscope size={24} />,
      period: "2024年4月 - 現在",
    },
  ];

  const renderDescription = (description: string) => {
    const [activities, learnings] = description.split("\n\n");
    const activityItems = activities.split("\n").slice(1);
    const learningItems = learnings.split("\n").slice(1);

    return (
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionSection}>
          <h4 className={styles.descriptionTitle}>活動内容</h4>
          <ul className={styles.descriptionList}>
            {activityItems.map((item, index) => (
              <li key={index} className={styles.descriptionItem}>
                {item.replace("・", "")}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.descriptionSection}>
          <h4 className={styles.descriptionTitle}>学び</h4>
          <ul className={styles.descriptionList}>
            {learningItems.map((item, index) => (
              <li key={index} className={styles.descriptionItem}>
                {item.replace("・", "")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <Container size="lg" className={styles.container + " py-20"}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <SectionTitle title="Career" subtitle="キャリア" />
        <div className={styles.stylishTimeline}>
          <div className={styles.stylishTimelineLine} />
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={styles.stylishTimelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className={styles.stylishYearBadge}>
                <span className={styles.stylishYearIcon}>{event.icon}</span>
              </div>
              <div className={styles.stylishYearPeriod}>{event.period}</div>
              <div className={styles.stylishEventCard}>
                {event.image && (
                  <Image
                    src={event.image}
                    width={400}
                    height={200}
                    alt={event.title}
                    className={styles.stylishEventImage}
                  />
                )}
                <div className={styles.stylishEventContent}>
                  <h3 className={styles.stylishEventTitle}>{event.title}</h3>
                  {renderDescription(event.description)}
                  <div className={styles.tags}>
                    {event.tags.map((tag) => (
                      <Badge key={tag} size="sm" variant="light">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
