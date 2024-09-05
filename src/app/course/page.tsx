"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./course.module.css";

import React, { useCallback } from "react";
import { QuestionsList } from "@/features/QuestionsList";
import { CourseTabs } from "@/features/CourseTabs";

const CoursePage = () => {
  const router = useRouter();

  const onBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className={styles.coursePage}>
      <div onClick={onBack} className={styles.back}>
        <Image src="/icons/back.svg" width={24} height={24} alt="back" />
        <p>Learning</p>
      </div>
      <CourseTabs />
      <QuestionsList />
    </div>
  );
};

export default CoursePage;
