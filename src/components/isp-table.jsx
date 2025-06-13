import styles from '../css/isp-table.module.css';

export default function ISPTable({ data }) {
  return (
    <div className={styles.container}>
      <table className={styles.table} aria-label="ISP performance data table">
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Ping (ms)</th>
            <th className={styles.th}>Upload (Mbps)</th>
            <th className={styles.th}>Download (Mbps)</th>
            <th className={styles.th}>ISP</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr className={styles.tr} key={index}>
              <td className={styles.td}>{row.date}</td>
              <td className={styles.td}>{row.ping}</td>
              <td className={styles.td}>{row.upload}</td>
              <td className={styles.td}>{row.download}</td>
              <td className={styles.td}>{row.isp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
