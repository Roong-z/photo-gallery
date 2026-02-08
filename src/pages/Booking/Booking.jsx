import { useMemo, useState } from 'react';
import styles from './Booking.module.css';

export default function Booking() {
  const artistEmail = 'your.email@example.com';

  const [name, setName] = useState('');
  const [fromEmail, setFromEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      `[Booking] ${name || 'New request'} - ${date || 'date TBD'}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${fromEmail}`,
        `Preferred date: ${date}`,
        `Preferred time: ${time}`,
        '',
        `Details:`,
        details || '(none)',
        '',
        `— sent from booking form`,
      ].join('\n')
    );
    return `mailto:${artistEmail}?subject=${subject}&body=${body}`;
  }, [artistEmail, name, fromEmail, date, time, details]);

  return (
    <section className={styles.wrap}>
      <h2 className={styles.h2}>Booking</h2>
      <p className={styles.p}>Only Email</p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.label}>Email</div>
          <div className={styles.email}>{artistEmail}</div>
          <div className={styles.small}>Please email me instead of DM.</div>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label className={styles.field}>
              <span>Your email</span>
              <input
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                placeholder="you@example.com"
                type="email"
              />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Date</span>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
              />
            </label>

            <label className={styles.field}>
              <span>Time</span>
              <select value={time} onChange={(e) => setTime(e.target.value)}>
                <option value="">Select</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
              </select>
            </label>
          </div>

          <label className={styles.field}>
            <span>Details</span>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Size / placement / reference link / style..."
              rows={6}
            />
          </label>

          <a className={styles.submit} href={mailtoHref}>
            Open email to send request
          </a>

          <div className={styles.tiny}>
            If the button doesn't open: you may need your mail app preferences.{' '}
          </div>
        </form>
      </div>
    </section>
  );
}
