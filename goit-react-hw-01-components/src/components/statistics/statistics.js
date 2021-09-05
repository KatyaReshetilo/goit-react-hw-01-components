import StatisticItem from "./statisticItem";
import s from './statistics.module.css';
export default function Statistics({stats, title}) {
    return <section className="statistics">
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
            {stats.map(statistical => (
                <StatisticItem
                    key={statistical.id}
                    label={statistical.label}
                    percentage={statistical.percentage}
                />
            ))}
        </ul>
    </section>;
}