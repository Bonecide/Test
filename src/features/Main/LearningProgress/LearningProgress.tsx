"use client";
import Image from "next/image";
import styles from "./LearningProgress.module.css";
import { ProgressBar } from "@/components/ProgressBar";
import { useAtomValue } from "jotai";
import { totalCompletedTasksAtom, totalTasksAtom } from "@/atoms/tasks";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export const LearningProgress = () => {
  const totalTasks = useAtomValue(totalTasksAtom);
  const completedTasks = useAtomValue(totalCompletedTasksAtom);

  const [clientTotalTasks, setClientTotalTasks] = useState(0);
  const [clientCompletedTasks, setClientCompletedTasks] = useState(0);

  const router = useRouter();

  const onClickCourse = useCallback(() => {
    router.push("/course");
  }, [router]);

  useEffect(() => {
    setClientTotalTasks(totalTasks);
    setClientCompletedTasks(completedTasks);
  }, [totalTasks, completedTasks]);

  return (
    <div className={styles.learningContainer}>
      <div onClick={onClickCourse} className={styles.course}>
        <div className={styles.courseTitle}>
          <div className={styles.courseImage}>
            <Image
              src="/icons/graduation-cap.svg"
              width={32}
              height={32}
              alt="cap"
            />
          </div>
          <div>
            <h4>Learning</h4>
            <p>Category В</p>
          </div>
        </div>
        <Image
          src="/icons/circle-right.svg"
          width={19}
          height={19}
          alt="next"
        />
      </div>
      <div className={styles.progress}>
        <p>
          {clientCompletedTasks} questions out of {clientTotalTasks} passed
        </p>
        <ProgressBar completedTasks={clientCompletedTasks} totalTasks={clientTotalTasks} />
      </div>
    </div>
  );
};
