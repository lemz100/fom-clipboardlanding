import styles from '@/assets/styles/Button.module.css';

function Button({ os }) {

  return (
    <button className={`${styles.button} ${os === 'iOS' ? styles.ios : styles.mac}`}>
        <p className='tp7sb'>{'Download for ' + os}</p>
    </button>
  );
}

export default Button
