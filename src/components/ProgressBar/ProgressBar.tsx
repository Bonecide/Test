import { useMemo } from "react";

interface ProgressBarProps {
  totalTasks: number;
  completedTasks: number;
}

export const ProgressBar = ({
  totalTasks,
  completedTasks,
}: ProgressBarProps) => {
  // Рассчитываем процент выполнения
  const completionPercentage = useMemo(() => {
    return (completedTasks / totalTasks) * 100;
  }, [completedTasks, totalTasks]);
  // Рассчитываем количество полных сегментов (из 7 возможных)
  const fullSegments = useMemo(() => {
    return Math.floor((completionPercentage / 100) * 7);
  }, [completionPercentage]);
  // Рассчитываем процент заполнения для текущего (неполного) сегмента
  const partialSegmentPercentage = useMemo(() => {
    return ((completionPercentage / 100) * 7 - fullSegments) * 100;
  }, [completionPercentage, fullSegments]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "6px",
        gap: "3px",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      {/* Генерируем 7 сегментов */}
      {Array.from({ length: 7 }, (_, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            borderRadius: "5px",
            background:
              index < fullSegments
                ? "#52A754" // Полный сегмент
                : index === fullSegments
                ? `linear-gradient(to right, #52A754 ${partialSegmentPercentage}%, #EEF6ED ${partialSegmentPercentage}%)` // Частично заполненный сегмент
                : "#EEF6ED", // Пустой сегмент
            transition: "background 0.3s ease",
          }}
        />
      ))}
    </div>
  );
};
