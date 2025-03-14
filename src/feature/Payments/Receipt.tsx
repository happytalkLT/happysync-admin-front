import styles from './styles.module.css';
import global_styles from '../featureGlobalStyles.module.css';

export const ReceiptFeature = () => {
  return (
    <div className={global_styles.container}>
      <div className={global_styles.block}>
        결제 내역 페이지 블럭 1.
      </div>
      <div className={global_styles.block}>
        결제 내역 페이지 블럭 2.
      </div>
    </div>
  );
};