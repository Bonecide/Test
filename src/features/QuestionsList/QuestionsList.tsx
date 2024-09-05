"use client";
import { motion } from "framer-motion";
import { useAtom } from "jotai";
import styles from "./QuestionsList.module.css";
import { tasksAtom } from "@/atoms/tasks";
import { useCallback } from "react";
import Image from "next/image";

export const QuestionsList = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const onClickTask = useCallback(
    (id: number) => () => {
      const newTasks = tasks.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        } else return item;
      });

      setTasks(newTasks);
    },
    [setTasks, tasks]
  );

  const variants = {
    completed: {
      y: 0,
      opacity: 1,
    },
    initial: {
      y: 30,
      opacity: 0,
    },
  };
  return (
    <div className={styles.questionListContainer}>
      {tasks.map((item) => (
        <motion.div
          onClick={onClickTask(item.id)}
          whileTap={{
            scale: 0.8,
          }}
         
          transition={{
            duration: 0.3,
          }}
          className={styles.task}
          key={item.id}
        >
          {item.id}
          <motion.div
            initial={{
              y: 30,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            variants={variants}
            animate={item.isCompleted ? "completed" : "initial"}
            className={styles.completed}
          >
            <Image
              src="/icons/completed.svg"
              width={18}
              height={18}
              alt="completed"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
